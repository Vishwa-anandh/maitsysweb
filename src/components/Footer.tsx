import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative text-gray-700 py-16 px-6 lg:px-10 border-t-2 ">
        <div className="relative mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_auto_1fr_1fr_1fr_auto] gap-8 md:gap-10 lg:gap-16">
          {/* --- Left Section --- */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <a
              href="https://www.maitsys.com"
              aria-label="Home"
              className="flex items-center space-x-3"
            >
              <img src="/logo.png" alt="Maitsys" title="Maitsys" width={180} height={40} />
            </a>
            <p className="text-gray-600 leading-relaxed text-start text-lg">
              Our focus on client needs, operational excellence, and return on
              investment has transformed our business and that of our clients.
              We are committed to helping our clients succeed.
            </p>
          </motion.div>

          {/* --- Red Divider --- */}
          <div className="hidden lg:block w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent rounded-full"></div>

          {/* --- Industries --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <p className="text-red-600 font-semibold text-lg mb-4">
              Industries
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>Retail</li>

              <li>Healthcare</li>
              <li>High Tech </li>
              <li> Government</li>
              <li>Transportation</li>
              <li>Manufacturing</li>
              <li>Financial Services</li>
              <li>Energy & Utilities</li>
              <li>Consumer Products</li>
              <li>Chemicals & Life Sciences</li>
            </ul>
          </motion.div>

          {/* --- Services --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <p className="text-red-600 font-semibold text-lg mb-4">Services</p>

            <ul className="space-y-2 text-gray-600">
              <li> AI & Machine Learning</li>
              <li>SAP ECC & S/4HANA</li>
              <li>NetSuite</li>
              <li>Salesforce</li>
              <li>Infrastructure (On-Prem & Cloud)</li>
              <li>Cybersecurity</li>
              <li>Middleware & Integrations</li>
              <li>Agile Development</li>
            </ul>
          </motion.div>

          {/* --- Contact --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <p className="text-red-600 font-semibold text-lg mb-4">
              Contact Us
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>+1 (978) 472-2177</li>
              <li>
                <a
                  href="mailto:contact@maitsys.com"
                  className="hover:text-red-500 transition"
                >
                  contact@maitsys.com
                </a>
              </li>
              <li className="mt-2 text-red-600 font-medium">Global HQ:</li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/gDLGLEv3x9gBYoPp9`}
                  target="_blank"
                  className={`hover:underline`}
                >
                  1 Marina Park Drive, Boston, MA 02210
                </a>{" "}
              </li>
              <li className="mt-2 text-red-600 font-medium">India:</li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/f8fhzozBnojnkx6p7`}
                  target="_blank"
                  className={`hover:underline`}
                >
                  4 Sivasakthi Nagar, 7th Street, Royal Garden, Madurai, TN,
                  India
                </a>
              </li>

              <li className="mt-2 text-red-600 font-medium">Argentina:</li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/95EwXGVoXCj8v4Nx8`}
                  target="_blank"
                  className={`hover:underline`}
                >
                  Avenida del Libertador 2442, Olivos, Buenos Aires Province
                  B1636DSR, AR
                </a>
              </li>

              <li className="mt-2 text-red-600 font-medium">Brazil:</li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/Xun7Ad8dWibHoXCh9`}
                  target="_blank"
                  className={`hover:underline`}
                >
                  Rua Irma Gabriela 51, Cidade Moncoes, Sao Paulo, CEP
                  04571‑130, Sao Paulo, BR
                </a>
              </li>
              <li className="mt-2 text-red-600 font-medium">United Kingdom:</li>
              <li>
                <a
                  href={`https://maps.app.goo.gl/wPZbRnrRcp55u2FN8`}
                  target="_blank"
                  className={`hover:underline`}
                >
                  1st Floor, 42-50 Hersham Rd, Walton-on-Thames KT12 1RZ, United
                  Kingdom
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </footer>

      <hr />

      <motion.div
        className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-4 py-4 md:py-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="py-6 relative text-center text-gray-500 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <span>
            © {new Date().getFullYear()}{" "}
            <a href="/" className="text-red-600 font-semibold">
              MAITSYS.
            </a>{" "}
            All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="hover:text-red-600 transition-colors underline"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline text-gray-300">|</span>
            <a
              href="/terms-conditions"
              className="hover:text-red-600 transition-colors underline"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href="https://www.linkedin.com/company/maitsys/jobs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Maitsys LinkedIn Jobs page"
            className="group w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#0A66C2] transition-all duration-300 transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-800 group-hover:text-white transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
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
            className="group w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 
             hover:bg-[#FF0000] transition-all duration-300 transform hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-gray-800 group-hover:text-white transition-colors duration-300"
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
            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 transform hover:scale-110 
             hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600"
          >
            <svg
              className="w-5 h-5 text-gray-800 transition-colors duration-300 hover:text-white"
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
            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 
             hover:bg-[#1877F2] transition-all duration-300 transform hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-gray-800 transition-colors duration-300 hover:text-white"
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
      </motion.div>
    </>
  );
};

export default Footer;
