function RFCPolicy() {
  const policyItems = [
    {
      number: "01",
      text: "We aim to provide reliable and transparent digital services to our customers.",
    },
    {
      number: "02",
      text: "Refund eligibility depends on the service purchased, work completed, and applicable agreed terms.",
    },
    {
      number: "03",
      text: "For website development projects, refunds may not be available once substantial work has commenced or deliverables have been provided.",
    },
    {
      number: "04",
      text: "For monthly digital marketing services, cancellation requests should be submitted before the next billing cycle.",
    },
    {
      number: "05",
      text: "Approved refunds will be processed through the original payment method and may be subject to payment provider processing timelines.",
    },
    {
      number: "06",
      text: "To request a refund or cancellation, please contact us with your order or payment details.",
    },
  ];

  return (
    <main className="bg-white text-[#011810]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[520px] overflow-hidden bg-[#011810]">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/refund-cancellation-hero.jpg')",
          }}
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-[#011810]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#011810] via-[#011810]/80 to-[#011810]/30" />

        {/* Grain / glow */}
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">

          <div className="w-full">

            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm">
              <span className="text-white/40">
                Home
              </span>

              <span className="h-px w-7 bg-white/20" />

              <span className="text-emerald-300">
                Refund & Cancellation
              </span>
            </div>


            <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">

              {/* Main heading */}
              <div>

                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-emerald-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                    Legal
                  </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                  Refund
                  <br />

                  <span className="text-[#B89B3E]">
                    & Cancellation
                  </span>
                </h1>

              </div>


              {/* Hero side text */}
              <div className="border-l border-white/15 pl-6 lg:mb-2">

                <p className="text-sm leading-7 text-white/55">
                  Our refund and cancellation policy is designed to
                  provide clarity and transparency for our customers.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

      </section>


      {/* =====================================================
          POLICY DOCUMENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafcfb]">

        {/* Subtle background decoration */}
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
                  Refund & Cancellation Policy
                </p>

              </div>

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}
            <div className="max-w-4xl">

              {/* Document heading */}
              <div className="mb-14 border-b border-[#011810]/10 pb-10">

                <p className="mb-4 text-sm font-medium text-emerald-700">
                  We Dot Group
                </p>

                <h2 className="text-3xl font-medium tracking-[-0.025em] text-[#011810] sm:text-4xl">
                  Refund & Cancellation Policy
                </h2>

              </div>


              {/* Policy items */}
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
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#011810]/15 bg-white text-xs font-semibold text-[#011810] shadow-sm transition duration-300 group-hover:border-emerald-500 group-hover:bg-[#011810] group-hover:text-emerald-300 sm:h-11 sm:w-11">
                        {item.number}
                      </span>
                    </div>


                    {/* Text */}
                    <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-[17px] sm:leading-9">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>


             
            </div>

          </div>

        </div>

      </section>



    </main>
  );
}

export default RFCPolicy;
