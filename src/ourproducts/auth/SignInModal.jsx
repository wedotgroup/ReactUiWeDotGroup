import { useState } from "react";
import axios from "axios";
import apiUrl from "../../api/api";
import { useNavigate } from "react-router-dom";
const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${apiUrl}/login`, formData);

      // Login success
      if (response.data?.status) {
        // Save token
        if (response.data?.token) {
          localStorage.setItem("token", response.data.token);
        }

        // Save user
        if (response.data?.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
        }

        // Reset form
        setFormData({
          email: "",
          password: "",
        });

        
        onClose();
        navigate("/profile");
        return;
      }

     
      setError(response.data?.message || "Login failed. Please try again.");
    } catch (err) {

      // Laravel validation errors
      if (err.response?.data?.error) {
        const errors = err.response.data.error;

        const firstError = Object.values(errors)[0];

        if (Array.isArray(firstError)) {
          setError(firstError[0]);
        } else {
          setError(firstError);
        }
      } else {
        setError(
          err.response?.data?.message ||
            "Something went wrong. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl border border-[#d4af37]/20 bg-[#011810] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl text-white/50 transition hover:text-white"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37]">
            Welcome Back
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">Sign In</h2>

          <p className="mt-1 text-xs text-white/50">
            Sign in to continue to your account
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email */}
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#d4af37]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-[#d4af37]"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-xs text-[#d4af37] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-1 w-full rounded-lg bg-[#d4af37] py-3 text-sm font-semibold text-[#011810] transition hover:bg-[#e6c65c] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Switch */}
        <div className="mt-4 text-center text-xs text-white/50">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-semibold text-[#d4af37] hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
