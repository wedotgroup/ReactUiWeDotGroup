const partnerLogos = [
  "/logo/ourparteners/meydan-fz-01.jpg",
  "/logo/ourparteners/ifza-fz.webp",
  "/logo/ourparteners/rakez-fz.webp",
  "/logo/ourparteners/shams-fz.webp",
  "/logo/ourparteners/creative-city-fz.webp",
  "/logo/ourparteners/ajman-media-fz.webp",
  "/logo/ourparteners/spc-fz-160-2.jpg",
  "/logo/ourparteners/dsoa-fz.webp",
  "/logo/ourparteners/dmcc-fz.webp",
  "/logo/ourparteners/rak-icc.webp",
  "/logo/ourparteners/jafza-offshore.webp",
  "/logo/ourparteners/ajman-offshore.webp",
  "/logo/ourparteners/dubai-ded.webp",
  "/logo/ourparteners/abu-dhabi-ded.webp",
  "/logo/ourparteners/fujairah-ded.webp",
  "/logo/ourparteners/rak-govt.webp",
  "/logo/ourparteners/sharjah-ded.webp",
  "/logo/ourparteners/uaq-ded.webp",
];

const Logo = ({ src, index }) => {
  return (
    <div
      className="
        group
        flex
        h-[100px]
        w-[175px]
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-[#B89B3E]/15
        bg-white
        
        shadow-[0_6px_25px_rgba(8,8,8,0.05)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E1C562]/60
        hover:shadow-[0_12px_35px_rgba(225,197,98,0.18)]
        sm:h-[105px]
        sm:w-[190px]
        lg:h-[110px]
        lg:w-[200px]
      "
    >
      <img
        src={src}
        alt={`Partner ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="
          block
          h-auto
          max-h-[70px]
          w-auto
          max-w-[145px]
          object-contain
          opacity-100
          grayscale-0
          transition-all
          duration-300
          group-hover:scale-105
          sm:max-h-[75px]
          sm:max-w-[160px]
          lg:max-h-[80px]
          lg:max-w-[175px]
        "
      />
    </div>
  );
};



export const OurPartener = () => {
  
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
      "
    >
      

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-72
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#E1C562]/[0.07]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#F0D77D]/[0.08]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-72
          w-72
          rounded-full
          bg-[#B89B3E]/[0.06]
          blur-3xl
        "
      />

      

      <div className="relative">

        

        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E1C562]/25
              bg-[#E1C562]/[0.08]
              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#E1C562]
                shadow-[0_0_10px_rgba(225,197,98,0.45)]
              "
            />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#B89B3E]
              "
            >
              Trusted Partnerships
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-[#080808]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Trusted by Leading

            <span
              className="
                block
                bg-gradient-to-r
                from-[#B89B3E]
                via-[#E1C562]
                to-[#D4B653]
                bg-clip-text
                text-transparent
                p-2
              "
            >
              Organizations
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            We work with trusted organizations and leading business
            authorities to deliver reliable, strategic, and
            technology-driven solutions.
          </p>

         

          <div
            className="
              mt-9
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              sm:gap-8
            "
          >

            {/* Partners */}

            <div className="text-center">
              <div className="text-2xl font-bold text-[#080808]">
                18+
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-[#B89B3E]
                "
              >
                Partners
              </div>
            </div>

            {/* Divider */}

            <div className="hidden h-8 w-px bg-[#E1C562]/30 sm:block" />

            {/* UAE */}

            <div className="text-center">
              <div className="text-2xl font-bold text-[#080808]">
                UAE
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-[#B89B3E]
                "
              >
                Business Network
              </div>
            </div>

            {/* Divider */}

            <div className="hidden h-8 w-px bg-[#E1C562]/30 sm:block" />

            {/* Commitment */}

            <div className="text-center">
              <div className="text-2xl font-bold text-[#080808]">
                100%
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  font-medium
                  uppercase
                  tracking-wider
                  text-[#B89B3E]
                "
              >
                Commitment
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            PARTNER LOGOS
        ===================================================== */}

        <div className="relative mt-14">

          {/* ===================================================
              LEFT FADE
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-white
              to-transparent
              sm:w-24
              lg:w-40
            "
          />

          {/* ===================================================
              RIGHT FADE
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-white
              to-transparent
              sm:w-24
              lg:w-40
            "
          />

          {/* ===================================================
              SINGLE HORIZONTAL ROW
          =================================================== */}

          <div
            className="
              w-full
              overflow-hidden
              py-3
            "
          >
            <div
              className="
                partner-track
                flex
                w-max
                flex-nowrap
                items-center
                gap-4
                sm:gap-5
                lg:gap-6
              "
            >
              {logos.map((logo, index) => (
                <Logo
                  key={`partner-logo-${index}`}
                  src={logo}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM TEXT
        ===================================================== */}

        <div className="mt-10 text-center">

          <p
            className="
              px-4
              text-xs
              font-medium
              uppercase
              tracking-[0.15em]
              text-slate-400
              sm:tracking-[0.2em]
            "
          >
            <span className="text-[#B89B3E] text-lg">
              Building relationships
            </span>

            <span className="mx-2 text-[#E1C562] text-lg">
              •
            </span>

           <span className="text-lg">Creating value</span> 

            <span className="mx-2 text-[#E1C562] text-lg">
              •
            </span>

            <span className="text-[#B89B3E] text-lg">
              Driving growth
            </span>
          </p>

        </div>
      </div>

      

      <style>{`

        @keyframes partnerInfinite {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }

        .partner-track {

          animation:
            partnerInfinite
            55s
            linear
            infinite;

          will-change: transform;

        }

        .partner-track:hover {

          animation-play-state: paused;

        }

        @media (max-width: 640px) {

          .partner-track {

            animation-duration: 42s;

          }

        }

        @media (prefers-reduced-motion: reduce) {

          .partner-track {

            animation: none;

          }

        }

      `}</style>
    </section>
  );
};

export default OurPartener;