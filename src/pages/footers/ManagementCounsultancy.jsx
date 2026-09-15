import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Enquiry from "../../sections/Enquiry";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Business Set Up",
    slug: "business-set-up",
    description:
      "Efficient business setup solutions to streamline operations and ensure success.",
    image: "/ManagementCunsaltancy/main/businnes-setup.jpg",
  },
  {
    title: "Business Consulting",
    slug: "business-consulting",
    description:
      "Business consulting helps optimize strategies, improve efficiency, and drive growth.",
    image: "/ManagementCunsaltancy/main/businnes-consultancy.jpg",
  },
  {
    title: "Cloud Computing",
    slug: "cloud-computing",
    description:
      "Cloud computing provides scalable, flexible, and efficient online services.",
    image: "/ManagementCunsaltancy/main/cloud-computing.jpg",
  },
  {
    title: "Risk Consulting Services",
    slug: "risk-consulting-services",
    description:
      "Risk consulting services identify, assess, and mitigate potential business risks.",
    image: "/ManagementCunsaltancy/main/risk-consultancy-services.jpg",
  },
  {
    title: "Feasibility Study",
    slug: "feasibility-study",
    description:
      "A feasibility study evaluates project viability, risks, and potential success.",
    image: "/ManagementCunsaltancy/main/feasibility-study.jpg",
  },
  {
    title: "Due Diligence",
    slug: "due-diligence",
    description:
      "Due diligence involves investigating risks, opportunities, and financial stability.",
    image: "/ManagementCunsaltancy/main/due-diligens.jpg",
  },
  {
    title: "Business Plan",
    slug: "business-plan",
    description:
      "A business plan outlines goals, strategies, and financial projections.",
    image: "/ManagementCunsaltancy/main/businnes-plan.jpg",
  },
  {
    title: "Business Valuation",
    slug: "business-valuation",
    description:
      "Business valuation determines a company's financial worth and market potential.",
    image: "/ManagementCunsaltancy/main/businnes-valuation.jpg",
  },
  {
    title: "Book-Keeping",
    slug: "book-keeping",
    description:
      "Bookkeeping involves recording financial transactions for accurate business accounting.",
    image: "/ManagementCunsaltancy/main/book-keeping.jpg",
  },
  {
    title: "Financial Management",
    slug: "financial-management",
    description:
      "Financial management involves planning, controlling, and analyzing financial resources.",
    image: "/ManagementCunsaltancy/main/finacial.jpg",
  },
  {
    title: "Cost Accounting",
    slug: "cost-accounting",
    description:
      "Cost accounting tracks, analyzes, and manages costs for business efficiency.",
    image: "/ManagementCunsaltancy/main/cost-accounting.jpg",
  },
  {
    title: "Payroll Accounting",
    slug: "payroll-accounting",
    description:
      "Payroll accounting manages employee compensation, taxes, and financial records.",
    image: "/ManagementCunsaltancy/main/payroll-accounting.jpg",
  },
  {
    title: "Accounting Advisory",
    slug: "accounting-advisory",
    description:
      "Accounting advisory offers expert guidance on financial strategies and management.",
    image: "/ManagementCunsaltancy/main/accounting-advisory.jpg",
  },
];

function ManagementConsultancy() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#011810]">
        {/* Decorative background */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[110px]" />
        <div className="absolute -bottom-52 -right-40 h-[600px] w-[600px] rounded-full bg-[#087f5b]/20 blur-[130px]" />

        <div className="absolute right-[15%] top-1/2 hidden h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />
        <div className="absolute right-[17.5%] top-1/2 hidden h-28 w-28 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          {/* Breadcrumb */}
          <div className="mb-7 flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-emerald-200/60 transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="text-white/30">/</span>

            <span className="font-medium text-emerald-300">
              Management Consultancy
            </span>
          </div>

          {/* Hero content */}
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
              <span className="h-px w-8 bg-emerald-400" />
              Professional Solutions
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Management{" "}
              <span className="text-[#B89B3E]">Consultancy</span>
            </h1>

          

            <div className="mt-8 h-1 w-16 rounded-full bg-emerald-400" />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
            {/* Heading */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087f5b]">
                <span className="h-px w-7 bg-[#087f5b]" />
                What We Do
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#011810] sm:text-4xl lg:text-[44px]">
                Transform your business with professional consultation
              </h2>
            </div>

            {/* Content */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-12">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                Consultant services provide expert advice and tailored
                solutions to help businesses solve problems, improve
                performance, and achieve their goals. Consultants offer
                specialized knowledge, strategic guidance, and practical
                recommendations to optimize processes, enhance efficiency, and
                drive growth.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Strategic Business Guidance",
                  "Improved Operational Efficiency",
                  "Risk & Financial Management",
                  "Sustainable Business Growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-[#011810]"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#087f5b]"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative bg-[#f5f7f6]">
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          {/* Section heading */}
          

          {/* Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-[0_8px_30px_rgba(1,24,16,0.045)] transition-all duration-500 hover:-translate-y-2 hover:border-[#087f5b]/20 hover:shadow-[0_24px_55px_rgba(1,24,16,0.12)]"
              >
                {/* Image */}
                <div className="relative h-[230px] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/80 via-[#011810]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                 

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#087f5b] transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold tracking-tight text-[#011810] transition-colors duration-300 group-hover:text-[#087f5b]">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-gray-100" />

                  {/* CTA */}
                  <Link
                    to={`/management-consultancy/${service.slug}`}
                    className="group/link inline-flex w-fit items-center gap-3 text-sm font-bold text-[#087f5b]"
                  >
                    <span className="relative">
                      Explore Service
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#087f5b] transition-all duration-300 group-hover/link:w-full" />
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087f5b]/10 transition-all duration-300 group-hover/link:bg-[#087f5b]">
                      <ArrowRight
                        size={15}
                        className="transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:text-white"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENQUIRY ================= */}
      <Enquiry />
    </main>
  );
}

export default ManagementConsultancy;
