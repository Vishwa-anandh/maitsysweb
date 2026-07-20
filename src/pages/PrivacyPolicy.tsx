import React from "react";
import Seo from "../components/SEO";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Seo
        title="Privacy Policy | Maitsys"
        description="Learn how Maitsys handles your personal information, including SMS communication consent, data security, and your privacy rights."
        keywords={[
          "Privacy Policy",
          "Maitsys Privacy",
          "Data Protection",
          "SMS Consent",
          "Cookie Policy",
          "Information Security",
        ]}
        siteName="Maitsys"
        type="website"
      />
      <main className="py-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="px-6 mx-auto max-w-4xl lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Privacy <span className="text-red-600">Policy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              At Maitsys, we value your privacy and are committed to protecting
              your personal information.
            </p>
            <div className="w-24 h-1.5 bg-red-600 mx-auto mt-8 rounded-full"></div>
          </motion.div>

          <article className="space-y-12 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm md:p-10"
            >
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website, use our
                services, or communicate with us, including through SMS/text
                messaging. By using our website or services, you agree to the
                practices described in this Privacy Policy.
              </p>

              {/* 1. Information We Collect */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 1.
                  Information We Collect
                </h2>
                <p className="mb-4 font-medium text-gray-900">
                  We may collect the following types of information:
                </p>

                <div className="grid gap-8 mt-6 md:grid-cols-2">
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <h3 className="mb-3 font-bold text-gray-900">
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Name
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Email address
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Phone number
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Company name
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Job title
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Mailing address
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <h3 className="mb-3 font-bold text-gray-900">
                      Technical Information
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        IP address
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Browser type
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Device information
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Website usage data
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                        Cookies and analytics information
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 mt-8 bg-red-50 rounded-2xl border border-red-100">
                  <h3 className="mb-3 font-bold text-red-900">
                    SMS Information
                  </h3>
                  <p className="mb-4 text-sm">
                    When you opt in to receive SMS communications from us, we
                    may collect:
                  </p>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                      Your mobile phone number
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                      Consent records and opt-in information
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                      Message history and interaction logs
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />{" "}
                      Communication preferences
                    </li>
                  </ul>
                </div>
              </section>

              {/* 2. How We Use Your Information */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 2.
                  How We Use Your Information
                </h2>
                <p className="mb-4">We may use your information to:</p>
                <ul className="grid gap-4 md:grid-cols-2">
                  {[
                    "Provide and manage our services",
                    "Respond to inquiries and support requests",
                    "Send service notifications and updates",
                    "Improve our website and user experience",
                    "Communicate marketing and promotional information",
                    "Deliver SMS/text communications where consent has been provided",
                    "Maintain security and prevent fraud",
                  ].map((item, idx) => (
                    <li
                      key={idx + "index"}
                      className="flex gap-3 items-start p-3 text-sm bg-gray-50 rounded-xl"
                    >
                      <span className="text-red-600 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 3. SMS Communications */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 3.
                  SMS Communications
                </h2>
                <div className="space-y-4">
                  <p>
                    By opting in to receive SMS communications from Maitsys, you
                    consent to receive conversational text messages related to
                    customer support and Job Interviews.
                  </p>

                  <p className="p-4 text-sm text-blue-800 bg-blue-50 rounded-xl border border-blue-100">
                    Message frequency may vary. Message and data rates may apply
                    depending on your mobile carrier plan.
                  </p>
                  <div className="p-6 text-white bg-gray-900 rounded-2xl">
                    <p className="mb-4 font-bold text-red-500">
                      How to Opt Out / Get Help:
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-3 items-center">
                        <span className="bg-red-600 px-2 py-0.5 rounded font-mono text-xs">
                          Stop
                        </span>
                        <span>
                          Reply to any message to opt out at any time.
                        </span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <span className="bg-gray-700 px-2 py-0.5 rounded font-mono text-xs">
                          Help
                        </span>
                        <span>Reply for assistance or visit our website.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Sharing of Information */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 4.
                  Sharing of Information
                </h2>
                <div className="space-y-4">
                  <p>
                    We do not sell, rent, or trade your personal information to
                    third parties.
                  </p>
                  <p>
                    We may share information with trusted service providers who
                    assist us in operating our business, provided they maintain
                    appropriate confidentiality and security standards.
                  </p>
                  <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                    <p className="mb-2 font-bold text-amber-900">
                      Important Note on SMS Data:
                    </p>
                    <p className="text-sm text-amber-800">
                      No mobile information will be shared with third
                      parties/affiliates. All SMS opt-in data and consent
                      information will not be shared with any third parties.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Data Security */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 5.
                  Data Security
                </h2>
                <p>
                  We implement reasonable administrative, technical, and
                  physical safeguards designed to protect your personal
                  information from unauthorized access, disclosure, alteration,
                  or destruction. However, no method of electronic transmission
                  or storage is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              </section>

              {/* 6. Cookies and Tracking Technologies */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 6.
                  Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  Our website may use cookies and similar technologies to:
                </p>
                <ul className="pl-6 mb-4 space-y-2 text-sm list-disc">
                  <li>Improve website functionality</li>
                  <li>Analyze website traffic</li>
                  <li>Enhance user experience</li>
                  <li>Remember user preferences</li>
                </ul>
                <p>
                  You may modify your browser settings to disable cookies if
                  desired.
                </p>
              </section>

              {/* 7. Third-Party Services */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 7.
                  Third-Party Services
                </h2>
                <p>
                  Our website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices or
                  content of external websites.
                </p>
              </section>

              {/* 8. Your Rights and Choices */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 8.
                  Your Rights and Choices
                </h2>
                <p className="mb-4">You may:</p>
                <ul className="space-y-3">
                  {[
                    "Request access to your personal information",
                    "Request correction of inaccurate information",
                    "Request deletion of your information where applicable",
                    "Withdraw consent for marketing communications",
                  ].map((item, idx) => (
                    <li
                      key={idx + "index"}
                      className="flex gap-3 items-center text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us using the information
                  below.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 9.
                  Children's Privacy
                </h2>
                <p>
                  Our services are not directed toward individuals under the age
                  of 13. We do not knowingly collect personal information from
                  children.
                </p>
              </section>

              {/* 10. Changes to This Privacy Policy */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 10.
                  Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically. Updates will
                  be posted on this page with a revised effective date.
                </p>
              </section>

              {/* 11. Contact Information */}
              <section className="pt-12 mt-16 border-t border-gray-100">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    11. Contact Information
                  </h2>
                  <p>
                    If you have any questions regarding this Privacy Policy,
                    please contact us:
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="p-6 text-center bg-gray-50 rounded-2xl">
                    <p className="mb-2 text-xs font-bold tracking-widest text-gray-600">
                      Email Us
                    </p>
                    <a
                      href="mailto:contact@maitsys.com"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      contact@maitsys.com
                    </a>
                  </div>
                  <div className="p-6 text-center bg-gray-50 rounded-2xl">
                    <p className="mb-2 text-xs font-bold tracking-widest text-gray-600">
                      Visit Us
                    </p>
                    <a
                      href="https://www.maitsys.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      www.maitsys.com
                    </a>
                  </div>
                  <div className="p-6 text-center bg-gray-50 rounded-2xl">
                    <p className="mb-2 text-xs font-bold tracking-widest text-gray-600">
                      Call Us
                    </p>
                    <a
                      href="tel:+19784722177"
                      className="text-sm font-medium text-red-600 hover:underline"
                    >
                      +1 (978) 472-2177
                    </a>
                  </div>
                </div>
              </section>
            </motion.div>
          </article>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
