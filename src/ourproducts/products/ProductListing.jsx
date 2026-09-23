import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

import SignInModal from "../auth/SignInModal";
import SignUpModal from "../auth/SignUpModal";
import apiUrl from "../../api/api";

const ProductListing = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${apiUrl}/products`);
        const data = res.data?.data;
    
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("PRODUCT API ERROR:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) {
      return [];
    }

    if (!search.trim()) {
      return products;
    }

    return products.filter((product) =>
      product?.name?.toString().toLowerCase().includes(search.toLowerCase()),
    );
  }, [products, search]);

  const handleSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const handleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleCloseModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#011810] text-white">
         <section className="relative overflow-hidden border-b border-[#d4af37]/15">
          <div className="absolute inset-0 bg-gradient-to-br from-[#011810] via-[#011810] to-[#0b3024]" />

          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#d4af37]/5 blur-3xl" />

          <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
                Our Products
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Discover Our
                <span className="block text-[#d4af37]">Premium Products</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Explore our carefully selected collection of premium products
                designed with quality, style and exceptional value in mind.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="w-full rounded-lg border border-[#d4af37] px-8 py-3.5 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-[#011810] sm:w-auto"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={handleSignUp}
                  className="w-full rounded-lg bg-[#d4af37] px-8 py-3.5 text-sm font-semibold text-[#011810] transition hover:bg-[#e6c65c] sm:w-auto"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* SEARCH */}
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
                className="w-full rounded-xl border border-[#d4af37]/25 bg-[#08251c] py-4 pl-14 pr-5 text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* TITLE */}
          <div className="mb-8 mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
              Collection
            </p>

            <div className="mt-2 flex items-end justify-between">
              <h2 className="text-2xl font-bold sm:text-3xl">All Products</h2>

              <p className="text-sm text-white/40">
                {filteredProducts.length} Products
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-[#d4af37]">Loading products...</p>
            </div>
          ) : filteredProducts.length > 0 ? (
            /* ================= PRODUCT GRID ================= */
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  {/* IMAGE */}
                  <div className="h-auto overflow-hidden">
                    <img
                      src={`${apiUrl.replace("/api", "")}/${product.images}`}
                      alt={product.title}
                      className="h-full w-full object-contain p-3 object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{product.title}</h3>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xl font-bold text-[#d4af37]">
                        ${product.price}
                      </span>

                      <Link
                        to={`/products/${product.slug}`}
                        className="text-sm font-medium text-[#d4af37] hover:text-white"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* NO PRODUCTS */
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-[#d4af37]/15 bg-[#08251c]">
              <Search size={40} className="text-[#d4af37]" />

              <h3 className="mt-4 text-xl font-semibold">No Products Found</h3>

              <p className="mt-2 text-sm text-white/40">
                Try searching for another product.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* SIGN IN */}
      <SignInModal
        isOpen={showSignIn}
        onClose={handleCloseModals}
        onSwitchToSignUp={handleSignUp}
      />

      {/* SIGN UP */}
      <SignUpModal
        isOpen={showSignUp}
        onClose={handleCloseModals}
        onSwitchToSignIn={handleSignIn}
      />
    </>
  );
};

export default ProductListing;
