import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
  CreditCard,
} from "lucide-react";

const initialCartItems = [
  {
    id: 1,
    name: "Premium Leather Watch",
    category: "Accessories",
    price: 129,
    oldPrice: 169,
    quantity: 1,
    image: "/products/watch.jpg",
  },
  {
    id: 2,
    name: "Classic Black Sneakers",
    category: "Footwear",
    price: 89,
    oldPrice: 119,
    quantity: 2,
    image: "/products/sneakers.jpg",
  },
  {
    id: 3,
    name: "Luxury Sunglasses",
    category: "Accessories",
    price: 79,
    oldPrice: 99,
    quantity: 1,
    image: "/products/sunglasses.jpg",
  },
];

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

 
  const updateQuantity = (id, type) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id !== id) return item;

        let quantity = item.quantity;

        if (type === "increase") {
          quantity += 1;
        }

        if (type === "decrease") {
          quantity = Math.max(1, quantity - 1);
        }

        return {
          ...item,
          quantity,
        };
      })
    );
  };

  
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

 
  const clearCart = () => {
    setCartItems([]);
  };

  
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const discount = couponApplied ? subtotal * 0.1 : 0;

  const shipping = subtotal > 0 ? 0 : 0;

  const total = subtotal - discount + shipping;

  const formatPrice = (price) => {
    return `AED ${price.toFixed(2)}`;
  };

  
  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "WEDOT10") {
      setCouponApplied(true);
    } else {
      setCouponApplied(false);
    }
  };


  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#011810] text-white">
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-white/50 transition hover:text-[#d4af37]"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <div className="flex items-center gap-2">
              <ShoppingBag
                size={21}
                className="text-[#d4af37]"
              />

              <span className="font-semibold">
                Cart
              </span>
            </div>
          </div>
        </div>

        <div className="flex min-h-[75vh] items-center justify-center px-4">
          <div className="w-full max-w-lg text-center">
            <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
              <ShoppingBag
                size={40}
                className="text-[#d4af37]"
                strokeWidth={1.5}
              />
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Shopping Cart
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Your cart is empty
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/50">
              You haven't added any items to your cart yet.
              Explore our products and find something you'll love.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#d4af37] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#e5c75c]"
            >
              Continue Shopping
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#011810] text-white">

      

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          <Link
            to="/"
            className="mb-7 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-[#d4af37]"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
                Shopping Cart
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Your Cart
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                Review your selected items and proceed securely
                to checkout.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <ShoppingBag
                size={18}
                className="text-[#d4af37]"
              />

              {cartItems.length}{" "}
              {cartItems.length === 1 ? "Item" : "Items"}
            </div>
          </div>
        </div>
      </section>

      

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">

        <div className="grid gap-8 lg:grid-cols-[1fr_390px]">

       

          <div>

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                Cart Items
              </h2>

              <button
                onClick={clearCart}
                className="flex items-center gap-1.5 text-xs text-white/40 transition hover:text-red-400"
              >
                <Trash2 size={14} />
                Clear Cart
              </button>

            </div>

            <div className="space-y-4">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#d4af37]/30 sm:p-5"
                >

                  <div className="flex gap-4">

                    {/* IMAGE */}

                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:h-32 sm:w-32">

                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <ShoppingBag
                            size={30}
                            className="text-white/20"
                          />
                        </div>
                      )}

                    </div>

                    {/* DETAILS */}

                    <div className="min-w-0 flex-1">

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                            {item.category}
                          </p>

                          <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">
                            {item.name}
                          </h3>

                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="shrink-0 rounded-lg p-1.5 text-white/30 transition hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

                        {/* PRICE */}

                        <div>
                          <p className="text-base font-bold text-[#d4af37]">
                            {formatPrice(item.price)}
                          </p>

                          <p className="text-xs text-white/30 line-through">
                            {formatPrice(item.oldPrice)}
                          </p>
                        </div>

                        {/* QUANTITY */}

                        <div className="flex items-center rounded-lg border border-white/10 bg-black/20">

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                "decrease"
                              )
                            }
                            disabled={item.quantity <= 1}
                            className="flex h-9 w-9 items-center justify-center text-white/60 transition hover:text-[#d4af37] disabled:opacity-30"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="flex h-9 min-w-9 items-center justify-center border-x border-white/10 text-sm font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                "increase"
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center text-white/60 transition hover:text-[#d4af37]"
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                        {/* ITEM TOTAL */}

                        <div className="text-right">

                          <p className="text-xs text-white/40">
                            Item Total
                          </p>

                          <p className="text-sm font-bold">
                            {formatPrice(
                              item.price *
                                item.quantity
                            )}
                          </p>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              ))}

            </div>

          

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              <TrustCard
                icon={<ShieldCheck size={18} />}
                title="Secure Payment"
                text="Protected checkout"
              />

              <TrustCard
                icon={<Truck size={18} />}
                title="Fast Delivery"
                text="Reliable delivery"
              />

              <TrustCard
                icon={<Check size={18} />}
                title="Quality Assured"
                text="Premium products"
              />

            </div>
          </div>

         

          <aside className="lg:sticky lg:top-6 lg:self-start">

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">

              {/* TITLE */}

              <div className="border-b border-white/10 px-5 py-5 sm:px-6">

                <h2 className="text-lg font-semibold">
                  Order Summary
                </h2>

                <p className="mt-1 text-xs text-white/40">
                  Review your order before checkout
                </p>

              </div>

              <div className="space-y-5 p-5 sm:p-6">

                {/* COUPON */}

                <div>

                  <label className="mb-2 block text-xs font-medium text-white/50">
                    Have a promo code?
                  </label>

                  <div className="flex gap-2">

                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) =>
                        setCoupon(e.target.value)
                      }
                      placeholder="Enter code"
                      className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3.5 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#d4af37]/50"
                    />

                    <button
                      onClick={applyCoupon}
                      className="rounded-xl border border-[#d4af37]/40 px-4 text-xs font-semibold text-[#d4af37] transition hover:bg-[#d4af37]/10"
                    >
                      Apply
                    </button>

                  </div>

                  {couponApplied && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-green-400">
                      <Check size={13} />
                      WEDOT10 applied — 10% discount
                    </p>
                  )}

                </div>

                <div className="h-px bg-white/10" />

                {/* PRICE */}

                <div className="space-y-3">

                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">
                      Subtotal
                    </span>

                    <span>
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">

                    <span className="text-white/50">
                      Shipping
                    </span>

                    <span className="text-green-400">
                      FREE
                    </span>

                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-sm">

                      <span className="text-white/50">
                        Discount
                      </span>

                      <span className="text-green-400">
                        - {formatPrice(discount)}
                      </span>

                    </div>
                  )}

                </div>

                <div className="h-px bg-white/10" />

                {/* TOTAL */}

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-sm font-medium">
                      Total
                    </p>

                    <p className="mt-1 text-[10px] text-white/35">
                      Inclusive of applicable charges
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-[#d4af37]">
                    {formatPrice(total)}
                  </p>

                </div>

                {/* PAYMENT */}

                <div className="rounded-xl border border-white/10 bg-black/15 p-4">

                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                    Flexible Payment Options
                  </p>

                  <div className="grid grid-cols-2 gap-2">

                    <PaymentOption
                      logo="/logo/tabby.png"
                      name="Tabby"
                    />

                    <PaymentOption
                      logo="/logo/tamara.png"
                      name="Tamara"
                    />

                  </div>

                </div>

                {/* CHECKOUT */}

                <button
                  onClick={() => navigate("/checkout")}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#d4af37] px-5 py-4 text-sm font-bold text-black transition hover:bg-[#e5c75c]"
                >
                  Proceed to Checkout

                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                {/* SECURE */}

                <div className="flex items-center justify-center gap-2 text-[11px] text-white/35">

                  <ShieldCheck
                    size={14}
                    className="text-[#d4af37]"
                  />

                  Secure & encrypted checkout

                </div>

              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* =========================================
          FOOTER TRUST
      ========================================== */}

      <section className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">

          <div className="flex items-center gap-2 text-sm text-white/50">

            <CreditCard
              size={17}
              className="text-[#d4af37]"
            />

            Multiple secure payment options available

          </div>

          <div className="flex items-center gap-4 text-xs text-white/35">

            <span>Secure Payment</span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span>Buyer Protection</span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span>Easy Checkout</span>

          </div>

        </div>

      </section>

    </div>
  );
};



const TrustCard = ({ icon, title, text }) => {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
        {icon}
      </div>

      <div>

        <p className="text-xs font-semibold">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-white/35">
          {text}
        </p>

      </div>

    </div>
  );
};

/* =================================================
   PAYMENT OPTION
================================================= */

const PaymentOption = ({ logo, name }) => {
  return (
    <div className="flex min-h-[52px] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3">

      <img
        src={logo}
        alt={name}
        className="max-h-6 w-14 object-contain"
      />

      <span className="text-[10px] text-white/50">
        {name}
      </span>

    </div>
  );
};

export default Cart;