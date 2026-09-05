import { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#0f1727]">

      {/* Gold Background Glow */}
      <div
        className="
          absolute
          left-1/2
          
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[120px]
          animate-pulse
        "
      />

      {/* Top Gold Glow */}
      <div
        className="
          absolute
         
          left-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/5
          blur-[100px]
        "
      />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center">

        {/* Logo */}
        <div className="splash-logo">
          <img
            src="/logo/mainlogo.png"
            alt="WE DOT GROUP"
            className="
              h-24
              w-auto
              object-contain
              drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]
              sm:h-28
            "
          />
        </div>

        {/* Company Name */}
        <h1
          className="
            splash-title
            mt-7
            bg-gradient-to-r
            from-[#B8860B]
            via-[#F5D76E]
            to-[#B8860B]
            bg-clip-text
            text-3xl
            font-bold
            tracking-[0.15em]
            text-transparent
            sm:text-4xl
          "
        >
          WE DOT GROUP
        </h1>

        {/* Tagline */}
        <p
          className="
            splash-tagline
            mt-3
            text-sm
            tracking-wide
            text-gray-300
            sm:text-base
          "
        >
          Bridging Technology, Talent & Strategy
        </p>

        {/* Gold Divider */}
        <div className="splash-contact mt-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#D4AF37]/50" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

          <span className="h-px w-10 bg-[#D4AF37]/50" />
        </div>

        {/* Contact */}
        <div
          className="
            splash-contact
            mt-4
            text-sm
            text-gray-400
          "
        >
          <p>+971 4 261 9694</p>

          <p className="mt-1">
            info@wedotgroup.com
          </p>
        </div>

        {/* Loading */}
        <div className="splash-loading mt-9">

          <div
            className="
              h-1
              w-52
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <div
              className="
                splash-progress
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#B8860B]
                via-[#F5D76E]
                to-[#B8860B]
                shadow-[0_0_12px_rgba(212,175,55,0.6)]
              "
            />
          </div>

          <p
            className="
              mt-3
              text-[10px]
              tracking-[4px]
              text-[#D4AF37]/70
            "
          >
            LOADING
          </p>

        </div>

      </div>
    </div>
  );
};

export default SplashScreen;