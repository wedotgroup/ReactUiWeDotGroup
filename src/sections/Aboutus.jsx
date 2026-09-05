
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const features = [
    "Business-focused solutions",
    "Experienced professionals",
    "Technology-driven approach",
    "Long-term partnerships",
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 sm:pt-24 lg:pt-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E1C562]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#B89B3E]/10 blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,155,62,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(184,155,62,0.5) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative">

            {/* Badge */}
            <div className="mb-7">
              <span
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-[#E1C562]/40
                  bg-[#E1C562]/10
                  px-4 py-2
                  text-[11px] font-bold uppercase
                  tracking-[0.18em]
                  text-[#A88627]
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E1C562]" />
                About Our Company
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-2xl
                text-4xl font-bold
                leading-[1.08]
                tracking-tight
                text-[#080808]
                sm:text-5xl
                lg:text-[60px]
              "
            >
              Bridging Technology,

              <span
                className="
                  mt-2 block
                  bg-gradient-to-r
                  from-[#A88627]
                  via-[#E1C562]
                  to-[#D4B653]
                  bg-clip-text
                  text-transparent
                  p-2
                "
              >
                Talent & Strategy
              </span>
            </h2>

            {/* Divider */}
            <div className="mt-8 flex items-center gap-2">
              <span className="h-[3px] w-14 rounded-full bg-[#E1C562]" />
              <span className="h-[3px] w-4 rounded-full bg-[#B89B3E]" />
            </div>

            {/* Main Description */}
            <p className="mt-8 max-w-xl text-base leading-8 text-[#080808]/70 sm:text-lg sm:leading-8">
              We Dot Group FZE is a UAE based business conglomerate offering
              IT Solutions, Manpower Services, Company Setup Services, and
              Surveillance services in the UAE and India.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#080808]/70 sm:text-lg sm:leading-8">
              Our years of experience and strive for perfection enables us to
              help dynamic businesses with innovative and tailor-made
              solutions best fitting to their needs. From software development
              and digital marketing to company setup, manpower recruitment and
              sophisticated surveillance systems, we deliver solutions built
              around your business goals.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#080808]/70 sm:text-lg sm:leading-8">
              We Dot Group FZE aims to be the go-to partner of expanding,
              innovative, and security-driven businesses in need of operational
              assurance.
            </p>

            {/* Features */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="
                    group flex items-center gap-3
                    rounded-xl
                    border border-black/10
                    bg-white/70
                    px-4 py-3.5
                    shadow-sm
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#E1C562]/60
                    hover:bg-[#E1C562]/10
                    hover:shadow-md
                  "
                >
                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      rounded-lg
                      bg-[#E1C562]/15
                      transition-all duration-300
                      group-hover:bg-[#E1C562]
                    "
                  >
                    <CheckCircle2
                      size={17}
                      className="
                        text-[#B89B3E]
                        transition-colors duration-300
                        group-hover:text-[#080808]
                      "
                    />
                  </div>

                  <span
                    className="
                      text-sm font-semibold
                      text-[#080808]/70
                      transition-colors duration-300
                      group-hover:text-[#080808]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="
                  group inline-flex items-center gap-3
                  rounded-xl
                  bg-[#011810]
                  px-7 py-4
                  text-sm font-bold
                  text-[#F0D77D]
                  shadow-xl shadow-black/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#E1C562]
                  hover:text-[#011810]
                  hover:shadow-2xl
                  hover:shadow-[#E1C562]/20
                "
              >
                Discover More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

            {/* Outer Decorative Frame */}
            <div
              className="
                absolute -inset-4
                rounded-[34px]
                border border-[#E1C562]/30
              "
            />

            {/* Main Card */}
            <div
              className="
                relative overflow-hidden
                rounded-[28px]
                border border-black/10
                bg-[#080808]
                p-2
                shadow-[0_30px_80px_rgba(8,8,8,0.18)]
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
                  alt="About We Dot Group"
                  className="
                    h-[400px]
                    w-full
                    object-cover
                    transition-transform duration-700
                    hover:scale-105
                    sm:h-[480px]
                    lg:h-[540px]
                  "
                />

                {/* Gradient Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#080808]/85
                    via-[#080808]/10
                    to-transparent
                  "
                />

                {/* Gold Border */}
                <div className="absolute inset-0 rounded-[22px] border border-[#E1C562]/20" />
              </div>

              {/* ================= EXPERIENCE CARD ================= */}
              <div
                className="
                  absolute bottom-7 left-7
                  rounded-2xl
                  border border-[#E1C562]/40
                  bg-white/95
                  p-4
                  shadow-2xl
                  backdrop-blur-xl
                  sm:bottom-9 sm:left-9 sm:p-5
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex h-14 w-14 items-center justify-center
                      rounded-xl
                      bg-[#E1C562]
                      text-lg font-black
                      text-[#080808]
                    "
                  >
                    10+
                  </div>

                  <div>
                    <p className="font-bold text-[#080808]">
                      Years of Experience
                    </p>

                    <p className="mt-1 text-xs text-[#080808]/50">
                      Delivering business excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= PROJECT CARD ================= */}
              <div
                className="
                  absolute right-7 top-7
                  rounded-2xl
                  border border-[#E1C562]/30
                  bg-[#080808]/95
                  px-5 py-4
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                  sm:right-9 sm:top-9
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-2 w-2 rounded-full
                      bg-[#E1C562]
                      shadow-[0_0_12px_rgba(225,197,98,0.8)]
                    "
                  />

                  <div>
                    <p className="text-2xl font-bold text-[#F0D77D]">
                      100+
                    </p>

                    <p className="text-[11px] text-white/50">
                      Projects Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Bottom Box */}
            <div
              className="
                absolute -bottom-7 -right-7 -z-10
                h-32 w-32
                rounded-2xl
                border border-[#E1C562]/30
              "
            />

            {/* Decorative Top Circle */}
            <div
              className="
                absolute -left-7 -top-7 -z-10
                h-24 w-24
                rounded-full
                border border-[#B89B3E]/30
              "
            />

            {/* Gold Dot */}
            <div
              className="
                absolute -right-3 top-1/2
                h-5 w-5
                rounded-full
                bg-[#E1C562]
                shadow-[0_0_25px_rgba(225,197,98,0.4)]
              "
            />
          </div>
        </div>
      </div>

      {/* Bottom Gold Line */}
      <div
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#E1C562]/40
          to-transparent
        "
      />
    </section>
  );
};

export default Aboutus;

