
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  X,
} from "lucide-react";


const products = [
  {
    id: 1,
    name: "Premium Leather Watch",
    slug: "premium-leather-watch",
    category: "Accessories",
    price: 129,
    oldPrice: 169,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80",
    description:
      "A premium leather watch designed for modern style and everyday elegance.",
    features: [
      "Premium genuine leather strap",
      "Classic analog dial",
      "Scratch-resistant glass",
      "Comfortable everyday design",
      "Adjustable strap",
    ],
  },

  {
    id: 2,
    name: "Classic Black Sneakers",
    slug: "classic-black-sneakers",
    category: "Shoes",
    price: 89,
    oldPrice: 119,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    description:
      "Classic black sneakers designed for comfort and everyday performance.",
    features: [
      "Lightweight construction",
      "Breathable upper",
      "Comfortable cushioning",
      "Durable rubber sole",
      "Everyday casual design",
    ],
  },

  {
    id: 3,
    name: "Luxury Sunglasses",
    slug: "luxury-sunglasses",
    category: "Accessories",
    price: 79,
    oldPrice: 99,
    rating: 4.7,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80",
    description:
      "Luxury sunglasses combining modern style with reliable eye protection.",
    features: [
      "UV protection",
      "Lightweight frame",
      "Premium lens",
      "Modern design",
      "Comfortable nose bridge",
    ],
  },

  {
    id: 4,
    name: "Premium Cotton Shirt",
    slug: "premium-cotton-shirt",
    category: "Fashion",
    price: 59,
    oldPrice: 79,
    rating: 4.5,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium cotton shirt made for a clean and comfortable everyday look.",
    features: [
      "100% premium cotton",
      "Soft and breathable fabric",
      "Comfortable fit",
      "Durable stitching",
      "Easy to style",
    ],
  },

  {
    id: 5,
    name: "Minimalist Backpack",
    slug: "minimalist-backpack",
    category: "Bags",
    price: 69,
    oldPrice: 89,
    rating: 4.8,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    description:
      "A minimalist backpack designed for work, travel and everyday use.",
    features: [
      "Large main compartment",
      "Laptop storage",
      "Adjustable shoulder straps",
      "Water-resistant material",
      "Lightweight design",
    ],
  },

  {
    id: 6,
    name: "Premium Headphones",
    slug: "premium-headphones",
    category: "Electronics",
    price: 149,
    oldPrice: 189,
    rating: 4.9,
    reviews: 211,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Premium wireless headphones delivering immersive sound and comfort.",
    features: [
      "High-quality audio",
      "Wireless connectivity",
      "Long battery life",
      "Comfortable ear cushions",
      "Built-in microphone",
    ],
  },

  {
    id: 7,
    name: "Elegant Handbag",
    slug: "elegant-handbag",
    category: "Bags",
    price: 119,
    oldPrice: 149,
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant handbag designed to add a sophisticated touch to your style.",
    features: [
      "Premium finish",
      "Spacious interior",
      "Multiple compartments",
      "Comfortable handles",
      "Elegant design",
    ],
  },

  {
    id: 8,
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    category: "Electronics",
    price: 199,
    oldPrice: 249,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1200&q=80",
    description:
      "Smart fitness watch designed to track daily activity and workouts.",
    features: [
      "Fitness tracking",
      "Heart rate monitoring",
      "Activity tracking",
      "Multiple workout modes",
      "Smart notifications",
    ],
  },
];

/* =========================================================
   STAR COMPONENT
========================================================= */

const Stars = ({ rating = 0 }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={17}
          className={
            star <= Math.round(rating)
              ? "fill-[#d4af37] text-[#d4af37]"
              : "text-white/20"
          }
        />
      ))}
    </div>
  );
};

/* =========================================================
   TABBY PLANS
========================================================= */

