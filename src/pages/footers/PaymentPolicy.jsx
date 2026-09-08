function PaymentPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Payment Policy
          </h1>
        </div>
      </section>

      {/* PAYMENT POLICY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Payment Policy
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                We provide secure online payment options for our customers.
              </p>

              <p>
                Website development packages are generally charged as
                one-time payments, while digital marketing packages are
                generally billed monthly.
              </p>

              <p>
                Customers can select the applicable package and proceed
                through our available secure payment options.
              </p>

              <p>
                Any additional services, features, or requirements outside the
                selected package will be communicated and quoted separately
                before proceeding.
              </p>

              <p>
                A payment confirmation will be provided after a successful
                transaction.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PaymentPolicy;