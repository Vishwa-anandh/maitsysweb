import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/image/image12.webp";
import { useLocation } from "react-router-dom";
const CareersForm: React.FC = () => {
  const location = useLocation();
  const applyRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const scrollWithOffset = (element: HTMLElement, offset: number = -120) => {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (location.pathname === "/careers#apply-now") {
      if (applyRef.current) scrollWithOffset(applyRef.current);
    } else if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) scrollWithOffset(element);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const request = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.coverLetter,
        submissionType: "career",
        jobTitle: formData.position,
      };
      const res = await fetch(`${import.meta.env.VITE_API}/careers/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request), // ✅ must stringify
      });

      if (!res.ok) {
        throw new Error("Failed to submit application");
      }

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to submit application");
      }

      alert("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section
      className="w-full pt-2 pb-10 md:pt-4 md:pb-12 px-4 md:px-8"
      style={{
        background: `
      radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%),
      url(${backgroundImage})
    `,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="relative z-10   sm:px-6 lg:px-8 max-w-8xl"
        id={`apply-now`}
        ref={applyRef}
      >
        <div className="pt-0 pb-6 w-full ">
          <h3 className="text-4xl md:text-6xl font-bold text-red-500 px-2 md:px-8">
            Apply Now!
          </h3>

          {/* Application Form */}
          <form onSubmit={handleSubmit} className="p-2 md:p-8 space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-black font-semibold text-sm"
                    >
                      Full Name <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-black font-semibold text-sm"
                    >
                      Email Address <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      maxLength={50}
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="off"
                      required
                      className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-black font-semibold text-sm"
                    >
                      Phone Number <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      maxLength={15}
                      minLength={10}
                      onChange={handleInputChange}
                      required
                      autoComplete="off"
                      className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="text-black font-semibold text-sm"
                    >
                      Position <span className={`text-red-600`}>*</span>
                    </label>

                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-400"
                    >
                      <option value="" hidden>
                        Select your domain
                      </option>

                      <option value="SAP BTP Developer">
                        SAP BTP Developer
                      </option>
                      <option value="SAP BTP Admin">SAP BTP Admin</option>
                      <option value="HR">HR</option>
                      <option value="FrontEnd Developer">
                        FrontEnd Developer
                      </option>
                      <option value="BackEnd Developer">
                        BackEnd Developer
                      </option>
                      <option value="Full Stack Developer">
                        Full Stack Developer
                      </option>
                      <option value="AI Solutions Architect">
                        AI Solutions Architect
                      </option>
                      <option value="Cloud Solutions Architect">
                        Cloud Solutions Architect
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-2">
                  <label
                    htmlFor="coverLetter"
                    className="text-black font-semibold text-sm"
                  >
                    Professional Summary{" "}
                    <span className={`text-red-600`}>*</span>
                  </label>
                  <textarea
                    name="coverLetter"
                    id="coverLetter"
                    value={formData.coverLetter}
                    maxLength={250}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-400"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>
                <div className={`w-full flex justify-end items-center`}>
                  <button
                    disabled={loading}
                    type={`submit`}
                    className="w-fit bg-red-600 hover:bg-white focus:ring-4 focus:ring-red-700 border border-logocolor text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 hover:text-black flex items-center justify-center gap-3 group/btn disabled:cursor-not-allowed"
                  >
                    <span>
                      {loading ? "Loading..." : "Submit Application!"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Company Contact Information Sidebar */}
              <div className="lg:col-span-1">
                <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                  <h4 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                    Contact Information
                  </h4>

                  <div className="space-y-6">
                    {/* Phone Numbers */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group">
                        <svg
                          width="23"
                          height="24"
                          viewBox="0 0 23 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 11H12L8 13V3C8 1.89543 8.89543 1 10 1H20C21.1046 1 22 1.89543 22 3V9C22 10.1046 21.1046 11 20 11Z"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 3H3C1.89543 3 1 3.89543 1 5V21C1 22.1046 1.89543 23 3 23H14C15.1046 23 16 22.1046 16 21V14"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          <h5 className="text-black font-semibold mb-1">
                            Phone Number
                          </h5>
                          <div className="space-y-1">
                            <a
                              href="tel:9784722177"
                              target={`_blank`}
                              className="text-black hover:text-blue-400  hover:underline  transition-colors duration-300 block"
                            >
                              +1 (978) 472-2177
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Email Addresses */}
                      <div className="flex items-start gap-3 group">
                        <svg
                          width="24"
                          height="20"
                          viewBox="0 0 24 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 5L12 12L5 5"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            x="1"
                            y="1"
                            width="22"
                            height="18"
                            rx="2"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 13L5 15"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 13L19 15"
                            stroke="#DC2626"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          <h5 className="text-black font-semibold mb-1">
                            Email Addresses
                          </h5>
                          <div className="space-y-1">
                            <a
                              href="mailto:contact@maitsys.com"
                              target={`_blank`}
                              className="text-black hover:text-blue-400 hover:underline transition-colors duration-300 block"
                            >
                              contact@maitsys.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Quick Support */}
                    <div className="border-t border-white/10 pt-6">
                      <h5 className="text-black font-semibold mb-3 flex items-center gap-2">
                        Join Our Journey to Innovation!
                      </h5>
                      <p className="text-gray-500 text-sm mb-4">
                        Join our dynamic team and help us shape the future of
                        technology. At{" "}
                        <span className="font-semibold text-red-500">
                          MAITSYS
                        </span>
                        {", innovation and growth start with you."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareersForm;
