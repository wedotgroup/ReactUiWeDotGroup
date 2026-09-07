
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Eye,
  Target,
  Users,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Globe2,
  BriefcaseBusiness,
  MonitorSmartphone,
  UserRoundCheck,
  Camera,
} from "lucide-react";
import { useState } from "react";
import OurPartener from "../sections/OurPartener";
import EnquiryModal from "../components/EnquiryModal";

export default function AboutUs() {
      const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const values = [
    {
      icon: Users,
      title: "Customer Focus",
      text: "We prioritize understanding our clients' needs and deliver solutions designed around their specific requirements.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We use modern technology and forward-thinking approaches to create efficient and future-ready business solutions.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      text: "We deliver dependable solutions across IT, company formation, manpower and surveillance services.",
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      text: "Our presence in the UAE and India allows us to understand local requirements from an international perspective.",
    },
  ];

  const achievements = [
    {
      value: "2009+",
      label: "IT Services Experience",
    },
    {
      value: "20+",
      label: "Years Marketing Experience",
    },
    {
      value: "2",
      label: "Countries Served",
    },
    {
      value: "4+",
      label: "Core Business Areas",
    },
  ];

  // const companyHighlights = [
  //   "IT & Software Solutions",
  //   "Company Setup Services",
  //   "Manpower & Recruitment",
  //   "Surveillance Solutions",
  //   "UAE & India Presence",
  //   "Tailor-made Business Solutions",
  // ];

  const services = [
    {
      icon: MonitorSmartphone,
      title: "IT Solutions",
      text: "Web design, software development, digital marketing, mobile applications and technology solutions.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Company Setup",
      text: "Company registration, legal documentation, business setup and related support for businesses in the UAE.",
    },
    {
      icon: UserRoundCheck,
      title: "Manpower Services",
      text: "Recruitment and manpower solutions connecting businesses with suitable professional talent.",
    },
    {
      icon: Camera,
      title: "Surveillance",
      text: "Sophisticated surveillance systems designed to improve organizational security and monitoring.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#011810] text-white">

     <section
  className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-[#011810] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85')",
  }}
>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#011810]/90" />

        {/* Gold Glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E1C562]/0 blur-[140px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">

          {/* Label */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E1C562]/30 bg-[#E1C562]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F0D77D] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#E1C562] shadow-[0_0_14px_#E1C562]" />
            About Us
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
           About Us
          </h1>

          {/* Description */}
          <p className="mx-auto  max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Providing the best services to customers
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="#company"
              className="rounded-xl bg-[#E1C562] px-7 py-3.5 font-semibold text-[#080808] shadow-lg shadow-[#E1C562]/20 transition duration-300 hover:bg-[#D4B653]"
            >
              Discover Our Story
            </a>

            <button
              type="button"
              onClick={()=>setIsEnquiryOpen(true)}
              className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/10 hover:text-[#F0D77D]"
            >
              Talk To Us
            </button>

          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
      </section>

    
     <section
  id="company"
  className="bg-white px-6 py-20 lg:px-8 lg:py-28"
>
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

    {/* Left Image */}
    <div className="relative">
      <div className="relative overflow-hidden rounded-[32px]">
       <img
  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
  alt="We Dot Group"
  className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[600px]"
/>


        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Experience Badge */}
        <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/70 p-5 shadow-2xl backdrop-blur-md">
          <p className="text-3xl font-bold text-[#E1C562]">
            20+
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            Years of Experience
          </p>
        </div>
      </div>

      {/* Decorative Gold Element */}
      <div className="absolute -bottom-5 -right-5 -z-0 h-32 w-32 rounded-3xl bg-[#E1C562]/20" />
    </div>

    {/* Right Content */}
    <div className="relative z-10">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B89B3E]">
        About Company
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
        Your trusted partner for
        <span className="block text-[#B89B3E]">
          business growth.
        </span>
      </h2>

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
     

      {/* CTA */}
      <div className="mt-8">
        <button
          type="button"
          onClick={()=>setIsEnquiryOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#111111] px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#E1C562] hover:text-[#111111]"
        >
          Talk To Us
          <ArrowUpRight size={18} />
        </button>
      </div>

    </div>

  </div>
</section>





      {/* =========================================================
          MISSION / VISION
      ========================================================= */}
      <section className="bg-[##011810] px-6 py-20 lg:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E1C562]">
              Our Purpose
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Driven by purpose.
              <span className="block text-[#E1C562]">
                Focused on impact.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {/* Mission */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-8 sm:p-10">

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#E1C562]/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562] text-[#080808]">
                    <Target size={27} />
                  </div>

                  <span className="text-5xl font-black text-white/[0.04]">
                    01
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Our Mission
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  Innovate, offer and focus on the customer while delivering
                  exceptional and accurate solutions in IT, company formation,
                  manpower and surveillance, ensuring that business targets
                  are met.
                </p>

              </div>

            </div>


            {/* Vision */}
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] p-8 sm:p-10">

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#B89B3E]/10 blur-3xl" />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562] text-[#080808]">
                    <Eye size={27} />
                  </div>

                  <span className="text-5xl font-black text-white/[0.04]">
                    02
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  Our Vision
                </h3>

                <p className="mt-4 leading-7 text-white/45">
                  To empower industries globally through reliable and quality
                  solutions, becoming the most preferred partner of every
                  reputable corporation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      


      {/* =========================================================
          FOUNDER
      ========================================================= */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">

  <div className="mx-auto max-w-7xl">

    <div className="mb-14 max-w-3xl">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B89B3E]">
        About Founder
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
        Leadership built on
        <span className="text-[#B89B3E]">
          {" "}experience.
        </span>
      </h2>

    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

      {/* Founder Image */}
      <div className="relative">

        <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl border-2 border-[#E1C562]/20" />

        <div className="relative overflow-hidden rounded-[30px] border border-gray-200">

          <div className="flex min-h-[400px] items-center justify-center sm:min-h-[500px]">

            <img
              src="/logo/co.png"
              alt="Rahul Sharma - Founder and CEO of We Dot Group"
              className="h-auto max-h-[500px] w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
            />

          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-6 pt-24 sm:p-7 sm:pt-28">

            <p className="text-2xl font-bold text-white">
              Rahul Sharma
            </p>

            <p className="mt-1 text-sm font-medium text-[#F0D77D]">
              Founder & Chief Executive Officer
            </p>

          </div>

        </div>

      </div>

      {/* Founder Details */}
      <div>

        <p className="text-lg leading-8 text-gray-700">
          Hello, I'm Rahul Sharma, Founder and CEO of We Dot Group.
        </p>

        <p className="mt-5 leading-8 text-gray-500">
          With over 20 years of marketing experience in the corporate
          sector and having successfully operated an IT services company
          since 2009, We Dot Group is proud to offer comprehensive
          solutions for businesses looking to grow and succeed.
        </p>

        <p className="mt-5 leading-8 text-gray-500">
          Rahul Sharma leads the organization's strategic direction with
          a focus on technology, marketing, business growth and
          long-term client relationships.
        </p>

        <div className="relative mt-8 rounded-2xl border border-[#E1C562]/20 bg-[#E1C562]/[0.05] p-7">

          <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#E1C562]" />

          <p className="text-lg font-semibold leading-8 text-gray-800">
            "Dreams and teams work together."
          </p>

        </div>

        <div className="mt-9 grid grid-cols-2 border-t border-gray-200 pt-8 sm:grid-cols-3">

          <div>
            <p className="text-2xl font-bold text-[#B89B3E]">
              20+
            </p>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Years Marketing
            </p>
          </div>

          <div className="border-l border-gray-200 pl-5">
            <p className="text-2xl font-bold text-[#B89B3E]">
              2009+
            </p>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              IT Experience
            </p>
          </div>

          <div className="mt-6 border-l border-gray-200 pl-5 sm:mt-0">
            <p className="text-2xl font-bold text-[#B89B3E]">
              UAE + India
            </p>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Global Presence
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="bg-[#011810] px-6 py-20 lg:px-8 lg:py-28">
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E1C562]">
        Why Choose Us
      </p>

      <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        Experience excellence.
        <span className="block text-[#E1C562]">
          Solutions that drive success.
        </span>
      </h2>

      <p className="mt-6 text-base leading-8 text-white/55 sm:text-lg">
        We combine client-focused service, advanced technology and global
        experience to deliver effective solutions built around your business.
      </p>

    </div>


    {/* Feature Cards */}
    <div className="mt-14 grid gap-5 md:grid-cols-3">

      {/* About Us */}
      <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E1C562]/30 hover:bg-[#E1C562]/[0.05]">

        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E1C562]/5 blur-3xl transition duration-500 group-hover:bg-[#E1C562]/10" />

        <div className="relative">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562]/10 text-[#E1C562] transition duration-300 group-hover:bg-[#E1C562] group-hover:text-[#011810]">
            <Users size={25} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#E1C562]">
            01
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            About Us
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/50">
            Understanding our clients' needs is a prerequisite for us when
            trying to fulfill their requirements, which is why we prioritize
            their requirements.
          </p>

        </div>

      </div>


      {/* Why Work With Us */}
      <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E1C562]/30 hover:bg-[#E1C562]/[0.05]">

        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E1C562]/5 blur-3xl transition duration-500 group-hover:bg-[#E1C562]/10" />

        <div className="relative">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562]/10 text-[#E1C562] transition duration-300 group-hover:bg-[#E1C562] group-hover:text-[#011810]">
            <Lightbulb size={25} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#E1C562]">
            02
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Why Work With Us
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/50">
            Using advanced technology enables us to provide efficient,
            effective, as well as future-ready solutions.
          </p>

        </div>

      </div>


      {/* Global Presence */}
      <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#E1C562]/30 hover:bg-[#E1C562]/[0.05]">

        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E1C562]/5 blur-3xl transition duration-500 group-hover:bg-[#E1C562]/10" />

        <div className="relative">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562]/10 text-[#E1C562] transition duration-300 group-hover:bg-[#E1C562] group-hover:text-[#011810]">
            <Globe2 size={25} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#E1C562]">
            03
          </p>

          <h3 className="mt-2 text-xl font-bold text-white">
            Global Presence
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/50">
            Being operational in the UAE as well as India allows us to cater
            to local needs from an international perspective.
          </p>

        </div>

      </div>

    </div>


    {/* Bottom Statement */}
    <div className="relative mt-12 overflow-hidden rounded-[28px] border border-[#E1C562]/20 bg-[#E1C562]/[0.06] px-7 py-8 sm:px-10 sm:py-9">

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E1C562]/10 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

        <div className="max-w-3xl">

          <p className="text-lg font-semibold leading-8 text-white sm:text-xl">
            We Dot Group FZE transforms the notion of effective business
            solutions.
          </p>

          <p className="mt-2 text-sm leading-7 text-white/50 sm:text-base">
            Partner with us to explore experienced excellence that drives
            success.
          </p>

        </div>

        <button
          type="button"
          onClick={()=>setIsEnquiryOpen(true)}
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#E1C562] px-6 py-3.5 font-semibold text-[#011810] transition duration-300 hover:bg-[#D4B653]"
        >
          Partner With Us
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

    </div>

  </div>
</section>

      <OurPartener />

      <section className="relative overflow-hidden bg-[#E1C562] px-6 py-16 lg:px-8 lg:py-20">

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/20 blur-[100px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row">

          <div className="text-center lg:text-left">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#080808]/60">
              Let's Work Together
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#080808] sm:text-4xl">
              Ready to grow your business?
            </h2>

            <p className="mt-3 max-w-2xl text-[#080808]/65">
              Explore how We Dot Group can support your business with
              technology, company setup, manpower and surveillance solutions.
            </p>

          </div>

          <button
           type="button"
           onClick={()=> setIsEnquiryOpen(true)}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#080808] px-7 py-4 font-bold text-[#F0D77D] shadow-xl transition duration-300 hover:bg-[#151515]"
          >
            Start a Conversation

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

        </div>

      </section>

 <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}

