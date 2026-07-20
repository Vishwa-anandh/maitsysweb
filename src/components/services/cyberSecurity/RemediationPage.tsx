import StepsCards from "./StepsCards";
import { motion, type Variants } from "framer-motion";
import tenable from "../../../assets/image/logo/tenable.png";
import qualys from "../../../assets/image/logo/qualys.png";
import rapid7 from "../../../assets/image/logo/rapid7.png";
import microsoft from "../../../assets/image/logo/MICROSOFT.png";
import crowd from "../../../assets/image/logo/crowdStrike.png";
import wiz from "../../../assets/image/logo/wiz.png";
const actions = [
  {
    label: "OS and Application Patching",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.218 2H11.778C11.2476 2 10.7389 2.21071 10.3638 2.58579C9.98876 2.96086 9.77805 3.46957 9.77805 4V4.18C9.77769 4.53073 9.68511 4.87519 9.50959 5.17884C9.33407 5.48248 9.08179 5.73464 8.77805 5.91L8.34805 6.16C8.04401 6.33554 7.69912 6.42795 7.34805 6.42795C6.99698 6.42795 6.65209 6.33554 6.34805 6.16L6.19805 6.08C5.73911 5.81526 5.19389 5.74344 4.68205 5.88031C4.17022 6.01717 3.7336 6.35154 3.46805 6.81L3.24805 7.19C2.98331 7.64893 2.91149 8.19416 3.04836 8.706C3.18522 9.21783 3.51958 9.65445 3.97805 9.92L4.12805 10.02C4.43032 10.1945 4.68167 10.4451 4.8571 10.7468C5.03253 11.0486 5.12594 11.391 5.12805 11.74V12.25C5.12945 12.6024 5.0377 12.949 4.86209 13.2545C4.68649 13.5601 4.43326 13.8138 4.12805 13.99L3.97805 14.08C3.51958 14.3456 3.18522 14.7822 3.04836 15.294C2.91149 15.8058 2.98331 16.3511 3.24805 16.81L3.46805 17.19C3.7336 17.6485 4.17022 17.9828 4.68205 18.1197C5.19389 18.2566 5.73911 18.1847 6.19805 17.92L6.34805 17.84C6.65209 17.6645 6.99698 17.5721 7.34805 17.5721C7.69912 17.5721 8.04401 17.6645 8.34805 17.84L8.77805 18.09C9.08179 18.2654 9.33407 18.5175 9.50959 18.8212C9.68511 19.1248 9.77769 19.4693 9.77805 19.82V20C9.77805 20.5304 9.98876 21.0391 10.3638 21.4142C10.7389 21.7893 11.2476 22 11.778 22H12.218C12.7485 22 13.2572 21.7893 13.6323 21.4142C14.0073 21.0391 14.218 20.5304 14.218 20V19.82C14.2184 19.4693 14.311 19.1248 14.4865 18.8212C14.662 18.5175 14.9143 18.2654 15.218 18.09L15.648 17.84C15.9521 17.6645 16.297 17.5721 16.648 17.5721C16.9991 17.5721 17.344 17.6645 17.648 17.84L17.798 17.92C18.257 18.1847 18.8022 18.2566 19.314 18.1197C19.8259 17.9828 20.2625 17.6485 20.528 17.19L20.748 16.8C21.0128 16.3411 21.0846 15.7958 20.9477 15.284C20.8109 14.7722 20.4765 14.3356 20.018 14.07L19.868 13.99C19.5628 13.8138 19.3096 13.5601 19.134 13.2545C18.9584 12.949 18.8667 12.6024 18.868 12.25V11.75C18.8667 11.3976 18.9584 11.051 19.134 10.7455C19.3096 10.4399 19.5628 10.1862 19.868 10.01L20.018 9.92C20.4765 9.65445 20.8109 9.21783 20.9477 8.706C21.0846 8.19416 21.0128 7.64893 20.748 7.19L20.528 6.81C20.2625 6.35154 19.8259 6.01717 19.314 5.88031C18.8022 5.74344 18.257 5.81526 17.798 6.08L17.648 6.16C17.344 6.33554 16.9991 6.42795 16.648 6.42795C16.297 6.42795 15.9521 6.33554 15.648 6.16L15.218 5.91C14.9143 5.73464 14.662 5.48248 14.4865 5.17884C14.311 4.87519 14.2184 4.53073 14.218 4.18V4C14.218 3.46957 14.0073 2.96086 13.6323 2.58579C13.2572 2.21071 12.7485 2 12.218 2Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Configuration Hardening",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Firewall and Setting Enforcement",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Cloud and Container Fixes",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8305 2.18011C12.5699 2.06126 12.2868 1.99976 12.0005 1.99976C11.7141 1.99976 11.431 2.06126 11.1705 2.18011L2.60045 6.08011C2.423 6.15836 2.27213 6.28651 2.16621 6.44897C2.0603 6.61143 2.00391 6.80118 2.00391 6.99511C2.00391 7.18905 2.0603 7.3788 2.16621 7.54126C2.27213 7.70371 2.423 7.83187 2.60045 7.91011L11.1805 11.8201C11.441 11.939 11.7241 12.0005 12.0105 12.0005C12.2968 12.0005 12.5799 11.939 12.8405 11.8201L21.4205 7.92011C21.5979 7.84187 21.7488 7.71371 21.8547 7.55126C21.9606 7.3888 22.017 7.19905 22.017 7.00511C22.017 6.81118 21.9606 6.62143 21.8547 6.45897C21.7488 6.29651 21.5979 6.16836 21.4205 6.09011L12.8305 2.18011Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12C1.99953 12.1913 2.05392 12.3787 2.15672 12.5399C2.25952 12.7012 2.40642 12.8297 2.58 12.91L11.18 16.82C11.4392 16.9374 11.7205 16.9981 12.005 16.9981C12.2895 16.9981 12.5708 16.9374 12.83 16.82L21.41 12.92C21.587 12.8404 21.737 12.7111 21.8418 12.5477C21.9466 12.3844 22.0015 12.1941 22 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17C1.99953 17.1913 2.05392 17.3787 2.15672 17.5399C2.25952 17.7012 2.40642 17.8297 2.58 17.91L11.18 21.82C11.4392 21.9374 11.7205 21.9981 12.005 21.9981C12.2895 21.9981 12.5708 21.9374 12.83 21.82L21.41 17.92C21.587 17.8404 21.737 17.7111 21.8418 17.5477C21.9466 17.3844 22.0015 17.1941 22 17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Controls for Unpatchable Systems",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.06251 12.3481C1.97916 12.1236 1.97916 11.8766 2.06251 11.6521C2.87421 9.68397 4.25202 8.00116 6.02128 6.81701C7.79053 5.63287 9.87155 5.00073 12.0005 5.00073C14.1295 5.00073 16.2105 5.63287 17.9797 6.81701C19.749 8.00116 21.1268 9.68397 21.9385 11.6521C22.0218 11.8766 22.0218 12.1236 21.9385 12.3481C21.1268 14.3163 19.749 15.9991 17.9797 17.1832C16.2105 18.3674 14.1295 18.9995 12.0005 18.9995C9.87155 18.9995 7.79053 18.3674 6.02128 17.1832C4.25202 15.9991 2.87421 14.3163 2.06251 12.3481Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Identity & Access Control Fixes",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0202 11.67 21.94C7.5 20.5 4 18 4 13V5.99996C4 5.73474 4.10536 5.48039 4.29289 5.29285C4.48043 5.10532 4.73478 4.99996 5 4.99996C7 4.99996 9.5 3.79996 11.24 2.27996C11.4519 2.09896 11.7214 1.99951 12 1.99951C12.2786 1.99951 12.5481 2.09896 12.76 2.27996C14.51 3.80996 17 4.99996 19 4.99996C19.2652 4.99996 19.5196 5.10532 19.7071 5.29285C19.8946 5.48039 20 5.73474 20 5.99996V13Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const tools = [
  { name: "Tenable", image: tenable },
  { name: "Qualys", image: qualys },
  { name: "Rapid7", image: rapid7 },
  { name: "Microsoft Defender", image: microsoft },
  { name: "CrowdStrike Spotlight", image: crowd },
  { name: "Wiz & Cloud Platforms", image: wiz },
];
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const RemediationPage: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-900 bg-white">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center px-6 pt-4 pb-4 text-center"
      >
        <motion.span
          variants={item}
          className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5 mt-6 md:mt-8"
        >
          Our Difference
        </motion.span>

        <motion.h1
          variants={item}
          className="mb-4 text-4xl font-bold leading-tight text-red-500 md:text-6xl"
        >
          Maitsys performs
          <br />
          the remediation.
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 max-w-xl text-base leading-relaxed text-gray-500"
        >
          We don't just advise; we work directly with your IT, infrastructure,
          cloud, and application teams to implement fixes and prove closure.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-red-600 transition"
          >
            We Fix It
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-50 transition"
          >
            Not Just Recommend
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.span
        variants={item}
        className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5 mt-8 md:mt-10"
      >
        What We Actually Do
      </motion.span>
      <motion.h1
        variants={item}
        className="mb-4 text-2xl font-bold leading-tight text-black md:text-4xl"
      >
        End-to-end execution
      </motion.h1>

      <StepsCards />

      {/* ── REMEDIATION ACTIONS ── */}
      <section className="px-4 py-6 mx-auto w-full lg:py-6 max-w-9xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-6 bg-red-600 rounded-2xl"
        >
          <h3 className="mb-6 text-2xl font-extrabold text-center text-white">
            Our Remediation Actions Include:
          </h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-7"
          >
            {actions.map((action, i) => (
              <motion.div
                key={i + "index"}
                variants={item}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex gap-2 items-center px-4 py-3 rounded-xl backdrop-blur transition-all duration-300 bg-black/5 hover:bg-black/10 hover:shadow-lg"
              >
                <div className="shrink-0 mt-0.5">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="p-2.5 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"
                  >
                    {action.icon}
                  </motion.div>
                </div>

                <span className="text-base font-medium leading-snug text-white">
                  {action.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── EXISTING TOOLS ── */}
      <section className="bg-[#F9FAFB] w-full">
        <div className="flex flex-col justify-center items-center px-4 py-4 mx-auto w-full rounded-2xl max-w-9xl lg:px-4 lg:py-4">
          <motion.span
            variants={item}
            className="text-xs font-semibold tracking-widest text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 mb-5 mt-8 md:mt-10"
          >
            Tool-Agnostic
          </motion.span>
          <motion.h1
            variants={item}
            className="mb-4 text-4xl font-bold leading-tight text-center text-black md:text-5xl"
          >
            We work with your existing tools.
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-8 max-w-xl text-base leading-relaxed text-center text-gray-500"
          >
            No rip-and-replace. No lock-in. We remediate vulnerabilities from
            any scanner.
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 px-4 w-full sm:grid-cols-2 md:grid-cols-3"
          >
            {tools.map((tool, i) => (
              <motion.div
                key={i + "index"}
                variants={item}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="flex gap-3 justify-between items-center px-5 py-4 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-red-300 hover:shadow-md"
              >
                <span className="text-base font-semibold text-gray-800">
                  {tool.name}
                </span>

                <img
                  src={tool.image}
                  alt={tool.name}
                  title={tool.name}
                  width={100} 
                  height={24}
                  className="object-contain w-auto h-6"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default RemediationPage;
