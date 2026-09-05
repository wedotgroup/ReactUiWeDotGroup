import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Play,
} from "lucide-react";
import EnquiryModal from "../components/EnquiryModal";

const HeroSection = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#011810]">

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full scale-[1.03] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source
            src="/videos/banner.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* Main dark + brand overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/55 to-[#011810]/15" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#011810] via-[#011810]/75 to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#011810]/10 blur-[120px]" />

        {/* Left glow */}
        <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#011810]/10 blur-[110px]" />

        {/* Right glow */}
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-[#011810]/10 blur-[110px]" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-28 text-center sm:px-8 lg:px-12">

          {/* Category Badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#E1C562]/25 bg-[#E1C562]/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-2xl shadow-black/30 backdrop-blur-xl sm:text-sm">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E1C562] opacity-70" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E1C562] shadow-lg shadow-[#E1C562]/60" />
            </span>

            <span>Technology</span>

            <span className="text-white/30">•</span>

            <span>Talent</span>

            <span className="text-white/30">•</span>

            <span>Strategy</span>
          </div>

          {/* Small Heading */}
          <div className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-[#E1C562] sm:text-base">

            <Sparkles
              size={17}
              className="text-[#E1C562]"
            />

            <span>YOUR GROWTH. OUR EXPERTISE.</span>
          </div>

          {/* Main Heading */}
          <p className="mx-auto max-w-6xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px]">
            Bridging Technology, Talent,

            <span className="block bg-gradient-to-r from-[#E1C562] via-[#F0D77D] to-white bg-clip-text">
              and Strategy for Your Growth
            </span>
          </p>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 md:text-lg">
            From strategy to execution, we deliver innovative
            technology, consulting, and talent solutions that help
            organizations adapt, compete, and grow with confidence.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">

            {/* TALK TO EXPERT */}
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#E1C562] px-8 py-4 text-sm font-bold text-[#011810] shadow-2xl shadow-[#E1C562]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#E1C562]/30 sm:w-auto sm:px-9 sm:text-base"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#C9AA45] via-[#E1C562] to-[#F2DC91] transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative z-10">
                Talk to an Expert
              </span>

              <ArrowRight
                size={19}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* DISCOVER SERVICES */}
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#E1C562]/35 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E1C562]/70 hover:bg-[#E1C562]/10 sm:w-auto sm:px-9 sm:text-base"
            >
              <Play
                size={17}
                fill="currentColor"
                className="text-[#E1C562] transition-transform duration-300 group-hover:scale-110"
              />

              Discover Our Services
            </button>
          </div>

          {/* Services */}
          <div className="mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs text-white/60 sm:text-sm">

            {/* Strategic Consulting */}
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <CheckCircle2
                size={16}
                className="shrink-0 text-[#E1C562]"
              />

              <span>Strategic Consulting</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            {/* Technology Solutions */}
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <CheckCircle2
                size={16}
                className="shrink-0 text-[#E1C562]"
              />

              <span>Technology Solutions</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            {/* Talent Solutions */}
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <CheckCircle2
                size={16}
                className="shrink-0 text-[#E1C562]"
              />

              <span>Talent Solutions</span>
            </div>

            <div className="hidden h-4 w-px bg-white/20 sm:block" />

            {/* Digital Transformation */}
            <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
              <CheckCircle2
                size={16}
                className="shrink-0 text-[#E1C562]"
              />

              <span>Digital Transformation</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-14 hidden w-full max-w-4xl grid-cols-3 gap-4 md:grid">

            {/* CARD 1 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/[0.06]">

              <div className="mb-2 text-2xl font-bold text-white">
                360°
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                Business Approach
              </p>

              <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#E1C562] to-transparent transition-all duration-300 group-hover:w-20" />
            </div>

            {/* CARD 2 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/[0.06]">

              <div className="mb-2 text-2xl font-bold text-white">
                Smart
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                Technology Solutions
              </p>

              <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#E1C562] to-transparent transition-all duration-300 group-hover:w-20" />
            </div>

            {/* CARD 3 */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/[0.06]">

              <div className="mb-2 text-2xl font-bold text-white">
                Future
              </div>

              <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                Ready Strategies
              </p>

              <div className="mt-4 h-px w-10 bg-gradient-to-r from-[#E1C562] to-transparent transition-all duration-300 group-hover:w-20" />
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex">

          <span className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            Scroll to explore
          </span>

          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-[#E1C562]/30 p-1.5">
            <ChevronDown
              size={14}
              className="animate-bounce text-[#E1C562]"
            />
          </div>
        </div>

        {/* Bottom Gold Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E1C562]/60 to-transparent" />

      </section>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
};

export default HeroSection;