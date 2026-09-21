
import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-[10000] h-10 bg-[#E1C562] text-[#080808]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-12">

        {/* Phone */}
        <a
          href="tel:+971585087199"
          className="flex items-center gap-1.5 text-[12px] font-medium tracking-[0.1px] transition-colors duration-200 hover:text-white sm:text-[13px]"
        >
          <Phone size={14} strokeWidth={1.8} />
          <span>+971 58 508 7199</span>
        </a>

        {/* Email */}
        <a
          href="mailto:sales@wedotgroup.in"
          className="
            flex items-center gap-1.5
            border-l border-[#080808]/25
            pl-3
            text-[12px] font-medium
            tracking-[0.1px]
            transition-colors duration-200
            hover:text-white
            sm:border-0 sm:pl-0
            sm:text-[13px]
          "
        >
          <Mail size={14} strokeWidth={1.8} />
          <span>sales@wedotgroup.in</span>
        </a>

      </div>
    </div>
  );
};

export default TopBar;

