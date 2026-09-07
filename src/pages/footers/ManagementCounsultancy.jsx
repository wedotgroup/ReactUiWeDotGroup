import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Business Set Up",
    description:
      "Efficient business setup solutions to streamline operations and ensure success.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Business Consulting",
    description:
      "Business consulting helps optimize strategies, improve efficiency, and drive growth.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Cloud Computing",
    description:
      "Cloud computing provides scalable, flexible, and efficient online services.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Risk Consulting Services",
    description:
      "Risk consulting services identify, assess, and mitigate potential business risks.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Feasibility Study",
    description:
      "A feasibility study evaluates project viability, risks, and potential success.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Due Diligence",
    description:
      "Due diligence involves investigating risks, opportunities, and financial stability.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Business Plan",
    description:
      "A business plan outlines goals, strategies, and financial projections.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Business Valuation",
    description:
      "Business valuation determines a company's financial worth and market potential.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Book-Keeping",
    description:
      "Bookkeeping involves recording financial transactions for accurate business accounting.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Financial Management",
    description:
      "Financial management involves planning, controlling, and analyzing financial resources.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Cost Accounting",
    description:
      "Cost accounting tracks, analyzes, and manages costs for business efficiency.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    title: "Payroll Accounting",
    description:
      "Payroll accounting manages employee compensation, taxes, and financial records.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
   {
    title: "Accounting Advisory",
    description:
      "Accounting advisory offers expert guidance on financial strategies and management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
];


function ManagementConsultancy() {
  return (
    <main className="w-full bg-white">
      
      <section className="relative overflow-hidden bg-[#011810]">
        {/* Background shapes */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />

        <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-emerald-200/70">
            <a
              href="/"
              className="transition hover:text-emerald-300"
            >
              Home
            </a>

            <span>/</span>

            <span className="text-emerald-300">
              Management Consultancy
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Management <span className="text-[#B89B3E]">Consultancy</span>
          </h1>

          <div className="mt-6 h-1 w-16 rounded-full bg-emerald-400" />
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <h2 className="text-3xl font-bold leading-tight text-[#011810] sm:text-4xl">
            Expert Consultation Services for Informed Decision-Making
          </h2>

          <div className="mt-7 max-w-4xl">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Transform Your Business with Professional Consultation
            </h3>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Consultant services provide expert advice and tailored solutions
              to help businesses solve problems, improve performance, and
              achieve their goals. Consultants offer specialized knowledge,
              strategic guidance, and practical recommendations to optimize
              processes, enhance efficiency, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="bg-[#f7f8f7]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/60 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#011810]">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[70px] text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <a
                    href={service.link}
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#087f5b] transition hover:text-[#011810]"
                  >
                    Read More..
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}

export default ManagementConsultancy;