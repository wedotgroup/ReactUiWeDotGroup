import { useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
  X,
  Globe2,
  UserCheck,
  Building2,
  AlertCircle,
} from "lucide-react";
import axios from "axios";
import apiUrl from "../api/api";

export default function HrConsultancy() {
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  // Popup states
  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    jobTitle: "",
    jobLocation: "",
    employmentType: "",
    experience: "",
    salaryRange: "",
    department: "",
    jobDescription: "",
    skills: "",
    qualifications: "",
  });

  const employmentTypes = [
    "Full-Time",
    "Part-Time",
    "Contract",
    "Temporary",
    "Internship",
  ];

  const experienceOptions = [
    "Fresher",
    "1 - 2 Years",
    "2 - 5 Years",
    "5 - 10 Years",
    "20+ Years",
  ];

  // =========================================================
  // FORM CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // FILE HANDLING
  // =========================================================

  const handleFiles = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles || []);

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);

    // Allow selecting the same file again
    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // =========================================================
  // CLOSE POPUP
  // =========================================================

  const closePopup = () => {
    setPopup((prev) => ({
      ...prev,
      show: false,
    }));
  };

  // =========================================================
  // SUBMIT FORM
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const data = new FormData();

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      // Add supporting files
      files.forEach((file) => {
        data.append("supporting_files[]", file);
      });

      const response = await axios.post(
        `${apiUrl}/hr/form`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      // Reset form
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        jobTitle: "",
        jobLocation: "",
        employmentType: "",
        experience: "",
        salaryRange: "",
        department: "",
        jobDescription: "",
        skills: "",
        qualifications: "",
      });

      // Reset files
      setFiles([]);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      // Show success popup
      setPopup({
        show: true,
        type: "success",
        title: "Requirement Submitted!",
        message:
          "Thank you for submitting your requirement. Our HR team will review your request and contact you shortly.",
      });

      // Scroll to form
      setTimeout(() => {
        document
          .getElementById("hr-enquiry")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);

      // Auto close popup after 4 seconds
      setTimeout(() => {
        closePopup();
      }, 4000);
    } catch (error) {
      console.error(
        "Error:",
        error.response?.data || error
      );

      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong. Please try again.";

      // Show error popup
      setPopup({
        show: true,
        type: "error",
        title: "Submission Failed",
        message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-slate-900">

      {/* =========================================================
          SUCCESS / ERROR POPUP
      ========================================================= */}

      {popup.show && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closePopup();
            }
          }}
        >
          <div
            className={`relative w-full max-w-md overflow-hidden rounded-[24px] bg-white p-7 text-center shadow-[0_25px_100px_rgba(0,0,0,0.45)] sm:p-8`}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-black/35 transition hover:bg-black/5 hover:text-black"
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                popup.type === "success"
                  ? "bg-green-100"
                  : "bg-red-100"
              }`}
            >
              {popup.type === "success" ? (
                <CheckCircle2
                  size={36}
                  className="text-green-600"
                />
              ) : (
                <AlertCircle
                  size={36}
                  className="text-red-600"
                />
              )}
            </div>

            {/* Title */}
            <h2
              className={`mt-5 text-2xl font-bold ${
                popup.type === "success"
                  ? "text-[#080808]"
                  : "text-red-700"
              }`}
            >
              {popup.title}
            </h2>

            {/* Message */}
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-black/50">
              {popup.message}
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={closePopup}
              className={`mt-6 w-full rounded-xl px-5 py-3 text-sm font-bold transition ${
                popup.type === "success"
                  ? "bg-[#E1C562] text-[#080808] hover:bg-[#D4B653]"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              {popup.type === "success"
                ? "Okay, Got It"
                : "Close"}
            </button>
          </div>
        </div>
      )}

      {/* =========================================================
          HERO
      ========================================================= */}
<section className="relative overflow-hidden bg-[#080808]">
  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.045]"
    style={{
      backgroundImage:
        "linear-gradient(#E1C562 1px, transparent 1px), linear-gradient(90deg, #E1C562 1px, transparent 1px)",
      backgroundSize: "65px 65px",
    }}
  />

  {/* Glow */}
  <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E1C562]/10 blur-[130px]" />
  <div className="absolute -bottom-52 right-0 h-[550px] w-[550px] rounded-full bg-[#B89B3E]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">

      {/* LEFT — IMAGE */}
      <div className="relative">
        {/* Decorative glow */}
        <div className="absolute -inset-6 rounded-[40px] bg-[#E1C562]/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-2xl">
          <img
            src="/home/hr.jpg"
            alt="Professional HR team"
            className="h-[420px] w-full object-cover sm:h-[520px]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#080808]/75 p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E1C562] text-[#080808]">
                <Users size={21} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Connecting Talent & Business
                </p>
                <p className="mt-1 text-xs text-white/50">
                  Professional recruitment & staffing solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating accent */}
        <div className="absolute -right-4 -top-4 hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#E1C562] text-[#080808] shadow-xl sm:flex">
          <UserCheck size={25} />
        </div>
      </div>

      {/* RIGHT — CONTENT */}
      <div className="max-w-3xl">

        <div className="inline-flex items-center gap-2 rounded-full border border-[#E1C562]/25 bg-[#E1C562]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F0D77D]">
          <Sparkles size={14} />
          HR Consultancy
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
          Comprehensive HR Solutions for 
          <span className="block text-[#E1C562]">
            Your Business Success.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
         At We Dot Group, we specialize in HR consultancy services that connect top talent with leading businesses. With a strong commitment to quality recruitment solutions, we help organizations identify the right candidates while ensuring job seekers are matched with opportunities that align with their skills, experience, and career aspirations.</p>

