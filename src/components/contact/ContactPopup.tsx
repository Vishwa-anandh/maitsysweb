import React, { useState, useEffect } from "react";

const ContactPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    contactDesc: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const API_URL =
    import.meta.env.VITE_API_URL || "https://api.requirementhub.maitsys.com";

  useEffect(() => {
    // Check if the user has already seen the popup on this specific page
    const pageKey = `hasSeenContactPopup_${globalThis.location.pathname}`;
    const hasSeenPopup = sessionStorage.getItem(pageKey);

    if (!hasSeenPopup) {
      const handleScroll = () => {
        // Calculate scroll percentage
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        // If scrolled 80% or more, show popup
        if (scrollPercentage >= 80) {
          setIsOpen(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
      // Check immediately in case the page is already scrolled past 80%
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Run once on mount

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    const pageKey = `hasSeenContactPopup_${globalThis.location.pathname}`;
    sessionStorage.setItem(pageKey, "true");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

      const res = await fetch(`${API_URL}/api/maitsys-website/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (!res.ok) {
        throw new Error("Failed to submit contact form");
      }

      setSuccessMessage("Form submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        contactDesc: "",
      });
      // Close popup shortly after showing success message
      setTimeout(() => {
        handleClose();
        setSuccessMessage(null);
      }, 1500);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      setErrorMessage(msg || "Submission failed. Please try again.");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 md:px-0 transition-opacity">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative animate-fadeindown">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 pr-8">
            Interested in our <span className="text-red-600">Services?</span>
          </h3>
          <p className="text-gray-600 mb-4 text-xs md:text-sm">
            Leave your details and let us know how we can help you with your
            project.
          </p>

          {successMessage && (
            <div className="mb-3 text-sm text-green-800 bg-green-100 p-2 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-3 text-sm text-red-800 bg-red-100 p-2 rounded">
              {errorMessage}
            </div>
          )}

          <form className="space-y-3 w-full" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative w-full">
                <input
                  type="text"
                  maxLength={50}
                  minLength={2}
                  name="fullName"
                  id="popup-fullname"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder=" "
                  required
                  className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <label
                  htmlFor="popup-fullname"
                  className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  maxLength={50}
                  minLength={2}
                  id="popup-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                  placeholder=" "
                  required
                  className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <label
                  htmlFor="popup-email"
                  className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Email <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="relative w-full">
                <input
                  type="text"
                  maxLength={50}
                  minLength={2}
                  id="popup-company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder=" "
                  autoComplete="off"
                  required
                  className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <label
                  htmlFor="popup-company"
                  className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Company Name <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative w-full">
                <input
                  type="tel"
                  inputMode="numeric"
                  autoComplete="off"
                  name="phone"
                  id="popup-phone"
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
                    if (!/^\\d$/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  required
                  maxLength={15}
                  minLength={10}
                  placeholder=" "
                  className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <label
                  htmlFor="popup-phone"
                  className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div className="relative w-full">
              <textarea
                rows={2}
                id="popup-contactDesc"
                name="contactDesc"
                value={formData.contactDesc}
                onChange={handleInputChange}
                placeholder=" "
                autoComplete="off"
                required
                maxLength={250}
                minLength={5}
                className="peer w-full bg-white text-black border border-gray-300 rounded-lg px-4 pt-6 pb-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
              />
              <label
                htmlFor="popup-contactDesc"
                className="absolute left-4 top-2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
              >
                How can we help you? <span className="text-red-600">*</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
