import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import EnquiryModal from "../components/EnquiryModal";
import Enquery from "../sections/Enquiry";

export default function ContactUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const contactCards = [
    {
      icon: Phone,
      label: "Dubai Office",
      value: "+971 4 261 9694",
      description: "Call our expert team",
      href: "tel:+97142619694",
    },
    {
      icon: Phone,
      label: "UAE Mobile",
      value: "+971 58 508 7199",
      description: "Call our expert team",
      href: "tel:+971585087199",
    },
    {
      icon: Mail,
      label: "Email us",
      value: "info@wedotgroup.com",
      description: "We respond within 24 hours",
      href: "mailto:info@wedotgroup.com",
    },
  ];

  const benefits = [
    {
      title: "Business-focused approach",
      text: "We understand your business before recommending a solution.",
    },
    {
      title: "Experienced professionals",
      text: "Get connected with experienced consultants and specialists.",
    },
    {
      title: "Confidential discussion",
      text: "Your business information is handled professionally and confidentially.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#f8f8f6] text-slate-900">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#080808]">

          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(#E1C562 1px, transparent 1px), linear-gradient(90deg, #E1C562 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Gold Glow */}
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#E1C562]/10 blur-[130px]" />

          <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-[#B89B3E]/10 blur-[120px]" />

          {/* Decorative Circle */}
          <div className="absolute right-[8%] top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full border border-[#E1C562]/10 lg:block" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

            <div className="max-w-4xl">

              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#E1C562]/20 bg-[#E1C562]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F0D77D] backdrop-blur-md">

                <span className="h-2 w-2 rounded-full bg-[#E1C562] shadow-[0_0_14px_#E1C562]" />

                Contact Us
              </div>

              {/* Heading */}
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Let's turn your
                <span className="block text-[#E1C562]">
                  next idea into impact.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Whether you need strategic consulting, technology expertise
                or the right talent, our team is ready to understand your
                goals and build the right path forward.
              </p>

              {/* Hero CTA */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(true)}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#E1C562] px-7 font-semibold text-[#080808] shadow-lg shadow-[#E1C562]/20 transition duration-300 hover:bg-[#D4B653] hover:shadow-[#E1C562]/30"
                >
                  Send an Enquiry

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <a
                  href="#location"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/10 hover:text-[#E1C562]"
                >
                  <MapPin size={18} />
                  Find Our Office
                </a>

              </div>
            </div>

            {/* Hero Stats */}
            <div className="mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">

              {[
                {
                  value: "24h",
                  label: "Average response",
                },
                {
                  value: "100+",
                  label: "Clients supported",
                },
                {
                  value: "10+",
                  label: "Years of expertise",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#E1C562]/30 hover:bg-[#E1C562]/5"
                >
                  <p className="text-2xl font-bold text-[#E1C562]">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================================
            CONTACT CARDS
        ========================================================= */}
        <section className="relative z-10 -mt-10 px-6 lg:px-8">

          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">

            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.href}
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#E1C562]/40 hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1C562]/15 text-[#B89B3E] transition group-hover:bg-[#E1C562] group-hover:text-[#080808]">
                      <Icon size={22} />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="text-slate-300 transition group-hover:text-[#B89B3E]"
                    />

                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 break-words text-xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>

                </a>
              );
            })}

          </div>

        </section>


        {/* =========================================================
            MAIN CONTACT AREA
        ========================================================= */}
        <section className="mt-7">
<Enquery/>

        </section>


        {/* =========================================================
            LOCATION
        ========================================================= */}
        <section
          id="location"
          className="border-t border-slate-200 bg-white px-6 py-20 lg:px-8"
        >

          <div className="mx-auto max-w-7xl">

            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-[#f8f8f6] lg:grid-cols-[0.75fr_1.25fr]">

              {/* =====================================================
                  LOCATION INFO
              ===================================================== */}
              <div className="p-8 lg:p-10">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#080808] text-[#E1C562]">
                  <MapPin size={22} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#B89B3E]">
                  Find Us
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  Our Office Locations
                </h2>

                <p className="mt-4 leading-7 text-slate-500">
                  Connect with our offices in India and the UAE. Our team is
                  ready to discuss your business requirements.
                </p>


                {/* Offices */}
                <div className="mt-8 space-y-6">

                  {/* India Office */}
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      India Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      101, Spaze Tristar Mall,
                      <br />
                      Sec 92, Gurgaon - 122505,
                      <br />
                      Haryana, India
                    </p>
                  </div>


                  {/* Dubai Office */}
                  <div className="border-t border-slate-200 pt-6">

                    <p className="text-sm font-semibold text-slate-900">
                      Dubai Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Office 403, Al Owasis Building,
                      <br />
                      Port Saeed, Deira,
                      <br />
                      Dubai, UAE
                    </p>

                  </div>


                  {/* UAE Registered Office */}
                  <div className="border-t border-slate-200 pt-6">

                    <p className="text-sm font-semibold text-slate-900">
                      UAE Registered Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Number B.C. 1302767,
                      <br />
                      Building Ajman Free Zone,
                      <br />
                      C1 Building, Ajman, UAE
                    </p>

                  </div>


                  {/* Email */}
                  <div className="border-t border-slate-200 pt-6">

                    <p className="text-sm font-semibold text-slate-900">
                      Email
                    </p>

                    <a
                      href="mailto:info@wedotgroup.com"
                      className="mt-1 block break-all text-sm text-slate-500 transition hover:text-[#B89B3E]"
                    >
                      info@wedotgroup.com
                    </a>

                  </div>


                  {/* Phone */}
                  <div>

                    <p className="text-sm font-semibold text-slate-900">
                      Phone
                    </p>

                    <div className="mt-1 space-y-1">

                      <a
                        href="tel:+97142619694"
                        className="block text-sm text-slate-500 transition hover:text-[#B89B3E]"
                      >
                        +971 4 261 9694
                      </a>

                      <a
                        href="tel:+971585087199"
                        className="block text-sm text-slate-500 transition hover:text-[#B89B3E]"
                      >
                        +971 58 508 7199
                      </a>

                    </div>

                  </div>

                </div>


                {/* Directions */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Office+403+Al+Owasis+Building+Port+Saeed+Deira+Dubai+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#080808] px-5 py-3 text-sm font-semibold text-[#E1C562] transition hover:bg-[#E1C562] hover:text-[#080808]"
                >
                  Get Directions

                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

              </div>


              <div className="relative min-h-[450px] overflow-hidden bg-slate-200 lg:min-h-[650px]">

                <iframe
                  title="Dubai Office Location"
                  src="https://www.google.com/maps?q=Office%20403%2C%20Al%20Owasis%20Building%2C%20Port%20Saeed%2C%20Deira%2C%20Dubai%2C%20UAE&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />

              </div>

            </div>

          </div>

        </section>


        
        <section className="relative overflow-hidden bg-[#080808] px-6 py-20 lg:px-8">

          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#E1C562]/10 blur-[100px]" />

          <div className="relative mx-auto max-w-5xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562] text-[#080808] shadow-[0_0_30px_rgba(225,197,98,0.15)]">
              <Mail size={25} />
            </div>

            <h2 className="mt-7 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Have a question?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Our team is ready to help you explore the right solution for
              your business.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <button
                type="button"
                onClick={() => setIsEnquiryOpen(true)}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#E1C562] px-7 py-3.5 font-semibold text-[#080808] shadow-lg shadow-[#E1C562]/20 transition hover:bg-[#D4B653]"
              >
                Start an Enquiry

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>

              <a
                href="mailto:info@wedotgroup.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-[#E1C562]/40 hover:text-[#E1C562]"
              >
                <Mail size={18} />
                Email Our Team
              </a>

            </div>

          </div>

        </section>

      </div>


    
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

    </>
  );
}