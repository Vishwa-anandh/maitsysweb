import { useState } from "react";
import backgroundImage from "../../assets/image/image12.webp";
const ContactSection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    contactDesc: "",
  });
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

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
        companyName: formData.company,
        subject: formData.contactDesc,
        submissionType: "contact",
      };

      const res = await fetch(`${import.meta.env.VITE_API}/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }

      alert("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        contactDesc: "",
      });
      setIsAgreed(false);
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      className="px-6 py-6 w-full h-screen md:py-8 md:px-8"
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
        // color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div
        className="absolute inset-0 z-0 h-screen rounded-3xl"
        style={{
                 }}
      /> */}

      <div className="grid relative z-10 grid-cols-1 gap-12 mx-auto max-w-6xl lg:grid-cols-2">
        {" "}
        {/* LEFT SIDE */}
        <div className={`space-y-7`}>
          <h1 className="text-5xl font-bold text-black">
            Contact <span className="text-red-500">Us</span>
          </h1>

          <h2 className="text-lg font-normal leading-relaxed text-gray-700 text-pretty">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </h2>

          <div className="space-y-4">
            <h3 className="sr-only">Contact Details</h3>
            <div className="flex gap-3 items-center">
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

              <a
                href={`mailto:contact@maitsys.com`}
                target={`_blank`}
                className="text-gray-900 hover:underline"
              >
                contact@maitsys.com
              </a>
            </div>

            <div className="flex gap-3 items-center">
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

              <a
                href={`tel:9784722177`}
                target={`_blank`}
                className="text-gray-900 hover:underline"
              >
                +1 (978) 472-2177
              </a>
            </div>
          </div>

          {/* SOCIAL ICONS */}
            <div className="flex space-x-3">
              {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/maitsys/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maitsys LinkedIn Jobs page"
              className="group w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 
             hover:bg-[#0A66C2] transition-all duration-300 transform hover:scale-110 border-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-800 transition-colors duration-300 group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.25 8.5h4.5V23H.25V8.5zm7.981 0h4.316v1.978h.062c.602-1.138 2.074-2.34 4.27-2.34C21.23 8.138 23 10.094 23 14.018V23h-4.5v-8.21c0-1.957-.7-3.292-2.447-3.292-1.335 0-2.13.9-2.479 1.771-.128.314-.16.75-.16 1.188V23H8.231V8.5z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Maitsys"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maitsys YouTube channel"
              className="group w-9 h-9 border-2 flex items-center justify-center rounded-full bg-gray-100 
             hover:bg-[#FF0000] transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-800 transition-colors duration-300 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/maitsys/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maitsys Instagram profile"
              className="flex justify-center items-center w-9 h-9 bg-gray-100 rounded-full border-2 transition-all duration-300 transform group hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-800 transition-colors duration-300 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Maitsys/100093011730822/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Maitsys Facebook page"
              className="group w-9 h-9 border-2 flex items-center justify-center rounded-full bg-gray-100 
             hover:bg-[#1877F2] transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-5 h-5 text-gray-800 transition-colors duration-300 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <h2 className="sr-only">Send us a message</h2>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={50}
              minLength={2}
              name="fullName"
              id="fullname"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder=" "
              required
              className="px-4 pt-6 pb-2 w-full text-black bg-white rounded-lg border border-gray-300 peer focus:outline-none focus:ring-red-500 focus:border-red-500"
            />

            <label
              htmlFor="fullname"
              className="absolute top-2 left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              maxLength={50}
              minLength={2}
              id={"company"}
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder=" "
              autoComplete={`off`}
              required
              className="px-4 pt-6 pb-2 w-full text-black bg-white rounded-lg border border-gray-300 peer focus:outline-none focus:ring-red-500 focus:border-red-500"
            />

            <label
              htmlFor="company"
              className="absolute top-2 left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              maxLength={50}
              minLength={2}
              id={"email"}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete={`off`}
              placeholder=" "
              required
              className="px-4 pt-6 pb-2 w-full text-black bg-white rounded-lg border border-gray-300 peer focus:outline-none focus:ring-red-500 focus:border-red-500"
            />

            <label
              htmlFor="email"
              className="absolute top-2 left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
            >
              Email <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative w-full">
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="off"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) => {
                const onlyNumber = e.target.value.replaceAll(/\D/g, "");
                setFormData({ ...formData, phone: onlyNumber });
              }}
              onKeyDown={(e) => {
                const allowedKeys = [
                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "Tab",
                ];

                if (allowedKeys.includes(e.key)) return;

                if (!/^\d$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              required
              maxLength={15}
              minLength={10}
              placeholder=" "
              className="px-4 pt-6 pb-2 w-full text-black bg-white rounded-lg border border-gray-300 peer focus:outline-none focus:ring-red-500 focus:border-red-500"
            />

            <label
              htmlFor="phone"
              className="absolute top-2 left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative w-full">
            <textarea
              rows={5}
              id="contactDesc"
              name="contactDesc"
              value={formData.contactDesc}
              onChange={handleInputChange}
              placeholder=" "
              autoComplete="off"
              required
              maxLength={250}
              minLength={5}
              className="px-4 pt-6 pb-2 w-full text-black bg-white rounded-lg border border-gray-300 peer focus:outline-none focus:ring-red-500 focus:border-red-500"
            />

            <label
              htmlFor="contactDesc"
              className="absolute top-2 left-4 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
            >
              {"How do you utilize Maitsys services?"}
              <span className="text-red-600">*</span>
            </label>
          </div>

          <div className="p-4 space-y-4 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="flex gap-3 items-start">
              <input
                type="checkbox"
                id="consent"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 text-red-600 rounded border-gray-300 cursor-pointer focus:ring-red-500"
                required
              />
              <label
                htmlFor="consent"
                className="text-xs leading-relaxed text-gray-600 cursor-pointer"
              >
                By checking this box, I consent to receive Conversational SMS
                from Maitsys. Reply STOP to opt-out; Reply HELP for support;
                Message & data rates may apply; Messaging frequency may vary.
                Visit{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  {"  to see our privacy policy "}
                </a>
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  SMS Terms and Conditions.
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !isAgreed}
            className="flex gap-3 justify-center items-center px-6 py-4 w-full font-semibold text-white bg-red-600 rounded-2xl border shadow-lg transition-all duration-300 transform hover:bg-white focus:ring-4 focus:ring-red-700 border-logocolor hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none hover:shadow-blue-500/25 hover:text-black group/btn"
          >
            {loading ? "Loading..." : "Send"}
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
