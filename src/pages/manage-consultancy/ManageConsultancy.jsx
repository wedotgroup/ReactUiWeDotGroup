import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { services } from "../../datas/ManagementCunsaltancyJson";
import Enquiry from "../../sections/Enquiry";

// Online Hero Images
const heroImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
];

export default function ManageConsultancy() {
  const { slug } = useParams();

  const service = services?.[slug];

  if (!service) {
    return <Navigate to={`/management-consultancy/${slug}`} replace />;
  }

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Dynamic data
  const relatedServices = service.relatedService?.services || [];
  const benefits = service.benefits || [];
  const whySection = service.why_web_development;
  const whyItems = whySection?.items || [];

  const hasIntroduction =
    Boolean(service.introduction?.title) ||
    Boolean(service.introduction?.description) ||
    Boolean(service.introduction?.image);

  const hasRelatedServices = relatedServices.length > 0;

  const hasWhySection =
    Boolean(whySection?.title) && whyItems.length > 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[#011810]">

      {/* =====================================================
          HERO
          ONLINE CHANGING IMAGE
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#011810] lg:min-h-[720px]">

        {/* Background Images */}
        <div className="absolute inset-0">

          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="Business consultancy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                index === currentImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#011810]/65" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#011810] via-[#011810]/80 to-[#011810]/20" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#011810] via-transparent to-[#011810]/30" />

        </div>

        {/* Decorative Line */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 lg:left-[8%]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[720px] lg:px-10">

          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/55">

              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>

              <ChevronRight
                size={14}
                className="text-white/25"
              />

              <Link
                to="/management-consultancy"
                className="transition-colors hover:text-white"
              >
                Management Consultancy
              </Link>

              <ChevronRight
                size={14}
                className="text-white/25"
              />

              <span className="text-white/80">
                {service.title}
              </span>

            </div>

            {/* Category */}
            {service.category && (
              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-white" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {service.category}
                </span>

              </div>
            )}

            {/* Title */}
            <h1 className="max-w-3xl text-4xl font-bold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            {/* Description */}
            {(service.paragraph || service.description) && (
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                {service.paragraph || service.description}
              </p>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-bold text-[#011810] transition-all duration-300 hover:bg-white/90"
              >
                Talk To Our Consultant

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {hasIntroduction && (
                <a
                  href="#service-details"
                  className="group inline-flex items-center gap-3 border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  Explore Service

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              )}

            </div>

          </div>
        </div>

        {/* Bottom Meta */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#011810]/60 backdrop-blur-sm">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-5 py-4 sm:px-8 lg:px-10">

            {service.category && (
              <>
                <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                  {service.category}
                </span>

                <span className="h-1 w-1 rounded-full bg-white" />
              </>
            )}

            <span className="text-xs uppercase tracking-[0.15em] text-white/40">
              Strategic Business Support
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICE DETAILS
          WHITE
      ===================================================== */}

      {hasIntroduction && (
        <section
          id="service-details"
          className="bg-white py-20 text-[#011810] sm:py-24 lg:py-28"
        >

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* IMAGE */}
              {service.introduction?.image && (
                <div className="relative">

                  <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-[#011810]/20 lg:block" />

                  <div className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[560px]">

                    <img
                      src={service.introduction.image}
                      alt={service.introduction.title || service.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-6 left-6">

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                        Our Expertise
                      </p>

                      {service.category && (
                        <p className="mt-1 text-lg font-semibold text-white">
                          {service.category}
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              )}

              {/* CONTENT */}
              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-10 bg-[#011810]" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#011810]/70">
                    About The Service
                  </span>

                </div>

                {service.introduction?.title && (
                  <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                    {service.introduction.title}
                  </h2>
                )}

                {service.introduction?.description && (
                  <p className="mt-6 whitespace-pre-line text-[15px] leading-8 text-[#011810]/60">
                    {service.introduction.description}
                  </p>
                )}

                {/* Benefits */}
                {benefits.length > 0 && (
                  <div className="mt-8 border-t border-[#011810]/10">

                    {benefits.map((benefit, index) => (
                      <div
                        key={`${benefit}-${index}`}
                        className="group flex items-center gap-4 border-b border-[#011810]/10 py-4 transition-all duration-300 hover:pl-2"
                      >

                        <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#011810]/20 group-hover:bg-[#011810]">

                          <CheckCircle2
                            size={16}
                            className="text-[#011810] group-hover:text-white"
                          />

                        </div>

                        <span className="flex-1 text-sm font-medium text-[#011810]/75">
                          {benefit}
                        </span>

                        <span className="text-xs text-[#011810]/20">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>
                    ))}

                  </div>
                )}

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-3 bg-[#011810] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#06251D]"
                >
                  Discuss Your Requirement

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          RELATED SERVICES
          GREEN
      ===================================================== */}

      {hasRelatedServices && (
        <section className="bg-[#011810] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">

          <div className="mx-auto max-w-7xl">

            <div className="mb-12">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-white" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Explore More
                </span>

              </div>

              {service.relatedService?.title && (
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  {service.relatedService.title}
                </h2>
              )}

              {service.relatedService?.description && (
                <p className="mt-4 max-w-4xl whitespace-pre-line text-sm leading-7 text-white/45 sm:text-base">
                  {service.relatedService.description}
                </p>
              )}

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {relatedServices.map((item, index) => (

                <Link
                  key={`${item.slug || item.title}-${index}`}
                  to="/contact"
                  className="group overflow-hidden border border-white/10 bg-[#06251D] transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
                >

                  {item.image && (
                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#011810] via-transparent to-transparent" />

                      <div className="absolute bottom-5 left-5">

                        <span className="border border-white/20 bg-[#011810]/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                          {service.category || "Service"}
                        </span>

                      </div>

                    </div>
                  )}

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white/40 transition-all group-hover:border-white group-hover:bg-white group-hover:text-[#011810]">

                        <ArrowUpRight size={16} />

                      </div>

                    </div>

                    {item.description && (
                      <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white/40">
                        {item.description}
                      </p>
                    )}

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">
                        Contact Us
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-white transition-transform group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* =====================================================
          WHY CHOOSE US
          WHITE
      ===================================================== */}

      {hasWhySection && (
        <section className="relative overflow-hidden bg-white py-20 text-[#011810] sm:py-24 lg:py-28">

          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#011810]/5 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#011810]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#011810]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#011810]/70">
                  Why Choose Us
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {whySection.title}
              </h2>

            </div>

            <div className="mt-14 grid gap-px overflow-hidden border border-[#011810]/10 bg-[#011810]/10 sm:grid-cols-2">

              {whyItems.map((item, index) => (

                <div
                  key={`${item.title}-${index}`}
                  className="group bg-white p-7 transition-all duration-500 hover:bg-[#f4f8f6] sm:p-8 lg:p-10"
                >

                  <div className="mb-7 flex items-center justify-between">

                    <span className="text-xs font-bold tracking-[0.15em] text-[#011810]/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-[#011810]/20 text-[#011810] transition-all group-hover:bg-[#011810] group-hover:text-white">

                      <CheckCircle2 size={18} />

                    </div>

                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#011810]/50">
                      {item.description}
                    </p>
                  )}

                  <div className="mt-7 h-px w-10 bg-[#011810]/20 transition-all duration-500 group-hover:w-full group-hover:bg-[#011810]" />

                </div>

              ))}

            </div>

            <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#011810]/10 pt-8 md:flex-row md:items-center">

              <div>
                <p className="text-sm font-semibold">
                  Ready to move forward?
                </p>

                <p className="mt-1 text-sm text-[#011810]/50">
                  Let's discuss your business requirements.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 bg-[#011810] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#06251D]"
              >
                Start a Conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

            </div>

          </div>

        </section>
      )}

      <Enquiry/>
     
    </main>
  );
}
