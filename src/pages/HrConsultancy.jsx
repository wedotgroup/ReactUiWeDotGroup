
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
} from "lucide-react";
import axios from "axios";
import apiUrl from "../api/api";

export default function HrConsultancy() {
  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleFiles = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles || []);

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // Supporting files
    files.forEach((file) => {
      data.append("supporting_files[]", file);
    });

    const response = await axios.post(`${apiUrl}/hr/form`,data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Success:", response.data);

    setSubmitted(true);

    window.scrollTo({
      top:
        document.getElementById("hr-enquiry")?.offsetTop - 100,
      behavior: "smooth",
    });
  } catch (error) {
    console.error("Error:", error.response?.data || error);
  }
};

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-slate-900">
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

        <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#F0D77D]/5 blur-[90px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            {/* HERO CONTENT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E1C562]/25 bg-[#E1C562]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F0D77D]">
                <Sparkles size={14} />
                HR Consultancy
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
                Empowering your workforce with
                <span className="block text-[#E1C562]">
                  exceptional HR solutions.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                We Dot Group connects top talent with leading businesses
                through professional recruitment and staffing solutions
                tailored to your organization's needs.
              </p>

              {/* Trust Points */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Quality recruitment solutions",
                  "Tailored staffing support",
                  "Experienced HR professionals",
                  "No fees for job seekers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/65"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#E1C562]"
                    />
                    {item}
                  </div>
                ))}
              </div>

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

            {/* HERO CARD */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl">
                {/* Floating icon */}
                <div className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1C562] text-[#080808] shadow-xl">
                  <Users size={22} />
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E1C562]/10 text-[#E1C562]">
                  <UserCheck size={24} />
                </div>

                <p className="mt-6 text-sm font-semibold text-[#E1C562]">
                  Connecting talent with opportunity
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight text-white">
                  Find the right people for your business.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  Share your manpower requirements with our team and let us
                  help you identify suitable candidates for your organization.
                </p>

                <div className="mt-7 space-y-4 border-t border-white/10 pt-6">
                  <HeroFeature
                    icon={Building2}
                    title="For Businesses"
                    text="Reliable recruitment & staffing solutions."
                  />

                  <HeroFeature
                    icon={Users}
                    title="For Candidates"
                    text="Professional opportunities without job-seeker fees."
                  />

                  <HeroFeature
                    icon={Globe2}
                    title="Professional Support"
                    text="Dedicated support throughout the recruitment journey."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICE HIGHLIGHTS
      ========================================================= */}
      <section className="bg-[#080808] px-5 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <HighlightCard
            icon={Users}
            title="Top Talent"
            text="Connect your business with skilled and suitable candidates."
          />

          <HighlightCard
            icon={BriefcaseBusiness}
            title="Staffing Solutions"
            text="Workforce solutions designed around your operational requirements."
          />

          <HighlightCard
            icon={ShieldCheck}
            title="Professional Support"
            text="A transparent and professional recruitment experience."
          />
        </div>
      </section>

      {/* =========================================================
          MAIN SECTION
      ========================================================= */}
      <section className="relative bg-[#080808] px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[300px_minmax(0,1fr)]">
          {/* =====================================================
              SIDEBAR
          ===================================================== */}
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
              COMPACT FORM
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
              {/* SUCCESS */}
              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-green-600"
                  />

                  <div>
                    <p className="text-sm font-bold text-green-800">
                      Requirement submitted successfully.
                    </p>

                    <p className="mt-0.5 text-xs text-green-700">
                      Our HR team will review your requirement and get back to
                      you.
                    </p>
                  </div>
                </div>
              )}

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
                  onClick={() => fileInputRef.current?.click()}
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
                  className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#E1C562] px-6 text-sm font-bold text-[#080808] shadow-lg shadow-[#E1C562]/10 transition hover:-translate-y-0.5 hover:bg-[#D4B653]"
                >
                  Submit Requirement

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="relative overflow-hidden border-t border-[#E1C562]/15 bg-[#080808]">
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

              <p className="mt-2 max-w-2xl text-sm text-white/45">
                Share your manpower requirements with our team and let us help
                you build the workforce your business needs.
              </p>
            </div>

            <a
              href="#hr-enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-[#E1C562] px-6 py-3 text-sm font-bold text-[#080808] transition hover:-translate-y-0.5 hover:bg-[#D4B653]"
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
        <p className="text-xs font-semibold text-white">{title}</p>

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

      <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>

      <p className="mt-1.5 text-xs leading-5 text-white/40">{text}</p>
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
        <h3 className="text-sm font-semibold text-[#080808]">{title}</h3>

        <p className="mt-0.5 text-xs leading-5 text-black/45">{text}</p>
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
      <Icon size={15} className="shrink-0 text-[#E1C562]" />
      <span>{text}</span>
    </a>
  );
}

/* =============================================================
   FORM SECTION
============================================================= */

function FormSection({ title, description, children }) {
  return (
    <div className="border-b border-black/10 pb-8">
      <div className="mb-5">
        <h3 className="text-base font-bold text-[#080808]">{title}</h3>

        <p className="mt-1 text-xs text-black/40">{description}</p>
      </div>

      {children}
    </div>
  );
}


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
          <span className="ml-1 text-[#B89B3E]">*</span>
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

/* =============================================================
   FORM SELECT
============================================================= */

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
          <option value="">Select option</option>

          {options.map((option) => (
            <option key={option} value={option}>
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
          <span className="ml-1 text-[#B89B3E]">*</span>
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

