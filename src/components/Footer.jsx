import React from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import {
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";


const Footer = () => {

  /* =====================================================
      QUICK LINKS
  ====================================================== */

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Management Consultancy",
      path: "/management-consultancy",
    },
    {
      name: "IT Consultancy",
      path: "/it-consultancy",
    },
    {
      name: "HR Consultancy",
      path: "/hr-consultancy",
    },
    {
      name: "Certifications",
      path: "/certifications",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];


  /* =====================================================
      HR LINKS
  ====================================================== */

  const hrLinks = [
    {
      name: "Employer Zone",
      path:
        "https://docs.google.com/forms/d/e/1FAIpQLSfRb8pZ312ca57ba6RfJvnNWf-_dUcuxTpjLN0J_Z_L9WIhHA/viewform?usp=header",
    },
    {
      name: "Jobs in India",
      path:
        "https://docs.google.com/forms/d/e/1FAIpQLSdObVDZ0g5DR4qS5qg0w1iT4FYARg5TuBQNWB65c9W0_f9pVw/viewform?usp=header",
    },
    {
      name: "Jobs in UAE",
      path:
        "https://forms.gle/tzKXM7eGXYjp8x7w9",
    },
    {
      name: "Internship in India",
      path:
        "https://docs.google.com/forms/d/e/1FAIpQLSc78Bf72U6V-cqN8EF0AV9oguNsfPrehD4h436uUVqouHKiLw/viewform?usp=header",
    },
    {
      name: "Internship in UAE",
      path:
        "https://forms.gle/6KvSM3kKekbgbjER8",
    },
  ];


  /* =====================================================
      POLICY LINKS
  ====================================================== */

  const policyLinks = [
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      path: "/terms-conditions",
    },
    {
      name: "Refund & Cancellation Policy",
      path: "/refund-cancellation-policy",
    },
    {
      name: "Service Delivery Policy",
      path: "/service-delivery-policy",
    },
    {
      name: "Payment Policy",
      path: "/payment-policy",
    },
    {
      name: "Disclaimer",
      path: "/disclaimer",
    },
  ];


  /* =====================================================
      SOCIAL LINKS
  ====================================================== */

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/wedotgroup",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/wedotgroup/",
      label: "Instagram",
    },
   
    {
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@wedotgroup",
      label: "TikTok",
    },
    {
      icon: <FaSnapchatGhost />,
      url: "https://www.snapchat.com/",
      label: "Snapchat",
    },
  ];


  return (
    <footer className="relative overflow-hidden bg-[#011810] text-white">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Gold Glow */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_8%_15%,rgba(225,197,98,0.10),transparent_28%),radial-gradient(circle_at_92%_80%,rgba(225,197,98,0.06),transparent_30%)]
          "
        />


        {/* Green Glow */}

        <div
          className="
            absolute
            -left-40
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0a6b48]/20
            blur-[130px]
          "
        />


        <div
          className="
            absolute
            -right-40
            bottom-[5%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#075337]/20
            blur-[130px]
          "
        />


        {/* Diagonal Lines */}

        <div
          className="
            absolute
            -inset-[35%]
            rotate-[-12deg]
            bg-[repeating-linear-gradient(115deg,transparent_0px,transparent_70px,rgba(225,197,98,0.08)_71px,rgba(225,197,98,0.08)_73px,transparent_74px,transparent_145px)]
            opacity-30
          "
        />


        <div
          className="
            absolute
            -inset-[35%]
            rotate-[12deg]
            bg-[repeating-linear-gradient(65deg,transparent_0px,transparent_110px,rgba(240,215,125,0.08)_111px,rgba(240,215,125,0.08)_113px,transparent_114px,transparent_220px)]
            opacity-15
          "
        />


        {/* Top Line */}

        <div
          className="
            absolute
            left-0
            right-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#E1C562]/70
            to-transparent
          "
        />


        {/* Bottom Line */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#E1C562]/40
            to-transparent
          "
        />


        {/* Decorative Circles */}

        <div
          className="
            absolute
            right-[16%]
            top-[10%]
            h-36
            w-36
            rounded-full
            border
            border-[#E1C562]/10
          "
        />

        <div
          className="
            absolute
            right-[19%]
            top-[13%]
            h-24
            w-24
            rounded-full
            border
            border-[#E1C562]/10
          "
        />

      </div>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          pb-12
          pt-16
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-12
            lg:gap-8
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-3">

            {/* Logo */}

            <div className="mb-7">

              <Link
                to="/"
                className="
                  inline-block
                  transition-transform
                  duration-300
                  hover:scale-[1.02]
                "
              >

                <img
                  src="/logo/mainlogo.png"
                  alt="We Dot Group"
                  className="
                    block
                    h-auto
                    w-[180px]
                    max-w-full
                    object-contain
                    sm:w-[190px]
                  "
                />

              </Link>

            </div>


            {/* =================================================
                CERTIFICATION LOGOS
            ================================================== */}

            <div className="flex items-center gap-3">

              <CertificationLogo
                src="/logo/iab.png"
                alt="IAB Certification"
              />

              <CertificationLogo
                src="/logo/iso.png"
                alt="ISO Certification"
              />

              <CertificationLogo
                src="/logo/MSME.png"
                alt="MSME Certification"
              />

            </div>


            {/* =================================================
                SOCIAL
            ================================================== */}

            <div className="mt-7 flex flex-wrap items-center gap-3">

              {socialLinks.map((social) => (

                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.035]
                    text-gray-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E1C562]
                    hover:bg-[#E1C562]
                    hover:text-[#011810]
                  "
                >

                  {social.icon}

                </a>

              ))}

            </div>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterTitle title="Quick Links" />

            <FooterLinks
              items={quickLinks}
            />

          </div>


          {/* =================================================
              HR CONSULTANCY
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterTitle title="HR Consultancy" />

            <FooterLinks
              items={hrLinks}
              external
            />

          </div>


          {/* =================================================
              IMPORTANT LINKS
          ================================================== */}

          <div className="lg:col-span-2">

            <FooterTitle title="Important Links" />

            <FooterLinks
              items={policyLinks}
            />

          </div>


          {/* =================================================
              CONTACT DETAILS
          ================================================== */}

          <div className="lg:col-span-3">

            <FooterTitle title="Contact Details" />

            <div className="space-y-5">

              <ContactItem
                icon={<Mail size={18} />}
                label="Sales Enquiry"
                value="info@wedotgroup.com"
                href="mailto:info@wedotgroup.com"
              />

              <ContactItem
                icon={<Mail size={18} />}
                label="Support Enquiry"
                value="support@wedotgroup.com"
                href="mailto:support@wedotgroup.com"
              />

              <ContactItem
                icon={<Phone size={18} />}
                label="Dubai Office"
                value="+971 58 508 7199"
                href="tel:+971585087199"
              />

              <ContactItem
                icon={<Phone size={18} />}
                label="India Mobile"
                value="+91 99999 99999"
                href="tel:+919999999999"
              />

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          border-t
          border-white/10
          bg-black/20
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-3
            px-5
            py-5
            sm:px-8
            md:flex-row
            lg:px-10
          "
        >

          <p
            className="
              text-center
              text-xs
              text-gray-500
              sm:text-sm
              md:text-left
            "
          >

            © {new Date().getFullYear()} Copyrights by{" "}

            <span className="font-medium text-gray-400">
              We Dot Group FZE
            </span>

            . All Rights Reserved.

          </p>


          <p
            className="
              text-center
              text-[11px]
              text-gray-600
              sm:text-xs
            "
          >
            Trusted • Professional • Global
          </p>

        </div>

      </div>

      <div
        className="
          fixed
          bottom-4
          right-3
          z-50
          flex
          flex-col
          gap-2
          sm:bottom-5
          sm:right-5
          sm:gap-3
        "
      >

        {/* INDIA */}

        <InternationalContact
          countryCode="IN"
          whatsapp="919999999999"
          phone="+919999999999"
        />


       


        {/* UAE */}

        <InternationalContact
          countryCode="AE"
          whatsapp="971585087199"
          phone="+971585087199"
        />

      </div>

    </footer>
  );
};


/* =========================================================
   CERTIFICATION LOGO
========================================================= */

const CertificationLogo = ({ src, alt }) => {
  return (
    <div
      className="
        flex
        h-[78px]
        w-[78px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border-2
        border-[#E1C562]/40
        bg-white
        p-1
        shadow-[0_4px_20px_rgba(0,0,0,0.15)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E1C562]
        hover:shadow-[0_8px_25px_rgba(225,197,98,0.18)]
        sm:h-[82px]
        sm:w-[82px]
      "
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          block
          h-full
          w-full
          rounded-full
          object-contain
        "
      />
    </div>
  );
};



/* =========================================================
   FOOTER TITLE
========================================================= */

const FooterTitle = ({
  title,
}) => {

  return (
    <div className="mb-6">

      <p
        className="
          text-lg
          font-semibold
          tracking-tight
          text-white
          sm:text-xl
        "
      >
        {title}
      </p>

      <div
        className="
          mt-3
          h-[3px]
          w-10
          rounded-full
          bg-gradient-to-r
          from-[#E1C562]
          to-[#F0D77D]
        "
      />

    </div>
  );
};


/* =========================================================
   FOOTER LINKS
========================================================= */

const FooterLinks = ({
  items,
  external = false,
}) => {

  return (
    <ul className="space-y-3.5">

      {items.map((item) => (

        <li key={item.path}>

          {external ? (

            <a
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-start
                text-sm
                leading-6
                text-gray-400
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-white
              "
            >

              <ChevronRight
                size={16}
                className="
                  mr-2
                  mt-1
                  shrink-0
                  text-[#E1C562]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

              <span>
                {item.name}
              </span>

            </a>

          ) : (

            <Link
              to={item.path}
              className="
                group
                flex
                items-start
                text-sm
                leading-6
                text-gray-400
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-white
              "
            >

              <ChevronRight
                size={16}
                className="
                  mr-2
                  mt-1
                  shrink-0
                  text-[#E1C562]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

              <span>
                {item.name}
              </span>

            </Link>

          )}

        </li>

      ))}

    </ul>
  );
};


/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({
  icon,
  label,
  value,
  href,
}) => {

  return (
    <a
      href={href}
      className="group flex gap-3"
    >

      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-[#E1C562]/20
          bg-[#E1C562]/10
          transition-all
          duration-300
          group-hover:border-[#E1C562]/60
          group-hover:bg-[#E1C562]
        "
      >

        <span
          className="
            text-[#E1C562]
            transition-colors
            duration-300
            group-hover:text-[#011810]
          "
        >
          {icon}
        </span>

      </div>


      <div className="min-w-0">

        <p
          className="
            mb-1
            text-[11px]
            font-medium
            uppercase
            tracking-wider
            text-gray-500
          "
        >
          {label}
        </p>

        <p
          className="
            break-all
            text-sm
            text-gray-300
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          {value}
        </p>

      </div>

    </a>
  );
};


/* =========================================================
   INTERNATIONAL CONTACT
========================================================= */

const InternationalContact = ({
  country,
  code,
  countryCode,
  whatsapp,
  phone,
}) => {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#032219]/95 p-1.5 pr-2 shadow-lg backdrop-blur-xl transition hover:border-[#E1C562]/40 hover:bg-[#062a20]">
      
      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E1C562]/30 bg-[#011810]">
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          title={`${country} flag`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      

      <a
        href={`https://wa.me/${String(whatsapp).replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`WhatsApp ${country}`}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105"
      >
        <FaWhatsapp size={18} />
      </a>

      <a
        href={`tel:${phone}`}
        aria-label={`Call ${country}`}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1C562] text-[#011810] transition hover:scale-105 hover:bg-[#F0D77D]"
      >
        <Phone size={18} strokeWidth={2.3} />
      </a>

    </div>
  );
};




export default Footer;
