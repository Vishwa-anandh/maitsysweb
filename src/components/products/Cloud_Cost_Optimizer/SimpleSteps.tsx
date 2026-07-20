import React, { useEffect, useRef, useState } from "react";

type Step = {
  no: number;
  icon: React.ReactNode; // emoji or simple text icon
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    no: 1,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5286 6.30084C25.0302 7.48484 25.9428 9.14984 26.1155 10.9212L26.1263 11.0862L26.4038 11.1247C27.5895 11.317 28.674 11.9085 29.4777 12.8011C30.2815 13.6938 30.7564 14.8341 30.8238 16.0334L30.833 16.3232C30.8297 17.7208 30.2717 19.0598 29.2816 20.0462C28.2915 21.0325 26.9504 21.5854 25.5528 21.5834H20.0413L20.0429 23.3887C20.6935 23.6186 21.2843 23.9911 21.7722 24.479C22.2601 24.9669 22.6327 25.5578 22.8626 26.2084H32.3747C32.7835 26.2084 33.1757 26.3708 33.4648 26.6599C33.7539 26.949 33.9163 27.3412 33.9163 27.75C33.9163 28.1589 33.7539 28.5511 33.4648 28.8402C33.1757 29.1293 32.7835 29.2917 32.3747 29.2917H22.8626C22.5441 30.1944 21.9534 30.9761 21.172 31.529C20.3906 32.0819 19.4569 32.3788 18.4997 32.3788C17.5424 32.3788 16.6088 32.0819 15.8273 31.529C15.0459 30.9761 14.4553 30.1944 14.1368 29.2917H4.62467C4.2158 29.2917 3.82367 29.1293 3.53455 28.8402C3.24543 28.5511 3.08301 28.1589 3.08301 27.75C3.08301 27.3412 3.24543 26.949 3.53455 26.6599C3.82367 26.3708 4.2158 26.2084 4.62467 26.2084H14.1383C14.368 25.5575 14.7405 24.9663 15.2284 24.4782C15.7163 23.99 16.3073 23.6172 16.958 23.3871V21.5834H12.7338C9.1248 21.5834 6.16634 18.7683 6.16634 15.2579C6.16634 12.173 8.44955 9.62313 11.4543 9.05117L11.5868 9.02805L11.6624 8.85538C12.4548 7.12255 13.9872 5.75663 15.9112 5.08292L16.2535 4.97192C18.7618 4.2165 21.5244 4.716 23.5286 6.30084Z"
          fill="#155DFC"
        />
      </svg>
    ),
    title: "Connect Your Cloud Account",
    description:
      "Link your AWS, Azure, or GCP accounts with secure one-click integration. We use read-only access to ensure your infrastructure remains protected.",
  },
  {
    no: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9414 14.78C19.9422 14.9752 20.0201 15.1622 20.1581 15.3002C20.2962 15.4382 20.4831 15.5161 20.6783 15.5169H34.6874C34.6874 11.606 33.1339 7.85531 30.3684 5.08989C27.603 2.32447 23.8523 0.770874 19.9414 0.770874V14.78Z"
          fill="#FF808C"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.3746 28.8939C31.7451 27.5257 32.8317 25.9001 33.5717 24.1105C34.3117 22.3209 34.6906 20.4026 34.6867 18.4661H20.6775C20.2721 18.4661 20.1749 18.7004 20.4617 18.9871L30.3746 28.8939Z"
          fill="#C9F7CA"
        />
        <path
          d="M30.9992 18.4661C30.6101 21.2814 29.4102 23.9228 27.5459 26.068L30.3718 28.8939C31.7429 27.526 32.8299 25.9004 33.5705 24.1108C34.3111 22.3212 34.6905 20.4028 34.6869 18.4661H30.9992Z"
          fill="#78EB7B"
        />
        <path
          d="M30.3746 28.8939C31.7451 27.5257 32.8317 25.9001 33.5717 24.1105C34.3117 22.3209 34.6906 20.4026 34.6867 18.4661H20.6775C20.2721 18.4661 20.1749 18.7004 20.4617 18.9871L30.3746 28.8939Z"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5165 5.19543C13.0914 5.19545 10.7038 5.79353 8.56515 6.93672C6.42647 8.0799 4.60273 9.7329 3.25549 11.7493C1.90825 13.7657 1.0791 16.0832 0.841475 18.4965C0.603851 20.9099 0.965092 23.3446 1.8932 25.5851C2.82131 27.8255 4.28763 29.8024 6.16229 31.3407C8.03694 32.8791 10.2621 33.9314 12.6405 34.4043C15.019 34.8773 17.4774 34.7564 19.798 34.0523C22.1186 33.3482 24.2297 32.0826 25.9443 30.3678L16.0376 20.461C15.7256 20.1133 15.5418 19.6695 15.5165 19.203V5.19543Z"
          fill="#FFF9BF"
        />
        <path
          d="M8.14306 26.9159C6.32797 25.8677 4.75761 24.444 3.53702 22.7401C2.31642 21.0362 1.47372 19.0912 1.06526 17.0354C0.445343 20.1373 0.839294 23.3562 2.18895 26.2171C3.5386 29.0779 5.77241 31.4289 8.56055 32.9229C11.3487 34.4169 14.5433 34.9748 17.6728 34.5142C20.8023 34.0535 23.7007 32.5987 25.9401 30.3646L22.6255 27.0501C20.4041 28.2762 17.9038 28.9081 15.3667 28.8846C12.8295 28.8611 10.3413 28.183 8.14306 26.9159Z"
          fill="#FFEF5E"
        />
        <path
          d="M15.5165 5.19543C13.0914 5.19545 10.7038 5.79353 8.56515 6.93672C6.42647 8.0799 4.60273 9.7329 3.25549 11.7493C1.90825 13.7657 1.0791 16.0832 0.841475 18.4965C0.603851 20.9099 0.965092 23.3446 1.8932 25.5851C2.82131 27.8255 4.28763 29.8024 6.16229 31.3407C8.03694 32.8791 10.2621 33.9314 12.6405 34.4043C15.019 34.8773 17.4774 34.7564 19.798 34.0523C22.1186 33.3482 24.2297 32.0827 25.9443 30.3678L16.0376 20.461C15.7256 20.1133 15.5418 19.6695 15.5165 19.203V5.19543Z"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Analyze Your Spending",
    description:
      "Our AI engine analyzes your cloud usage patterns, identifies inefficiencies, and spots opportunities for cost optimization across all services.",
  },
  {
    no: 3,
    icon: (
      <svg
        width="31"
        height="34"
        viewBox="0 0 31 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.9718 18.1108C28.0544 16.5546 28.708 14.7406 28.8667 12.8515C29.0255 10.9624 28.6837 9.06477 27.876 7.3497C27.0682 5.63464 25.8229 4.16262 24.2654 3.08182C22.7079 2.00103 20.8931 1.34959 19.0038 1.19309C17.1146 1.03659 15.2174 1.38054 13.5032 2.19033C11.7891 3.00011 10.3186 4.24716 9.23962 5.80594C8.16066 7.36471 7.51136 9.18021 7.35709 11.0697C7.20281 12.9592 7.549 14.856 8.3608 16.5691"
          stroke="#16A34A"
          strokeWidth="2.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1146 7.31913C16.411 7.31913 15.0312 8.35513 15.0312 9.63163C15.0312 10.9081 16.411 11.9441 18.1146 11.9441C19.8181 11.9441 21.1979 12.9801 21.1979 14.2566C21.1979 15.5331 19.8181 16.5691 18.1146 16.5691M18.1146 7.31913C19.4558 7.31913 20.5997 7.96201 21.0222 8.8608M18.1146 7.31913V5.77747M18.1146 16.5691C16.7733 16.5691 15.6294 15.9263 15.207 15.0275M18.1146 16.5691V18.1108"
          stroke="#16A34A"
          strokeWidth="2.3125"
          strokeLinecap="round"
        />
        <path
          d="M1.15625 19.6525H4.84854C5.30179 19.6525 5.74888 19.7542 6.15433 19.9515L9.30242 21.4747C9.70788 21.6705 10.155 21.7723 10.6097 21.7723H12.2162C13.7702 21.7723 15.0312 22.9917 15.0312 24.4964C15.0312 24.558 14.9896 24.6105 14.9295 24.6274L11.0121 25.7112C10.3092 25.9054 9.55967 25.8375 8.90312 25.52L5.53767 23.892M15.0312 23.5066L22.1121 21.3313C22.7286 21.1422 23.389 21.1526 23.9992 21.3611C24.6094 21.5695 25.1381 21.9654 25.51 22.4922C26.0788 23.2785 25.8476 24.407 25.0182 24.8849L13.4325 31.5711C13.0703 31.7807 12.6691 31.9143 12.2535 31.9639C11.8379 32.0135 11.4166 31.9779 11.0152 31.8594L1.15625 28.9333"
          stroke="#16A34A"
          strokeWidth="2.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Secure Credential Delivery",
    description:
      "Approved users receive time-bound credentials securely without exposing passwords to administrators.",
  },
];

const SimpleSteps: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="bg-[#F8F9FA] ">
      <div className=" mx-auto px-4 sm:px-6 py-4">
        {/* Heading */}
        <div
          className={[
            "text-center",
            inView ? "animate-fadeUp" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            How Maitsys Access Governance Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            A streamlined process from request to monitoring
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={s.no}
              style={{ animationDelay: `${idx * 120}ms` }}
              className={[
                "group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]",
                inView ? "animate-fadeUp" : "opacity-0 translate-y-4",
              ].join(" ")}
            >
              {/* Top row: number badge + icon */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm">
                  {s.no}
                </div>

                <div className="text-2xl leading-none">{s.icon}</div>
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {s.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {s.description}
              </p>

              {/* subtle hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-red-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SimpleSteps;
