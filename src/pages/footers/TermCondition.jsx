function TermsConditions() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms & Conditions
          </h1>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Terms & Conditions
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                By using our website or purchasing our services, you agree to
                these Terms & Conditions.
              </p>

              <p>
                All services are provided according to the selected package
                and agreed scope of work. Any additional requirements may be
                charged separately.
              </p>

              <p>
                Customers are responsible for providing accurate information,
                content, approvals, and other materials required for service
                delivery.
              </p>

              <p>
                Payment must be completed according to the selected package
                and agreed payment terms.
              </p>

              <p>
                Project timelines depend on the scope of work, requirements,
                and timely client approvals.
              </p>

              <p>
                Third-party services such as hosting, domains, advertising
                platforms, plugins, and software may involve additional
                charges.
              </p>

              <p>
                We reserve the right to update these Terms & Conditions when
                required.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default TermsConditions;