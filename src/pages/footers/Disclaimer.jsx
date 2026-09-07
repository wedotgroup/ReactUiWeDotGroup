function Disclaimer() {
  const disclaimerItems = [
    {
      number: "01",
      text: `The information provided on this website, https://www.wedotgroup.com, is intended for general informational purposes only. We DoT Group serves as an intermediary on behalf of the Government of the United Arab Emirates (UAE). While we strive to ensure the accuracy and timeliness of the information presented, please note that all details, including prices, policies, and procedures, are subject to change at the discretion of the UAE Government without prior notice.`,
    },
    {
      number: "02",
      text: `we doT group cannot guarantee the completeness, reliability, or ongoing accuracy of the information. Visitors are encouraged to verify all details directly with the relevant government authorities, as changes may occur at any time. By using this website, you acknowledge that We DoT Group is not liable for any discrepancies, updates, or modifications to the information provided.`,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9f8] text-[#011810]">

    
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
                Disclaimer
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
              Disclaimer
            </h1>

          

           
          </div>
        </div>

        {/* Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f7f9f8]">

        {/* Large background number */}
        <div className="pointer-events-none absolute -right-8 top-0 select-none text-[22rem] font-semibold leading-none tracking-[-0.1em] text-[#011810]/[0.025]">
          01
        </div>


        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">

          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-24">


            {/* =================================================
                SIDEBAR
            ================================================= */}
            <aside className="mb-14 lg:mb-0">

              <div className="sticky top-24">

                <div className="flex items-center gap-3">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#011810]/40">
                    Legal
                  </span>

                </div>


                <div className="mt-6 h-px w-12 bg-[#011810]/15" />


                <p className="mt-5 text-sm font-medium text-[#011810]/70">
                  Disclaimer
                </p>


                <p className="mt-2 max-w-[170px] text-xs leading-6 text-gray-400">
                  Please review the following information carefully.
                </p>

              </div>

            </aside>


            {/* =================================================
                DOCUMENT
            ================================================= */}
            <article className="max-w-4xl">

              {/* Heading */}
              <header className="mb-14">

                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#011810]/10 bg-white px-4 py-2 shadow-sm">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011810]/50">
                    We Dot Group
                  </span>

                </div>


                <h2 className="text-4xl font-medium tracking-[-0.045em] text-[#011810] sm:text-5xl">
                  Disclaimer
                </h2>

              </header>


              {/* =================================================
                  READING CONTENT
              ================================================= */}
              <div className="relative">

                {/* Reading line */}
                <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#011810]/10" />


                <div className="space-y-0">

                  {disclaimerItems.map((item, index) => (

                    <div
                      key={item.number}
                      className="group relative grid grid-cols-[40px_1fr] gap-7 pb-14 sm:grid-cols-[42px_1fr] sm:gap-9"
                    >

                      {/* Number */}
                      <div className="relative z-10">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#011810]/10 bg-[#f7f9f8] text-[10px] font-bold tracking-wider text-[#011810]/50 transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-[#011810] group-hover:text-emerald-300">
                          {item.number}
                        </div>

                      </div>


                      {/* Paragraph */}
                      <div
                        className={`pb-2 ${
                          index !== disclaimerItems.length - 1
                            ? "border-b border-[#011810]/10"
                            : ""
                        }`}
                      >

                        <p className="max-w-3xl text-[17px] leading-[2] text-[#011810]/65 sm:text-[18px] sm:leading-[2]">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* =================================================
                  END MARKER
              ================================================= */}
              <div className="mt-6 flex items-center gap-5">

                <span className="h-px flex-1 bg-[#011810]/10" />

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#011810]/25">
                  End of Disclaimer
                </span>

                <span className="h-px flex-1 bg-[#011810]/10" />

              </div>

            </article>

          </div>

        </div>

      </section>


 

    </main>
  );
}

export default Disclaimer;