<p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">We offer our services at competitive rates and are dedicated to supporting candidates throughout their job search journey. To maintain a transparent and candidate-friendly approach, we never charge job seekers any fees, ensuring an open, professional, and supportive experience for all.</p>

<p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">At We Dot Group, we take pride in understanding the unique requirements of both employers and candidates, enabling us to create successful and lasting matches. Whether you are searching for exceptional talent or exploring your next career opportunity, we are committed to helping you achieve your goals through our expert HR consultancy services.</p>
        


        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#hr-enquiry"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#E1C562] px-5 py-3 text-sm font-bold text-[#080808] transition hover:-translate-y-0.5 hover:bg-[#D4B653]"
          >
            Submit Requirement
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="mailto:info@wedotgroup.com"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#E1C562]/40 hover:text-[#E1C562]"
          >
            <Mail size={16} />
            Contact HR Team
          </a>
        </div>

       
      </div>
    </div>
  </div>
</section>

<section className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-10 lg:grid-cols-[0.3fr_0.7fr]">

      {/* Tab Heading */}
      <div>
        <div className="inline-flex items-center rounded-xl bg-[#080808] px-6 py-4">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#E1C562]">
            HR Consultancy FORM
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="border-l-2 border-[#E1C562] pl-6 sm:pl-8">
        <p className="text-base leading-8 text-[#080808]/65 sm:text-lg">
          After setting up your company in the UAE and providing essential IT
          services, we take the next step to grow your business with targeted
          digital marketing strategies. Our campaigns help attract clients and
          establish a strong market presence. As your business expands, the
          demand for skilled manpower increases, and we offer exclusive
          staffing solutions tailored to your needs. From IT professionals to
          administrative support, we provide a workforce that helps manage
          your operations efficiently, ensuring sustained growth and long-term
          success for your new company.
        </p>
      </div>

    </div>
  </div>
