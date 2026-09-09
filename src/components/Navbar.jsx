import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const COLORS = {
  primary: "#E1C562",
  hover: "#D4B653",
  background: "#080808",
  white: "#FFFFFF",
  lightGold: "#F0D77D",
  darkGold: "#B89B3E",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menus with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const megaMenus = {
    management: {
      title: "Management Consultancy",
      "slug":"management-consultancy",
      description:
        "Strategic business solutions for company formation, advisory, accounting, financial management and sustainable growth.",
      icon: BriefcaseBusiness,

      columns: [
        {
          heading: "Free Zones",
          items: [
            
            {
              name: "Dubai Free Zones",
              path: "/management-consultancy/dubai-free-zones",
            },
            {
              name: "Abu Dhabi Free Zones",
              path: "/management-consultancy/abu-dhabi-free-zones",
            },
            {
              name: "Sharjah Free Zones",
              path: "/management-consultancy/sharjah-free-zones",
            },
            {
              name: "Fujairah Free Zones",
              path: "/management-consultancy/fujairah-free-zones",
            },
            {
              name: "Ajman Free Zones",
              path: "/management-consultancy/ajman-free-zones",
            },
            {
              name: "Ras Al Khaimah Free Zones",
              path:
                "/management-consultancy/ras-al-khaimah-free-zones",
            },
            {
              name: "Umm Al Quwain Free Zones",
              path:
                "/management-consultancy/umm-al-quwain-free-zones",
            },
          ],
        },

        {
          heading: "Offshore & Mainland",
          items: [
            {
              name: "All Offshores",
              path: "/management-consultancy/offshores",
            },
            {
              name: "Ras Al Khaimah Offshore",
              path:
                "/management-consultancy/ras-al-khaimah-offshore",
            },
            {
              name: "Ajman Offshore",
              path: "/management-consultancy/ajman-offshore",
            },
            {
              name: "Jebel Ali Offshore",
              path:
                "/management-consultancy/jebel-ali-offshore",
            },
            
           
          ],
        },

        {
          heading: "Advisory",
          items: [
            {
              name: "Feasibility Study",
              path: "/management-consultancy/feasibility-study",
            },
            {
              name: "Due Diligence",
              path: "/management-consultancy/due-diligence",
            },
            {
              name: "Business Plan",
              path: "/management-consultancy/business-plan",
            },
            {
              name: "Business Valuation",
              path: "/management-consultancy/business-valuation",
            },
            {
              name: "Business Consulting",
              path: "/management-consultancy/business-consulting",
            },
            {
              name: "Risk Consulting Services",
              path:
                "/management-consultancy/risk-consulting-services",
            },
          ],
        },

        {
          heading: "Accounting",
          items: [
            {
              name: "Book-Keeping",
              path: "/management-consultancy/book-keeping",
            },
            {
              name: "Financial Management",
              path:
                "/management-consultancy/financial-management",
            },
            {
              name: "Cost Accounting",
              path: "/management-consultancy/cost-accounting",
            },
            {
              name: "Payroll Accounting",
              path:
                "/management-consultancy/payroll-accounting",
            },
            {
              name: "Accounting Advisory",
              path:
                "/management-consultancy/accounting-advisory",
            },
            {
              name: "Cloud Computing",
              path:
                "/management-consultancy/cloud-computing",
            },
          ],
        },
      ],
    },

    it: {
      title: "IT Consultancy",
      "slug":"itconsultancy",
      description:
        "Modern technology solutions that help businesses innovate, scale and stay competitive.",
      icon: Cpu,

      columns: [
        {
          heading: "Web & Software",
          items: [
            {
              name: "Website Design",
              path: "/it-consultancy/website-design",
            },
            {
              name: "Web Development",
              path: "/it-consultancy/web-development",
            },
            {
              name: "Software Development",
              path: "/it-consultancy/software-development",
            },
            {
              name: "Mobile App Development",
              path: "/it-consultancy/mobile-app-development",
            },
            {
              name: "Graphics Design",
              path: "/it-consultancy/graphics-design",
            },
          ],
        },

        {
          heading: "Digital Marketing",
          items: [
            {
              name: "SEO",
              path: "/it-consultancy/seo",
            },
            {
              name: "SMO / SMM",
              path: "/it-consultancy/smo-smm",
            },
            {
              name: "Google Ads (PPC)",
              path: "/it-consultancy/google-ads-ppc",
            },
            {
              name: "Content Writing Services",
              path:
                "/it-consultancy/content-writing-services",
            },
            {
              name: "Bulk Email Marketing",
              path:
                "/it-consultancy/bulk-email-marketing",
            },
            {
              name: "Bulk SMS Marketing",
              path:
                "/it-consultancy/bulk-sms-marketing",
            },
          ],
        },

        {
          heading: "Others",
          items: [
            {
              name: "Domain",
              path: "/it-consultancy/domain",
            },
            {
              name: "Web Hosting / Server",
              path:
                "/it-consultancy/web-hosting-server",
            },
            {
              name: "SSL Certification",
              path:
                "/it-consultancy/ssl-certification",
            },
            {
              name: "WhatsApp API Integration",
              path:
                "/it-consultancy/whatsapp-api-integration",
            },
            {
              name: "Logistic Integration",
              path:
                "/it-consultancy/logistic-integration",
            },
            {
              name: "Payment Gateway Integration",
              path:
                "/it-consultancy/payment-gateway-integration",
            },
          ],
        },
      ],
    },
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const navLinkClass = ({ isActive }) => `
    relative
    flex
    items-center
    whitespace-nowrap
    px-3
    py-2
    text-[14px]
    font-medium
    transition-all
    duration-300
    ease-out
    ${isActive
      ? "text-white"
      : "text-white/70 hover:text-white"
    }
  `;

  return (
    <>
    

      <nav
        className="
    fixed
    left-0
    top-[40px]
    z-[9999]
    w-full
    bg-[#360a0a]
   
  "
      >
        <div
          className="
            mx-auto
            w-full
            bg-[#011810]
            
          "
        >
          <div
            className="
              mx-auto
              max-w-[1440px]
              px-5
              sm:px-8
              lg:px-10
            "
          >
            <div
              className="
                flex
                h-[100px]
                items-center
                justify-between
              "
            >
              {/* LOGO */}

              <Link
                to="/"
                onClick={closeMenu}
                className="flex shrink-0 items-center"
              >
                <img
                  src="/logo/mainlogo.png"
                  alt="WeDot Group"
                  className="
      h-16
      w-auto
      object-contain
      transition-transform
      duration-300
      hover:scale-[1.02]
      sm:h-[68px]
      lg:h-[76px]
    "
                />
              </Link>
              {/* DESKTOP NAV */}

              <div className="hidden items-center lg:flex">
                {/* HOME */}

                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      Home

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          origin-center
                          rounded-full
                          bg-[#E1C562]
                          shadow-[0_0_10px_rgba(225,197,98,0.45)]
                          transition-all
                          duration-300
                          ${isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>

                {/* ABOUT */}

                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      About

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          rounded-full
                          bg-[#E1C562]
                          shadow-[0_0_10px_rgba(225,197,98,0.45)]
                          transition-all
                          duration-300
                          ${isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>

                {/* MANAGEMENT */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setActiveMenu("management")
                  }
                  onMouseLeave={() =>
                    setActiveMenu(null)
                  }
                >
                  <button
                    type="button"
                    className={`
                      group
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-2
                      text-[14px]
                      font-medium
                      transition-all
                      duration-300
                      ${activeMenu === "management"
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      }
                    `}
                  >
                    
                    Management Consultancy

                    <ChevronDown
                      size={15}
                      className={`
                        transition-transform
                        duration-300
                        ${activeMenu === "management"
                          ? "rotate-180 text-[#E1C562]"
                          : ""
                        }
                      `}
                    />
                  </button>

                  <MegaMenu
                    menu={megaMenus.management}
                    isOpen={
                      activeMenu === "management"
                    }
                    onClose={() =>
                      setActiveMenu(null)
                    }
                  />
                </div>

                {/* IT */}

                <div
                  className="relative"
                  onMouseEnter={() =>
                    setActiveMenu("it")
                  }
                  onMouseLeave={() =>
                    setActiveMenu(null)
                  }
                >
                  <button
                    type="button"
                    className={`
                      flex
                      items-center
                      gap-1.5
                      px-3
                      py-2
                      text-[14px]
                      font-medium
                      transition-all
                      duration-300
                      ${activeMenu === "it"
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      }
                    `}
                  >
                    IT Consultancy

                    <ChevronDown
                      size={15}
                      className={`
                        transition-transform
                        duration-300
                        ${activeMenu === "it"
                          ? "rotate-180 text-[#E1C562]"
                          : ""
                        }
                      `}
                    />
                  </button>

                  <MegaMenu
                    menu={megaMenus.it}
                    isOpen={activeMenu === "it"}
                    onClose={() =>
                      setActiveMenu(null)
                    }
                  />
                </div>

                {/* HR */}

                <NavLink
                  to="/hr-consultancy"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      HR Consultancy

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          rounded-full
                          bg-[#E1C562]
                          shadow-[0_0_10px_rgba(225,197,98,0.45)]
                          transition-all
                          duration-300
                          ${isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>

                {/* CONTACT */}
                <NavLink
                  to="/certifications"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  {({ isActive }) => (
                    <>
                      Certifications

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-3
                          right-3
                          h-[2px]
                          rounded-full
                          bg-[#E1C562]
                          shadow-[0_0_10px_rgba(225,197,98,0.45)]
                          transition-all
                          duration-300
                          ${isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>


                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="
                    group
                    ml-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#E1C562]
                    px-5
                    py-2.5
                    text-[14px]
                    font-semibold
                    text-[#080808]
                    shadow-[0_8px_25px_rgba(225,197,98,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#F0D77D]
                    hover:shadow-[0_10px_30px_rgba(225,197,98,0.25)]
                  "
                >
                  Contact Us

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  />
                </Link>
              </div>

              {/* MOBILE BUTTON */}

              <button
                type="button"
                aria-label={
                  isOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={isOpen}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  setActiveMenu(null);
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#E1C562]/40
                  hover:bg-[#E1C562]/10
                  hover:text-[#E1C562]
                  hover:scale-105
                  lg:hidden
                "
              >
                {isOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        className={`
          fixed
          inset-0
          z-[99999]
          lg:hidden
          ${isOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
          }
        `}
      >
        <div
          onClick={closeMenu}
          className={`
            absolute
            inset-0
            bg-black/80
            backdrop-blur-sm
            transition-opacity
            duration-300
            ${isOpen
              ? "opacity-100"
              : "opacity-0"
            }
          `}
        />

        <div
          className={`
            absolute
            left-0
            top-0
            flex
            h-full
            w-[90%]
            max-w-[400px]
            flex-col
            overflow-hidden
            border-r
            border-white/[0.08]
            bg-[#080808]
            shadow-[20px_0_80px_rgba(0,0,0,0.5)]
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            }
          `}
        >
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#E1C562]" />

          {/* MOBILE HEADER */}

          <div
            className="
              flex
              h-[76px]
              shrink-0
              items-center
              justify-between
              border-b
              border-white/[0.08]
              px-5
            "
          >
            <Link
              to="/"
              onClick={closeMenu}
            >
              <img
                src="/logo/mainlogo.png"
                alt="WeDot Group"
                className="h-11 w-auto"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                text-white
                transition
                duration-300
                hover:border-[#E1C562]/40
                hover:bg-[#E1C562]/10
                hover:text-[#E1C562]
                hover:rotate-90
              "
            >
              <X size={21} />
            </button>
          </div>

          {/* MOBILE LINKS */}

          <div
            className="
              mobile-scroll
              flex-1
              overflow-y-auto
              px-4
              py-5
            "
          >
            <div className="space-y-1">
              <MobileLink
                to="/"
                label="Home"
                onClick={closeMenu}
              />

              <MobileLink
                to="/about"
                label="About"
                onClick={closeMenu}
              />

              <MobileDropdown
                title="Management Consultancy"
                icon={BriefcaseBusiness}
                open={
                  activeMenu === "management"
                }
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "management"
                      ? null
                      : "management"
                  )
                }
              />

              <MobileSubMenu
                menu={megaMenus.management}
                closeMenu={closeMenu}
                isOpen={
                  activeMenu === "management"
                }
              />

              <MobileDropdown
                title="IT Consultancy"
                icon={Cpu}
                open={activeMenu === "it"}
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "it"
                      ? null
                      : "it"
                  )
                }
              />

              <MobileSubMenu
                menu={megaMenus.it}
                closeMenu={closeMenu}
                isOpen={
                  activeMenu === "it"
                }
              />

              <MobileLink
                to="/hr-consultancy"
                label="HR Consultancy"
                onClick={closeMenu}
              />

              <div className="my-5 h-px bg-white/[0.08]" />

              <Link
                to="/contact"
                onClick={closeMenu}
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#E1C562]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-[#080808]
                  shadow-[0_10px_30px_rgba(225,197,98,0.12)]
                  transition-all
                  duration-300
                  hover:bg-[#F0D77D]
                  hover:shadow-[0_10px_35px_rgba(225,197,98,0.22)]
                "
              >
                Contact Us

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </Link>
            </div>
          </div>

          {/* MOBILE FOOTER */}

          <div className="shrink-0 px-5 pb-6">
            <div
              className="
                rounded-2xl
                border
                border-[#E1C562]/10
                bg-[#E1C562]/[0.03]
                p-4
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#E1C562]
                    shadow-[0_0_10px_rgba(225,197,98,0.5)]
                  "
                />

                <span className="text-xs text-white/50">
                  Technology • Talent • Strategy
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-white/35">
                Bridging technology, talent and strategy
                for your growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR SPACE */}

      <div className="h-[100px]" />
    </>
  );
};

/* =====================================================
   MEGA MENU
===================================================== */

const MegaMenu = ({
  menu,
  isOpen,
  onClose,
}) => {
  const Icon = menu.icon;
  const columnCount = menu.columns.length;

  const gridClass =
    columnCount === 4
      ? "grid-cols-4"
      : columnCount === 3
        ? "grid-cols-3"
        : columnCount === 2
          ? "grid-cols-2"
          : "grid-cols-1";

  return (
    <div
      className={`
        absolute
        left-1/2
        top-full
        z-[99999]
        w-[min(1160px,calc(100vw-30px))]
        -translate-x-1/2
        pt-4
        transition-all
        duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isOpen
          ? "visible translate-y-0 opacity-100 pointer-events-auto"
          : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }
      `}
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[22px]
          border
          border-white/[0.10]
          bg-[#080808]
          shadow-[0_30px_90px_rgba(0,0,0,0.65)]
        "
      >
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-[2px]
            bg-gradient-to-r
            from-[#B89B3E]
            via-[#F0D77D]
            to-[#B89B3E]
          "
        />

        <div
          className={`
            flex
            items-center
            gap-4
            border-b
            border-white/[0.08]
            bg-gradient-to-r
            from-[#111111]
            via-[#0A0A0A]
            to-[#12100A]
            px-7
            py-5
            transition-all
            duration-500
            ease-out
            ${isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
            }
          `}
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-2xl
              border
              border-[#E1C562]/20
              bg-[#E1C562]/10
              text-[#E1C562]
            "
          >
            <Icon size={21} />
          </div>

          <div className="min-w-0">
            <h3 className="text-[17px] font-bold text-white">
              {menu.title}
            </h3>

            <p className="mt-1 max-w-3xl text-[13px] leading-5 text-white/45">
              {menu.description}
            </p>
          </div>
        </div>

        <div
          className="
            max-h-[calc(100vh-220px)]
            overflow-y-auto
            px-7
            py-6
            mega-scroll
          "
        >
          <div
            className={`
              grid
              ${gridClass}
              gap-x-5
              gap-y-8
            `}
          >
            {menu.columns.map(
              (column, columnIndex) => (
                <div
                  key={column.heading}
                  className={`
                    min-w-0
                    transition-all
                    duration-500
                    ease-out
                    ${isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: isOpen
                      ? `${100 + columnIndex * 70}ms`
                      : "0ms",
                  }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="
                        h-5
                        w-1
                        rounded-full
                        bg-[#E1C562]
                      "
                    />

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#E1C562]
                      "
                    >
                      {column.heading}
                    </p>
                  </div>

                  <div className="space-y-1">
                    {column.items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="
                          group
                          flex
                          min-h-[40px]
                          items-center
                          justify-between
                          gap-2
                          rounded-xl
                          border
                          border-transparent
                          px-3
                          py-2
                          text-[13px]
                          font-medium
                          text-white/55
                          transition-all
                          duration-200
                          hover:translate-x-1
                          hover:border-[#E1C562]/10
                          hover:bg-[#E1C562]/[0.06]
                          hover:text-white
                        "
                      >
                        <span className="leading-5">
                          {item.name}
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="
                            shrink-0
                            -translate-x-1
                            text-[#E1C562]
                            opacity-0
                            transition-all
                            duration-200
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            border-t
            border-white/[0.08]
            bg-white/[0.02]
            px-7
            py-3.5
          "
        >
          <span className="text-[11px] text-white/30">
            Explore our complete range of services
          </span>

          <Link
            to={
              menu.title === "IT Consultancy"
                ? "/itconsultancy"
                : "/management-consultancy"
            }
            onClick={onClose}
            className="
              group
              flex
              shrink-0
              items-center
              gap-1.5
              text-xs
              font-bold
              text-[#E1C562]
              transition-colors
              duration-200
              hover:text-[#F0D77D]
            "
          >
            View All Services

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* =====================================================
   MOBILE LINK
===================================================== */

const MobileLink = ({
  to,
  label,
  onClick,
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `
        block
        rounded-xl
        border
        px-4
        py-3.5
        text-sm
        font-medium
        transition-all
        duration-300
        ${isActive
          ? `
              border-[#E1C562]/15
              bg-[#E1C562]/10
              text-[#E1C562]
            `
          : `
              border-transparent
              text-white/65
              hover:border-white/[0.06]
              hover:bg-white/[0.04]
              hover:text-white
            `
        }
      `}
    >
      {label}
    </NavLink>
  );
};

/* =====================================================
   MOBILE DROPDOWN
===================================================== */

const MobileDropdown = ({
  title,
  icon: Icon,
  open,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        border
        px-4
        py-3.5
        text-sm
        font-medium
        transition-all
        duration-300
        ${open
          ? `
              border-[#E1C562]/15
              bg-[#E1C562]/10
              text-[#E1C562]
            `
          : `
              border-transparent
              text-white/65
              hover:border-white/[0.06]
              hover:bg-white/[0.04]
              hover:text-white
            `
        }
      `}
    >
      <span className="flex items-center gap-3">
        <Icon size={17} />
        {title}
      </span>

      <ChevronDown
        size={17}
        className={`
          transition-transform
          duration-300
          ${open ? "rotate-180" : ""}
        `}
      />
    </button>
  );
};

/* =====================================================
   MOBILE SUB MENU
===================================================== */

const MobileSubMenu = ({
  menu,
  closeMenu,
  isOpen,
}) => {
  return (
    <div
      className={`
        ml-4
        overflow-hidden
        border-l
        border-[#E1C562]/10
        pl-4
        transition-all
        duration-500
        ease-out
        ${isOpen
          ? "max-h-[1400px] opacity-100"
          : "max-h-0 opacity-0"
        }
      `}
    >
      <div className="py-2">
        {menu.columns.map((column) => (
          <div
            key={column.heading}
            className="mb-4"
          >
            <div className="flex items-center gap-2 px-3 py-2">
              <span
                className="
                  h-4
                  w-1
                  rounded-full
                  bg-[#E1C562]
                "
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                {column.heading}
              </p>
            </div>

            {column.items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="
                  group
                  block
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-white/45
                  transition-all
                  duration-200
                  hover:translate-x-1
                  hover:bg-[#E1C562]/[0.05]
                  hover:text-[#E1C562]
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;