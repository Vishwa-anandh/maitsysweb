import React from "react";
import Seo from "../components/SEO";
import { motion } from "framer-motion";

const TermsConditions: React.FC = () => {
  return (
    <>
      <Seo
        title="Terms & Conditions | Maitsys"
        description="Review the terms and conditions for using Maitsys website and services, including SMS communication terms and legal disclaimers."
        keywords={[
          "Terms and Conditions",
          "Maitsys Terms",
          "Website Usage Policy",
          "SMS Terms",
          "Legal Disclaimer",
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
              Terms & <span className="text-red-600">Conditions</span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Welcome to Maitsys. By accessing our website, you agree to comply
              with these terms.
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
                By accessing or using our website and services, you agree to
                comply with and be bound by the following Terms & Conditions. If
                you do not agree with these terms, please do not use our website
                or services.
              </p>

              {/* 1. Use of Website */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 1.
                  Use of Website
                </h2>
                <p className="mb-6">
                  You agree to use this website only for lawful purposes and in
                  accordance with these Terms & Conditions. You agree not to:
                </p>
                <ul className="grid gap-4 md:grid-cols-2">
                  {[
                    "Violate any applicable laws or regulations",
                    "Attempt unauthorized access to systems or data",
                    "Disrupt website functionality",
                    "Use the website for fraudulent or harmful activities",
                  ].map((item, idx) => (
                    <li
                      key={idx + "index"}
                      className="flex gap-3 items-start p-4 text-sm list-none bg-gray-50 rounded-xl"
                    >
                      <span className="text-red-600">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 2. Intellectual Property */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 2.
                  Intellectual Property
                </h2>
                <p className="mb-4">
                  All content on this website, including text, graphics, logos,
                  images, software, and branding, is the property of Maitsys or
                  its licensors and is protected by applicable intellectual
                  property laws.
                </p>
                <p className="p-4 text-sm text-red-800 bg-red-50 rounded-xl border border-red-100">
                  You may not reproduce, distribute, or modify website content
                  without prior written permission.
                </p>
              </section>

              {/* 3. Disclaimer */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 3.
                  Disclaimer
                </h2>
                <p className="mb-4">
                  The information provided on this website is for general
                  informational purposes only. We make no warranties regarding:
                </p>
                <ul className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-4">
                  {[
                    "Accuracy",
                    "Completeness",
                    "Reliability",
                    "Availability",
                  ].map((item, idx) => (
                    <li
                      key={idx + "index"}
                      className="p-3 text-xs font-bold tracking-wider list-none text-center text-gray-500 bg-gray-50 rounded-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-gray-500">
                  Your use of the website is at your own risk.
                </p>
              </section>

              {/* 4. Limitation of Liability */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 4.
                  Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Maitsys shall not be
                  liable for any indirect, incidental, consequential, or special
                  damages arising from your use of this website or services.
                </p>
              </section>

              {/* 5. Third-Party Links */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 5.
                  Third-Party Links
                </h2>
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the content, policies, or practices of
                  external websites.
                </p>
              </section>

              {/* 6. SMS Terms & Conditions */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 6.
                  SMS Terms & Conditions
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Communication Guidelines</h3>
                  <p>
                    By opting in to receive SMS communications from Maitsys, you
                    consent to receive conversational text messages related to
                    customer support and Job Interviews.{" "}
                  </p>

                  <div className="p-6 space-y-3 text-sm text-blue-900 bg-blue-50 rounded-2xl border border-blue-100">
                    <p>• Message frequency may vary.</p>
                    <p>
                      • Message and data rates may apply depending on your
                      carrier plan.
                    </p>
                    <p>
                      • Consent to receive SMS messages is not a condition of
                      purchase.
                    </p>
                    <p>
                      • Supported carriers are not liable for delayed or
                      undelivered messages.
                    </p>
                  </div>

                  <div className="p-6 text-white bg-gray-900 rounded-2xl">
                    <p className="mb-4 font-bold text-red-500">
                      Opt-Out & Help:
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
                        <span>
                          Reply for assistance or contact us via our website.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <p className="py-1 pl-4 text-sm font-medium border-l-2 border-red-500">
                    No mobile information will be shared with third
                    parties/affiliates. All SMS opt-in data and consent
                    information will not be shared with any third parties.
                  </p>
                </div>
              </section>

              {/* 7. Privacy Policy */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 7.
                  Privacy Policy
                </h2>
                <p>
                  Your use of this website is also governed by our Privacy
                  Policy, which describes how we collect, use, and protect your
                  information.
                </p>
              </section>

              {/* 8. Changes to Terms */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 8.
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms & Conditions at any
                  time. Updated versions will be posted on this page with a
                  revised effective date.
                </p>
              </section>

              {/* 9. Governing Law */}
              <section className="mb-12">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <span className="mr-4 w-1 h-8 bg-red-600 rounded-full" /> 9.
                  Governing Law
                </h2>
                <p>
                  These Terms & Conditions shall be governed by and interpreted
                  in accordance with the laws of USA, without regard to conflict
                  of law principles.
                </p>
              </section>

              {/* 10. Contact Information */}
              <section className="pt-12 mt-16 border-t border-gray-100">
                <div className="mb-8">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900">
                    10. Contact Information
                  </h2>
                  <p>
                    If you have any questions regarding these Terms &
                    Conditions, please contact us:
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="p-8 bg-gray-50 rounded-2xl">
                    <p className="mb-4 text-xs font-bold tracking-widest text-gray-600">
                      Direct Contact
                    </p>
                    <ul className="space-y-4">
                      <li className="flex flex-col">
                        <span className="text-xs text-gray-500">Email</span>
                        <a
                          href="mailto:contact@maitsys.com"
                          className="font-bold text-red-600 hover:underline"
                        >
                          contact@maitsys.com
                        </a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-xs text-gray-500">Website</span>
                        <a
                          href="https://www.maitsys.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-red-600 hover:underline"
                        >
                          www.maitsys.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-8 bg-gray-50 rounded-2xl">
                    <p className="mb-4 text-xs font-bold tracking-widest text-gray-600">
                      Office Address
                    </p>
                    <p className="font-medium leading-relaxed text-gray-900">
                      1 Marina Park Drive, Boston, MA 02210.
                      <br />
                      USA
                    </p>
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

export default TermsConditions;

// this is comment