import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../../assets/image/Background.webp";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/SEO";
const SapMigrationAccessReport: React.FC = () => {
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
        `${import.meta.env.VITE_API}/report/sap-migration-report-access`,
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
      link.href = "/sap-migration-report.pdf";
      link.download = "Maitsys_SAP_Migration_Access_Report_2026.pdf";
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
            "State of SAP Migration & Enterprise Transformation 2026 | Maitsys",
          description:
            "Download the State of SAP Migration & Enterprise Transformation 2026 report. Explore key migration trends, common challenges, industry adoption patterns, and strategic priorities shaping SAP transformation.",
          keywords: [
            "SAP migration report",
            "SAP transformation 2026",
            "S/4HANA migration trends",
            "SAP migration strategy",
            "enterprise transformation report",
          ],
          url: "/blog/sap-migration-access-report",
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt:
            "State of SAP Migration & Enterprise Transformation 2026 report by Maitsys",
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
                      Is Your SAP Migration Strategy Ready for the Next Decade?
                    </h1>
                    <h2 className="text-2xl font-bold text-red-600">
                      The State of SAP Migration & Enterprise Transformation
                      2026
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed max-w-xl text-start">
                      SAP migration is no longer just a technical upgrade. It is
                      a business transformation opportunity to simplify
                      processes, modernize architecture and prepare the
                      enterprise for AI-driven operations.{" "}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-xl text-start">
                      Download the report to explore key migration trends,
                      common challenges, industry adoption patterns, and
                      strategic priorities shaping SAP transformation in 2026.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      formRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 text-red-600 font-semibold cursor-pointer group"
                  >
                    <span className="text-xl">👉</span>
                    <span className="group-hover:underline transition-all">
                      Download the Report
                    </span>
                  </button>

                  <div className="space-y-6 flex flex-col items-start text-start w-full">
                    <h3 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
                      <svg
                        className="w-6 h-6 text-red-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Why This Report Matters
                    </h3>

                    <p className="text-gray-600 leading-relaxed max-w-xl text-start text-[15px]">
                      Many SAP programs fail to deliver full business value
                      because migration is treated as an IT project instead of
                      an enterprise transformation initiative.
                    </p>

                    <div className="bg-red-50/40 border-l-[3.5px] border-red-600 p-8 rounded-2xl max-w-xl w-full">
                      <h4 className="text-[16px] font-bold text-gray-900 mb-5 text-start">
                        This report helps SAP leaders answer critical questions:
                      </h4>
                      <ul className="space-y-4">
                        {[
                          "Are we ready for S/4HANA migration?",
                          "Should we choose greenfield, brownfield, or selective transformation?",
                          "How do we reduce risk before migration begins?",
                          "How can we align migration with business outcomes?",
                          "What architecture decisions will support AI, automation, and future scalability?",
                        ].map((item, i) => (
                          <li
                            key={i + "index"}
                            className="flex items-start gap-3 text-gray-700 text-[15px]"
                          >
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                            <span className="font-medium text-left leading-normal">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Right Form Column - Sticky */}
                <div
                  ref={formRef}
                  className="lg:sticky lg:top-[72px] z-20 self-start"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col items-start"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-8 leading-tight">
                      State of SAP Migration & Enterprise Transformation Report
                      2026
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

export default SapMigrationAccessReport;
