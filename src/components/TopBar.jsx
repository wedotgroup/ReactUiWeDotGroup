import { Mail } from "lucide-react";
import taddyLogo from "../../public/logo/tabby.png";
import tamaraLogo from "../../public/logo/tamara.png";

const TopBar = () => {
  return (
    <div
  className="
    fixed
    left-0
    top-0
    z-[10000]
    h-[42px]
    w-full
    bg-[#E1C562]
    text-[#080808]
  "
>
  <div
    className="
      mx-auto
      flex
      h-full
      max-w-[1440px]
      items-center
      justify-center
      px-4
      sm:justify-between
      sm:px-6
      lg:px-12
    "
  >
    {/* Left */}
    <div className="flex items-center gap-1.5">
      <span className="whitespace-nowrap text-xs font-semibold leading-none sm:text-sm">
        We Accept
      </span>

      <div className="flex items-center gap-0.5">
        {/* Tamara */}
        <a
          href="#"
          aria-label="Tamara"
          className="
            flex
            h-8
            w-[75px]
            items-center
            justify-center
            overflow-hidden
            px-1
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          <img
            src={tamaraLogo}
            alt="Tamara"
            className="
              block
              max-h-6
              w-auto
              max-w-full
              object-contain
            "
          />
        </a>

        {/* Tabby */}
        <a
          href="#"
          aria-label="Tabby"
          className="
            flex
            h-8
            w-[75px]
            items-center
            justify-center
            overflow-hidden
            px-1
            transition-all
            duration-300
            hover:-translate-y-0.5
          "
        >
          <img
            src={taddyLogo}
            alt="Tabby"
            className="
              block
              max-h-6
              w-auto
              max-w-full
              object-contain
            "
          />
        </a>
      </div>
    </div>

    {/* Email */}
    <a
      href="mailto:info@wedotgroup.com"
      className="
        hidden
        items-center
        gap-2
        whitespace-nowrap
        text-sm
        font-medium
        transition-colors
        duration-300
        hover:text-white
        sm:flex
      "
    >
      <Mail size={15} />
      <span>info@wedotgroup.com</span>
    </a>
  </div>
</div>
  );
};

export default TopBar;