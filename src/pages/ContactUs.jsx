import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Navigation,
} from "lucide-react";

import EnquiryModal from "../components/EnquiryModal";
import Enquery from "../sections/Enquiry";

export default function ContactUs() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // =========================================================
  // BRANCH DATA
  // =========================================================
  const branches = [
    {
      id: "india-gurgaon",
      country: "India",
      countryCode: "IN",
      office: "India Office",
      shortAddress: "Gurgaon, Haryana",
      address: [
        "101, Spaze Tristar Mall",
        "Sec 92, Gurgaon - 122505",
        "Haryana, India",
      ],
      phone: [],
      email: "info@wedotgroup.com",
      mapQuery:
        "101 Spaze Tristar Mall Sec 92 Gurgaon Haryana India",
    },

    {
      id: "dubai",
      country: "United Arab Emirates",
      countryCode: "UAE",
      office: "Dubai Office",
      shortAddress: "Port Saeed, Deira, Dubai",
      address: [
        "Office 403, Al Owasis Building",
        "Port Saeed, Deira",
        "Dubai, UAE",
      ],
      phone: [
        "+971 4 261 9694",
        "+971 58 508 7199",
      ],
      email: "info@wedotgroup.com",
      mapQuery:
        "Office 403 Al Owasis Building Port Saeed Deira Dubai UAE",
    },

    {
      id: "ajman",
      country: "United Arab Emirates",
      countryCode: "UAE",
      office: "UAE Registered Office",
      shortAddress: "Ajman Free Zone, Ajman",
      address: [
        "Number B.C. 1302767",
        "Building Ajman Free Zone",
        "C1 Building, Ajman, UAE",
      ],
      phone: [
        "+971 58 508 7199",
      ],
      email: "info@wedotgroup.com",
      mapQuery:
        "Building Ajman Free Zone C1 Building Ajman UAE",
    },

    // =======================================================
    // ADD MORE BRANCHES BELOW
    // =======================================================

    // {
    //   id: "mumbai",
    //   country: "India",
    //   countryCode: "IN",
    //   office: "Mumbai Office",
    //   shortAddress: "Mumbai, Maharashtra",
    //   address: [
    //     "Your Office Address",
    //     "Mumbai, Maharashtra",
    //     "India",
    //   ],
    //   phone: ["+91 XXXXX XXXXX"],
    //   email: "info@wedotgroup.com",
    //   mapQuery: "Mumbai Maharashtra India",
    // },
  ];

  const [selectedBranch, setSelectedBranch] = useState(
    branches[0] || null
  );

  // =========================================================
  // GOOGLE MAP URL
  // =========================================================
  const getMapUrl = (branch) => {
    if (!branch) return "";

    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      branch.mapQuery
    )}`;
  };

  const getMapEmbedUrl = (branch) => {
    if (!branch) return "";

    return `https://www.google.com/maps?q=${encodeURIComponent(
      branch.mapQuery
    )}&output=embed`;
  };

  return (
    <>
      <div className="min-h-screen bg-[#f7f7f5] text-slate-900">

        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#080808]">

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                "linear-gradient(#E1C562 1px, transparent 1px), linear-gradient(90deg, #E1C562 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Glows */}
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#E1C562]/10 blur-[130px]" />

          <div className="absolute -bottom-48 left-[30%] h-[500px] w-[500px] rounded-full bg-[#B89B3E]/10 blur-[130px]" />

          {/* Circle */}
          <div className="absolute right-[8%] top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-[#E1C562]/10 lg:block" />

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
                Whether you need strategic consulting, technology
                expertise or the right talent, our team is ready to
                understand your goals and build the right path forward.
              </p>

              {/* Buttons */}
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
                  href="#locations"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#E1C562]/40 hover:bg-[#E1C562]/10 hover:text-[#E1C562]"
                >
                  <MapPin size={18} />
                  Explore Locations
                </a>

              </div>

            </div>

            {/* Hero Stats */}
            <div className="mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md">
                <p className="text-2xl font-bold text-[#E1C562]">
                  {branches.length}+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Office locations
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md">
                <p className="text-2xl font-bold text-[#E1C562]">
                  24h
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Average response
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md">
                <p className="text-2xl font-bold text-[#E1C562]">
                  20+
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Years of expertise
                </p>
              </div>

            </div>

          </div>
        </section>


    
        <section
          id="locations"
          className="border-t border-slate-200 bg-white px-6 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            {/* =================================================
                HEADER
            ================================================= */}
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

              <div className="max-w-3xl">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#080808] text-[#E1C562] shadow-lg">
                  <MapPin size={22} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#B89B3E]">
                  Our Presence
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Find us around the world.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                  Visit one of our offices or connect with our team
                  directly. Select a location to see complete branch
                  information and directions.
                </p>

              </div>

              {/* Branch Count */}
              <div className="hidden rounded-2xl border border-slate-200 bg-[#f8f8f6] px-6 py-5 sm:block">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Global Offices
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {branches.length}
                </p>

              </div>

            </div>


            {/* =================================================
                BRANCH SELECTOR
            ================================================= */}
            {branches.length > 0 ? (
              <>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {branches.map((branch) => {

                    const isSelected =
                      selectedBranch?.id === branch.id;

                    return (
                      <button
                        key={branch.id}
                        type="button"
                        onClick={() =>
                          setSelectedBranch(branch)
                        }
                        aria-pressed={isSelected}
                        className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-[#E1C562] bg-[#080808] shadow-xl shadow-slate-900/10"
                            : "border-slate-200 bg-[#f8f8f6] hover:-translate-y-1 hover:border-[#E1C562]/50 hover:bg-white hover:shadow-lg"
                        }`}
                      >

                        {/* Selected Indicator */}
                        {isSelected && (
                          <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden">
                            <div className="absolute right-[-32px] top-[-32px] h-16 w-16 rotate-45 bg-[#E1C562]" />
                          </div>
                        )}

                        {/* Icon + Country */}
                        <div className="flex items-center justify-between">

                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl transition ${
                              isSelected
                                ? "bg-[#E1C562] text-[#080808]"
                                : "bg-[#E1C562]/15 text-[#B89B3E] group-hover:bg-[#E1C562] group-hover:text-[#080808]"
                            }`}
                          >
                            <MapPin size={19} />
                          </div>

                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              isSelected
                                ? "bg-white/10 text-[#E1C562]"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {branch.countryCode}
                          </span>

                        </div>


                        {/* Name */}
                        <h3
                          className={`mt-6 text-lg font-bold ${
                            isSelected
                              ? "text-white"
                              : "text-slate-900"
                          }`}
                        >
                          {branch.office}
                        </h3>


                        {/* Short Address */}
                        <p
                          className={`mt-2 text-sm ${
                            isSelected
                              ? "text-slate-400"
                              : "text-slate-500"
                          }`}
                        >
                          {branch.shortAddress}
                        </p>


                        {/* Action */}
                        <div
                          className={`mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                            isSelected
                              ? "text-[#E1C562]"
                              : "text-[#B89B3E]"
                          }`}
                        >
                          View details

                          <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </div>

                      </button>
                    );
                  })}

                </div>


                {/* =================================================
                    SELECTED LOCATION
                ================================================= */}
                {selectedBranch && (
                  <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f7f5] shadow-[0_20px_70px_rgba(15,23,42,0.08)]">

                    <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                      {/* =================================================
                          INFORMATION
                      ================================================= */}
                      <div className="p-7 sm:p-9 lg:p-11">

                        {/* Label */}
                        <div className="flex items-center gap-3">

                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#080808] text-[#E1C562]">
                            <MapPin size={21} />
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89B3E]">
                              Selected Office
                            </p>

                            <p className="mt-1 text-xs font-medium text-slate-400">
                              {selectedBranch.country}
                            </p>
                          </div>

                        </div>


                        {/* Office */}
                        <h3 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                          {selectedBranch.office}
                        </h3>

                        <div className="mt-3 h-1 w-12 rounded-full bg-[#E1C562]" />


                        {/* Address */}
                        <div className="mt-8">

                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Office Address
                          </p>

                          <div className="mt-3 flex gap-3">

                            <MapPin
                              size={18}
                              className="mt-1 shrink-0 text-[#B89B3E]"
                            />

                            <div className="text-sm leading-7 text-slate-600">
                              {selectedBranch.address.map(
                                (line, index) => (
                                  <div key={index}>
                                    {line}
                                  </div>
                                )
                              )}
                            </div>

                          </div>

                        </div>


                        {/* Phone */}
                        {selectedBranch.phone?.length > 0 && (
                          <div className="mt-7">

                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                              Phone
                            </p>

                            <div className="mt-3 space-y-2">

                              {selectedBranch.phone.map(
                                (phone, index) => (
                                  <a
                                    key={index}
                                    href={`tel:${phone.replace(
                                      /[^\d+]/g,
                                      ""
                                    )}`}
                                    className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-[#B89B3E]"
                                  >
                                    <Phone
                                      size={17}
                                      className="text-[#B89B3E]"
                                    />

                                    {phone}
                                  </a>
                                )
                              )}

                            </div>

                          </div>
                        )}


                        {/* Email */}
                        <div className="mt-7">

                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Email
                          </p>

                          <a
                            href={`mailto:${selectedBranch.email}`}
                            className="mt-3 flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-[#B89B3E]"
                          >
                            <Mail
                              size={17}
                              className="shrink-0 text-[#B89B3E]"
                            />

                            <span className="break-all">
                              {selectedBranch.email}
                            </span>
                          </a>

                        </div>


                        {/* Buttons */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                          <a
                            href={getMapUrl(selectedBranch)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#080808] px-5 py-3.5 text-sm font-semibold text-[#E1C562] transition duration-300 hover:bg-[#E1C562] hover:text-[#080808]"
                          >
                            <Navigation size={17} />

                            Get Directions

                            <ArrowUpRight
                              size={16}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>

                          <a
                            href={`mailto:${selectedBranch.email}`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-[#E1C562] hover:text-[#B89B3E]"
                          >
                            <Mail size={17} />

                            Contact Office
                          </a>

                        </div>

                      </div>


                      {/* =================================================
                          MAP
                      ================================================= */}
                      <div className="relative min-h-[420px] bg-slate-200 lg:min-h-[620px]">

                        <iframe
                          key={selectedBranch.id}
                          title={`${selectedBranch.office} Google Map`}
                          src={getMapEmbedUrl(selectedBranch)}
                          className="absolute inset-0 h-full w-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />

                        {/* Map Overlay */}
                        <div className="pointer-events-none absolute left-5 top-5">

                          <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">

                            <span className="h-2 w-2 rounded-full bg-[#E1C562] shadow-[0_0_10px_#E1C562]" />

                            {selectedBranch.office}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                )}

              </>
            ) : (
              /* =================================================
                  NO BRANCHES
              ================================================= */
              <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-[#f8f8f6] p-10 text-center">

                <MapPin
                  size={32}
                  className="mx-auto text-slate-400"
                />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  No office locations available
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Please check back soon for our office locations.
                </p>

              </div>
            )}

          </div>
        </section>


        <section className="bg-[#f7f7f5] py-8">
          <Enquery />
        </section> 


        <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">

  {/* Glow */}
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#E1C562]/10 blur-[110px]" />

  <div className="relative mx-auto max-w-5xl text-center">

    {/* Icon */}
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562] text-[#080808] shadow-[0_0_30px_rgba(225,197,98,0.15)]">
      <Mail size={25} />
    </div>

    <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#B08D1E]">
      Let's Talk
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#080808] sm:text-4xl lg:text-5xl">
      Have a question?
    </h2>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
      Our team is ready to help you explore the right
      solution for your business.
    </p>

    {/* Buttons */}
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
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-7 py-3.5 font-semibold text-[#080808] transition hover:border-[#E1C562]/40 hover:bg-[#E1C562]/10 hover:text-[#B08D1E]"
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
