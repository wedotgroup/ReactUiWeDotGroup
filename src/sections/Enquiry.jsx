import { useMemo, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Check,
  Search,
  ChevronDown,
  Code2,
  Users,
  BarChart3,
  BadgeCheck
} from "lucide-react";
import axios from "axios";
import apiUrl from "../api/api";

const serviceCategories = {
  "management-consultancy": {
    title: "Management Consultancy",
    description: "Business strategy & growth solutions",
    icon: BarChart3,

    services: [
      { label: "All Free Zones", value: "all-free-zones" },
      { label: "Dubai Free Zones", value: "dubai-free-zones" },
      { label: "Abu Dhabi Free Zones", value: "abu-dhabi-free-zones" },
      { label: "Sharjah Free Zones", value: "sharjah-free-zones" },
      { label: "Fujairah Free Zones", value: "fujairah-free-zones" },
      { label: "Ajman Free Zones", value: "ajman-free-zones" },
      {
        label: "Ras Al Khaimah Free Zones",
        value: "ras-al-khaimah-free-zones",
      },
      {
        label: "Umm Al Quwain Free Zones",
        value: "umm-al-quwain-free-zones",
      },

      { label: "All Offshores", value: "all-offshores" },
      {
        label: "Ras Al Khaimah Offshore",
        value: "ras-al-khaimah-offshore",
      },
      { label: "Ajman Offshore", value: "ajman-offshore" },
      { label: "Jebel Ali Offshore", value: "jebel-ali-offshore" },

      { label: "All Mainlands", value: "all-mainlands" },
      { label: "Dubai", value: "dubai-mainland" },
      { label: "Abu Dhabi", value: "abu-dhabi-mainland" },
      { label: "Sharjah", value: "sharjah-mainland" },
      { label: "Fujairah", value: "fujairah-mainland" },
      { label: "Ajman", value: "ajman-mainland" },
      {
        label: "Ras Al Khaimah",
        value: "ras-al-khaimah-mainland",
      },
      {
        label: "Umm Al Quwain",
        value: "umm-al-quwain-mainland",
      },

      { label: "Feasibility Study", value: "feasibility-study" },
      { label: "Due Diligence", value: "due-diligence" },
      { label: "Business Plan", value: "business-plan" },
      { label: "Business Valuation", value: "business-valuation" },
      { label: "Business Consulting", value: "business-consulting" },
      {
        label: "Risk Consulting Services",
        value: "risk-consulting-services",
      },

      { label: "Book-Keeping", value: "book-keeping" },
      { label: "Financial Management", value: "financial-management" },
      { label: "Cost Accounting", value: "cost-accounting" },
      { label: "Payroll Accounting", value: "payroll-accounting" },
      { label: "Accounting Advisory", value: "accounting-advisory" },
      { label: "Cloud Computing", value: "cloud-computing" },
    ],
  },

  "it-consultancy": {
    title: "IT Consultancy",
    description: "Technology & digital solutions",
    icon: Code2,

    services: [
      { label: "Website Design", value: "website-design" },
      { label: "Web Development", value: "web-development" },
      { label: "Software Development", value: "software-development" },
      {
        label: "Mobile App Development",
        value: "mobile-app-development",
      },
      { label: "Graphics Design", value: "graphics-design" },
      { label: "SEO", value: "seo" },
      { label: "SMO / SMM", value: "smo-smm" },
      { label: "Google Ads (PPC)", value: "google-ads-ppc" },
      {
        label: "Content Writing Services",
        value: "content-writing-services",
      },
      {
        label: "Bulk Email Marketing",
        value: "bulk-email-marketing",
      },
      {
        label: "Bulk SMS Marketing",
        value: "bulk-sms-marketing",
      },
      { label: "Domain", value: "domain" },
      {
        label: "Web Hosting / Server",
        value: "web-hosting-server",
      },
      { label: "SSL Certification", value: "ssl-certification" },
      {
        label: "WhatsApp API Integration",
        value: "whatsapp-api-integration",
      },
      {
        label: "Logistic Integration",
        value: "logistic-integration",
      },
      {
        label: "Payment Gateway Integration",
        value: "payment-gateway-integration",
      },
    ],
  },

  "hr-consultancy": {
    title: "HR Consultancy",
    description: "Talent & workforce solutions",
    icon: Users,

    services: [
      { value: "recruitment", label: "Recruitment" },
      { value: "talent-acquisition", label: "Talent Acquisition" },
      { value: "hr-outsourcing", label: "HR Outsourcing" },
      { value: "payroll-management", label: "Payroll Management" },
      {
        value: "employee-management",
        label: "Employee Management",
      },
      {
        value: "training-development",
        label: "Training & Development",
      },
      {
        value: "performance-management",
        label: "Performance Management",
      },
      {
        value: "workforce-planning",
        label: "Workforce Planning",
      },
      {
        value: "employee-relations",
        label: "Employee Relations",
      },
      {
        value: "hr-policy",
        label: "HR Policy & Compliance",
      },
    ],
  },
  "certification": {
    title: "Certification",
    description: "Talent & workforce solutions",
    icon: BadgeCheck ,

    services: [
      {
        value: "ios-certifications",
        label: "ISO Certifications",
      },
      {
        value: "trademark-registration",
        label: "Trademark Registration",
      },
      {
        value: "fssai",
        label: "FSSAI",
      },
      {
        value: "isi-certification",
        label: "ISI Certification",
      },
      {
        value: "esg-certification",
        label: "ESG Certification",
      },
      {
        value: "social-&-labour-compliance",
        label: "Social & Labour Compliance",
      },
     
    ],
  },
};