const tabbyPlans = [
  {
    payments: "4 payments",
    months: 4,
    description: "No interest. No fees.",
  },
  {
    payments: "6 payments",
    months: 6,
    monthlyFee: 12.49,
    description: "Includes AED 12.49 monthly fee",
  },
  {
    payments: "8 payments",
    months: 8,
    monthlyFee: 16.86,
    description: "Includes AED 16.86 monthly fee",
  },
  {
    payments: "12 payments",
    months: 12,
    monthlyFee: 21.23,
    description: "Includes AED 21.23 monthly fee",
  },
];

/* =========================================================
   PAYMENT MODAL
========================================================= */

const PaymentModal = ({
  method,
  product,
  quantity,
  total,
  onClose,
  onContinue,
}) => {
  if (!method) return null;

  /* =======================================================
     TABBY POPUP
  ======================================================= */

  if (method === "tabby") {
    return (
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-2xl bg-white text-[#171717] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE */}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Tabby popup"
            className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-gray-600 transition hover:bg-black/10 hover:text-black"
          >
            <X size={19} />
          </button>

          {/* HEADER */}

          <div className="px-6 pb-6 pt-8 sm:px-8">
            <div className="mb-6 flex justify-center">
              <div className="flex items-center justify-center rounded-lg bg-[#69f58a] px-3 py-1.5">
                <img
                  src="/logo/tabby.png"
                  alt="Tabby"
                  className="h-7 w-auto max-w-[100px] object-contain"
                />
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
              Get more time to pay
            </h2>

            <p className="mt-2 text-center text-[15px] text-gray-500">
              Split your purchase in up to 12 payments
            </p>
          </div>

          {/* PAYMENT PLANS */}

          <div className="px-6 sm:px-8">
            <div className="space-y-3">
              {tabbyPlans.map((plan) => {
                const monthlyFee = plan.monthlyFee || 0;

                const monthlyAmount =
                  total / plan.months + monthlyFee;

                return (
                  <div
                    key={plan.payments}
                    className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-gray-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-semibold text-[#171717]">
                          {plan.payments}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {plan.description}
                        </p>
                      </div>

                      <p className="whitespace-nowrap text-right font-bold text-[#171717]">
                        AED {monthlyAmount.toFixed(2)}/mo
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* HOW IT WORKS */}

          <div className="mt-8 border-t border-gray-100 px-6 pt-7 sm:px-8">
            <h3 className="text-xl font-bold">
              How it works
            </h3>

            <div className="mt-5 space-y-5">
              {[
                {
                  title: "Choose Tabby at checkout",
                  text: "to select a payment plan",
                },
                {
                  title: "Enter your information",
                  text: "and add your debit or credit card",
                },
                {
                  title: "Depending on your plan",
                  text: "you may or may not make a down payment",
                },
                {
                  title: "Payment reminders",
                  text: "We'll send you a reminder when your next payment is due",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#69f58a] font-bold text-[#171717]">
                    {index + 1}
                  </div>

                  <p className="pt-1 text-[14px] leading-6 text-gray-600">
                    <strong className="font-semibold text-[#171717]">
                      {step.title}
                    </strong>{" "}
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TRUST */}

          <div className="mt-8 border-t border-gray-100 bg-gray-50 px-6 py-7 sm:px-8">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#69f58a]">
                <span className="text-lg font-bold">
                  ✓
                </span>
              </div>

              <div>
                <h4 className="font-bold">
                  Trusted by millions
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Over 20 million shoppers discover products and pay
                  their way with Tabby
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#69f58a]">
                <span className="text-lg">
                  🛡
                </span>
              </div>

              <div>
                <h4 className="font-bold">
                  Shop safely with Tabby
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Buyer protection is included with every purchase
                </p>
              </div>
            </div>
          </div>

          {/* PRODUCT */}

          <div className="border-t border-gray-100 px-6 py-5 sm:px-8">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {product.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Quantity: {quantity}
                  </p>
                </div>

                <p className="text-sm font-bold">
                  AED {total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="border-t border-gray-100 px-6 py-5 sm:px-8">
            <button
              type="button"
              onClick={onContinue}
              className="w-full rounded-xl bg-[#011810] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0b2b20]"
            >
              Continue with Tabby
            </button>

            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full rounded-xl py-3 text-sm text-gray-500 transition hover:text-black"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
     TAMARA POPUP
  ======================================================= */

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-[560px] overflow-y-auto rounded-2xl bg-white text-[#171717] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Tamara popup"
          className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-gray-600 transition hover:bg-black/10 hover:text-black"
        >
          <X size={19} />
        </button>

        {/* =================================================
            TAMARA HEADER
        ================================================= */}

        <div className="px-6 pb-6 pt-8 sm:px-8">

          <div className="mb-6 flex justify-center">
            <img
              src="https://cdn.tamara.co/widget-v2/assets/lavendar-logo.703d190a.svg"
              alt="Tamara"
              className="h-8 w-auto"
            />
          </div>

          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Your payment, your pace
          </h2>

        </div>

        {/* =================================================
            EXAMPLE PLANS
        ================================================= */}

        <div className="px-6 sm:px-8">

          <h3 className="mb-4 text-lg font-bold">
            Example plans
          </h3>

          <div className="grid gap-3 sm:grid-cols-2">

            {/* 2 PAYMENTS */}

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-2xl font-bold">
                AED {(total / 2).toFixed(2)}/mo
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                No fees
              </p>

              <p className="mt-3 text-sm font-semibold">
                2 Payments
              </p>
            </div>

            {/* 3 PAYMENTS */}

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-2xl font-bold">
                AED {(total / 3).toFixed(2)}/mo
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                No fees
              </p>

              <p className="mt-3 text-sm font-semibold">
                3 Payments
              </p>
            </div>

            {/* 4 PAYMENTS */}

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-2xl font-bold">
                AED {(total / 4).toFixed(2)}/mo
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                Fees may apply
              </p>

              <p className="mt-3 text-sm font-semibold">
                4 Payments
              </p>
            </div>

            {/* PAY IN FULL */}

            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-2xl font-bold">
                AED {total.toFixed(2)}
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                1% cashback and buyer protection
              </p>

              <p className="mt-3 text-sm font-semibold">
                Pay in Full
              </p>
            </div>

          </div>

        </div>

        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <div className="mt-8 border-t border-gray-100 px-6 pt-7 sm:px-8">

          <h3 className="text-xl font-bold">
            How it works?
          </h3>

          <div className="mt-6 space-y-6">

            {/* STEP 1 */}

            <div className="flex gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0e3f8] font-bold text-[#8d58c7]">
                1
              </div>

              <div>
                <h4 className="font-semibold">
                  Pick a plan that works for you
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Choose Tamara at checkout and select the payment
                  plan that fits your needs.
                </p>
              </div>

            </div>

            {/* STEP 2 */}

            <div className="flex gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0e3f8] font-bold text-[#8d58c7]">
                2
              </div>

              <div>
                <h4 className="font-semibold">
                  Pay your first payment securely
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Enter your card details to make your first payment
                  safely and instantly.
                </p>
              </div>

            </div>

            {/* STEP 3 */}

            <div className="flex gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0e3f8] font-bold text-[#8d58c7]">
                3
              </div>

              <div>
                <h4 className="font-semibold">
                  Stay in control
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Track and manage all your upcoming payments easily
                  in the Tamara app.
                </p>
              </div>

            </div>

            {/* STEP 4 */}

            <div className="flex gap-4">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0e3f8] font-bold text-[#8d58c7]">
                4
              </div>

              <div>
                <h4 className="font-semibold">
                  We’ve got your back
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Get helpful reminders before each payment, no
                  surprises.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            WHY TAMARA
        ================================================= */}

        <div className="mt-8 border-t border-gray-100 px-6 pt-7 sm:px-8">

          <h3 className="text-xl font-bold">
            Why Tamara?
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">

            {/* BUYER PROTECTION */}

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">

              <img
                src="https://cdn.tamara.co/widget-v2/assets/user.6682854e.svg"
                alt="Buyer protection"
                className="mx-auto h-9 w-9"
              />

              <p className="mt-3 text-lg font-bold">
                100%
              </p>

              <p className="text-sm text-gray-500">
                buyer protection
              </p>

            </div>

            {/* SHARIA */}

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">

              <img
                src="https://cdn.tamara.co/widget-v2/assets/sharia.fe9fc99c.svg"
                alt="Sharia compliant"
                className="mx-auto h-9 w-9"
              />

              <p className="mt-3 text-lg font-bold">
                Sharia
              </p>

              <p className="text-sm text-gray-500">
                compliant
              </p>

            </div>

            {/* NO LATE FEES */}

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">

              <img
                src="https://cdn.tamara.co/widget-v2/assets/no-late-fees.8a0c997c.svg"
                alt="No late fees"
                className="mx-auto h-9 w-9"
              />

              <p className="mt-3 text-lg font-bold">
                No late
              </p>

              <p className="text-sm text-gray-500">
                fees
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            DISCLAIMER
        ================================================= */}

        <div className="mt-7 border-t border-gray-100 px-6 pt-6 sm:px-8">

          <p className="text-[12px] leading-5 text-gray-500">
            Payment plans shown are estimates. Actual offers may vary
            based on your eligibility and order details. Not all
            merchants or products qualify for every plan, including
            Tamara’s long-term financing options.
          </p>

          <p className="mt-3 text-[12px] leading-5 text-gray-500">
            Approval is subject to eligibility checks and may require
            a down payment. Final terms, including monthly payment
            amounts, may change after checkout review and may exclude
            taxes, shipping, or other charges.
          </p>

          <p className="mt-3 text-[12px] leading-5 text-gray-500">
            For more information, see Tamara’s{" "}
            <a
              href="https://tamara.co/en-AE/terms-and-conditions"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#8d58c7] underline"
            >
              Terms & Conditions
            </a>
            .
          </p>

        </div>

        {/* =================================================
            PAYMENT METHODS
        ================================================= */}

        <div className="mt-6 border-t border-gray-100 px-6 py-5 sm:px-8">

          <div className="flex items-center justify-center gap-4">

            <img
              src="https://cdn.tamara.co/widget-v2/assets/apple.58715d0c.svg"
              alt="Apple Pay"
              className="h-7 w-auto"
            />

            <img
              src="https://cdn.tamara.co/widget-v2/assets/master.56491a74.svg"
              alt="Mastercard"
              className="h-7 w-auto"
            />

          </div>

        </div>

        {/* =================================================
            PRODUCT
        ================================================= */}

        <div className="border-t border-gray-100 px-6 py-5 sm:px-8">

          <div className="rounded-xl border border-gray-200 bg-white p-4">

            <div className="flex items-center gap-3">

              <img
                src={product.image}
                alt={product.name}
                className="h-14 w-14 rounded-lg object-cover"
              />

              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Quantity: {quantity}
                </p>

              </div>

              <p className="text-sm font-bold">
                AED {total.toFixed(2)}
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            BUTTON
        ================================================= */}

        <div className="border-t border-gray-100 px-6 py-5 sm:px-8">

          <button
            type="button"
            onClick={onContinue}
            className="w-full rounded-xl bg-[#011810] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#0b2b20]"
          >
            Continue with Tamara
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full rounded-xl py-3 text-sm text-gray-500 transition hover:text-black"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
};

/* =========================================================
   PRODUCT DETAILS
========================================================= */

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [message, setMessage] = useState("");

  /* =======================================================
     PRODUCT NOT FOUND
  ======================================================= */

  if (!product) {
    return (
      <div className="min-h-screen bg-[#011810] px-6 py-32 text-center text-white">

        <h1 className="text-4xl font-semibold">
          Product Not Found
        </h1>

        <p className="mt-4 text-white/50">
          The product you are looking for does not exist.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-6 py-3 font-semibold text-[#011810]"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

      </div>
    );
  }

  /* =======================================================
     TOTAL
  ======================================================= */

  const total = product.price * quantity;

  /* =======================================================
     QUANTITY
  ======================================================= */

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) =>
      Math.max(1, prev - 1)
    );
  };

  /* =======================================================
     MESSAGE
  ======================================================= */

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  /* =======================================================
     ADD TO CART
  ======================================================= */

  const addToCart = () => {
    <Navigate to="/cart"/>
  };

  /* =======================================================
     BUY NOW
  ======================================================= */

  const buyNow = () => {
    setPaymentMethod("tabby");
  };

  /* =======================================================
     PAYMENT CONTINUE
  ======================================================= */

  const handlePaymentContinue = () => {
    /*
      IMPORTANT:

      Yahan actual Laravel API call karna hoga.

      Example:

      const response = await axios.post(
        "/api/payment/create",
        {
          provider: paymentMethod,
          product_id: product.id,
          quantity: quantity,
        }
      );

      window.location.href =
        response.data.checkout_url;
    */

    showMessage(
      `${paymentMethod === "tabby" ? "Tabby" : "Tamara"} checkout selected.`
    );

    setPaymentMethod(null);
  };

  return (
    <div className="min-h-screen bg-[#011810] text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 lg:px-10">

          {/* BREADCRUMB */}

          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/45">

            <Link
              to="/"
              className="transition hover:text-[#d4af37]"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              to="/products"
              className="transition hover:text-[#d4af37]"
            >
              Products
            </Link>

            <span>/</span>

            <span className="text-white/70">
              {product.name}
            </span>

          </div>

          {/* HERO TEXT */}

          <div className="max-w-3xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Product Details
            </p>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Consulting for Every Business
            </h1>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT SECTION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">

              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent" />

              <img
                src={product.image}
                alt={product.name}
                className="relative aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />

            </div>

            {/* SMALL INFO */}

            <div className="mt-5 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

              <span className="text-sm text-white/40">
                Category:{" "}
                <span className="text-white/70">
                  {product.category}
                </span>
              </span>

              <span className="text-sm text-white/40">
                Product ID:{" "}
                <span className="text-white/70">
                  #{String(product.id).padStart(4, "0")}
                </span>
              </span>

            </div>

          </div>

          {/* =================================================
              PRODUCT CONTENT
          ================================================= */}

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">
              Premium Package
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              {product.name}
            </h2>

            {/* RATING */}

            <div className="mt-5 flex flex-wrap items-center gap-4">

              <Stars rating={product.rating} />

              <span className="text-sm text-white/50">
                {product.rating.toFixed(1)} out of 5
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="text-sm text-white/50">
                Based on {product.reviews} customer ratings
              </span>

            </div>

            {/* PRICE */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <span className="text-3xl font-semibold text-[#d4af37]">
                AED {product.price.toFixed(2)}
              </span>

              <span className="text-lg text-white/30 line-through">
                AED {product.oldPrice.toFixed(2)}
              </span>

            </div>

            {/* DESCRIPTION */}

            <p className="mt-7 text-base leading-8 text-white/60">
              {product.description}
            </p>

            {/* FEATURES */}

            <div className="mt-8">

              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Package Includes
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">

                      <Check
                        size={14}
                        className="text-[#d4af37]"
                      />

                    </span>

                    {feature}

                  </div>
                ))}

              </div>

            </div>

            {/* =================================================
                QUANTITY + BUTTONS
            ================================================= */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              {/* QUANTITY */}

              <div className="flex h-14 w-fit items-center rounded-xl border border-white/10 bg-white/[0.03]">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="flex h-full w-12 items-center justify-center text-white/60 transition hover:text-[#d4af37]"
                >
                  <Minus size={18} />
                </button>

                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="flex h-full w-12 items-center justify-center text-white/60 transition hover:text-[#d4af37]"
                >
                  <Plus size={18} />
                </button>

              </div>

              {/* ADD CART */}

              <Link
              to={'/cart'}
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-[#d4af37] bg-[#d4af37] px-6 font-semibold text-[#011810] transition hover:bg-[#e3c45a]"
              >
                <ShoppingBag size={19} />
                Add to Cart
              </Link>

              {/* BUY NOW */}

              <button
                type="button"
                onClick={buyNow}
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold text-white transition hover:border-[#d4af37]/50 hover:text-[#d4af37]"
              >
                Buy Now
              </button>

            </div>

            {/* =================================================
                TOTAL
            ================================================= */}

            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">

              <span className="text-sm text-white/45">
                Total
              </span>

              <span className="font-semibold text-[#d4af37]">
                AED {total.toFixed(2)}
              </span>

            </div>

            {/* =================================================
                PAYMENT METHODS
            ================================================= */}

            <div className="mt-8 space-y-4">

              {/* =================================================
                  TABBY
              ================================================= */}

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("tabby")
                }
                className="flex min-h-[62px] w-full items-center justify-between gap-3 rounded-[11px] border border-[#d9dfe8] bg-white px-4 py-3 text-left transition-all hover:border-[#b8c1ce] hover:shadow-sm sm:px-5"
              >

                <div className="min-w-0 flex-1">

                  <p className="text-[13px] leading-6 text-[#171717] sm:text-[14px]">

                    <span>
                      As low as{" "}
                    </span>

                    <span className="font-bold">
                      AED {(total / 4).toFixed(2)}/month
                    </span>

                    <span>
                      {" "}or 4 interest-free payments.{" "}
                    </span>

                    <span
                      className="cursor-pointer font-semibold text-[#2875d0] underline underline-offset-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPaymentMethod("tabby");
                      }}
                    >
                      Learn more
                    </span>

                  </p>

                </div>

                <div className="flex shrink-0 items-center justify-center rounded-[8px] bg-[#69f58a] px-2.5 py-1">

                  <img
                    src="/logo/tabby.png"
                    alt="Tabby"
                    className="h-6 w-auto max-w-[75px] object-contain"
                  />

                </div>

              </button>

              {/* =================================================
                  TAMARA
              ================================================= */}

              <button
                type="button"
                onClick={() =>
                  setPaymentMethod("tamara")
                }
                className="flex min-h-[62px] w-full items-center justify-between gap-3 rounded-[11px] border border-[#d9dfe8] bg-white px-4 py-3 text-left transition-all hover:border-[#b8c1ce] hover:shadow-sm sm:px-5"
              >

                <div className="min-w-0 flex-1">

                  <p className="text-[13px] leading-6 text-[#171717] sm:text-[14px]">

                    <span>
                      Or split in 4 payments of{" "}
                    </span>

                    <span className="font-bold">
                      AED {(total / 4).toFixed(2)}
                    </span>

                    <span>
                      {" "}- No late fees.{" "}
                    </span>

                    <span
                      className="cursor-pointer font-semibold text-[#171717] underline underline-offset-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPaymentMethod("tamara");
                      }}
                    >
                      More options
                    </span>

                  </p>

                </div>

                <div className="flex shrink-0 items-center justify-center rounded-[5px] bg-gradient-to-r from-[#ffd7e8] to-[#cba8e8] px-2 py-1">

                  <img
                    src="/logo/tamara.png"
                    alt="Tamara"
                    className="h-5 w-auto max-w-[70px] object-contain"
                  />

                </div>

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SUCCESS MESSAGE
      ===================================================== */}

      {message && (
        <div className="fixed bottom-6 right-6 z-[10000] max-w-sm rounded-xl border border-[#d4af37]/30 bg-[#011810] px-5 py-4 text-sm text-white shadow-2xl">

          <div className="flex items-center gap-3">

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/10">

              <Check
                size={15}
                className="text-[#d4af37]"
              />

            </span>

            {message}

          </div>

        </div>
      )}

      {/* =====================================================
          PAYMENT MODAL
      ===================================================== */}

      <PaymentModal
        method={paymentMethod}
        product={product}
        quantity={quantity}
        total={total}
        onClose={() =>
          setPaymentMethod(null)
        }
        onContinue={handlePaymentContinue}
      />

    </div>
  );
};

export default ProductDetails;

