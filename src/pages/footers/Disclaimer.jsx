function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HEADER */}
      <section className="bg-[#011810]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Disclaimer
          </h1>
        </div>
      </section>

      {/* DISCLAIMER CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <article className="max-w-5xl">
            <h2 className="mb-8 text-2xl font-semibold text-[#011810] sm:text-3xl">
              Disclaimer
            </h2>

            <div className="space-y-6 text-[15px] leading-8 text-gray-600 sm:text-base">
              <p>
                The information provided on this website,{" "}
                <a
                  href="https://www.wedotgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#011810] underline underline-offset-4 hover:opacity-70"
                >
                  https://www.wedotgroup.com
                </a>
                , is intended for general informational purposes only. We DoT
                Group serves as an intermediary on behalf of the Government of
                the United Arab Emirates (UAE). While we strive to ensure the
                accuracy and timeliness of the information presented, please
                note that all details, including prices, policies, and
                procedures, are subject to change at the discretion of the UAE
                Government without prior notice.
              </p>

              <p>
                we doT group cannot guarantee the completeness, reliability, or
                ongoing accuracy of the information. Visitors are encouraged
                to verify all details directly with the relevant government
                authorities, as changes may occur at any time. By using this
                website, you acknowledge that We DoT Group is not liable for
                any discrepancies, updates, or modifications to the information
                provided.
              </p>

              <p>
                For the most current information, please consult the official
                UAE government sources.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Disclaimer;