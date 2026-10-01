import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, X, ChevronRight } from "lucide-react";
import apiUrl from "../../api/api";
import axios from "axios";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const {
    cartItems = [],
    subtotal = 0,
    discount = 0,
    shipping = 0,
    total = 0,
    coupon = null,
  } = location.state || {};

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "United Arab Emirates",
  });

  const [errors, setErrors] = useState({});

  const [paymentMethod, setPaymentMethod] = useState("");

  const [showTabbyModal, setShowTabbyModal] = useState(false);
  const [showTamaraModal, setShowTamaraModal] = useState(false);

  const [selectedTabbyPlan, setSelectedTabbyPlan] = useState(null);
  const [selectedTamaraPlan, setSelectedTamaraPlan] = useState(null);

  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setPaymentError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);

    setErrors((prev) => ({
      ...prev,
      paymentMethod: "",
    }));
    setPaymentError("");

    if (method === "tabby") {
      setSelectedTabbyPlan(null);
      setShowTabbyModal(true);
      setShowTamaraModal(false);
    }

    if (method === "tamara") {
      setSelectedTamaraPlan(null);
      setShowTamaraModal(true);
      setShowTabbyModal(false);
    }
  };

  const handlePayment = async () => {
    if (loading) return;

    setPaymentError("");

    if (!validateForm()) {
      return;
    }

    if (paymentMethod !== "tabby" && paymentMethod !== "tamara") {
      setErrors((prev) => ({
        ...prev,
        paymentMethod: "Please select Tabby or Tamara.",
      }));
      return;
    }

    // Tabby/Tamara must have a selected plan before submitting.
    if (paymentMethod === "tabby" && !selectedTabbyPlan) {
      setShowTabbyModal(true);
      return;
    }

    if (paymentMethod === "tamara" && !selectedTamaraPlan) {
      setShowTamaraModal(true);
      return;
    }

    try {
      setLoading(true);
      setErrors((prev) => ({ ...prev, paymentMethod: "" }));

      const selectedPlan =
        paymentMethod === "tabby"
          ? selectedTabbyPlan
          : paymentMethod === "tamara"
            ? selectedTamaraPlan
            : null;

      const paymentData = {
        ...formData,
        cartItems,
        subtotal: Number(subtotal) || 0,
        discount: Number(discount) || 0,
        shipping: Number(shipping) || 0,
        total: Number(total) || 0,
        coupon: coupon || null,
        payment_method: paymentMethod,

        payment_plan: selectedPlan
          ? {
              id: selectedPlan.id,
              title: selectedPlan.title,
              amount: Number(selectedPlan.amount) || 0,
              fee: Number(selectedPlan.fee) || 0,
            }
          : null,

        payment_plan_id: selectedPlan?.id ?? null,
        payment_plan_title: selectedPlan?.title ?? null,
        payment_installments:
          selectedPlan && selectedPlan.id !== "full"
            ? Number(selectedPlan.id)
            : null,
        payment_plan_amount: selectedPlan
          ? Number(selectedPlan.amount) || 0
          : null,
        payment_plan_fee: selectedPlan ? Number(selectedPlan.fee) || 0 : 0,
      };

      console.log("Payment Request:", paymentData);
      const endpoint =
        paymentMethod === "tabby"
          ? `${apiUrl}/payment/tabby`
          : `${apiUrl}/payment/tamara`;
          
      const response = await axios.post(endpoint, paymentData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      const data = response?.data || {};

      console.log("Payment Response:", data);

      if (data.success === false) {
        throw new Error(data.message || "Payment could not be created.");
      }

      const checkoutUrl =
        data.redirect_url ||
        data.checkout_url ||
        data.payment_url ||
        data.data?.redirect_url ||
        data.data?.checkout_url ||
        data.data?.payment_url ||
        data.tabby?.web_url ||
        data.tabby?.checkout_url ||
        data.tamara?.checkout_url ||
        data.tamara?.web_url;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
        return;
      }

      throw new Error(
        data.message || "Payment checkout URL was not returned by the server.",
      );
    } catch (error) {
      console.error("Payment Error:", error);

      let message = "Unable to process payment. Please try again.";
      const responseData = error?.response?.data;

      if (responseData) {
        if (responseData.message) {
          message = responseData.message;
        } else if (responseData.error) {
          message =
            typeof responseData.error === "string"
              ? responseData.error
              : JSON.stringify(responseData.error);
        } else if (responseData.errors) {
          const validationMessages = Object.values(responseData.errors)
            .flatMap((value) => (Array.isArray(value) ? value : [value]))
            .filter(Boolean)
            .map((value) => String(value));

          if (validationMessages.length) {
            message = validationMessages.join("\n");
          }
        }

        if (error?.response?.status === 401) {
          message =
            responseData.message ||
            "Authentication failed. Please login again.";
        } else if (error?.response?.status === 403) {
          message =
            responseData.message ||
            "You are not authorized to make this payment.";
        } else if (error?.response?.status === 404) {
          message =
            responseData.message || "Payment API endpoint was not found.";
        } else if (error?.response?.status >= 500) {
          message =
            responseData.message || "Server error. Please try again later.";
        }
      } else if (error?.request) {
        message =
          "Unable to connect to the server. Please check your internet connection.";
      } else if (error?.message) {
        message = error.message;
      }

      setPaymentError(message);
    } finally {
      setLoading(false);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#011810]">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mt-2">
            Please add products to your cart before checkout.
          </p>

          <button
            onClick={() => navigate("/cart")}
            className="mt-6 px-6 py-3 bg-[#011810] text-white rounded-lg"
          >
            Go to Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span
              className="cursor-pointer hover:text-[#011810]"
              onClick={() => navigate("/cart")}
            >
              Cart
            </span>

            <ChevronRight size={16} />

            <span className="font-medium text-[#011810]">Checkout</span>
          </div>

          <h1 className="text-3xl font-bold text-[#011810] mt-3">Checkout</h1>
        </div>

        {paymentError && (
          <div
            className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 font-bold">
                !
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-red-800">
                  Payment Failed
                </h3>
                <p className="mt-1 whitespace-pre-line break-words text-sm text-red-700">
                  {paymentError}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setPaymentError("")}
                className="shrink-0 text-xl leading-none text-red-500 hover:text-red-700"
                aria-label="Close error"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#011810]">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                  {/* FIRST NAME */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>

                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                        errors.first_name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter first name"
                    />

                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.first_name}
                      </p>
                    )}
                  </div>

                  {/* LAST NAME */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                        errors.last_name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter last name"
                    />

                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.last_name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter email"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter phone number"
                    />

                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* ADDRESS */}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className={`w-full rounded-lg border px-4 py-3 outline-none resize-none transition ${
                        errors.address
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter your complete address"
                    />

                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* CITY */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
                        errors.city
                          ? "border-red-500"
                          : "border-gray-300 focus:border-[#011810]"
                      }`}
                      placeholder="Enter city"
                    />

                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                    )}
                  </div>

                  {/* COUNTRY */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#011810]"
                    >
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>

                      <option value="India">India</option>

                      <option value="Saudi Arabia">Saudi Arabia</option>

                      <option value="Qatar">Qatar</option>

                      <option value="Kuwait">Kuwait</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#011810]">
                  Payment Method
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Choose your preferred payment method.
                </p>

                {errors.paymentMethod && (
                  <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                    {errors.paymentMethod}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {/* TABBY */}

                  <button
                    type="button"
                    onClick={() => handlePaymentMethod("tabby")}
                    className={`text-left rounded-xl border p-5 transition ${
                      paymentMethod === "tabby"
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src="/logo/tabby.png"
                      alt="Tabby"
                      className="w-[100px] h-[100px] object-contain"
                    />

                    <h3 className="font-semibold mt-3">Pay with Tabby</h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Split your payment into installments
                    </p>
                  </button>

                  {/* TAMARA */}

                  <button
                    type="button"
                    onClick={() => handlePaymentMethod("tamara")}
                    className={`text-left rounded-xl border p-5 transition ${
                      paymentMethod === "tamara"
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="font-bold text-lg">
                      <img
                        src="/logo/tamara.png"
                        alt="Tabby"
                        className="w-[100px] h-[100px] object-contain"
                      />
                    </div>

                    <h3 className="font-semibold mt-3">Pay with Tamara</h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Pay in flexible installments
                    </p>
                  </button>
                </div>

                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-3">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              {/* SECURITY */}

              <div className="bg-[#011810] text-white rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <Lock size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">Secure Checkout</h3>

                  <p className="text-sm text-white/70 mt-1">
                    Your payment and personal information are securely
                    protected.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-6">
                <h2 className="text-xl font-semibold text-[#011810]">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4 max-h-[400px] overflow-y-auto pr-1">
                  {cartItems.map((item, index) => {
                    // IMPORTANT:
                    // Cart API structure:
                    // item.product
                    const product = item.product || {};

                    const productName =
                      product.title || item.title || item.name || "Product";

                    // Cart uses "quentity"
                    const quantity = Number(
                      item.quentity || item.quantity || item.qty || 1,
                    );

                    const price = Number(item.price || product.price || 0);

                    const itemTotal = price * quantity;

                    const currency =
                      product.currency_code || item.currency_code || "AED";

                    return (
                      <div
                        key={item.id || item.product_id || index}
                        className="pb-4 border-b border-gray-100 last:border-b-0"
                      >
                        {/* PRODUCT NAME */}

                        <h3 className="text-sm font-semibold text-[#011810]">
                          {productName}
                        </h3>

                        {/* QUANTITY + TOTAL */}

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-500">
                            Quantity: {quantity}
                          </span>

                          <span className="text-sm font-semibold text-gray-800">
                            {currency} {itemTotal.toFixed(2)}
                          </span>
                        </div>

                        {/* UNIT PRICE */}

                        <p className="text-xs text-gray-400 mt-1">
                          {currency} {price.toFixed(2)} each
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-gray-200 mt-5 pt-5 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-medium">
                      AED {Number(subtotal).toFixed(2)}
                    </span>
                  </div>

                  {Number(discount) > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Discount</span>

                      <span className="font-medium text-green-600">
                        - AED {Number(discount).toFixed(2)}
                      </span>
                    </div>
                  )}

                  {coupon && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Coupon</span>

                      <span className="font-semibold text-green-600">
                        {coupon}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>

                    <span className="font-medium">
                      {Number(shipping) === 0
                        ? "Free"
                        : `AED ${Number(shipping).toFixed(2)}`}
                    </span>
                  </div>
                </div>

                {/* TOTAL */}

                <div className="border-t border-gray-200 mt-5 pt-5">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#011810]">
                      Total
                    </span>

                    <span className="text-xl font-bold text-[#011810]">
                      AED {Number(total).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* PAYMENT BUTTON */}

                <button
                  type="button"
                  disabled={loading || !paymentMethod}
                  onClick={handlePayment}
                  className="w-full mt-6 bg-[#011810] text-white py-4 rounded-xl font-semibold hover:bg-[#02281c] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Processing..."
                    : paymentMethod === "tabby"
                      ? "Continue with Tabby"
                      : paymentMethod === "tamara"
                        ? "Continue with Tamara"
                        : "Select Payment Method"}
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  You will be redirected to the selected payment provider to
                  complete your payment.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* =========================================================
    TABBY MODAL
========================================================= */}

      {showTabbyModal && (
        <div
          className="fixed mt-8 inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowTabbyModal(false)}
        >
          <div
            className="bg-white w-full max-w-[520px] max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="sticky top-0 z-20 bg-white px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold leading-8 text-[#011810]">
                    Get more time to pay
                  </h2>

                  <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                    Split your purchase in up to 12 payments
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowTabbyModal(false)}
                  className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center shrink-0 transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-5">
              {/* PAYMENT PLANS */}
              <div className="space-y-3">
                {/* 4 PAYMENTS */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTabbyPlan({
                      id: 4,
                      title: "4 payments",
                      amount: Number(total) / 4,
                      fee: 0,
                    })
                  }
                  className={`w-full text-left rounded-xl border p-4 transition ${
                    selectedTabbyPlan?.id === 4
                      ? "border-[#011810] bg-[#011810]/5"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-[#011810]">
                        4 payments
                      </h3>

                      <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                        AED {(Number(total) / 4).toFixed(2)}/mo
                      </p>

                      <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                        No interest. No fees.
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTabbyPlan?.id === 4
                          ? "border-[#011810]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedTabbyPlan?.id === 4 && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* 6 PAYMENTS */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTabbyPlan({
                      id: 6,
                      title: "6 payments",
                      amount: Number(total) / 6,
                      fee: 8.32,
                    })
                  }
                  className={`w-full text-left rounded-xl border p-4 transition ${
                    selectedTabbyPlan?.id === 6
                      ? "border-[#011810] bg-[#011810]/5"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-[#011810]">
                        6 payments
                      </h3>

                      <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                        AED {(Number(total) / 6).toFixed(2)}/mo
                      </p>

                      <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                        Includes AED 8.32 monthly fee
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTabbyPlan?.id === 6
                          ? "border-[#011810]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedTabbyPlan?.id === 6 && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* 8 PAYMENTS */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTabbyPlan({
                      id: 8,
                      title: "8 payments",
                      amount: Number(total) / 8,
                      fee: 11.23,
                    })
                  }
                  className={`w-full text-left rounded-xl border p-4 transition ${
                    selectedTabbyPlan?.id === 8
                      ? "border-[#011810] bg-[#011810]/5"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-[#011810]">
                        8 payments
                      </h3>

                      <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                        AED {(Number(total) / 8).toFixed(2)}/mo
                      </p>

                      <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                        Includes AED 11.23 monthly fee
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTabbyPlan?.id === 8
                          ? "border-[#011810]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedTabbyPlan?.id === 8 && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                      )}
                    </div>
                  </div>
                </button>

                {/* 12 PAYMENTS */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTabbyPlan({
                      id: 12,
                      title: "12 payments",
                      amount: Number(total) / 12,
                      fee: 14.15,
                    })
                  }
                  className={`w-full text-left rounded-xl border p-4 transition ${
                    selectedTabbyPlan?.id === 12
                      ? "border-[#011810] bg-[#011810]/5"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold leading-5 text-[#011810]">
                        12 payments
                      </h3>

                      <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                        AED {(Number(total) / 12).toFixed(2)}/mo
                      </p>

                      <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                        Includes AED 14.15 monthly fee
                      </p>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTabbyPlan?.id === 12
                          ? "border-[#011810]"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedTabbyPlan?.id === 12 && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                      )}
                    </div>
                  </div>
                </button>
              </div>

              {/* HOW IT WORKS */}
              <div className="mt-8">
                <h3 className="text-lg font-bold leading-6 text-[#011810]">
                  How it works
                </h3>

                <div className="mt-4 space-y-5">
                  {/* STEP 1 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      1
                    </div>

                    <p className="text-sm font-normal leading-6 text-gray-600">
                      Choose Tabby at checkout to select a payment plan
                    </p>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      2
                    </div>

                    <p className="text-sm font-normal leading-6 text-gray-600">
                      Enter your information and add your debit or credit card
                    </p>
                  </div>

                  {/* STEP 3 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      3
                    </div>

                    <p className="text-sm font-normal leading-6 text-gray-600">
                      Depending on your plan, you may or may not make a down
                      payment
                    </p>
                  </div>

                  {/* STEP 4 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      4
                    </div>

                    <p className="text-sm font-normal leading-6 text-gray-600">
                      We'll send you a reminder when your next payment is due
                    </p>
                  </div>
                </div>
              </div>

              {/* TRUSTED BY MILLIONS */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011810]/5 flex items-center justify-center shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L14.8 8.2L21.5 9L16.5 13.5L18 20L12 16.7L6 20L7.5 13.5L2.5 9L9.2 8.2L12 2Z"
                        stroke="#011810"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                      Trusted by millions
                    </h4>

                    <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                      Over 20 million shoppers discover products and pay their
                      way with Tabby
                    </p>
                  </div>
                </div>
              </div>

              {/* SHOP SAFELY */}
              <div className="mt-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#011810]/5 flex items-center justify-center shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3L19 6V11C19 15.5 16.2 19.3 12 21C7.8 19.3 5 15.5 5 11V6L12 3Z"
                        stroke="#011810"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M9 12L11 14L15 10"
                        stroke="#011810"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                      Shop safely with Tabby
                    </h4>

                    <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                      Buyer protection is included with every purchase
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTINUE */}
              <button
                type="button"
                disabled={!selectedTabbyPlan}
                onClick={() => {
                  if (!selectedTabbyPlan) return;

                  setShowTabbyModal(false);
                  handlePayment();
                }}
                className="w-full mt-7 bg-[#011810] text-white py-3.5 rounded-xl text-sm font-semibold leading-5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#02281c] transition"
              >
                Continue with Tabby
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
    TAMARA MODAL
========================================================= */}

      {showTamaraModal && (
        <div
          className="fixed mt-8 inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowTamaraModal(false)}
        >
          <div
            className="bg-white w-full max-w-[520px] max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div className="sticky top-0 z-20 bg-white px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3">
                    <img
                      src="https://cdn.tamara.co/widget-v2/assets/lavendar-logo.703d190a.svg"
                      alt="Tamara"
                      className="h-7 w-auto"
                    />
                  </div>

                  <h2 className="text-2xl font-bold leading-8 text-[#011810]">
                    Your payment, your pace
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setShowTamaraModal(false)}
                  className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center shrink-0 transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-6 py-5">
              {/* EXAMPLE PLANS */}
              <div>
                <h3 className="text-lg font-bold leading-6 text-[#011810]">
                  Example plans
                </h3>

                <div className="mt-4 space-y-3">
                  {/* 2 PAYMENTS */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedTamaraPlan({
                        id: 2,
                        title: "2 Payments",
                        amount: Number(total) / 2,
                        fee: 0,
                      })
                    }
                    className={`w-full text-left rounded-xl border p-4 transition ${
                      selectedTamaraPlan?.id === 2
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                          2 Payments
                        </h4>

                        <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                          AED {(Number(total) / 2).toFixed(2)}/mo
                        </p>

                        <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                          No fees
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedTamaraPlan?.id === 2
                            ? "border-[#011810]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTamaraPlan?.id === 2 && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* 3 PAYMENTS */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedTamaraPlan({
                        id: 3,
                        title: "3 Payments",
                        amount: Number(total) / 3,
                        fee: 0,
                      })
                    }
                    className={`w-full text-left rounded-xl border p-4 transition ${
                      selectedTamaraPlan?.id === 3
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                          3 Payments
                        </h4>

                        <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                          AED {(Number(total) / 3).toFixed(2)}/mo
                        </p>

                        <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                          No fees
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedTamaraPlan?.id === 3
                            ? "border-[#011810]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTamaraPlan?.id === 3 && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* 4 PAYMENTS */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedTamaraPlan({
                        id: 4,
                        title: "4 Payments",
                        amount: Number(total) / 4,
                        fee: null,
                      })
                    }
                    className={`w-full text-left rounded-xl border p-4 transition ${
                      selectedTamaraPlan?.id === 4
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                          4 Payments
                        </h4>

                        <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                          AED {(Number(total) / 4).toFixed(2)}/mo
                        </p>

                        <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                          Fees may apply
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedTamaraPlan?.id === 4
                            ? "border-[#011810]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTamaraPlan?.id === 4 && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* PAY IN FULL */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedTamaraPlan({
                        id: "full",
                        title: "Pay in Full",
                        amount: Number(total),
                        fee: 0,
                      })
                    }
                    className={`w-full text-left rounded-xl border p-4 transition ${
                      selectedTamaraPlan?.id === "full"
                        ? "border-[#011810] bg-[#011810]/5"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                          Pay in Full
                        </h4>

                        <p className="text-sm font-normal leading-5 text-gray-500 mt-1">
                          AED {Number(total).toFixed(2)}
                        </p>

                        <p className="text-xs font-normal leading-5 text-gray-500 mt-1">
                          1% cashback and buyer protection
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          selectedTamaraPlan?.id === "full"
                            ? "border-[#011810]"
                            : "border-gray-300"
                        }`}
                      >
                        {selectedTamaraPlan?.id === "full" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#011810]" />
                        )}
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* HOW IT WORKS */}
              <div className="mt-8">
                <h3 className="text-lg font-bold leading-6 text-[#011810]">
                  How it works?
                </h3>

                <div className="mt-4 space-y-5">
                  {/* STEP 1 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      1
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                        Pick a plan that works for you
                      </h4>

                      <p className="text-sm font-normal leading-6 text-gray-600 mt-1">
                        Choose Tamara at checkout and select the payment plan
                        that fits your needs.
                      </p>
                    </div>
                  </div>

                  {/* STEP 2 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      2
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                        Pay your first payment securely
                      </h4>

                      <p className="text-sm font-normal leading-6 text-gray-600 mt-1">
                        Enter your card details to make your first payment
                        safely and instantly.
                      </p>
                    </div>
                  </div>

                  {/* STEP 3 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      3
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                        Stay in control
                      </h4>

                      <p className="text-sm font-normal leading-6 text-gray-600 mt-1">
                        Track and manage all your upcoming payments easily in
                        the Tamara app.
                      </p>
                    </div>
                  </div>

                  {/* STEP 4 */}
                  <div className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#011810] text-white flex items-center justify-center text-sm font-semibold leading-5 shrink-0">
                      4
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold leading-5 text-[#011810]">
                        We’ve got your back
                      </h4>

                      <p className="text-sm font-normal leading-6 text-gray-600 mt-1">
                        Get helpful reminders before each payment, no surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WHY TAMARA */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-lg font-bold leading-6 text-[#011810]">
                  Why Tamara?
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#011810] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>

                    <p className="text-sm font-normal leading-5 text-gray-600">
                      100% buyer protection
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#011810] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>

                    <p className="text-sm font-normal leading-5 text-gray-600">
                      Sharia compliant
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#011810] flex items-center justify-center shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>

                    <p className="text-sm font-normal leading-5 text-gray-600">
                      No late fees
                    </p>
                  </div>
                </div>
              </div>

              {/* DISCLAIMER */}
              <div className="mt-6 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-normal leading-5 text-gray-500">
                  Payment plans shown are estimates. Actual offers may vary
                  based on your eligibility and order details. Not all merchants
                  or products qualify for every plan, including Tamara’s
                  long-term financing options.
                </p>

                <p className="text-xs font-normal leading-5 text-gray-500 mt-3">
                  Approval is subject to eligibility checks and may require a
                  down payment. Final terms, including monthly payment amounts,
                  may change after checkout review and may exclude taxes,
                  shipping, or other charges. For more information, see our{" "}
                  <a
                    href="https://tamara.co/en-AE/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#011810] underline"
                  >
                    Terms & Conditions
                  </a>
                </p>
              </div>

              {/* PAYMENT LOGOS */}
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src="https://cdn.tamara.co/widget-v2/assets/apple.58715d0c.svg"
                  alt="Apple Pay"
                  className="h-7 w-auto object-contain"
                />

                <img
                  src="https://cdn.tamara.co/widget-v2/assets/master.56491a74.svg"
                  alt="Mastercard"
                  className="h-7 w-auto object-contain"
                />

                <img
                  src="https://cdn.tamara.co/widget-v2/assets/visa.76c481f0.svg"
                  alt="Visa"
                  className="h-7 w-auto object-contain"
                />
              </div>

              {/* CONTINUE */}
              <button
                type="button"
                disabled={!selectedTamaraPlan}
                onClick={() => {
                  if (!selectedTamaraPlan) return;

                  setShowTamaraModal(false);
                  handlePayment();
                }}
                className="w-full mt-7 bg-[#011810] text-white py-3.5 rounded-xl text-sm font-semibold leading-5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#02281c] transition"
              >
                Continue with Tamara
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
