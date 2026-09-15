import React, { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the Terms of Service.");
      return;
    }

    setLoading(true);

    try {
      // API call here
      console.log("Sign Up Data:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Account created successfully");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-[#0f172a] lg:flex">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-bold text-slate-900">
                A
              </div>

              <span className="text-xl font-bold text-white">
                Acme
              </span>
            </div>

            {/* Content */}
            <div className="max-w-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Get started
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Everything you need
                <br />
                <span className="text-slate-400">
                  in one workspace.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
                Create your account and start managing your projects,
                collaborating with your team and growing your business.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Simple & powerful
                    </p>
                    <p className="text-sm text-slate-500">
                      Everything in one place
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Secure by default
                    </p>
                    <p className="text-sm text-slate-500">
                      Your data stays protected
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    ✓
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      Built for teams
                    </p>
                    <p className="text-sm text-slate-500">
                      Collaborate without limits
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <p className="text-sm text-slate-500">
              © 2026 Acme Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 font-bold text-white">
                A
              </div>

              <span className="text-xl font-bold text-slate-900">
                Acme
              </span>
            </div>

            {/* Header */}
            <div className="mb-7">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Create your account
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start your free account in just a few seconds.
              </p>
            </div>

            {/* Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.42Z"
                />
                <path
                  fill="#34A853"
                  d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.28v2.53A9.75 9.75 0 0 0 12 21.75Z"
                />
                <path
                  fill="#FBBC05"
                  d="M6.53 13.83A5.86 5.86 0 0 1 6.22 12c0-.64.11-1.26.31-1.83V7.64H3.28A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.05 1.03 4.36l3.25-2.53Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.14c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.84 3.23 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.72 5.39l3.25 2.53c.77-2.31 2.93-4.03 5.47-4.03Z"
                />
              </svg>

              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Or sign up with email
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-700"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-sm leading-5 text-slate-500">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="font-semibold text-slate-700 underline hover:text-blue-600"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="font-semibold text-slate-700 underline hover:text-blue-600"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4Z"
                      />
                    </svg>

                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;