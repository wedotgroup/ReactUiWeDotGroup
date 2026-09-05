
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Monitor,
  Search,
  Share2,
  Megaphone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EnquiryModal from "../components/EnquiryModal";

export default function ItConsultancy() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const services = [
    {
      title: "Website Design",
      description:
        "Creating stunning websites for your business growth and success.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
      icon: Monitor,
      slug: "Website-Design",
    },
    {
      title: "Software Development",
      description:
        "Transforming ideas into innovative software solutions.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
      icon: Code2,
      slug: "Software-Development",
    },
    {
      title: "Mobile Development",
      description:
        "Building seamless mobile experiences for your business.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
      icon: Smartphone,
      slug: "Mobile-Development",
    },
    {
      title: "SEO",
      description:
        "Boost your rankings with expert SEO strategies today.",
      image:
        "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=900&q=80",
      icon: Search,
      slug: "SEO",
    },
    {
      title: "SMO",
      description:
        "Grow your brand with targeted SMO strategies today.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
      icon: Share2,
      slug: "SMO",
    },
    {
      title: "Google Ads",
      description:
        "Drive targeted traffic with effective Google Ads campaigns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      icon: Megaphone,
      slug: "Google-Ads",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#E1C562]/10 blur-3xl" />

        <div className="absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-[#F0D77D]/10 blur-3xl" />

        <div className="absolute right-[8%] top-20 h-28 w-28 rounded-full border border-[#E1C562]/15" />

        <div className="absolute right-[10%] top-24 h-16 w-16 rounded-full border border-[#E1C562]/10" />

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E1C562]/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E1C562]/40 bg-[#E1C562]/10 px-4 py-2 text-sm font-semibold text-[#B89B3E]">
            <span className="h-2 w-2 rounded-full bg-[#E1C562] shadow-[0_0_10px_rgba(225,197,98,0.45)]" />
            IT Consultancy
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-[#080808] sm:text-5xl lg:text-6xl">
            Technology That

            <span className="block bg-gradient-to-r from-[#B89B3E] via-[#E1C562] to-[#D4B653] bg-clip-text text-transparent p-3">
              Drives Your Business Forward
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We help organizations leverage technology to improve operations,
            enhance customer experiences, strengthen security, and achieve
            sustainable digital growth.
          </p>
        </div>

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.slug}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#E1C562]/50
                  hover:shadow-lg
                  hover:shadow-[#E1C562]/10
                "
              >
                {/* Number */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-3
                    z-20
                    text-4xl
                    font-black
                    text-white/30
                    drop-shadow-md
                  "
                >
                  
                </div>

                {/* =========================
                    IMAGE
                ========================== */}
                <div className="relative h-48 overflow-hidden sm:h-52">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/10 to-transparent" />

                  {/* Gold Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E1C562] transition-all duration-500 group-hover:w-full" />

                  {/* Icon */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/30
                      bg-white
                      text-[#B89B3E]
                      shadow-lg
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-[#E1C562]
                      group-hover:text-[#080808]
                    "
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* =========================
                    CARD CONTENT
                ========================== */}
                <div className="px-5 pb-4 pt-4">
                  <h3 className="text-lg font-bold text-[#080808] transition-colors duration-300 group-hover:text-[#B89B3E]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    to={`/it-consultancy/${service.slug}`}
                    className="
                      group/btn
                      mt-3
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      font-semibold
                      text-[#B89B3E]
                      transition-colors
                      duration-300
                      hover:text-[#D4B653]
                    "
                  >
                    Learn More

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover/btn:-translate-y-0.5
                        group-hover/btn:translate-x-0.5
                      "
                    />
                  </Link>

                  {/* Divider */}
                  <div className="mt-3 h-px w-full bg-slate-100" />

                  {/* Brand */}
                  <div className="mt-2.5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E1C562]" />
                    We Dot Group
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-2xl
            bg-[#011810]
            px-6
            py-6
            shadow-xl
            sm:px-8
            sm:py-7
          "
        >
          {/* Decoration */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#011810]/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[#011810]/10 blur-3xl" />

          {/* Gold Line */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#B89B3E] via-[#E1C562] to-[#F0D77D]" />

          <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row sm:text-left">
            {/* CTA Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E1C562]">
                IT Solutions
              </p>

              <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">
                Ready to transform your technology?
              </h3>

              <p className="mt-1.5 text-sm leading-5 text-slate-400">
                Let's create a technology strategy built around your business.
              </p>
            </div>

            {/* CTA Button */}
            <button
              type="button"
               onClick={() => setIsEnquiryOpen(true)}
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-xl
                bg-[#E1C562]
                px-5
                py-3
                text-sm
                font-bold
                text-[#080808]
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#D4B653]
                hover:shadow-xl
              "
            >
              Get Started

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-1
                "
              />
            </button>
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

