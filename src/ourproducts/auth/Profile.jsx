import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Shield,
  Edit3,
  LogOut,
  CheckCircle2,
  Save,
  X,
  Hash,
  Lock,
} from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);

        setFormData({
          name: parsedUser?.name || "",
          email: parsedUser?.email || "",
          phone: parsedUser?.phone || "",
        });
      } catch (error) {
        console.error("User data error:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      ...formData,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);

    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#011810] px-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <User className="mx-auto mb-3 text-[#d4af37]" size={35} />

          <h2 className="text-xl font-bold text-white">
            Login Required
          </h2>

          <p className="mt-2 text-sm text-white/40">
            Please login to view your profile.
          </p>
        </div>
      </div>
    );
  }

  const initial =
    user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-[#011810] px-4 py-8 sm:px-6 lg:px-8 mt-4">

      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="mb-6 mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              Account
            </p>

            <h1 className="mt-1 text-2xl font-bold text-white">
              My Profile
            </h1>

            <p className="mt-1 text-xs text-white/40">
              Manage your account information
            </p>
          </div>

          <div className="flex gap-2">

            

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/20"
            >
              <LogOut size={14} />
              Logout
            </button>

          </div>
        </div>

        {/* ================= PROFILE MINI CARD ================= */}
        <div className="mb-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          {/* Avatar */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6c65c] to-[#b89427]">
            <span className="text-2xl font-black text-[#011810]">
              {initial}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">

              <h2 className="truncate text-lg font-bold text-white">
                {user?.name || "User"}
              </h2>

              <span className="rounded-full bg-[#d4af37]/10 px-2 py-0.5 text-[9px] font-bold uppercase text-[#d4af37]">
                {user?.role || "User"}
              </span>

            </div>

            <p className="mt-1 truncate text-xs text-white/40">
              {user?.email || "No email"}
            </p>
          </div>

          <div className="hidden items-center gap-1.5 rounded-full bg-green-400/10 px-2.5 py-1.5 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-[9px] font-semibold text-green-300">
              Active
            </span>
          </div>

        </div>

        {/* ================= INFORMATION ================= */}
        <div className="mb-5">

          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-white">
              Personal Information
            </h3>

            <span className="text-[10px] text-white/30">
              Account Details
            </span>
          </div>

          {/* Small Boxes */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {/* NAME */}
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#d4af37]/30">

              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <User
                    size={15}
                    className="text-[#d4af37]"
                  />
                </div>

                <span className="text-[9px] uppercase tracking-wider text-white/30">
                  Name
                </span>
              </div>

              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-xs text-white outline-none focus:border-[#d4af37]/50"
                />
              ) : (
                <p className="truncate text-sm font-semibold text-white">
                  {user?.name || "Not available"}
                </p>
              )}

            </div>

            {/* EMAIL */}
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#d4af37]/30">

              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <Mail
                    size={15}
                    className="text-[#d4af37]"
                  />
                </div>

                <span className="text-[9px] uppercase tracking-wider text-white/30">
                  Email
                </span>
              </div>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-xs text-white outline-none focus:border-[#d4af37]/50"
                />
              ) : (
                <p className="truncate text-sm font-semibold text-white">
                  {user?.email || "Not available"}
                </p>
              )}

            </div>

            {/* PHONE */}
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#d4af37]/30">

              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <Phone
                    size={15}
                    className="text-[#d4af37]"
                  />
                </div>

                <span className="text-[9px] uppercase tracking-wider text-white/30">
                  Phone
                </span>
              </div>

              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/20 px-2.5 py-2 text-xs text-white outline-none focus:border-[#d4af37]/50"
                />
              ) : (
                <p className="text-sm font-semibold text-white">
                  {user?.phone || "Not available"}
                </p>
              )}

            </div>

            {/* ROLE */}
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-[#d4af37]/30">

              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4af37]/10">
                  <Shield
                    size={15}
                    className="text-[#d4af37]"
                  />
                </div>

                <span className="text-[9px] uppercase tracking-wider text-white/30">
                  Role
                </span>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold capitalize text-white">
                  {user?.role || "User"}
                </p>

                <CheckCircle2
                  size={14}
                  className="text-green-400"
                />
              </div>

            </div>

          </div>
        </div>

        {/* ================= ACCOUNT BOXES ================= */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {/* ACCOUNT STATUS */}
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-400/10">
                <CheckCircle2
                  size={17}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/30">
                  Account Status
                </p>

                <p className="mt-1 text-sm font-semibold text-green-400">
                  Active
                </p>
              </div>

            </div>
          </div>

          {/* SECURITY */}
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4af37]/10">
                <Lock
                  size={17}
                  className="text-[#d4af37]"
                />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/30">
                  Security
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Protected
                </p>
              </div>

            </div>
          </div>

          {/* USER ID */}
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4af37]/10">
                <Hash
                  size={17}
                  className="text-[#d4af37]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-wider text-white/30">
                  User ID
                </p>

                <p className="mt-1 truncate font-mono text-sm font-semibold text-white">
                  #{user?.id || "N/A"}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;