</section>


      <section className="relative bg-[#080808] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[300px_minmax(0,1fr)]">

          {/* SIDEBAR */}
          <aside className="space-y-4">

            {/* About */}
            <div className="rounded-2xl bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.22)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E1C562]/15 text-[#B89B3E]">
                <Users size={21} />
              </div>

              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89B3E]">
                HR Services
              </p>

              <h2 className="mt-2 text-xl font-bold leading-tight text-[#080808]">
                Build the right team for your business.
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/50">
                We help businesses find suitable talent and manage their
                recruitment requirements through professional HR solutions.
              </p>
            </div>

            {/* Benefits */}
            <div className="rounded-2xl bg-white p-6 shadow-[0_15px_45px_rgba(0,0,0,0.22)]">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#B89B3E]">
                Why We Dot Group
              </p>

              <div className="mt-5 space-y-5">
                <SidebarFeature
                  icon={ShieldCheck}
                  title="Transparent"
                  text="Professional and reliable recruitment support."
                />

                <SidebarFeature
                  icon={Headphones}
                  title="Dedicated Support"
                  text="Support throughout your hiring requirement."
                />

                <SidebarFeature
                  icon={Clock3}
                  title="Efficient"
                  text="Helping you identify suitable candidates efficiently."
                />
              </div>
            </div>

            {/* Contact */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111111] p-6">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E1C562]/10 blur-3xl" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E1C562]">
                  Get in touch
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  Talk to our HR team.
                </h3>

                <div className="mt-5 space-y-3">
                  <ContactItem
                    href="mailto:info@wedotgroup.com"
                    icon={Mail}
                    text="info@wedotgroup.com"
                  />

                  <ContactItem
                    href="tel:+97142619694"
                    icon={Headphones}
                    text="+971 4 261 9694"
                  />

                  <ContactItem
                    href="tel:+971585087199"
                    icon={Headphones}
                    text="+971 58 508 7199"
                  />

                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <MapPin
                      size={16}
                      className="shrink-0 text-[#E1C562]"
                    />
                    UAE
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* =====================================================
              FORM
          ===================================================== */}

          <div
            id="hr-enquiry"
            className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_65px_rgba(0,0,0,0.3)]"
          >

            {/* Form Header */}
            <div className="border-b border-black/10 bg-[#fafafa] px-6 py-6 sm:px-8">
              <div className="flex items-center gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#080808] text-[#E1C562]">
                  <BriefcaseBusiness size={20} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl font-bold text-[#080808] sm:text-2xl">
                      Submit Your Requirement
                    </h2>

                    <span className="rounded-full bg-[#E1C562]/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#9C812C]">
                      HR Services
                    </span>
                  </div>

                  <p className="mt-1 text-xs leading-5 text-black/45 sm:text-sm">
                    Share your hiring requirement and our team will contact
                    you.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8"
            >

              {/* COMPANY */}
              <FormSection
                title="Company Information"
                description="Basic details about your organization."
              >
                <div className="grid gap-4 sm:grid-cols-2">

                  <FormInput
                    label="Company Name"
                    name="companyName"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Contact Person"
                    name="contactPerson"
                    placeholder="Full name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>
              </FormSection>

              {/* JOB */}
              <FormSection
                title="Job Requirement"
                description="Tell us about the position you need to fill."
              >
                <div className="grid gap-4 sm:grid-cols-2">

                  <FormInput
                    label="Job Title"
                    name="jobTitle"
                    placeholder="e.g. Software Developer"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />

                  <FormInput
                    label="Job Location"
                    name="jobLocation"
                    placeholder="City / Country"
                    value={formData.jobLocation}
                    onChange={handleChange}
                    required
                  />

                  <FormSelect
                    label="Employment Type"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                    options={employmentTypes}
                  />

                  <FormSelect
                    label="Experience Required"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    options={experienceOptions}
                  />

                  <FormInput
                    label="Salary Range"
                    name="salaryRange"
                    placeholder="e.g. AED 8,000 - 12,000"
                    value={formData.salaryRange}
                    onChange={handleChange}
                  />

                  <FormInput
                    label="Department"
                    name="department"
                    placeholder="e.g. IT / Finance / HR"
                    value={formData.department}
                    onChange={handleChange}
                  />

                </div>
              </FormSection>

              {/* CANDIDATE */}
              <FormSection
                title="Candidate Requirements"
                description="Share the key skills and qualifications you are looking for."
              >
                <div className="space-y-4">

                  <FormTextarea
                    label="Job Description"
                    name="jobDescription"
                    placeholder="Briefly describe the role and responsibilities..."
                    value={formData.jobDescription}
                    onChange={handleChange}
                    required
                  />

                  <div className="grid gap-4 sm:grid-cols-2">

                    <FormTextarea
                      label="Required Skills"
                      name="skills"
                      placeholder="e.g. Laravel, React, MySQL..."
                      value={formData.skills}
                      onChange={handleChange}
                    />

                    <FormTextarea
                      label="Qualifications"
                      name="qualifications"
                      placeholder="Education, certification or other requirements..."
                      value={formData.qualifications}
                      onChange={handleChange}
                    />

                  </div>
                </div>
              </FormSection>

              {/* FILE */}
              <div className="mt-8 border-t border-black/10 pt-8">

                <div className="mb-4">
                  <h3 className="text-base font-bold text-[#080808]">
                    Supporting Document
                    <span className="ml-2 text-[9px] font-medium uppercase tracking-wide text-black/30">
                      Optional
                    </span>
                  </h3>
                </div>

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragActive(true);
                  }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={handleDrop}
                  onClick={() =>
                    fileInputRef.current?.click()
                  }
                  className={`flex cursor-pointer items-center gap-4 rounded-xl border border-dashed px-4 py-4 transition ${
                    dragActive
                      ? "border-[#E1C562] bg-[#E1C562]/10"
                      : "border-black/10 bg-[#fafafa] hover:border-[#B89B3E] hover:bg-[#E1C562]/5"
                  }`}
                >

                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                  />

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#080808] text-[#E1C562]">
                    <UploadCloud size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#080808] sm:text-sm">
                      Upload job description or company profile
                    </p>

                    <p className="mt-0.5 text-[10px] text-black/40 sm:text-xs">
                      PDF, DOC, DOCX, XLS, XLSX, JPG or PNG
                    </p>
                  </div>

                  <span className="ml-auto hidden rounded-lg border border-black/10 bg-white px-3 py-2 text-[11px] font-semibold text-[#080808] sm:block">
                    Browse
                  </span>
                </div>

                {/* Files */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">

                    {files.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-[#fafafa] px-3 py-2.5"
                      >

                        <div className="flex min-w-0 items-center gap-2.5">

                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#080808] text-[#E1C562]">
                            <FileText size={14} />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-[#080808]">
                              {file.name}
                            </p>

                            <p className="text-[10px] text-black/35">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>

                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(index);
                          }}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-black/30 transition hover:bg-red-50 hover:text-red-500"
                        >
                          <X size={15} />
                        </button>

                      </div>
                    ))}

                  </div>
                )}
              </div>

              {/* SUBMIT */}
              <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-start gap-2.5">
                  <ShieldCheck
                    size={17}
                    className="mt-0.5 shrink-0 text-[#B89B3E]"
                  />

                  <p className="max-w-md text-[10px] leading-5 text-black/40 sm:text-[11px]">
                    Your information is kept confidential and will only be
                    used to process your recruitment requirement.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-[#080808] shadow-lg shadow-[#E1C562]/10 transition ${
                    isSubmitting
                      ? "cursor-not-allowed bg-[#E1C562]/60"
                      : "bg-[#E1C562] hover:-translate-y-0.5 hover:bg-[#D4B653]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#080808]/30 border-t-[#080808]" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Requirement

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-[#E1C562]/15 bg-[#E1C562]  ">

        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#E1C562]/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#B89B3E]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">

            <div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E1C562]">
                <Sparkles size={16} />
                HR Consultancy by We Dot Group
              </div>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Looking for the right talent?
              </h2>

              <p className="mt-2 max-w-2xl text-sm text-white">
                Share your manpower requirements with our team and let us help
                you build the workforce your business needs.
              </p>

            </div>

            <a
              href="#hr-enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-[#011810] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#011810]"
            >
              Start Hiring
              <ArrowRight size={17} />
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}