const Enquery = () => {
  const [activeCategory, setActiveCategory] =
    useState("it-consultancy");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    category: "it-consultancy",
    service: "",
    message: "",
  });

  const [search, setSearch] = useState("");
  const [showServiceDropdown, setShowServiceDropdown] =
    useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentCategory = serviceCategories[activeCategory];

  const CategoryIcon = currentCategory?.icon;

  const selectedService = currentCategory?.services?.find(
    (service) => service.value === formData.service
  );

  const filteredServices = useMemo(() => {
    const services = currentCategory?.services || [];

    if (!search.trim()) {
      return services;
    }

    return services.filter((service) =>
      service.label
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [currentCategory, search]);

  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);

    setFormData((prev) => ({
      ...prev,
      category: categoryKey,
      service: "",
    }));

    setSearch("");
    setShowServiceDropdown(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData((prev) => ({
      ...prev,
      service: service.value,
    }));

    setSearch("");
    setShowServiceDropdown(false);
  };

  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      category: "it-consultancy",
      service: "",
      message: "",
    });

    setActiveCategory("it-consultancy");
    setSearch("");
    setShowServiceDropdown(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.service) {
      toast.error("Please select a service.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        `${apiUrl}/contact`,
        formData
      );

      toast.success(
        response?.data?.message ||
          "Your enquiry has been submitted successfully!"
      );

      resetForm();
    } catch (error) {
      console.error("Enquiry submit error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#011810]
        px-3
        py-6
        sm:px-5
        sm:py-10
        lg:px-8
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-[#0a6b4d]/30
          blur-[100px]
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -right-32
          h-72
          w-72
          rounded-full
          bg-[#0a6b4d]/25
          blur-[100px]
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#011810]/80
          blur-[120px]
        "
      />

      {/* GRID PATTERN */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* MAIN CARD */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white
          shadow-[0_0_80px_rgba(0,80,55,0.45)]
          sm:rounded-[28px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* =========================================
              LEFT SIDE
          ========================================= */}
          <div
            className="
              relative
              min-h-[620px]
              w-full
              overflow-hidden
              bg-gradient-to-br
              from-[#011810]
              via-[#06291e]
              to-[#0a3a29]
              px-5
              py-8
              sm:px-8
              sm:py-10
              lg:min-h-[760px]
              lg:px-10
              lg:py-12
            "
          >
            {/* LEFT GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#0a6b4d]/25
                blur-[90px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-20
                -right-20
                h-64
                w-64
                rounded-full
                bg-[#0a6b4d]/20
                blur-[90px]
              "
            />

            {/* GRID */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
            </div>

            <div className="relative z-10">
              {/* BADGE */}
              <div
                className="
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#E1C562]/20
                  bg-white/5
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  backdrop-blur-xl
                  sm:mb-6
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
              >
                <Sparkles
                  size={13}
                  className="text-[#E1C562]"
                />

                Let's Connect
              </div>

              {/* HEADING */}
              <h1
                className="
                  max-w-md
                  text-3xl
                  font-extrabold
                  leading-tight
                  text-white
                  sm:text-4xl
                  lg:text-[40px]
                "
              >
                What are you

                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-[#E1C562]
                    to-[#B89B3E]
                    bg-clip-text
                    text-transparent
                  "
                >
                  looking for?
                </span>
              </h1>

              <p
                className="
                  mt-3
                  max-w-md
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Select a consultancy category and
                choose the service you need.
              </p>

              {/* CATEGORY BUTTONS */}
              <div className="mt-7 flex flex-col gap-3">
                {/* MANAGEMENT */}
                <button
                  type="button"
                  onClick={() =>
                    handleCategoryChange(
                      "management-consultancy"
                    )
                  }
                  className={`
                    flex
                    min-h-[70px]
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-300

                    ${
                      activeCategory ===
                      "management-consultancy"
                        ? "border-[#E1C562]/50 bg-white text-slate-900 shadow-xl"
                        : "border-white/10 bg-white/[0.07] text-white hover:border-white/20 hover:bg-white/[0.12]"
                    }
                  `}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        ${
                          activeCategory ===
                          "management-consultancy"
                            ? "bg-gradient-to-br from-[#E1C562] to-[#B89B3E] text-white"
                            : "bg-[#E1C562]/10 text-[#E1C562]"
                        }
                      `}
                    >
                      <BarChart3 size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold">
                        Management Consultancy
                      </p>

                      <p
                        className={`
                          mt-1 text-[11px]

                          ${
                            activeCategory ===
                            "management-consultancy"
                              ? "text-slate-500"
                              : "text-white/40"
                          }
                        `}
                      >
                        Business strategy & growth
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className={`
                      ml-2
                      shrink-0
                      transition-transform

                      ${
                        activeCategory ===
                        "management-consultancy"
                          ? "translate-x-1 text-[#B89B3E]"
                          : "text-white/30"
                      }
                    `}
                  />
                </button>

                {/* IT */}
                <button
                  type="button"
                  onClick={() =>
                    handleCategoryChange(
                      "it-consultancy"
                    )
                  }
                  className={`
                    flex
                    min-h-[70px]
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-300

                    ${
                      activeCategory === "it-consultancy"
                        ? "border-[#E1C562]/50 bg-white text-slate-900 shadow-xl"
                        : "border-white/10 bg-white/[0.07] text-white hover:border-white/20 hover:bg-white/[0.12]"
                    }
                  `}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        ${
                          activeCategory ===
                          "it-consultancy"
                            ? "bg-gradient-to-br from-[#E1C562] to-[#B89B3E] text-white"
                            : "bg-[#E1C562]/10 text-[#E1C562]"
                        }
                      `}
                    >
                      <Code2 size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold">
                        IT Consultancy
                      </p>

                      <p
                        className={`
                          mt-1 text-[11px]

                          ${
                            activeCategory ===
                            "it-consultancy"
                              ? "text-slate-500"
                              : "text-white/40"
                          }
                        `}
                      >
                        Technology & digital solutions
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className={`
                      ml-2
                      shrink-0
                      transition-transform

                      ${
                        activeCategory === "it-consultancy"
                          ? "translate-x-1 text-[#B89B3E]"
                          : "text-white/30"
                      }
                    `}
                  />
                </button>

                {/* HR */}
                <button
                  type="button"
                  onClick={() =>
                    handleCategoryChange(
                      "hr-consultancy"
                    )
                  }
                  className={`
                    flex
                    min-h-[70px]
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-300

                    ${
                      activeCategory === "hr-consultancy"
                        ? "border-[#E1C562]/50 bg-white text-slate-900 shadow-xl"
                        : "border-white/10 bg-white/[0.07] text-white hover:border-white/20 hover:bg-white/[0.12]"
                    }
                  `}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl

                        ${
                          activeCategory ===
                          "hr-consultancy"
                            ? "bg-gradient-to-br from-[#E1C562] to-[#B89B3E] text-white"
                            : "bg-[#E1C562]/10 text-[#E1C562]"
                        }
                      `}
                    >
                      <Users size={19} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-bold">
                        HR Consultancy
                      </p>

                      <p
                        className={`
                          mt-1 text-[11px]

                          ${
                            activeCategory ===
                            "hr-consultancy"
                              ? "text-slate-500"
                              : "text-white/40"
                          }
                        `}
                      >
                        Talent & workforce solutions
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={17}
                    className={`
                      ml-2
                      shrink-0
                      transition-transform

                      ${
                        activeCategory === "hr-consultancy"
                          ? "translate-x-1 text-[#B89B3E]"
                          : "text-white/30"
                      }
                    `}
                  />
                </button>

                  <button
                                  type="button"
                                  onClick={() =>
                                    handleCategoryChange(
                                      "certification"
                                    )
                                  }
                                  className={`
                                    flex
                                    min-h-[62px]
                                    w-full
                                    shrink-0
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    px-3
                                    py-3
                                    text-left
                                    transition-all
                                    duration-300
                                    sm:min-h-[70px]
                                    sm:rounded-2xl
                                    sm:px-4
                
                                    ${activeCategory ===
                                      "certification"
                                      ? "border-[#E1C562]/50 bg-white text-slate-900 shadow-xl"
                                      : "border-white/10 bg-white/[0.07] text-white hover:border-white/25 hover:bg-white/[0.12]"
                                    }
                                  `}
                                >
                                  <div
                                    className="
                                      flex
                                      min-w-0
                                      items-center
                                      gap-3
                                    "
                                  >
                                    <div
                                      className={`
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                
                                        ${activeCategory ===
                                          "certification"
                                          ? "bg-gradient-to-br from-[#E1C562] to-[#B89B3E] text-white"
                                          : "bg-[#E1C562]/10 text-[#E1C562]"
                                        }
                                      `}
                                    >
                                      <Users size={19} />
                                    </div>
                
                                    <div className="min-w-0">
                                      <p className="text-xs font-bold sm:text-sm">
                                        Certification
                                      </p>
                
                                      <p
                                        className={`
                                          mt-1
                                          text-[9px]
                                          sm:text-[11px]
                
                                          ${activeCategory ===
                                            "certification"
                                            ? "text-slate-500"
                                            : "text-white/40"
                                          }
                                        `}
                                      >
                                        Talent & workforce solutions
                                      </p>
                                    </div>
                                  </div>
                
                                  <ArrowRight
                                    size={17}
                                    className={`
                                      ml-2
                                      shrink-0
                                      transition-transform
                
                                      ${activeCategory ===
                                        "certification"
                                        ? "translate-x-1 text-[#B89B3E]"
                                        : "text-white/30"
                                      }
                                    `}
                                  />
                                </button>
              </div>

              {/* SELECTED CATEGORY */}
              <div
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-4
                  backdrop-blur-sm
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#E1C562]/10
                      text-[#E1C562]
                    "
                  >
                    {CategoryIcon && (
                      <CategoryIcon size={17} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white/40
                      "
                    >
                      Selected Category
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-white">
                      {currentCategory?.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* PRIVACY */}
              <p
                className="
                  mt-6
                  text-[10px]
                  leading-5
                  text-white/30
                "
              >
                Your information is confidential
                and will only be used to respond to
                your enquiry.
              </p>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}
          <div
            className="
              relative
              w-full
              bg-white
              p-5
              sm:p-8
              lg:p-10
            "
          >
            {/* FORM HEADER */}
            <div className="mb-7 sm:mb-8">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#0b684a]
                  sm:text-[11px]
                "
              >
                Enquiry Form
              </span>

              <h2
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                  leading-tight
                  text-slate-900
                  sm:text-3xl
                "
              >
                Let's talk about your project.
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Tell us about your requirement and
                our team will get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* FIRST + LAST NAME */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* FIRST NAME */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    First Name
                  </label>

                  <div className="relative">
                    <User
                      size={16}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="Enter Your First Name"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-10
                        pr-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        focus:border-[#0b684a]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#011810]/10
                      "
                    />
                  </div>
                </div>

                {/* LAST NAME */}
                <div>
                  <label
                    htmlFor="lastname"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Last Name
                  </label>

                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name"
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      px-4
                      py-3.5
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[#0b684a]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#011810]/10
                    "
                  />
                </div>
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={16}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-10
                        pr-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        focus:border-[#0b684a]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#011810]/10
                      "
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-slate-700
                    "
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={16}
                      className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                      "
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter Your Phone"
                      required
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3.5
                        pl-10
                        pr-4
                        text-sm
                        text-slate-800
                        outline-none
                        transition
                        focus:border-[#0b684a]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#011810]/10
                      "
                    />
                  </div>
                </div>
              </div>

              {/* CONSULTANCY */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Consultancy
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[#0b684a]/20
                    bg-[#011810]/5
                    px-4
                    py-3.5
                  "
                >
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#011810]/10
                      text-[#0b684a]
                    "
                  >
                    {CategoryIcon && (
                      <CategoryIcon size={16} />
                    )}
                  </div>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#011810]
                    "
                  >
                    {currentCategory?.title}
                  </span>
                </div>
              </div>

              {/* SERVICE */}
              <div className="relative">
                <label
                  htmlFor="service"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Choose Service
                </label>

                <div className="relative">
                  <Search
                    size={16}
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-slate-400
                    "
                  />

                  <input
                    id="service"
                    type="text"
                    value={
                      showServiceDropdown
                        ? search
                        : selectedService?.label || ""
                    }
                    onChange={(event) => {
                      setSearch(event.target.value);
                      setShowServiceDropdown(true);

                      if (formData.service) {
                        setFormData((prev) => ({
                          ...prev,
                          service: "",
                        }));
                      }
                    }}
                    onFocus={() => {
                      setShowServiceDropdown(true);
                      setSearch("");
                    }}
                    autoComplete="off"
                    placeholder="Select your service"
                    required={!formData.service}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      py-3.5
                      pl-10
                      pr-11
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[#0b684a]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#011810]/10
                    "
                  />

                  <button
                    type="button"
                    onClick={() => {
                      setShowServiceDropdown((prev) => !prev);

                      if (showServiceDropdown) {
                        setSearch("");
                      }
                    }}
                    className="
                      absolute
                      right-3
                      top-1/2
                      flex
                      -translate-y-1/2
                      items-center
                      justify-center
                      text-slate-400
                    "
                    aria-label="Open services"
                  >
                    <ChevronDown
                      size={18}
                      className={`
                        transition-transform
                        duration-200

                        ${
                          showServiceDropdown
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>
                </div>

                {/* SERVICE DROPDOWN */}
                {showServiceDropdown && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      z-50
                      mt-2
                      max-h-64
                      overflow-y-auto
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      p-2
                      shadow-2xl
                    "
                  >
                    {filteredServices.length > 0 ? (
                      filteredServices.map((service) => {
                        const selected =
                          formData.service ===
                          service.value;

                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() =>
                              handleServiceSelect(
                                service
                              )
                            }
                            className={`
                              flex
                              w-full
                              items-center
                              justify-between
                              rounded-xl
                              px-3
                              py-3
                              text-left
                              text-sm
                              transition

                              ${
                                selected
                                  ? "bg-[#011810]/10 font-semibold text-[#0b684a]"
                                  : "text-slate-700 hover:bg-[#011810]/5 hover:text-[#0b684a]"
                              }
                            `}
                          >
                            <span>{service.label}</span>

                            {selected && (
                              <Check
                                size={16}
                                className="text-[#0b684a]"
                              />
                            )}
                          </button>
                        );
                      })
                    ) : (
                      <div className="px-4 py-7 text-center">
                        <p
                          className="
                            text-xs
                            font-semibold
                            text-slate-600
                          "
                        >
                          No service found
                        </p>

                        <p
                          className="
                            mt-1
                            text-[10px]
                            text-slate-400
                          "
                        >
                          Try another keyword.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                  "
                >
                  Message
                </label>

                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="
                      absolute
                      left-3
                      top-4
                      text-slate-400
                    "
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Tell us about your requirement..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-200
                      bg-slate-50
                      py-3
                      pl-10
                      pr-4
                      text-sm
                      text-slate-800
                      outline-none
                      transition
                      focus:border-[#0b684a]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#011810]/10
                    "
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#011810]
                  via-[#06442f]
                  to-[#0b684a]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#011810]/25
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-[#011810]/35
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="
                        h-5
                        w-5
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Submit Enquiry

                    <Send
                      size={16}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>

              <p
                className="
                  text-center
                  text-[10px]
                  leading-4
                  text-slate-400
                "
              >
                By submitting this form, you agree
                to be contacted regarding your
                enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* TOAST */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </main>
  );
};

export default Enquery;
