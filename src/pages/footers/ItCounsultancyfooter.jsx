import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Enquiry from "../../sections/Enquiry";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Website Design",
    slug: "website-design",
    description:
      "Create stunning, responsive websites that engage and convert visitors effectively.",
    image: "/ItCunsaltancy/website-des.jpg",
  },
  {
    title: "Web Development",
    slug: "web-development",
    description:
      "Building custom, scalable websites to enhance your business online presence.",
    image: "/ItCunsaltancy/wed-dev.jpg",
  },
  {
    title: "Software Development",
    slug: "software-development",
    description:
      "Crafting innovative software solutions to streamline your business operations.",
    image: "/ItCunsaltancy/software-dev.jpg",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Designing intuitive mobile apps to enhance user experience and engagement.",
    image: "/ItCunsaltancy/mobile-app-dev.jpg",
  },
  {
    title: "Graphics Design",
    slug: "graphics-design",
    description:
      "Creating visually stunning designs that communicate your brand’s unique story.",
    image: "/ItCunsaltancy/graphic-des.jpg",
  },
  {
    title: "SEO",
    slug: "seo",
    description:
      "Boost your website's visibility with expert SEO strategies and services.",
    image: "/ItCunsaltancy/seo.jpg",
  },
  {
    title: "SMO/SMM",
    slug: "smo-smm",
    description:
      "Increase brand awareness and engagement with SMO/SMM strategies online.",
    image: "/ItCunsaltancy/smo.jpg",
  },
  {
    title: "Google Ads (PPC)",
    slug: "google-ads-ppc",
    description:
      "Maximize ROI with Google Ads PPC campaigns targeting the right audience.",
    image: "/ItCunsaltancy/google-adds.jpg",
  },
  {
    title: "Content Writing Services",
    slug: "content-writing-services",
    description:
      "Delivering impactful content that enhances your brand’s online presence.",
    image: "/ItCunsaltancy/content-write.jpg",
  },
  {
    title: "Bulk Email Marketing",
    slug: "bulk-email-marketing",
    description:
      "Reach a wide audience with personalized, effective bulk email marketing campaigns.",
    image: "/ItCunsaltancy/bulk-email.jpg",
  },
  {
    title: "Bulk SMS Marketing",
    slug: "bulk-sms-marketing",
    description:
      "Send personalized, effective bulk SMS campaigns to reach your audience.",
    image: "/ItCunsaltancy/bulk-sms.jpg",
  },
  {
    title: "SSL Certification",
    slug: "ssl-certification",
    description:
      "Ensure secure connections with trusted SSL certifications for your website.",
    image: "/ItCunsaltancy/ssl.jpg",
  },
  {
    title: "Web Hosting / Server",
    slug: "web-hosting-server",
    description:
      "Reliable web hosting and server solutions for fast, secure online performance.",
    image: "/ItCunsaltancy/hosting.jpg",
  },
  {
    title: "Domain",
    slug: "domain",
    description:
      "Secure your online presence with our reliable and trusted domain services.",
    image: "/ItCunsaltancy/domain.jpg",
  },
  {
    title: "WhatsApp API Integration",
    slug: "whatsapp-api-integration",
    description:
      "Automate communication and enhance support with WhatsApp API integration.",
    image: "/ItCunsaltancy/whatsapp-api.jpg",
  },
  {
    title: "Logistic Integration",
    slug: "logistic-integration",
    description:
      "Seamless logistics integration enhances efficiency, streamlines operations, and growth.",
    image: "/ItCunsaltancy/logistic.jpg",
  },
  {
    title: "Payment Gateway Integration",
    slug: "payment-gateway-integration",
    description:
      "Payment gateway integration enables secure, fast transactions for seamless experiences.",
    image: "/ItCunsaltancy/payment.jpg",
  },
];

function ItCounsultancyfooter() {
  return (
    <main className="w-full overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#011810]">
        {/* Decorative glow */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[110px]" />

        <div className="absolute -bottom-52 -right-40 h-[600px] w-[600px] rounded-full bg-[#087f5b]/20 blur-[130px]" />

        {/* Decorative rings */}
        <div className="absolute right-[12%] top-1/2 hidden h-56 w-56 -translate-y-1/2 rounded-full border border-white/[0.05] lg:block" />

        <div className="absolute right-[15%] top-1/2 hidden h-36 w-36 -translate-y-1/2 rounded-full border border-white/[0.06] lg:block" />

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
              IT Consultancy
            </span>
          </div>

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
            <span className="h-px w-8 bg-emerald-400" />
            Digital Solutions
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
            IT <span className="text-[#B89B3E]">Consultancy</span>
          </h1>

          

          {/* Accent */}
          <div className="mt-8 h-1 w-16 rounded-full bg-emerald-400" />
        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">

            {/* Heading */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087f5b]">
                <span className="h-px w-7 bg-[#087f5b]" />
                What We Offer
              </span>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#011810] sm:text-4xl lg:text-[44px]">
                Empowering your success with expert IT services
              </h2>
            </div>

            {/* Description */}
            <div className="lg:border-l lg:border-gray-200 lg:pl-12">
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                Our website design and development services focus on creating
                visually appealing, user-friendly, and highly functional
                digital experiences. We combine modern design aesthetics with
                seamless functionality to deliver tailored solutions that
                enhance user experience and support business growth.
              </p>

              {/* Benefits */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Modern Digital Solutions",
                  "Responsive & Scalable Technology",
                  "Performance-Focused Development",
                  "Business Growth & Visibility",
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


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="relative bg-[#f5f7f6]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">

        


          {/* Service cards */}
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

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#011810]/80 via-[#011810]/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                 

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#087f5b] transition-all duration-500 group-hover:w-full" />

                </div>


                {/* Content */}
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
                    to={`/it-consultancy/${service.slug}`}
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


      {/* =====================================================
          ENQUIRY
      ====================================================== */}
      <Enquiry />

    </main>
  );
}

export default ItCounsultancyfooter;
