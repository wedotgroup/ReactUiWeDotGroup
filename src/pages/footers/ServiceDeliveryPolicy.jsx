function ServiceDeliveryPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Service Delivery Policy
          </h1>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Service Delivery Policy
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                We provide digital services including website development,
                digital marketing, SEO, social media management, and related
                consultancy services.
              </p>

              <p>
                Website projects are delivered according to the agreed scope,
                requirements, and project timeline.
              </p>

              <p>
                Digital marketing services generally begin after successful
                payment, confirmation of the selected package, and receipt of
                the required information and materials from the client.
              </p>

              <p>
                Project timelines may vary depending on the complexity of the
                service and client approvals.
              </p>

              <p>
                Any services or features outside the selected package may be
                quoted separately.
              </p>

              <p>
                As our services are digital, no physical shipping or delivery
                is involved.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ServiceDeliveryPolicy;