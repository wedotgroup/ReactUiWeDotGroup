import React, { useMemo, useState } from "react";
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

  
  const branches = [
  {
    id: "india",
    country: "India",
    countryCode: "IN",
    office: "India Office",
    shortAddress: "Gurgaon, Haryana",
    address: [
      "101, Spaze Tristar Mall",
      "Sec 92, Gurgaon - 122505",
      "Haryana, India",
    ],
    phone: [
      "+91 00000 00000",
      "+91 00000 00000",
    ],
    email: [
      "info@wedotgroup.com",
      "support@wedotgroup.com",
    ],
    mapQuery:
      "101 Spaze Tristar Mall Sec 92 Gurgaon Haryana India",
  },

  {
    id: "uae",
    country: "United Arab Emirates",
    countryCode: "UAE",
    office: "UAE Offices",
    shortAddress: "Dubai & Ajman, UAE",

    locations: [
      {
        id: "dubai",
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
        email: [
          "info@wedotgroup.com",
          "support@wedotgroup.com",
        ],
        mapQuery:
          "Office 403 Al Owasis Building Port Saeed Deira Dubai UAE",
      },

      {
        id: "ajman",
        office: "UAE Registered Office",
        shortAddress: "Ajman Free Zone, Ajman",
        address: [
          "Number B.C. 1302767",
          "Building Ajman Free Zone",
          "C1 Building, Ajman, UAE",
        ],
        phone: [
          "+971 4 261 9694",
          "+971 58 508 7199",
        ],
        email: [
          "info@wedotgroup.com",
          "support@wedotgroup.com",
        ],
        mapQuery:
          "Building C1 Ajman Free Zone Ajman UAE",
      },
    ],
  },
];

 
  const [selectedBranch, setSelectedBranch] = useState(
    branches[0] || null
  );

 
  const [selectedLocationId, setSelectedLocationId] =
    useState("dubai");


  const selectedOffice = useMemo(() => {
    if (!selectedBranch) return null;

    // India / normal branch
    if (!selectedBranch.locations) {
      return selectedBranch;
    }

    // UAE / nested locations
    return (
      selectedBranch.locations.find(
        (location) => location.id === selectedLocationId
      ) || selectedBranch.locations[0]
    );
  }, [selectedBranch, selectedLocationId]);

  
  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);

    // Default UAE location = Dubai
    if (branch.id === "uae") {
      setSelectedLocationId("dubai");
    }
  };

  // =========================================================
  // UAE LOCATION SELECT HANDLER
  // =========================================================
  const handleLocationSelect = (locationId) => {
    setSelectedLocationId(locationId);
  };

  // =========================================================
  // GOOGLE MAP URL
  // =========================================================
  const getMapUrl = (office) => {
    if (!office?.mapQuery) return "#";

    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      office.mapQuery
    )}`;
  };

  // =========================================================
  // GOOGLE MAP EMBED URL
  // =========================================================
  const getMapEmbedUrl = (office) => {
    if (!office?.mapQuery) return "";

    return `https://www.google.com/maps?q=${encodeURIComponent(
      office.mapQuery
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
                  {branches.length}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Countries
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


        {/* =====================================================
            LOCATIONS
        ===================================================== */}
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
                  directly. Select a country and then choose a
                  specific office location.
                </p>

              </div>

              {/* Branch Count */}
              <div className="hidden rounded-2xl border border-slate-200 bg-[#f8f8f6] px-6 py-5 sm:block">

                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Global Countries
                </p>

                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {branches.length}
                </p>

              </div>

            </div>


            {/* =================================================
                COUNTRY SELECTOR
            ================================================= */}
            {branches.length > 0 ? (
              <>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {branches.map((branch) => {

                    const isSelected =
                      selectedBranch?.id === branch.id;

                    return (
                      <button
                        key={branch.id}
                        type="button"
                        onClick={() =>
                          handleBranchSelect(branch)
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
                          {branch.country}
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

                        {/* Location Count */}
                        {branch.locations && (
                          <p
                            className={`mt-2 text-xs font-medium ${
                              isSelected
                                ? "text-slate-500"
                                : "text-slate-400"
                            }`}
                          >
                            {branch.locations.length} office locations
                          </p>
                        )}

                        {/* Action */}
                        <div
                          className={`mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
                            isSelected
                              ? "text-[#E1C562]"
                              : "text-[#B89B3E]"
                          }`}
                        >
                          View locations

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
                    UAE LOCATION SELECTOR
                ================================================= */}
                {selectedBranch?.locations && (
                  <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8f8f6] p-5 sm:p-6">

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89B3E]">
                          UAE Locations
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          Select an office
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-3">

                        {selectedBranch.locations.map(
                          (location) => {

                            const isLocationSelected =
                              selectedOffice?.id ===
                              location.id;

                            return (
                              <button
                                key={location.id}
                                type="button"
                                onClick={() =>
                                  handleLocationSelect(
                                    location.id
                                  )
                                }
                                aria-pressed={
                                  isLocationSelected
                                }
                                className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                                  isLocationSelected
                                    ? "bg-[#080808] text-[#E1C562] shadow-md"
                                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#E1C562] hover:text-[#B08D1E]"
                                }`}
                              >
                                <MapPin size={16} />

                                {location.office}

                              </button>
                            );
                          }
                        )}

                      </div>

                    </div>

                  </div>
                )}


                {/* =================================================
                    SELECTED LOCATION
                ================================================= */}
                {selectedOffice && (
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
                          {selectedOffice.office}
                        </h3>

                        <div className="mt-3 h-1 w-12 rounded-full bg-[#E1C562]" />


                        {/* Short Address */}
                        {selectedOffice.shortAddress && (
                          <p className="mt-5 text-sm font-medium text-slate-500">
                            {selectedOffice.shortAddress}
                          </p>
                        )}


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

                              {selectedOffice.address?.map(
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
                        {selectedOffice.phone?.length > 0 && (
                          <div className="mt-7">

                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                              Phone
                            </p>

                            <div className="mt-3 space-y-2">

                              {selectedOffice.phone.map(
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
                        {/* Email */}
{selectedOffice.email?.length > 0 && (
  <div className="mt-7">

    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
      Email
    </p>

    <div className="mt-3 space-y-2">

      {selectedOffice.email.map((email, index) => (
        <a
          key={index}
          href={`mailto:${email}`}
          className="flex items-center gap-3 text-sm font-medium text-slate-600 transition hover:text-[#B89B3E]"
        >
          <Mail
            size={17}
            className="shrink-0 text-[#B89B3E]"
          />

          <span className="break-all">
            {email}
          </span>
        </a>
      ))}

    </div>

  </div>
)}



                        {/* Buttons */}
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                          <a
                            href={getMapUrl(selectedOffice)}
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

                          {selectedOffice.email && (
                            <a
                              href={`mailto:${selectedOffice.email}`}
                              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:border-[#E1C562] hover:text-[#B89B3E]"
                            >
                              <Mail size={17} />

                              Contact Office
                            </a>
                          )}

                        </div>

                      </div>


                      <div className="relative min-h-[420px] bg-slate-200 lg:min-h-[620px]">

                        <iframe
                          key={selectedOffice.id}
                          title={`${selectedOffice.office} Google Map`}
                          src={getMapEmbedUrl(selectedOffice)}
                          className="absolute inset-0 h-full w-full border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />

                        {/* Map Overlay */}
                        <div className="pointer-events-none absolute left-5 top-5">

                          <div className="flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">

                            <span className="h-2 w-2 rounded-full bg-[#E1C562] shadow-[0_0_10px_#E1C562]" />

                            {selectedOffice.office}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                )}

              </>
            ) : (

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


       
        <section className="py-8">
          <Enquery />
        </section>


        
        <section className="relative overflow-hidden bg-[#E1C562] px-6 py-20 lg:px-8 mt-9">

  {/* Glow */}
  <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">

    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

      {/* =====================================================
          LEFT CONTENT
      ===================================================== */}
      <div className="max-w-3xl">

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08D1E]">
          Let's Talk
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#080808] sm:text-4xl lg:text-5xl">
          Have a question?
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl leading-7 text-slate-700">
          Our team is ready to help you explore the right
          solution for your business.
        </p>

      </div>


      {/* =====================================================
          RIGHT BUTTONS
      ===================================================== */}
      <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">

        {/* Start Enquiry */}
        <button
          type="button"
          onClick={() => setIsEnquiryOpen(true)}
          className="group cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#080808] px-7 font-semibold text-[#E1C562] shadow-lg transition-all duration-300 hover:bg-[#171717] hover:shadow-xl"
        >
          Start an Enquiry

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>


        {/* Email */}
        <a
          href="mailto:info@wedotgroup.com"
          className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#080808]/20 bg-white/30 px-7 font-semibold text-[#080808] transition-all duration-300 hover:border-[#080808]/40 hover:bg-white/60"
        >
          <Mail
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          Email Our Team
        </a>

      </div>

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
