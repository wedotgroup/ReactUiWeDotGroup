import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Create stunning, responsive websites that engage and convert visitors effectively.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Development",
    description:
      "Building custom, scalable websites to enhance your business online presence.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Software Development",
    description:
      "Crafting innovative software solutions to streamline your business operations.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mobile App Development",
    description:
      "Designing intuitive mobile apps to enhance user experience and engagement.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Graphics Design",
    description:
      "Creating visually stunning designs that communicate your brand’s unique story.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SEO",
    description:
      "Boost your website's visibility with expert SEO strategies and services.",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SMO/SMM",
    description:
      "Increase brand awareness and engagement with SMO/SMM strategies online.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Google Ads (PPC)",
    description:
      "Maximize ROI with Google Ads PPC campaigns targeting the right audience.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Content Writing Services",
    description:
      "Delivering impactful content that enhances your brand’s online presence.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bulk Email Marketing",
    description:
      "Reach a wide audience with personalized, effective bulk email marketing campaigns.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bulk SMS Marketing",
    description:
      "Send personalized, effective bulk SMS campaigns to reach your audience.",
    image:
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SSL Certification",
    description:
      "Ensure secure connections with trusted SSL certifications for your website.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Hosting /Server",
    description:
      "Reliable web hosting and server solutions for fast, secure online performance.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Domain",
    description:
      "Secure your online presence with our reliable and trusted domain services.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "WhatsApp Api Integration",
    description:
      "Automate communication and enhance support with WhatsApp API integration.",
    image:
      "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Logistic Integration",
    description:
      "Seamless logistics integration enhances efficiency, streamlines operations, and growth.",
    image:
      "https://images.unsplash.com/photo-1586528116493-da8b8e0e2e2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Payment gateway integration enables secure, fast transactions for seamless experiences.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
];

function ItCounsultancyfooter() {
  return (
    <main className="w-full bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
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
              IT Consultancy
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            IT <span className="text-[#B89B3E]">Consultancy</span>
          </h1>

          {/* Accent */}
          <div className="mt-6 h-1 w-16 rounded-full bg-emerald-400" />

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <h2 className="text-3xl font-bold leading-tight text-[#011810] sm:text-4xl">
            Empowering Your Success with Expert IT Services
          </h2>

          <div className="mt-7 max-w-4xl">

            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Empowering Your Business with Seamless IT Solutions
            </h3>

            <p className="mt-5 text-base leading-8 text-gray-600">
              Our IT consultancy services help businesses leverage technology
              to improve efficiency, strengthen their digital presence, and
              achieve sustainable growth. From website design and software
              development to digital marketing, hosting, security, and
              business integrations, we provide reliable solutions tailored
              to your business needs.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="bg-[#f7f8f7]">

        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          {/* Section heading */}
          <div className="mb-10">

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#087f5b]">
              Our Services
            </span>

            <h2 className="mt-2 text-3xl font-bold text-[#011810] sm:text-4xl">
              Technology Solutions for Your Business
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Explore our comprehensive range of IT services designed to
              help your business build, grow, and succeed in the digital world.
            </p>

          </div>


          {/* Service cards */}
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
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Gradient overlay */}
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
                    Read More

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


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#011810]">

        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Need IT Support?
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Let's build the right technology solution for your business.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300">
                Talk to our team about your requirements and discover how
                our IT services can help your business grow.
              </p>
            </div>

            <a
              href="#"
              className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-emerald-400 px-6 py-3.5 text-sm font-bold text-[#011810] transition hover:bg-emerald-300"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default ItCounsultancyfooter;