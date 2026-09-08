function PrivacyPolice() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-7xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* PRIVACY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Privacy Policy
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                We respect your privacy and are committed to protecting your
                personal information.
              </p>

              <p>
                We may collect information such as your name, email address,
                phone number, company details, project requirements, and
                payment-related information when you contact us or purchase
                our services.
              </p>

              <p>
                We use this information to process payments, provide our
                services, communicate with customers, and improve our
                services.
              </p>

              <p>
                Payments are processed securely through authorised payment
                service providers. We do not store complete card details on
                our servers.
              </p>

              <p>
                We do not sell customer information to third parties.
                Information may be shared with service providers when required
                to process payments or deliver our services.
              </p>

              <p>
                For any privacy-related queries, please contact us.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolice;
