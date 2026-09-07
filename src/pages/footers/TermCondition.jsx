function TermCondition() {
  return (
    <main className="min-h-screen bg-[#011810]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/terms-hero.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#011810]/90" />

        {/* Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#011810] via-[#011810]/90 to-[#011810]/50" />

        {/* Decorative Glow */}
        <div className="absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <div className="mb-7 flex items-center gap-3 text-sm text-white/60">
              <span>Home</span>

              <span className="h-px w-8 bg-white/30" />

              <span className="text-emerald-300">
                Terms & Conditions
              </span>
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm font-medium text-white/90">
                Legal Information
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Terms
              <span className="text-[#B89B3E]">
                {" "} & Conditions
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Please read these terms carefully before using our website
              or purchasing our services. By using our services, you agree
              to the terms outlined below.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50">

              <div className="flex items-center gap-2">
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

                Terms & Conditions
              </div>

              <div className="flex items-center gap-2">
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
                  />
                </svg>

                Clear & Transparent
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>


      {/* =====================================================
          CONTENT
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
                    href="#agreement"
                    className="block border-l-2 border-[#011810] bg-[#011810]/5 px-5 py-3 text-sm font-medium text-[#011810]"
                  >
                    Agreement
                  </a>

                  <a
                    href="#services"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Service Scope
                  </a>

                  <a
                    href="#responsibilities"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Client Responsibilities
                  </a>

                  <a
                    href="#payment"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Payment
                  </a>

                  <a
                    href="#timeline"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Project Timeline
                  </a>

                  <a
                    href="#third-party"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Third-Party Services
                  </a>

                  <a
                    href="#updates"
                    className="block border-l-2 border-transparent px-5 py-3 text-sm text-gray-500 transition hover:border-[#011810]/40 hover:text-[#011810]"
                  >
                    Updates
                  </a>

                </nav>

              </div>

            </aside>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}
            <article className="max-w-4xl">


              {/* INTRO */}
              <section
                id="agreement"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  01 — Agreement
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Terms & Conditions
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  By using our website or purchasing our services,
                  you agree to these Terms & Conditions.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* SERVICE SCOPE */}
              <section
                id="services"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  02 — Services
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Service scope
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  All services are provided according to the selected
                  package and agreed scope of work. Any additional
                  requirements may be charged separately.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* CLIENT RESPONSIBILITIES */}
              <section
                id="responsibilities"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  03 — Responsibilities
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Client responsibilities
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  Customers are responsible for providing accurate
                  information, content, approvals, and other materials
                  required for service delivery.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* PAYMENT */}
              <section
                id="payment"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  04 — Payment
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Payment terms
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  Payment must be completed according to the selected
                  package and agreed payment terms.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* TIMELINE */}
              <section
                id="timeline"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  05 — Timeline
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Project timelines
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  Project timelines depend on the scope of work,
                  requirements, and timely client approvals.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* THIRD PARTY */}
              <section
                id="third-party"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  06 — Third Parties
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Third-party services
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  Third-party services such as hosting, domains,
                  advertising platforms, plugins, and software may
                  involve additional charges.
                </p>

              </section>


              <div className="my-12 h-px bg-gray-100" />


              {/* UPDATES */}
              <section
                id="updates"
                className="scroll-mt-28"
              >

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  07 — Updates
                </p>

                <h2 className="text-2xl font-semibold tracking-tight text-[#011810] sm:text-3xl">
                  Changes to these terms
                </h2>

                <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                  We reserve the right to update these Terms &
                  Conditions when required.
                </p>

              </section>


            

            </article>

          </div>

        </div>
      </section>


    
    </main>
  );
}

export default TermCondition;
