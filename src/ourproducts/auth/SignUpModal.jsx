import { useState } from "react";
import axios from "axios";
import apiUrl from "../../api/api";

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Password confirmation
    if (formData.password !== formData.password_confirmation) {
      setError("Password and confirm password do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${apiUrl}/singin`,
        formData
      );


      // Registration successful
      if (response.data?.status) {

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: "",
        });

        // Close Signup Modal
        onClose();

        // Open Sign In Modal
        onSwitchToSignIn();

        return;
      }

      setError(
        response.data?.message ||
        "Registration failed. Please try again."
      );

    } catch (err) {
      console.error("Signup Error:", err);


      // Laravel validation errors
      if (err.response?.data?.errors) {
        const errors = err.response.data.errors;

        const firstError = Object.values(errors)[0];

        if (Array.isArray(firstError)) {
          setError(firstError[0]);
        } else {
          setError(firstError);
        }
      } else {
        setError(
          err.response?.data?.error ||
          err.response?.data?.message ||
          "Something went wrong. Please try again."
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
            Create Account
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Sign Up
          </h2>

          <p className="mt-1 text-xs text-white/50">
            Create your account to get started
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

          {/* Name */}
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
            />
          </div>

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
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
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
              placeholder="Create a password"
              required
              minLength={8}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-xs font-medium text-white/80">
              Confirm Password
            </label>

            <input
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
              minLength={8}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#d4af37]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-[#d4af37] py-3 text-sm font-semibold text-[#011810] transition hover:bg-[#e6c65c] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        {/* Switch */}
        <div className="mt-4 text-center text-xs text-white/50">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => {
              onClose();
              onSwitchToSignIn();
            }}
            className="font-semibold text-[#d4af37] hover:underline"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;