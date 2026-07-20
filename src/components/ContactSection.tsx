import React, { useState } from "react";
import backgroundImage from "../assets/image/animatebg.avif"; // put your uploaded image in src/assets

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  inquiryType: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
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

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    alert(
      "Message sent successfully! We will get back to you within 24 hours.",
    );
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: "general",
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone:",
      details: ["+1 (978) 472-2177"],
      description: "Mon-Fri from 8am to 6pm",
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email:",
      details: ["contact@maitsys.com"],
      description: "Online support 24/7",
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Office:",
      details: [
        "1 Marine Park Drive, Boston, MA 02210",
        "4 Sivasakthi Nagar, Madurai, TN, India",
      ],
      description: "Visit our offices worldwide",
      color: "purple",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Business Hours:",
      details: [
        "Monday - Friday: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
      ],
      description: "Eastern Standard Time",
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-teal-500",
      purple: "from-purple-500 to-pink-500",
      orange: "from-orange-500 to-red-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className=" bg-gradient-to-br from-slate-900 via-black to-slate-900 flex flex-col justify-center items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 mx-auto ">
        {/* Header Section */}
        <div
          className="text-center py-12"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            objectFit: "cover",
            objectPosition: "50% 50%",
            backgroundPosition: "cover",
            backgroundAttachment: "fixed",
            // background-attachment: scroll;
          }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300" />
            </div>
            <span className="text-white/80 text-sm font-semibold tracking-wider">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Talk
            </span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent mx-auto mb-8 rounded-full" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today and let's discuss
            how Maitsys can help you achieve your goals with cutting-edge
            technology solutions.
          </p>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mt-5 mx-auto">
            <p className="text-lg text-white font-semibold italic">
              "Empowering connections that create change."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8 py-10 max-w-[98rem] ">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index + "index"}
                  className="group p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(
                        item.color,
                      )} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <div className="space-y-1 mb-2">
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx + "index"}
                            className="text-gray-300 text-sm leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-gray-400 text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-4">
                  Follow Us:
                </h3>
                <div className="flex space-x-4">
                  {[
                    {
                      name: "https://www.linkedin.com/company/maitsys/jobs/",
                      color: "hover:bg-[#0A66C2]", // LinkedIn blue
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.25 8.5h4.5V23H.25V8.5zm7.981 0h4.316v1.978h.062c.602-1.138 2.074-2.34 4.27-2.34C21.23 8.138 23 10.094 23 14.018V23h-4.5v-8.21c0-1.957-.7-3.292-2.447-3.292-1.335 0-2.13.9-2.479 1.771-.128.314-.16.75-.16 1.188V23H8.231V8.5z" />
                        </svg>
                      ),
                    },
                    {
                      name: "https://www.youtube.com/@Maitsys",
                      color: "hover:bg-[#FF0000]", // YouTube red
                      icon: (
                        <svg
                          className="w-5 h-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "https://www.instagram.com/maitsys/",
                      color:
                        "hover:bg-gradient-to-tr hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5]", // Instagram gradient
                      icon: (
                        <svg
                          className="w-6 h-6 text-white"
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
                      ),
                    },
                    {
                      name: "https://www.facebook.com/people/Maitsys/100093011730822/?mibextid=LQQJ4d",
                      color: "hover:bg-[#1877F2]", // Facebook blue
                      icon: (
                        <svg
                          className="w-6 h-6 text-white"
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
                      ),
                    },
                  ].map((social, index) => (
                    <a
                      href={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index + "index"}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 border border-white/10 bg-white/10 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 w-full ">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                Contact Us!
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-white font-semibold text-sm"
                    >
                      First Name <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-white font-semibold text-sm"
                    >
                      Last Name <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-white font-semibold text-sm"
                    >
                      Email Address <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-white font-semibold text-sm"
                    >
                      Phone Number <span className={`text-red-600`}>*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-white font-semibold text-sm"
                  >
                    Company Name <span className={`text-red-600`}>*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-white font-semibold text-sm"
                  >
                    Subject <span className={`text-red-600`}>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                    placeholder="Brief subject of your message"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-white font-semibold text-sm"
                  >
                    Message <span className={`text-red-600`}>*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, or how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <div
                  className={`w-full flex justify-center lg:justify-end items-center`}
                >
                  <button
                    type={`submit`}
                    className="w-fit bg-logocolor hover:bg-white focus:ring-4 focus:ring-logocolor border border-logocolor text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 hover:text-black flex items-center justify-center gap-3 group/btn"
                  >
                    <span> Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h1 className="text-5xl text-center md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Office
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent mx-auto mb-8 rounded-full" />
            <div className=" w-full flex justify-center">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4002.9525659089386!2d78.17055020034431!3d9.933607686889134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c70063ab2897%3A0x813c1a7565f70c16!2sMAITSYS!5e1!3m2!1sen!2sin!4v1759943524704!5m2!1sen!2sin`}
                className="w-full h-[400px] md:h-[500px] rounded-xl border-0 shadow-md"
                allowFullScreen
                allow="clipboard-write"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAITSYS Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
