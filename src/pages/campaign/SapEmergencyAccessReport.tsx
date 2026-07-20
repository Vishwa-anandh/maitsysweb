import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../../assets/image/Background.webp";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/SEO";
const SapEmergencyAccessReport: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    jobTitle: "",
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      companyName: "",
      jobTitle: "",
    });
    setIsSubmitted(false);

    navigate("/");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const companyTrimmed = formData.companyName.trim();
    const jobTitleTrimmed = formData.jobTitle.trim();

    if (
      nameTrimmed.length > 50 ||
      emailTrimmed.length > 50 ||
      companyTrimmed.length > 50 ||
      jobTitleTrimmed.length > 50
    ) {
      alert("All fields must be less than 50 characters.");
      return;
    }

    if (!validateEmail(emailTrimmed)) {
      alert("Please enter a valid business email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://apidevrequirementhub.maitsys.com/api/maitsys-website/sap-report-access`,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameTrimmed,
            email: emailTrimmed,
            companyName: companyTrimmed,
            jobTitle: jobTitleTrimmed,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const link = document.createElement("a");
      link.href = "/sap-report.pdf";
      link.download = "Maitsys_SAP_Emergency_Access_Report_2026.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      // ✅ Show Thank You Page
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative min-h-screen bg-slate-50/50">
      <Seo
        {...{
          title:
            "State of SAP Emergency Access & Compliance Report 2026 | Maitsys",
          description:
            "Download the 2026 State of SAP Emergency Access & Compliance Report. Uncover hidden risks in your SAP environment, benchmark your Firefighter controls, and close critical compliance gaps.",
          keywords: [
            "SAP emergency access report",
            "SAP firefighter audit",
            "SAP compliance report 2026",
            "SAP GRC benchmark",
            "firefighter access controls",
          ],
          url: "/blog/sap-emergency-access-compliance-report",
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt:
            "State of SAP Emergency Access & Compliance Report 2026 by Maitsys",
          type: "website",
        }}
      />
      {/* Absolute Background Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Localized Glows */}
        <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.15),transparent_70%)] blur-[100px]" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_80%_40%,rgba(173,216,230,0.15),transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,white_30%,transparent_80%)]" />
      </div>

      <main className="relative pt-4 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-2 md:mt-4">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center space-y-10 py-20 min-h-[60vh] text-center"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-green-200/50">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                    Thank You, {formData.name.split(" ")[0]}!
                  </h2>
                  <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Your exclusive report is ready and downloading now.{" "}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={resetForm}
                    className="text-red-600 font-bold hover:underline"
                  >
                    ← Home
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
              >
                {/* Left Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative space-y-8 flex flex-col items-start text-start"
                >
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-gray-900 leading-[1.3] tracking-tight">
                      68% of Organizations Fail <br />
                      SAP Firefighter Audits <br />
                      Are You One of Them?
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                      State of SAP Emergency Access & Compliance Report 2026
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl text-start">
                      Uncover hidden risks in your SAP environment, benchmark
                      your Firefighter controls, and learn how leading
                      enterprises are closing critical compliance gaps.
                    </p>
                  </div>

                  <div
                    onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                    className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer group"
                  >
                    <span className="text-xl">👉</span>
                    <span className="group-hover:underline transition-all">
                      Download the Report & Assess Your Risk in Minutes
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      What You'll Get:
                    </h3>
                    <ul className="space-y-4 ml-2">
                      {[
                        "Industry benchmarks on SAP Firefighter usage & audit performance",
                        "Top compliance risks impacting SOX, GDPR & internal audits",
                        "Real audit failure insights & risk patterns",
                        "Actionable strategies to strengthen emergency access controls",
                      ].map((item, i) => (
                        <li
                          key={i + "index"}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-md bg-red-50 flex items-center justify-center border border-red-100 shadow-sm">
                            <svg
                              className="w-3.5 h-3.5 text-red-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3.5"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-[15px] font-medium leading-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-red-50/50 border-l-4 border-red-600 p-8 rounded-r-2xl max-w-lg"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-start">
                      This report is designed for:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                      {[
                        "SAP Security & GRC Leaders",
                        "CIOs & IT Decision Makers",
                        "Internal Audit & Compliance Teams",
                        "SAP Basis & Risk Management Professionals",
                      ].map((item, i) => (
                        <li
                          key={i + "index"}
                          className="flex items-center gap-2.5 text-gray-700 text-[14px] font-medium"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-red-600 flex-shrink-0"
                            title="square bullet"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Right Form Column - Sticky */}
                <div ref={formRef} className="lg:sticky lg:top-[72px] z-20 self-start">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col items-start"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-8 leading-tight">
                      State of SAP Emergency Access & Compliance Report 2026
                    </h3>
                    <form className="space-y-5 w-full" onSubmit={handleSubmit}>
                      <div className="space-y-2 flex flex-col items-start px-2">
                        <label
                          htmlFor="name"
                          className="text-[15px] font-bold text-gray-900"
                        >
                          Name: <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2 flex flex-col items-start px-2">
                        <label
                          htmlFor="email"
                          className="text-[15px] font-bold text-gray-900"
                        >
                          Business Email:{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your business email"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2 flex flex-col items-start px-2">
                        <label
                          htmlFor="companyName"
                          className="text-[15px] font-bold text-gray-900"
                        >
                          Company Name: <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          placeholder="Enter your company name"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2 flex flex-col items-start px-2">
                        <label
                          htmlFor="jobTitle"
                          className="text-[15px] font-bold text-gray-900"
                        >
                          Job Title: <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          placeholder="Enter your job title"
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all placeholder:text-gray-400 text-[15px]"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-red-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? "Processing..." : "Access the Report"}
                      </button>

                      <p className="text-[11px] text-gray-500 mt-4 leading-relaxed text-start px-2">
                        By submitting this form, you agree to receive
                        communications from MAITSYS. You can unsubscribe at any
                        time.
                      </p>
                    </form>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default SapEmergencyAccessReport;
