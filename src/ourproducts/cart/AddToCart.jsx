import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import apiUrl from "../../api/api";

const AddToCart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [removingId, setRemovingId] = useState(null);
  const [clearingCart, setClearingCart] = useState(false);

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponLoading, setCouponLoading] = useState(false);

  useEffect(() => {
    fetchCart();
  }, []);

  
  const fetchCart = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(`${apiUrl}/my/cart/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (response.data?.status) {
        setCartItems(response.data.data || []);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Fetch Cart Error:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };


  const updateQuantity = async (cartId, type) => {
    try {
      const item = cartItems.find((cartItem) => cartItem.id === cartId);

      if (!item) return;

      const currentQuantity = Number(item.quentity || 1);

      let newQuantity = currentQuantity;

      if (type === "increase") {
        newQuantity = currentQuantity + 1;
      }

      if (type === "decrease") {
        newQuantity = Math.max(1, currentQuantity - 1);
      }

      if (newQuantity === currentQuantity) {
        return;
      }

      setUpdatingId(cartId);

      const token = localStorage.getItem("token");

      await axios.put(
        `${apiUrl}/cart/${cartId}`,
        {
          quentity: newQuantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        },
      );

      setCartItems((items) =>
        items.map((cartItem) =>
          cartItem.id === cartId
            ? {
                ...cartItem,
                quentity: newQuantity,
              }
            : cartItem,
        ),
      );

      
      if (couponApplied) {
        setCouponApplied(false);
        setCouponMessage("Cart changed. Please apply the coupon again.");
        setDiscount(0);
      }
    } catch (error) {
      console.error("Update Quantity Error:", error);

      alert(error.response?.data?.message || "Unable to update quantity.");
    } finally {
      setUpdatingId(null);
    }
  };

  
  const removeItem = async (cartId) => {
    try {
      setRemovingId(cartId);

      const token = localStorage.getItem("token");

      await axios.delete(`${apiUrl}/cart/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setCartItems((items) => items.filter((item) => item.id !== cartId));

      if (couponApplied) {
        setCouponApplied(false);
        setCouponMessage("Cart changed. Please apply the coupon again.");
        setDiscount(0);
      }
    } catch (error) {
      console.error("Remove Cart Error:", error);

      alert(error.response?.data?.message || "Unable to remove item.");
    } finally {
      setRemovingId(null);
    }
  };

 
  const clearCart = async () => {
    if (cartItems.length === 0) return;

    const confirmClear = window.confirm(
      "Are you sure you want to clear your cart?",
    );

    if (!confirmClear) return;

    try {
      setClearingCart(true);

      const token = localStorage.getItem("token");

      await axios.delete(`${apiUrl}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      setCartItems([]);

      setCoupon("");
      setCouponApplied(false);
      setCouponMessage("");
      setDiscount(0);
    } catch (error) {
      console.error("Clear Cart Error:", error);

      alert(error.response?.data?.message || "Unable to clear cart.");
    } finally {
      setClearingCart(false);
    }
  };

 

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price || 0);
      const quantity = Number(item.quentity || 1);

      return total + price * quantity;
    }, 0);
  }, [cartItems]);

  
  const shipping = subtotal > 0 ? 0 : 0;

  
  const total = Math.max(0, subtotal - discount + shipping);

  
  const applyCoupon = async () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      setCouponApplied(false);
      setDiscount(0);
      setCouponMessage("Please enter coupon code.");
      return;
    }

    try {
      setCouponLoading(true);
      setCouponMessage("");

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${apiUrl}/apply/cuopon`,
        {
          cuoponcode: code,
          cart_total: subtotal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );


      if (response.data.status) {
        const couponData = response.data.data;

        setDiscount(Number(couponData.discount || 0));
        setCouponApplied(true);

        setCouponMessage(
          `Coupon applied successfully. You saved ${couponData.discount}.`,
        );
      } else {
        setDiscount(0);
        setCouponApplied(false);
        setCouponMessage(response.data.message || "Invalid coupon code.");
      }
    } catch (error) {
      console.log("Apply Coupon Error:", error);
      setDiscount(0);
      setCouponApplied(false);

      setCouponMessage(
        error.response?.data?.message || "Unable to apply coupon.",
      );
    } finally {
      setCouponLoading(false);
    }
  };

  

  const removeCoupon = () => {
    setCoupon("");
    setCouponApplied(false);
    setCouponMessage("");
    setDiscount(0);
  };

  

  const formatPrice = (price, currency = "AED") => {
    return `${currency} ${Number(price || 0).toFixed(2)}`;
  };

  

  const getImageUrl = (image) => {
    if (!image) {
      return "/products/default.jpg";
    }

    if (image.startsWith("http://") || image.startsWith("https://")) {
      return image;
    }

    const baseUrl = apiUrl.replace("/api", "");

    return `${baseUrl}/${image.replace(/^\/+/, "")}`;
  };

  

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    navigate("/checkout", {
      state: {
        cartItems,
        subtotal,
        discount,
        shipping,
        total,
        coupon: couponApplied ? coupon : null,
      },
    });
  };


  if (loading) {
    return (
      <div className="min-h-screen bg-[#011810] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin mx-auto mb-5"></div>

          <p className="text-white text-lg">Loading your cart...</p>

          <p className="text-gray-500 text-sm mt-1">Please wait</p>
        </div>
      </div>
    );
  }

  

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#011810] text-white px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition mb-12"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <div className="border border-white/10 bg-white/[0.03] rounded-3xl p-10 md:p-16 text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6">
              <ShoppingCart size={42} className="text-[#d4af37]" />
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              Your Cart is Empty
            </h1>

            <p className="text-gray-400 max-w-md mx-auto mb-8">
              Looks like you haven't added anything to your cart yet. Explore
              our services and find something you need.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#d4af37] text-black font-semibold hover:bg-[#e6c65c] transition"
            >
              <ShoppingBag size={19} />
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

 

  return (
    <div className="min-h-screen bg-[#011810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition mb-4"
            >
              <ArrowLeft size={17} />
              Continue Shopping
            </Link>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#d4af37]/10 flex items-center justify-center">
                <ShoppingCart size={23} className="text-[#d4af37]" />
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Shopping Cart
                </h1>

                <p className="text-gray-500 text-sm">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}{" "}
                  in your cart
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={clearCart}
            disabled={clearingCart}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 transition disabled:opacity-50"
          >
            <Trash2 size={17} />

            {clearingCart ? "Clearing..." : "Clear Cart"}
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
          {/* LEFT */}
          <div className="xl:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const product = item.product;

              const productName = product?.title || "Product";

              const productImage = product?.images;

              const productCategory = product?.category || "Product";

              const currency = product?.currency_code || "AED";

              const price = Number(item.price || 0);

              const quantity = Number(item.quentity || 1);

              const itemTotal = price * quantity;

              return (
                <div
                  key={item.id}
                  className="relative border border-white/10 bg-white/[0.035] rounded-2xl p-4 sm:p-5 hover:border-[#d4af37]/20 transition"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* PRODUCT IMAGE */}
                    <div className="w-full sm:w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-black/30 border border-white/10">
                      <img
                        src={getImageUrl(productImage)}
                        alt={productName}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/products/default.jpg";
                        }}
                      />
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4">
                        <div>
                          <span className="inline-block text-xs text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded-full mb-2">
                            {productCategory}
                          </span>

                          <h2 className="text-lg md:text-xl font-semibold text-white">
                            {productName}
                          </h2>

                          {product?.slug && (
                            <p className="text-gray-500 text-xs mt-1">
                              {product.slug}
                            </p>
                          )}
                        </div>

                        {/* REMOVE */}
                        <button
                          onClick={() => removeItem(item.id)}
                          disabled={removingId === item.id}
                          className="w-9 h-9 flex-shrink-0 rounded-lg flex items-center justify-center text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition disabled:opacity-50"
                          title="Remove item"
                        >
                          {removingId === item.id ? (
                            <span className="w-4 h-4 border-2 border-gray-500 border-t-red-400 rounded-full animate-spin"></span>
                          ) : (
                            <X size={18} />
                          )}
                        </button>
                      </div>

                      {/* PRICE */}
                      <div className="mt-4 flex items-center gap-3">
                        <span className="text-[#d4af37] font-semibold text-lg">
                          {formatPrice(price, currency)}
                        </span>

                        {product?.stock_price &&
                          Number(product.stock_price) !== price && (
                            <span className="text-gray-600 line-through text-sm">
                              {formatPrice(product.stock_price, currency)}
                            </span>
                          )}
                      </div>

                      {/* BOTTOM */}
                      <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* QUANTITY */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500">
                            Quantity
                          </span>

                          <div className="flex items-center border border-white/10 rounded-xl overflow-hidden bg-black/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, "decrease")
                              }
                              disabled={updatingId === item.id || quantity <= 1}
                              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30"
                            >
                              <Minus size={15} />
                            </button>

                            <div className="w-10 text-center text-sm font-semibold">
                              {updatingId === item.id ? (
                                <span className="inline-block w-4 h-4 border-2 border-gray-600 border-t-[#d4af37] rounded-full animate-spin"></span>
                              ) : (
                                quantity
                              )}
                            </div>

                            <button
                              onClick={() =>
                                updateQuantity(item.id, "increase")
                              }
                              disabled={updatingId === item.id}
                              className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 disabled:opacity-30"
                            >
                              <Plus size={15} />
                            </button>
                          </div>
                        </div>

                        {/* ITEM TOTAL */}
                        <div className="text-left sm:text-right">
                          <p className="text-xs text-gray-500 mb-1">
                            Item Total
                          </p>

                          <p className="text-white font-bold">
                            {formatPrice(itemTotal, currency)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* TRUST CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <TrustCard
                icon={<ShieldCheck size={19} />}
                title="Secure Payment"
                description="100% secure checkout"
              />

              <TrustCard
                icon={<Truck size={19} />}
                title="Fast Service"
                description="Quick service delivery"
              />

              <TrustCard
                icon={<Check size={19} />}
                title="Quality Assured"
                description="Trusted services"
              />
            </div>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <div className="xl:col-span-1">
            <div className="sticky top-6 border border-white/10 bg-white/[0.035] rounded-2xl overflow-hidden">
              {/* SUMMARY HEADER */}
              <div className="p-5 border-b border-white/10">
                <h2 className="text-xl font-semibold">Order Summary</h2>

                <p className="text-gray-500 text-sm mt-1">
                  Review your order before checkout
                </p>
              </div>

              {/* COUPON */}
              <div className="p-5 border-b border-white/10">
                <label className="block text-sm text-gray-400 mb-2">
                  Coupon Code
                </label>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value.toUpperCase());

                      if (couponApplied) {
                        setCouponApplied(false);
                        setDiscount(0);
                      }

                      setCouponMessage("");
                    }}
                    placeholder="Enter coupon"
                    disabled={couponApplied || couponLoading}
                    className="flex-1 min-w-0 bg-black/20 border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white placeholder:text-gray-600 outline-none focus:border-[#d4af37]/50"
                  />

                  {couponApplied ? (
                    <button
                      onClick={removeCoupon}
                      className="px-4 rounded-xl border border-red-500/20 text-red-400 hover:bg-red-500/10 transition"
                    >
                      <X size={17} />
                    </button>
                  ) : (
                    <button
                      onClick={applyCoupon}
                      disabled={couponLoading}
                      className="px-4 rounded-xl bg-[#d4af37] text-black font-semibold text-sm hover:bg-[#e5c45c] transition disabled:opacity-50"
                    >
                      {couponLoading ? "Applying..." : "Apply"}
                    </button>
                  )}
                </div>

                {couponMessage && (
                  <p
                    className={`text-xs mt-2 ${
                      couponApplied ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}
              </div>

              {/* PRICE */}
              <div className="p-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>

                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>

                  <span className="text-green-400">Free</span>
                </div>

                {couponApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Discount</span>

                    <span className="text-green-400">
                      - {formatPrice(discount)}
                    </span>
                  </div>
                )}

                <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-sm">Total</p>

                    <p className="text-xs text-gray-600 mt-1">
                      Inclusive of applicable charges
                    </p>
                  </div>

                  <span className="text-2xl font-bold text-[#d4af37]">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* CHECKOUT */}
                <button
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className="w-full py-3.5 rounded-xl bg-[#d4af37] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#e5c45c] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard size={19} />
                  Proceed to Checkout
                </button>

                {/* PAYMENT OPTIONS */}
                <div className="pt-2 space-y-2">
                  <PaymentOption
                    title="Secure Payment"
                    description="Your payment information is protected"
                    icon={<ShieldCheck size={17} />}
                  />

                  <PaymentOption
                    title="Tabby / Tamara"
                    description="Flexible payment options available"
                    icon={<CreditCard size={17} />}
                  />
                </div>

                <div className="text-center pt-2">
                  <p className="text-xs text-gray-600">
                    🔒 Secure & encrypted checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const TrustCard = ({ icon, title, description }) => {
  return (
    <div className="border border-white/10 bg-white/[0.025] rounded-xl p-4 flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] flex-shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white">{title}</p>

        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
    </div>
  );
};


const PaymentOption = ({ title, description, icon }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-black/20 border border-white/5">
      <div className="text-[#d4af37]">{icon}</div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-300">{title}</p>

        <p className="text-[11px] text-gray-600 truncate">{description}</p>
      </div>
    </div>
  );
};

export default AddToCart;
