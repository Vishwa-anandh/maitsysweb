import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../../assets/image/Background.webp";
import { useNavigate } from "react-router-dom";
import Seo from "../../components/SEO";

const PathToAiImplementation: React.FC = () => {
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
    setFormData({ name: "", email: "", companyName: "", jobTitle: "" });
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
        `${import.meta.env.VITE_API}/report/path-to-ai-implementation-access`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
      link.href = "/path-to-ai-implementation.pdf";
      link.download = "Maitsys_Path_To_AI_Implementation_Guide.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

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
    <>
      <Seo
        {...{
          title: "The Path to AI Implementation | Maitsys",
          description:
            "Discover the essential steps to implementing AI for measurable, long-term value, and get practical tools and shortcuts to accelerate success.",
          keywords: [
            "AI implementation",
            "AI implementation strategy",
            "AI implementation roadmap",
            "AI adoption strategy",
            "enterprise AI implementation",
            "AI transformation",
            "artificial intelligence implementation",
            "AI for business growth",
            "AI solutions for enterprises",
            "AI consulting services",
            "AI strategy consulting",
            "business AI adoption",
            "AI integration services",
            "AI implementation best practices",
            "AI-driven digital transformation",
            "AI automation solutions",
            "machine learning implementation",
            "generative AI implementation",
            "AI implementation challenges",
            "AI implementation guide",
            "AI tools for business",
            "AI workflow automation",
            "Maitsys AI implementation",
            "Maitsys AI solutions",
            "Maitsys AI consulting",
          ],
          url: "/blog/path-to-ai-implementation", // clean route
          siteName: "Maitsys",
          image: "/maitsys_company.jpg",
          imageAlt: "Maitsys Path to AI Implementation",
          type: "website",
        }}
      />
      <div className="relative min-h-screen bg-slate-50/50">
        <div className="overflow-hidden fixed inset-0 pointer-events-none -z-10">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute top-0 left-0 w-[60%] h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,182,193,0.15),transparent_70%)] blur-[100px]" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(circle_at_80%_40%,rgba(173,216,230,0.15),transparent_70%)] blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,white_30%,transparent_80%)]" />
        </div>

        <main className="relative pt-4 pb-24 min-h-screen">
          <div className="px-4 mx-auto mt-2 max-w-7xl lg:px-8 md:mt-4">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center space-y-10 py-20 min-h-[60vh] text-center"
                >
                  <div className="flex justify-center items-center mx-auto mb-4 w-24 h-24 text-green-600 bg-green-100 rounded-full shadow-xl shadow-green-200/50">
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
                    <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
                      Thank You, {formData.name.split(" ")[0]}!
                    </h2>
                    <p className="mx-auto max-w-lg text-xl leading-relaxed text-gray-600">
                      Your guide is ready and downloading now.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 items-center">
                    <button
                      onClick={resetForm}
                      className="font-bold text-red-600 hover:underline"
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
                  className="grid grid-cols-1 gap-20 items-start lg:grid-cols-2"
                >
                  {/* Left Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex relative flex-col items-start space-y-8 text-start"
                  >
                    <div className="space-y-6">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-[900] text-gray-900 leading-[1.3] tracking-tight">
                        The Path to AI Implementation
                      </h1>
                      <h2 className="text-2xl font-bold text-red-600">
                        Your guide to transforming ambition into action—and
                        action into ROI.
                      </h2>

                      <p className="max-w-xl text-sm leading-relaxed text-gray-600 text-start">
                        Artificial intelligence promises breakthrough gains in
                        efficiency, insight, and innovation—but knowing how to
                        begin can be daunting. This guide maps out the essential
                        steps to move from getting started to achieving
                        measurable results, including how to:
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        formRef.current?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="flex gap-2 items-center font-semibold text-red-600 cursor-pointer group"
                    >
                      <span className="text-xl">👉</span>
                      <span className="transition-all group-hover:underline">
                        Download the Guide
                      </span>
                    </button>

                    <div className="flex flex-col items-start space-y-6 w-full text-start">
                      <div className="flex flex-col gap-3 w-full max-w-xl">
                        {[
                          {
                            title: "Assess AI readiness",
                            desc: "Understand when your people, processes, and data are ready to move forward",
                          },
                          {
                            title:
                              "Connect business priorities to AI use cases",
                            desc: "Identify initiatives with clear value",
                          },
                          {
                            title: "Align stakeholders and select tools",
                            desc: "Gain buy-in and choose the right technology",
                          },
                          {
                            title: "Prepare data and infrastructure",
                            desc: "Establish a solid, AI-ready foundation",
                          },
                          {
                            title: "Scale with confidence",
                            desc: "Measure results and expand success while maintaining trust and compliance",
                          },
                        ].map((item, i) => (
                          <div
                            key={i + "index"}
                            className="flex gap-3 items-start px-5 py-4 rounded-xl border border-gray-200 bg-white/60"
                          >
                            <svg
                              className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4"
                              />
                            </svg>
                            <div>
                              <p className="font-bold text-gray-900 text-[15px]">
                                {item.title}
                              </p>
                              <p className="text-gray-500 text-[13px] leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-red-50/40 border-l-[3.5px] border-red-600 p-8 rounded-2xl max-w-xl w-full">
                        <p className="text-gray-700 text-[15px] leading-relaxed">
                          You'll also get practical{" "}
                          <strong>"shortcuts to success,"</strong> including
                          tools and training to help you overcome common hurdles
                          and accelerate time to value. Whether some initiatives
                          are already underway or you're just getting started,
                          this guide offers a clear roadmap for turning AI
                          ambition into long-term business impact.
                        </p>
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
                      <h3 className="mb-8 text-xl font-bold leading-tight text-gray-900">
                        Get The Path to AI Implementation Guide
                      </h3>
                      <form
                        className="space-y-5 w-full"
                        onSubmit={handleSubmit}
                      >
                        <div className="flex flex-col items-start px-2 space-y-2">
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

                        <div className="flex flex-col items-start px-2 space-y-2">
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

                        <div className="flex flex-col items-start px-2 space-y-2">
                          <label
                            htmlFor="companyName"
                            className="text-[15px] font-bold text-gray-900"
                          >
                            Company Name:{" "}
                            <span className="text-red-600">*</span>
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

                        <div className="flex flex-col items-start px-2 space-y-2">
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
                          {loading ? "Processing..." : "Download the Guide →"}
                        </button>

                        <p className="text-[11px] text-gray-500 mt-4 leading-relaxed text-start px-2">
                          {
                            "By submitting this form, you agree to receive communications from MAITSYS. You can unsubscribe at any time."
                          }
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
    </>
  );
};

export default PathToAiImplementation;
