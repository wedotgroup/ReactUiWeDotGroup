import {
  ArrowUpRight,
  CheckCircle2,
  UsersRound,
  WalletCards,
  UserCog,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";
import { Link } from "react-router-dom";

export default function HrConsaltancy() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const services = [
    {
      title: "Recruitment & Staffing",
      icon: UsersRound,
    },
    {
      title: "Payroll Management",
      icon: WalletCards,
    },
    {
      title: "HR Management",
      icon: UserCog,
    },
    {
      title: "Training & Development",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left Gold Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E1C562]/10 blur-3xl" />

        {/* Right Gold Glow */}
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B89B3E]/10 blur-3xl" />

        {/* Decorative Circle */}
        <div className="absolute right-[7%] top-[10%] h-32 w-32 rounded-full border border-[#E1C562]/15" />

        <div className="absolute right-[9%] top-[13%] h-20 w-20 rounded-full border border-[#E1C562]/10" />

        {/* Decorative Gold Line */}
        <div className="absolute left-0 top-1/2 h-px w-32 bg-gradient-to-r from-transparent to-[#E1C562]/30" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mb-14 text-center lg:mb-16">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E1C562]/30
              bg-[#E1C562]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#B89B3E]
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#E1C562]" />
            HR Consultancy
          </span>
        </div>



        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="relative">

            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[32px]">

              <img
                src="/home/hr.jpg"
                alt="HR Consultancy Team"
                className="
    h-[520px]
    w-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-105
    sm:h-[580px]
  "
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/80 via-[#011810]/10 to-transparent" />

              {/* Gold Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E1C562] transition-all duration-500 group-hover:w-full" />

              {/* Image Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F0D77D]">
                  People • Talent • Growth
                </p>

                <p className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Building people strategies that drive business success.
                </p>

              </div>
            </div>


            <div
              className="
                absolute
                -bottom-7
                -right-4
                hidden
                w-60
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-2xl
                shadow-slate-200/70
                sm:block
                lg:-right-8
              "
            >


              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#E1C562]/15
                    text-[#B89B3E]
                  "
                >
                  <UsersRound size={21} />
                </div>

                <div>
                  <p className="text-xl font-bold text-[#080808]">
                    People First
                  </p>

                  <p className="text-xs text-slate-500">
                    HR-focused solutions
                  </p>
                </div>

              </div>
            </div>

            {/* Decorative Border */}
            <div
              className="
                absolute
                -bottom-4
                -left-4
                -z-10
                h-full
                w-full
                rounded-[32px]
                border
                border-[#E1C562]/25
              "
            />

            {/* Decorative Gold Dot */}
            <div className="absolute -left-6 -top-6 -z-10 h-20 w-20 rounded-full bg-[#E1C562]/10" />
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div>

            {/* Small Label */}
            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-[#E1C562]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B89B3E]">
                Our HR Expertise
              </span>

            </div>

            {/* Heading */}
            <p className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#080808] sm:text-5xl">
              Comprehensive HR Solutions for
              <span className="block text-[#B89B3E]">
                Your Business Success
              </span>
            </p>

            {/* Description */}
            <p className="mt-6 text-base leading-8 text-slate-600">
              At We Dot Group, we specialize in HR consultancy, connecting top talent with leading businesses. Our commitment to delivering high-quality recruitment services helps organizations find the right candidates while ensuring job seekers are matched with opportunities that align with their skills and career goals.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We believe in supporting candidates throughout their job search journey, offering a transparent and supportive experience without charging any fees. Our focus is on creating mutually beneficial partnerships that foster growth for both businesses and professionals.
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#011810]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#E1C562]
                  hover:text-[#080808]
                  hover:shadow-xl
                  hover:shadow-[#E1C562]/20
                "
              >
                Talk to Our HR Experts

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-1
                  "
                />

              </button>

              <div className="flex items-center gap-2 text-sm text-slate-500">

                <CheckCircle2
                  size={17}
                  className="text-[#B89B3E]"
                />
                <Link to="/hr-consultancy">
                  Tailored HR Solutions
                </Link>


              </div>

            </div>

          </div>
        </div>

    

      </div>
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </section>
  );
}