/* =============================================================
   HERO FEATURE
============================================================= */

function HeroFeature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E1C562]/10 text-[#E1C562]">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-xs font-semibold text-white">
          {title}
        </p>

        <p className="mt-0.5 text-[11px] leading-5 text-white/40">
          {text}
        </p>
      </div>

    </div>
  );
}

/* =============================================================
   HIGHLIGHT CARD
============================================================= */

function HighlightCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E1C562]/10 text-[#E1C562]">
        <Icon size={19} />
      </div>

      <h3 className="mt-4 text-sm font-bold text-white">
        {title}
      </h3>

      <p className="mt-1.5 text-xs leading-5 text-white/40">
        {text}
      </p>

    </div>
  );
}

/* =============================================================
   SIDEBAR FEATURE
============================================================= */

function SidebarFeature({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#080808] text-[#E1C562]">
        <Icon size={16} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#080808]">
          {title}
        </h3>

        <p className="mt-0.5 text-xs leading-5 text-black/45">
          {text}
        </p>
      </div>

    </div>
  );
}

/* =============================================================
   CONTACT ITEM
============================================================= */

function ContactItem({ href, icon: Icon, text }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-xs text-white/50 transition hover:text-[#E1C562]"
    >
      <Icon
        size={15}
        className="shrink-0 text-[#E1C562]"
      />

      <span>{text}</span>
    </a>
  );
}

/* =============================================================
   FORM SECTION
============================================================= */

function FormSection({
  title,
  description,
  children,
}) {
  return (
    <div className="border-b border-black/10 pb-8">

      <div className="mb-5">

        <h3 className="text-base font-bold text-[#080808]">
          {title}
        </h3>

        <p className="mt-1 text-xs text-black/40">
          {description}
        </p>

      </div>

      {children}
    </div>
  );
}

/* =============================================================
   FORM INPUT
============================================================= */

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-[#080808]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#B89B3E]">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-11 w-full rounded-xl border border-black/10 bg-[#fafafa] px-3.5 text-sm text-[#080808] outline-none transition placeholder:text-black/25 hover:border-[#B89B3E] focus:border-[#E1C562] focus:bg-white focus:ring-4 focus:ring-[#E1C562]/10"
      />

    </div>
  );
}


function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-[#080808]"
      >
        {label}
      </label>

      <div className="relative">

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="h-11 w-full appearance-none rounded-xl border border-black/10 bg-[#fafafa] px-3.5 pr-10 text-sm text-black/65 outline-none transition hover:border-[#B89B3E] focus:border-[#E1C562] focus:bg-white focus:ring-4 focus:ring-[#E1C562]/10"
        >

          <option value="">
            Select option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}

        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B89B3E]"
        />

      </div>
    </div>
  );
}

/* =============================================================
   FORM TEXTAREA
============================================================= */

function FormTextarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold text-[#080808]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#B89B3E]">
            *
          </span>
        )}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        placeholder={placeholder}
        required={required}
        className="w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-3.5 py-3 text-sm leading-6 text-[#080808] outline-none transition placeholder:text-black/25 hover:border-[#B89B3E] focus:border-[#E1C562] focus:bg-white focus:ring-4 focus:ring-[#E1C562]/10"
      />

    </div>
  );
}
