import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { servicesdata } from "../../datas/ItConsultancyJson";
import Enquiry from "../../sections/Enquiry";


// =====================================================
// ONLINE HERO IMAGES
// =====================================================

const heroImages = [
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=85",
];

export default function ITConsultancy() {
  const { slug } = useParams();

  const service = servicesdata?.[slug];

  if (!service) {
    return <Navigate to={`/it-consultancy/${slug}`} replace />;
  }

  // =====================================================
  // HERO IMAGE SLIDER
  // =====================================================

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // =====================================================
  // DATA
  // =====================================================

  const relatedService = service.relatedService?.services || [];

  const whySection = service.why_web_development;

  const whyItems = whySection?.items || [];

  const serviceImage =
    service.introduction?.image || service.image;

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <main className="min-h-screen overflow-hidden bg-[#011810] text-white">

      {/* =====================================================
          SECTION 1 - HERO
          GREEN + ONLINE CHANGING IMAGE
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#011810] lg:min-h-[720px]">

        {/* Background Images */}
        <div className="absolute inset-0">

          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="IT Consultancy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
                index === currentImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          ))}

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#011810]/70" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#011810] via-[#011810]/85 to-[#011810]/25" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#011810] via-transparent to-[#011810]/30" />

        </div>

        {/* Decorative Line */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/10 lg:left-[8%]" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:min-h-[720px] lg:px-10">

          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-xs text-white/50">

              <Link
                to="/"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </Link>

              <ChevronRight
                size={14}
                className="text-white/25"
              />

              <Link
                to="/it-consultancy"
                className="transition-colors duration-300 hover:text-white"
              >
                IT Consultancy
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

            {/* Heading */}
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

              {/* Primary */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-bold text-[#011810] transition-all duration-300 hover:bg-white/90"
              >
                Talk To Our IT Expert

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* Secondary */}
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

            </div>

          </div>

        </div>

        {/* Bottom Meta */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#011810]/65 backdrop-blur-sm">

          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-5 py-4 sm:px-8 lg:px-10">

            <span className="text-xs uppercase tracking-[0.15em] text-white/40">
              Professional IT Solutions
            </span>

            <span className="h-1 w-1 rounded-full bg-white" />

            <span className="text-xs uppercase tracking-[0.15em] text-white/40">
              Digital Business Support
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2 - SERVICE DETAILS
          WHITE
      ===================================================== */}

      <section
        id="service-details"
        className="relative bg-white py-20 text-[#011810] sm:py-24 lg:py-28"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* IMAGE */}
            <div className="relative">

              {/* Decorative Border */}
              <div className="absolute -bottom-5 -left-5 hidden h-full w-full border border-[#011810]/20 lg:block" />

              <div className="relative h-[400px] overflow-hidden sm:h-[500px] lg:h-[560px]">

                <img
                  src={serviceImage}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/75 via-transparent to-transparent" />

                {/* Image Label */}
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


            {/* CONTENT */}
            <div>

              {/* Label */}
              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#011810]" />

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#011810]/70">
                  About The Service
                </span>

              </div>


              {/* Title */}
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                {service.introduction?.title ||
                  "Technology solutions built around your business goals."}
              </h2>


              {/* Description */}
              <p className="mt-6 whitespace-pre-line text-[15px] leading-8 text-[#011810]/60">
                {service.introduction?.description ||
                  service.overview ||
                  service.description}
              </p>


              {/* Benefits */}
              {relatedService.length > 0 && (
                <div className="mt-8 border-t border-[#011810]/10">

                  {relatedService.map((item, index) => (

                    <div
                      key={`${item.title}-${index}`}
                      className="group flex items-center gap-4 border-b border-[#011810]/10 py-4 transition-all duration-300 hover:pl-2"
                    >

                      {/* Icon */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#011810]/20 transition-colors duration-300 group-hover:bg-[#011810]">

                        <CheckCircle2
                          size={16}
                          className="text-[#011810] transition-colors group-hover:text-white"
                        />

                      </div>

                      {/* Text */}
                      <div className="flex-1">

                        <span className="text-sm font-medium text-[#011810]/70">
                          {item.title}
                        </span>

                      </div>

                      {/* Number */}
                      <span className="text-xs font-bold text-[#011810]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  ))}

                </div>
              )}


              {/* CTA */}
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-3 bg-[#011810] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#06251D]"
              >
                Discuss Your Requirement

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3 - RELATED SERVICES
          GREEN
      ===================================================== */}

      <section className="bg-[#011810] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-12">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-white" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                Explore More
              </span>

            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Related IT Services
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/45">
              Explore our other technology and digital services designed
              to support your business requirements.
            </p>

          </div>


          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {relatedService
              .filter((item) => item.slug !== slug)
              .slice(0, 6)
              .map((item) => (

                <Link
                  key={item.slug}
                  to={`/it-consultancy/${item.slug}`}
                  className="group relative block overflow-hidden border border-white/10 bg-[#06251D] transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
                >

                  {/* Card Image */}
                  <div className="relative h-[280px] overflow-hidden">

                    <img
                      src={item.introduction?.image || item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011810] via-[#011810]/20 to-transparent opacity-90" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-white/0 transition-all duration-500 group-hover:bg-white/10">

                      <div className="flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-white text-[#011810] opacity-0 shadow-2xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                        <ArrowUpRight
                          size={22}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />

                      </div>

                    </div>

                  </div>


                  {/* Card Content */}
                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white/75">
                        {item.title}
                      </h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#011810]">

                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />

                      </div>

                    </div>


                    {/* Description */}
                    {(item.introduction?.description ||
                      item.description) && (
                      <p className="mt-4 text-sm leading-7 text-white/40">
                        {item.introduction?.description ||
                          item.description}
                      </p>
                    )}


                    {/* Bottom CTA */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 group-hover:text-white">
                        Explore Service
                      </span>

                      <ArrowRight
                        size={15}
                        className="text-white transition-transform duration-300 group-hover:translate-x-2"
                      />

                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 4 - WHY CHOOSE US
          WHITE
      ===================================================== */}

      {whyItems.length > 0 && (
        <section className="relative overflow-hidden bg-white py-20 text-[#011810] sm:py-24 lg:py-28">

          {/* Decorative Background */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#011810]/5 blur-3xl" />

          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#011810]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

            {/* Header */}
            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <span className="h-px w-10 bg-[#011810]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#011810]/70">
                  Why Choose Us
                </span>

              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {whySection?.title ||
                  "Why do you need IT Consultancy?"}
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#011810]/50">
                We combine technology expertise, customized solutions,
                quality assurance, and ongoing support to help your
                business grow digitally.
              </p>

            </div>


            {/* Why Cards */}
            <div className="mt-14 grid gap-px overflow-hidden border border-[#011810]/10 bg-[#011810]/10 sm:grid-cols-2">

              {whyItems.map((item, index) => (

                <div
                  key={`${item.title}-${index}`}
                  className="group relative bg-white p-7 transition-all duration-500 hover:bg-[#f4f8f6] sm:p-8 lg:p-10"
                >

                  {/* Top */}
                  <div className="mb-7 flex items-center justify-between">

                    <span className="text-xs font-bold tracking-[0.15em] text-[#011810]/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center border border-[#011810]/20 text-[#011810] transition-all duration-300 group-hover:border-[#011810] group-hover:bg-[#011810] group-hover:text-white">

                      <CheckCircle2 size={18} />

                    </div>

                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#011810]/70">
                    {item.title}
                  </h3>


                  {/* Description */}
                  {item.description && (
                    <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#011810]/50">
                      {item.description}
                    </p>
                  )}


                  {/* Bottom Line */}
                  <div className="mt-7 h-px w-10 bg-[#011810]/20 transition-all duration-500 group-hover:w-full group-hover:bg-[#011810]" />

                </div>

              ))}

            </div>


            {/* Bottom CTA */}
            <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#011810]/10 pt-8 md:flex-row md:items-center">

              <div>

                <p className="text-sm font-semibold">
                  Ready to build a better digital solution?
                </p>

                <p className="mt-1 text-sm text-[#011810]/45">
                  Let's turn your technology requirements into a
                  powerful digital experience.
                </p>

              </div>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-3 bg-[#011810] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#06251D]"
              >
                Start a Conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
