
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Lightbulb,
  Calculator,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

export default function ManagementConsaltancy() {
      const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const services = [
    {
      title: "Business Setup",
      description:
        "Efficient business setup services for smooth start-ups.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
      icon: Building2,
      path: "/management-consultancy/business-setup",
    },

    {
      title: "Business Consulting",
      description:
        "Strategic business consulting to accelerate growth and performance.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      icon: BriefcaseBusiness,
      path: "/management-consultancy/business-consulting",
    },
    {
      title: "Advisory Services",
      description:
        "Guiding Your business Growth with Expert Advice.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
      icon: Lightbulb,
      path: "/management-consultancy/advisory",
    },
    {
      title: "Accounting",
      description:
        "Simplifying Finances with Trusted Accounting Solutions.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
      icon: Calculator,
      path: "/management-consultancy/accounting",
    },
    
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        bg-fixed
        py-20
        sm:py-24
        lg:py-32
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90')",
      }}
    >
      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div className="absolute inset-0 bg-[#011810]/60" />

      {/* Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#011810]/70
          via-[#011810]/75
          to-[#011810]/95
        "
      />

      {/* =====================================================
          GOLD GLOW
      ===================================================== */}

      <div
        className="
          absolute
          -left-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E1C562]/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#B89B3E]/10
          blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E1C562]/25
              bg-[#E1C562]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#F0D77D]
              shadow-[0_10px_30px_rgba(225,197,98,0.06)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#E1C562]
                shadow-[0_0_12px_rgba(225,197,98,0.8)]
              "
            />

            Management Consultancy
          </span>

          {/* Heading */}

       <p
  className="
    mt-6
    text-4xl
    font-bold
    leading-[1.15]
    tracking-tight
    text-white
    sm:text-5xl
    lg:text-6xl
  "
>
  Smart Strategies.

  <span
    className="
      block
      bg-gradient-to-r
      from-[#B89B3E]
      via-[#F0D77D]
      to-[#E1C562]
      bg-clip-text
      text-transparent
      pb-2
    "
  >
    Stronger Businesses.
  </span>
</p>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-white/60
              sm:text-base
            "
          >
            We help businesses make better decisions, improve performance,
            strengthen financial management, and build a strong foundation
            for sustainable growth.
          </p>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        
        <div
          className="
    mt-10
    grid
    gap-4
    sm:grid-cols-2
    lg:grid-cols-4
  "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                
              
                className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#011810]/80
          shadow-[0_15px_40px_rgba(0,0,0,0.22)]
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-[#E1C562]/30
          hover:bg-[#011810]
          hover:shadow-[0_25px_55px_rgba(0,0,0,0.40)]
        "
              >
                {/* =========================
            NUMBER
        ========================== */}
                <div
                  className="
            pointer-events-none
            absolute
            right-4
            top-3
            z-10
            text-4xl
            font-black
            text-[#E1C562]/10
            transition-all
            duration-500
            group-hover:text-[#E1C562]/25
          "
                >
                 
                </div>

                {/* =========================
            IMAGE
        ========================== */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="
              h-full
              w-full
              object-cover
              grayscale-[15%]
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:grayscale-0
            "
                  />

                  {/* Dark Overlay */}
                  <div
                    className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#011810]
              via-[#011810]/25
              to-transparent
            "
                  />

                  {/* Gold Overlay */}
                  <div
                    className="
              absolute
              inset-0
              bg-[#E1C562]/0
              transition-all
              duration-500
              group-hover:bg-[#E1C562]/[0.05]
            "
                  />

                  {/* Icon */}
                  <div
                    className="
              absolute
              bottom-4
              left-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-lg
              border
              border-[#E1C562]/20
              bg-[#E1C562]
              text-[#080808]
              shadow-[0_8px_20px_rgba(225,197,98,0.15)]
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:bg-[#F0D77D]
              group-hover:shadow-[0_10px_25px_rgba(225,197,98,0.3)]
            "
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* =========================
            CONTENT
        ========================== */}
                <div className="px-5 pb-4 pt-4">
                  {/* Title */}
                  <p
                    className="
              text-lg
              font-bold
              leading-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-[#F0D77D]
            "
                  >
                    {service.title}
                  </p>

                  {/* Description */}
                  <p
                    className="
              mt-2
              text-sm
              leading-5
              text-white/50
              transition-colors
              duration-300
              group-hover:text-white/65
            "
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div
                    className="
              mt-4
              h-px
              w-full
              bg-white/[0.08]
            "
                  />

                  {/* Footer */}
                  <div
                    className="
              mt-2.5
              flex
              items-center
              gap-2
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-white/30
            "
                  >
                    <span
                      className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#E1C562]
                shadow-[0_0_8px_rgba(225,197,98,0.5)]
              "
                    />

                    We Dot Group
                  </div>
                </div>

                {/* =========================
            BOTTOM GOLD LINE
        ========================== */}
                <span
                  className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-[#B89B3E]
            via-[#F0D77D]
            to-[#E1C562]
            transition-all
            duration-500
            group-hover:w-full
          "
                />
              </div>
            );
          })}
        </div>
        


        {/* =====================================================
            CTA
        ===================================================== */}

        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-3xl
            border
            border-[#E1C562]/15
            bg-[#011810]/80
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            sm:p-10
          "
        >

          {/* CTA Glow */}

          <div
            className="
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[#E1C562]/10
              blur-[80px]
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-48
              w-48
              rounded-full
              bg-[#B89B3E]/10
              blur-[70px]
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
            "
          >

            {/* CTA Content */}

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E1C562]
                "
              >
                Management Expertise
              </p>

              <p
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Build a stronger foundation for your business.
              </p>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                Get expert guidance, strategic insights, and practical
                solutions tailored to your business goals.
              </p>
            </div>

            {/* CTA Button */}

            <button
            type="button"
              onClick={()=>setIsEnquiryOpen(true)}
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-3
                rounded-xl
                bg-[#E1C562]
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#080808]
                shadow-[0_10px_30px_rgba(225,197,98,0.15)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#F0D77D]
                hover:shadow-[0_15px_40px_rgba(225,197,98,0.25)]
              "
            >
              Get Started

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

