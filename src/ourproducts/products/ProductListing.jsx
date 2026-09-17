import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";

const products = [
  {
    id: 1,
    name: "Premium Leather Watch",
    category: "Accessories",
    slug: "premium-leather-watch",
    price: 129,
    oldPrice: 169,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Black Sneakers",
    category: "Shoes",
    slug: "classic-black-sneakers",
    price: 89,
    oldPrice: 119,
    rating: 4.6,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Luxury Sunglasses",
    category: "Accessories",
    slug: "luxury-sunglasses",
    price: 79,
    oldPrice: 99,
    rating: 4.7,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Premium Cotton Shirt",
    category: "Fashion",
    slug: "premium-cotton-shirt",
    price: 59,
    oldPrice: 79,
    rating: 4.5,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Minimalist Backpack",
    category: "Bags",
    slug: "minimalist-backpack",
    price: 69,
    oldPrice: 89,
    rating: 4.8,
    reviews: 102,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Premium Headphones",
    category: "Electronics",
    slug: "premium-headphones",
    price: 149,
    oldPrice: 189,
    rating: 4.9,
    reviews: 211,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Elegant Handbag",
    category: "Bags",
    slug: "elegant-handbag",
    price: 119,
    oldPrice: 149,
    rating: 4.7,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Smart Fitness Watch",
    category: "Electronics",
    slug: "smart-fitness-watch",
    price: 199,
    oldPrice: 249,
    rating: 4.8,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  },
];

const ProductListing = () => {
  // ================= AUTH MODAL =================
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // ================= SEARCH =================
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // ================= OPEN SIGN IN =================
  const handleSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  // ================= OPEN SIGN UP =================
  const handleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  // ================= CLOSE ALL MODALS =================
  const handleCloseModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#011810] text-white">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-[#d4af37]/15">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#011810] via-[#011810] to-[#0b3024]" />

          {/* Glow */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-3xl" />

          {/* Content */}
          <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              {/* Small Heading */}
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
                Our Products
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Discover Our
                <span className="block text-[#d4af37]">
                  Premium Products
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Explore our carefully selected collection of premium products
                designed with quality, style and exceptional value in mind.
              </p>

              {/* ================= AUTH BUTTONS ================= */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                {/* Sign In */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="w-full rounded-lg border border-[#d4af37] px-8 py-3.5 text-sm font-semibold text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37] hover:text-[#011810] sm:w-auto"
                >
                  Sign In
                </button>

                {/* Sign Up */}
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="w-full rounded-lg bg-[#d4af37] px-8 py-3.5 text-sm font-semibold text-[#011810] shadow-lg shadow-[#d4af37]/10 transition-all duration-300 hover:bg-[#e6c65c] hover:shadow-[#d4af37]/20 sm:w-auto"
                >
                  Sign Up
                </button>

              </div>

            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          {/* ================= SEARCH ================= */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">

              <Search
                size={21}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#d4af37]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-[#d4af37]/25 bg-[#08251c] py-4 pl-14 pr-5 text-white outline-none placeholder:text-white/35 transition focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]/30"
              />

            </div>
          </div>

          {/* ================= TITLE ================= */}
          <div className="mb-8 mt-14">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Collection
            </p>

            <div className="mt-2 flex items-end justify-between">

              <h2 className="text-2xl font-bold sm:text-3xl">
                All Products
              </h2>

              <p className="text-sm text-white/40">
                {filteredProducts.length} Products
              </p>

            </div>
          </div>

          {/* ================= PRODUCT GRID ================= */}
          {filteredProducts.length > 0 ? (

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredProducts.map((product) => (

                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >

                  {/* Product Image */}
                  <div className="h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-5">

                    <h3 className="text-lg font-semibold text-white">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-between">

                      <span className="text-xl font-bold text-[#d4af37]">
                        ${product.price}
                      </span>

                      <Link
                        to={`/products/${product.slug}`}
                        className="text-sm font-medium text-[#d4af37] transition hover:text-white"
                      >
                        Explore →
                      </Link>

                    </div>
                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* ================= NO RESULT ================= */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#d4af37]/15 bg-[#08251c]">

              <Search
                size={40}
                className="text-[#d4af37]"
              />

              <h3 className="mt-4 text-xl font-semibold">
                No Products Found
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Try searching for another product.
              </p>

            </div>

          )}

        </main>
      </div>

      {/* ================= SIGN IN MODAL ================= */}
      <SignInModal
        isOpen={showSignIn}
        onClose={handleCloseModals}
        onSwitchToSignUp={handleSignUp}
      />

      {/* ================= SIGN UP MODAL ================= */}
      <SignUpModal
        isOpen={showSignUp}
        onClose={handleCloseModals}
        onSwitchToSignIn={handleSignIn}
      />
    </>
  );
};

export default ProductListing;