function ServiceDeliveryPolicy() {
  const policyItems = [
    {
      number: "01",
      text: "We provide digital services including website development, digital marketing, SEO, social media management, and related consultancy services.",
    },
    {
      number: "02",
      text: "Website projects are delivered according to the agreed scope, requirements, and project timeline.",
    },
    {
      number: "03",
      text: "Digital marketing services generally begin after successful payment, confirmation of the selected package, and receipt of the required information and materials from the client.",
    },
    {
      number: "04",
      text: "Project timelines may vary depending on the complexity of the service and client approvals.",
    },
    {
      number: "05",
      text: "Any services or features outside the selected package may be quoted separately.",
    },
    {
      number: "06",
      text: "As our services are digital, no physical shipping or delivery is involved.",
    },
  ];

  return (
    <main className="bg-white text-[#011810]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#011810]">

        {/* Hero Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/service-delivery-hero.jpg')",
          }}
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-[#011810]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#011810] via-[#011810]/85 to-[#011810]/30" />

        {/* Ambient glow */}
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">

          <div className="w-full">

            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm">
              <span className="text-white/40">
                Home
              </span>

              <span className="h-px w-7 bg-white/20" />

              <span className="text-emerald-300">
                Service Delivery Policy
              </span>
            </div>


            <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">

              {/* Heading */}
              <div>

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-emerald-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    Legal
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                  Service
                  <br />

                  <span className="text-[#B89B3E]">
                    Delivery Policy
                  </span>
                </h1>

              </div>


              {/* Hero description */}
              <div className="border-l border-white/15 pl-6 lg:mb-2">

                <p className="text-sm leading-7 text-white/55">
                  Clear and transparent information about how our digital
                  services are delivered.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

      </section>


      {/* =====================================================
          POLICY CONTENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafcfb]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] lg:gap-20">

            {/* =================================================
                LEFT META
            ================================================= */}
            <div className="mb-12 lg:mb-0">

              <div className="sticky top-24">

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#011810]/40">
                  Policy
                </p>

                <div className="mt-5 h-px w-12 bg-emerald-500" />

                <p className="mt-5 max-w-[180px] text-sm leading-6 text-gray-500">
                  Service Delivery Policy
                </p>

              </div>

            </div>


            {/* =================================================
                DOCUMENT
            ================================================= */}
            <article className="max-w-4xl">

              {/* Document heading */}
              <div className="mb-14 border-b border-[#011810]/10 pb-10">

                <p className="mb-4 text-sm font-medium text-emerald-700">
                  We Dot Group
                </p>

                <h2 className="text-3xl font-medium tracking-[-0.025em] text-[#011810] sm:text-4xl">
                  Service Delivery Policy
                </h2>

              </div>


              {/* Policy Items */}
              <div>

                {policyItems.map((item, index) => (
                  <div
                    key={item.number}
                    className={`group grid grid-cols-[52px_1fr] gap-5 py-9 sm:grid-cols-[70px_1fr] sm:gap-8 ${
                      index !== policyItems.length - 1
                        ? "border-b border-[#011810]/10"
                        : ""
                    }`}
                  >

                    {/* Number */}
                    <div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#011810]/15 bg-white text-xs font-semibold text-[#011810] shadow-sm transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-[#011810] group-hover:text-emerald-300 sm:h-11 sm:w-11">
                        {item.number}
                      </span>
                    </div>


                    {/* Content */}
                    <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-[17px] sm:leading-9">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>


              {/* =================================================
                  DIGITAL SERVICES NOTE
              ================================================= */}
              <div className="mt-16 rounded-[24px] border border-[#011810]/10 bg-white p-7 shadow-[0_20px_60px_-40px_rgba(1,24,16,0.3)] sm:p-9">

                <div className="flex gap-5">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#011810]">

                    <svg
                      className="h-5 w-5 text-emerald-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M9.75 17L8 20l4-2 4 2-1.75-3M7 4h10a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                      />
                    </svg>

                  </div>

                  <div>

                    <p className="text-sm font-semibold text-[#011810]">
                      Digital Services
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Our services are delivered digitally, so no physical
                      shipping or delivery is involved.
                    </p>

                  </div>

                </div>

              </div>

            </article>

          </div>

        </div>

      </section>



    </main>
  );
}

export default ServiceDeliveryPolicy;

