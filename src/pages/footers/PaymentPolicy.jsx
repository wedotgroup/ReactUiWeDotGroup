function PaymentPolicy() {
  const policyItems = [
    {
      number: "01",
      text: "We provide secure online payment options for our customers.",
    },
    {
      number: "02",
      text: "Website development packages are generally charged as one-time payments, while digital marketing packages are generally billed monthly.",
    },
    {
      number: "03",
      text: "Customers can select the applicable package and proceed through our available secure payment options.",
    },
    {
      number: "04",
      text: "Any additional services, features, or requirements outside the selected package will be communicated and quoted separately before proceeding.",
    },
    {
      number: "05",
      text: "A payment confirmation will be provided after a successful transaction.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#011810]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[#011810]">

        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/payment-policy-hero.jpg')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-[#011810]/80" />

        {/* Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#011810] via-[#011810]/85 to-[#011810]/30" />

        {/* Ambient glow */}
        <div className="absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[130px]" />

        <div className="mx-auto flex min-h-[520px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12">

          <div className="w-full">

            {/* Breadcrumb */}
            <div className="mb-12 flex items-center gap-3 text-sm">
              <span className="text-white/40">
                Home
              </span>

              <span className="h-px w-7 bg-white/20" />

              <span className="text-emerald-300">
                Payment Policy
              </span>
            </div>


            <div className="grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">

              {/* Main Heading */}
              <div>

                <div className="mb-6 flex items-center gap-3">

                  <span className="h-px w-10 bg-emerald-400" />

                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Legal
                  </span>

                </div>


                <h1 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
                  Payment
                  <br />

                  <span className="text-[#B89B3E]">
                    Policy
                  </span>
                </h1>

              </div>


              {/* Hero Description */}
              <div className="border-l border-white/15 pl-6 lg:mb-2">

                <p className="text-sm leading-7 text-white/55">
                  Secure and transparent payment information for our
                  digital services and packages.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

      </section>


      {/* =====================================================
          POLICY CONTENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#fafcfb]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] lg:gap-20">


            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <aside className="mb-12 lg:mb-0">

              <div className="sticky top-24">

                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#011810]/40">
                  Policy
                </p>

                <div className="mt-5 h-px w-12 bg-emerald-500" />

                <p className="mt-5 max-w-[180px] text-sm leading-6 text-gray-500">
                  Payment Policy
                </p>

              </div>

            </aside>

            <article className="max-w-4xl">

              {/* Document Header */}
              <header className="mb-14 border-b border-[#011810]/10 pb-10">

                <div className="mb-5 flex items-center gap-3">

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#011810]">

                    <svg
                      className="h-5 w-5 text-emerald-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M3 10h18"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M7 15h3"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>

                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    We Dot Group
                  </span>

                </div>


                <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#011810] sm:text-4xl">
                  Payment Policy
                </h2>

              </header>


              {/* =================================================
                  POLICY ITEMS
              ================================================= */}
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


                    {/* Text */}
                    <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-[17px] sm:leading-9">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>


              {/* =================================================
                  PAYMENT VISUAL
              ================================================= */}
              <div className="mt-16 overflow-hidden rounded-[28px] bg-[#011810]">

                <div className="relative px-7 py-9 sm:px-10 sm:py-11">

                  {/* Decorative glow */}
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

                  <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <div className="mb-4 flex items-center gap-3">

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">

                          <svg
                            className="h-4 w-4 text-emerald-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              d="M12 3v18M7 7h7.5a2.5 2.5 0 010 5H9.5a2.5 2.5 0 000 5H17"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />
                          </svg>

                        </span>

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                          Payments
                        </span>

                      </div>


                      <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                        Secure payment experience
                      </h3>

                    </div>


                    {/* Decorative cards */}
                    <div className="hidden sm:flex -space-x-3">

                      <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur">
                        <div className="h-5 w-8 rounded bg-white/20" />
                      </div>

                      <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-white/10 bg-emerald-400/10 backdrop-blur">
                        <div className="h-5 w-8 rounded bg-emerald-300/40" />
                      </div>

                      <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur">
                        <div className="h-5 w-8 rounded bg-white/20" />
                      </div>

                    </div>

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

export default PaymentPolicy;

