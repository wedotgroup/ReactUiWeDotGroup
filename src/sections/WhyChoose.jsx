import {
  ArrowUpRight,
  CheckCircle2,
  BriefcaseBusiness,
  Cpu,
  Users,
} from "lucide-react";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

const WhyChoose = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const consultancies = [
    {
      icon: BriefcaseBusiness,
      title: "Management Consultancy",
      description:
        "We specialize in helping businesses establish their presence in the UAE, offering a streamlined and hassle-free company registration process.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      path: "/pdfs/We-Dot-Group-IT-Business-Profile.pdf",
      downloadName: "We-Dot-Group-Management-Consultancy.pdf",
    },
    {
      icon: Cpu,
      title: "IT Consultancy",
      description:
        "After successfully registering your company in the UAE, we offer essential IT services that drive business growth. We also provide IT infrastructure support.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
      path: "/pdfs/We-Dot-Group-IT-Business-Profile.pdf",
      downloadName: "We-Dot-Group-IT-Consultancy.pdf",
    },
    {
      icon: Users,
      title: "HR Consultancy",
      description:
        "After setting up your company in the UAE and providing IT services, we offer HR consultancy and staffing solutions to recruit skilled professionals, manage teams, and support business growth.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
      path: "/pdfs/HR-Consultancy-Business-Profile.pdf",
      downloadName: "We-Dot-Group-HR-Consultancy.pdf",
    },
  ];

  return (
    <section
      className="
    relative overflow-hidden bg-cover bg-center bg-fixed
    py-20 lg:py-28
  "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Main Background */}
      <div className="absolute inset-0 bg-[#011810]/90" />

      {/* Top Green Glow */}
      <div
        className="
          absolute -left-40 -top-40
          h-[420px] w-[420px]
          rounded-full
          bg-[#011810]/80
          blur-[120px]
        "
      />

      {/* Bottom Green Glow */}
      <div
        className="
          absolute -bottom-40 -right-40
          h-[420px] w-[420px]
          rounded-full
          bg-[#011810]/80
          blur-[120px]
        "
      />

      {/* Subtle Gold Glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[400px] w-[400px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#E1C562]/[0.025]
          blur-[140px]
        "
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#E1C562]/25
              bg-[#E1C562]/10
              px-4 py-2
              text-sm font-semibold
              text-[#F0D77D]
              backdrop-blur-md
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-[#E1C562]
                shadow-[0_0_12px_rgba(225,197,98,0.8)]
              "
            />

            Why Choose We Dot Group
          </span>

          {/* Heading */}
          <h2
            className="
              mt-6
              text-4xl font-bold
              leading-tight tracking-tight
              text-white
              sm:text-5xl lg:text-6xl
            "
          >
            Expertise That

            <span
              className="
                block
                bg-gradient-to-r
                from-[#B89B3E]
                via-[#F0D77D]
                to-[#E1C562]
                bg-clip-text
                text-transparent
              "
            >
              Drives Your Growth
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto mt-6
              max-w-2xl
              text-base leading-7
              text-white/65
              sm:text-lg
            "
          >
            We bring together business strategy, technology, and people
            expertise to help organizations solve challenges and achieve
            sustainable growth.
          </p>
        </div>

        {/* Consultancy Cards */}
        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {consultancies.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group relative block overflow-hidden
                  rounded-3xl
                  border border-white/[0.10]
                  bg-[#011810]/80
                  backdrop-blur-md
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#E1C562]/35
                  hover:bg-[#011810]
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                "
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="
                      h-full w-full
                      object-cover
                      grayscale-[15%]
                      transition-transform duration-700
                      group-hover:scale-110
                      group-hover:grayscale-0
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-[#011810]
                      via-[#011810]/45
                      to-transparent
                    "
                  />

                  {/* Gold Hover Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-[#E1C562]/0
                      transition-all duration-500
                      group-hover:bg-[#E1C562]/[0.04]
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      absolute bottom-5 left-6
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      border border-[#E1C562]/25
                      bg-[#E1C562]
                      text-[#011810]
                      shadow-[0_10px_30px_rgba(225,197,98,0.20)]
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-[#F0D77D]
                      group-hover:shadow-[0_12px_35px_rgba(225,197,98,0.35)]
                    "
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-white
                      transition-colors duration-300
                      group-hover:text-[#F0D77D]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-7
                      text-white/50
                      transition-colors duration-300
                      group-hover:text-white/65
                    "
                  >
                    {service.description}
                  </p>

                  {/* Explore PDF Download */}
                  <a
                    href={service.path}
                    download={service.downloadName}
                    onClick={(e) => e.stopPropagation()}
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#E1C562]
                      transition-colors duration-300
                      hover:text-[#F0D77D]
                    "
                  >
                    <span>Explore Consultancy</span>

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>
                </div>

                {/* Bottom Gold Line */}
                <span
                  className="
                    absolute bottom-0 left-0
                    h-[2px] w-0
                    bg-gradient-to-r
                    from-[#B89B3E]
                    via-[#F0D77D]
                    to-[#E1C562]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            relative mt-14
            overflow-hidden
            rounded-3xl
            border border-[#E1C562]/15
            bg-[#011810]
            p-8
            backdrop-blur-md
            sm:p-10
          "
        >
          {/* CTA Glow */}
          <div
            className="
              absolute -right-20 -top-20
              h-48 w-48
              rounded-full
              bg-[#E1C562]/10
              blur-[70px]
            "
          />

          <div
            className="
              relative
              flex flex-col
              items-start
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
              
            "
           >
            <div>
              {/* Label */}
              <div className="flex items-center gap-2 text-[#E1C562]">
                <CheckCircle2 size={20} />

                <span className="text-sm font-semibold">
                  Solutions Built Around Your Goals
                </span>
              </div>

              {/* Heading */}
              <h3
                className="
                  mt-3
                  text-2xl
                  font-bold
                  text-white
                  sm:text-3xl
                "
              >
                Ready to transform your business?
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-6
                  text-white/50
                "
              >
                Partner with WeDot Group for strategic management,
                technology expertise, and people-focused HR solutions.
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
                gap-3
                rounded-xl
                bg-[#E1C562]
                px-6 py-3.5
                text-sm
                font-semibold
                text-[#011810]
                shadow-[0_10px_30px_rgba(225,197,98,0.12)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#F0D77D]
                hover:shadow-[0_12px_35px_rgba(225,197,98,0.25)]
              "
            >
              Talk to Our Experts

              <ArrowUpRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#E1C562]/60
          to-transparent
        "
      />
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </section>
    
  );
};

export default WhyChoose;