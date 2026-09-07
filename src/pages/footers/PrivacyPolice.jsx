function  PrivacyPolice() {
  return (
    <main className="min-h-screen bg-[#011810]">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
<section className="relative isolate min-h-[680px] overflow-hidden lg:min-h-[760px]">

  {/* Hero Background Image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/images/privacy-hero.jpg')",
    }}
  />

  {/* Dark Green Overlay */}
  <div className="absolute inset-0 -z-10 bg-[#011810]/85" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#011810] via-[#011810]/85 to-[#011810]/45" />

  {/* Bottom Gradient */}
  <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#011810]/60 to-transparent" />

  {/* Decorative Glow */}
  <div className="absolute -right-48 -top-48 -z-10 h-[700px] w-[700px] rounded-full bg-emerald-400/[0.08] blur-[120px]" />

  {/* Secondary Glow */}
  <div className="absolute -bottom-48 left-1/3 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-500/[0.05] blur-[120px]" />


  {/* Content */}
  <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-32 sm:px-8 sm:py-36 lg:min-h-[760px] lg:px-12 lg:py-40">

    <div className="max-w-4xl">


      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-4 text-sm text-white/50 sm:mb-12">

        <span className="transition-colors hover:text-white">
          Home
        </span>

        <span className="h-px w-10 bg-white/25" />

        <span className="text-emerald-300 ">
          Privacy Policy
        </span>

      </div>


      {/* Badge */}
      <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 backdrop-blur-xl">

        <span className="relative flex h-2.5 w-2.5">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />

        </span>

        <span className="text-sm font-medium tracking-wide text-white/90">
          Privacy & Security
        </span>

      </div>


      {/* Heading */}
      <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px]">

        Privacy

        <span className="text-[#B89B3E]">
          {" "}Policy
        </span>

      </h1>


      {/* Description */}
      <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 sm:mt-10 sm:text-lg sm:leading-9 lg:text-xl">

        We value your trust and are committed to protecting your
        personal information. Learn how we collect, use, and safeguard
        your information.

      </p>


      {/* Updated Information */}
      <div className="mt-11 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm text-white/45 sm:mt-14">

        {/* Updated */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">

            <svg
              className="h-4 w-4 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
              Last updated
            </p>

            <p className="mt-0.5 text-sm text-white/65">
              2026
            </p>
          </div>

        </div>


        {/* Divider */}
        <div className="hidden h-8 w-px bg-white/10 sm:block" />


        {/* Secure */}
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">

            <svg
              className="h-4 w-4 text-emerald-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 15v2m0-8a3 3 0 00-3 3v1h6v-1a3 3 0 00-3-3zm0 0V8"
              />

              <rect
                width="16"
                height="14"
                x="4"
                y="7"
                rx="2"
                strokeWidth={1.8}
              />

            </svg>

          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
              Protection
            </p>

            <p className="mt-0.5 text-sm text-white/65">
              Secure & Confidential
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>


  {/* Bottom Line */}
  <div className="absolute bottom-0 left-0 right-0">

    <div className="h-px bg-white/10" />

    <div className="h-[2px] w-32 bg-emerald-400" />

  </div>

</section>


      {/* =====================================================
          CONTENT SECTION
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">

            {/* =================================================
                SIDEBAR
            ================================================= */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">

                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#011810]/50">
                  On this page
                </p>

                <nav className="space-y-1 border-l border-gray-200">
                  <a
                    href="#introduction"
                    className="block border-l-2 border-[#011810] bg-[#011810]/5 px-5 py-3 text-sm font-medium text-[#011810]"
                  >
                    Introduction
                  </a>

                  <a
                    href="#information"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Information We Collect
                  </a>

                  <a
                    href="#usage"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    How We Use Information
                  </a>

                  <a
                    href="#payments"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Payment Information
                  </a>

                  <a
                    href="#third-party"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Third Parties
                  </a>

                  <a
                    href="#contact"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Contact Us
                  </a>
                </nav>

              </div>
            </aside>


            {/* =================================================
                POLICY CONTENT
            ================================================= */}
            <article className="max-w-4xl">

              {/* Introduction */}
              <div
                id="introduction"
                className="scroll-mt-28"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  01 — Introduction
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Your privacy matters to us
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  We respect your privacy and are committed to protecting
                  your personal information. This Privacy Policy explains
                  how we collect, use, and protect information when you
                  interact with our services.
                </p>
              </div>


              {/* Divider */}
              <div className="my-12 h-px bg-gray-100" />


              {/* Information */}
              <section
                id="information"
                className="scroll-mt-28"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  02 — Information
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Information we collect
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  We may collect information such as your name, email
                  address, phone number, company details, project
                  requirements, and payment-related information when you
                  contact us or purchase our services.
                </p>
              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* Usage */}
              <section
                id="usage"
                className="scroll-mt-28"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  03 — Usage
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  How we use your information
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  We use this information to process payments, provide
                  our services, communicate with customers, and improve
                  our services.
                </p>
              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* Payments */}
              <section
                id="payments"
                className="scroll-mt-28"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  04 — Payments
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Payment information
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  Payments are processed securely through authorised
                  payment service providers. We do not store complete
                  card details on our servers.
                </p>
              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* Third Party */}
              <section
                id="third-party"
                className="scroll-mt-28"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  05 — Third Parties
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Sharing your information
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  We do not sell customer information to third parties.
                  Information may be shared with service providers when
                  required to process payments or deliver our services.
                </p>
              </section>


              <div className="my-12 h-px bg-gray-100" />


              

            </article>
          </div>
        </div>
      </section>


     

    </main>
  );
};

export default PrivacyPolice;