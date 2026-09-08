function RefundCancellationPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Refund & Cancellation Policy
          </h1>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Refund & Cancellation Policy
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                We aim to provide reliable and transparent digital services to
                our customers.
              </p>

              <p>
                Refund eligibility depends on the service purchased, work
                completed, and applicable agreed terms.
              </p>

              <p>
                For website development projects, refunds may not be available
                once substantial work has commenced or deliverables have been
                provided.
              </p>

              <p>
                For monthly digital marketing services, cancellation requests
                should be submitted before the next billing cycle.
              </p>

              <p>
                Approved refunds will be processed through the original payment
                method and may be subject to payment provider processing
                timelines.
              </p>

              <p>
                To request a refund or cancellation, please contact us with
                your order or payment details.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default RefundCancellationPolicy;