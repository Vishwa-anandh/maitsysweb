import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


type Step = {
  no: number;
  icon: React.ReactNode; // emoji or simple text icon
  title: string;
  description: string;
};
type TechCard = {
  title: string;
  desc: string;
  icon: React.ReactNode; // emoji or svg
  bg: string; // tailwind bg
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
        <g clipPath="url(#clip0_613_2782)">
          <path
            d="M21.5837 12.3333H7.19477C6.92219 12.3333 6.66077 12.225 6.46802 12.0323C6.27528 11.8395 6.16699 11.5781 6.16699 11.3055V7.1944C6.16699 6.92182 6.27528 6.6604 6.46802 6.46766C6.66077 6.27491 6.92219 6.16663 7.19477 6.16663H21.5837C21.8562 6.16663 22.1177 6.27491 22.3104 6.46766C22.5032 6.6604 22.6114 6.92182 22.6114 7.1944V11.3055C22.6114 11.5781 22.5032 11.8395 22.3104 12.0323C22.1177 12.225 21.8562 12.3333 21.5837 12.3333ZM8.22255 10.2777H20.5559V8.16051H8.22255V10.2777Z"
            fill="#155DFC"
          />
          <path
            d="M21.5837 14.4711H7.19477C6.92219 14.4711 6.66077 14.5794 6.46802 14.7721C6.27528 14.9648 6.16699 15.2263 6.16699 15.4988V19.5277C6.16699 19.8003 6.27528 20.0617 6.46802 20.2545C6.66077 20.4472 6.92219 20.5555 7.19477 20.5555H18.8703L22.6114 16.7527V15.4988C22.6114 15.2263 22.5032 14.9648 22.3104 14.7721C22.1177 14.5794 21.8562 14.4711 21.5837 14.4711ZM20.5559 18.5H8.22255V16.4444H20.5559V18.5Z"
            fill="#155DFC"
          />
          <path
            d="M11.3673 32.3853V32.3236L11.6962 30.895H4.11122V4.1111H24.6668V14.6458L26.7223 12.7033V3.08332C26.7223 2.81074 26.614 2.54932 26.4213 2.35657C26.2286 2.16383 25.9671 2.05554 25.6946 2.05554H3.08344C2.81086 2.05554 2.54944 2.16383 2.35669 2.35657C2.16395 2.54932 2.05566 2.81074 2.05566 3.08332V31.8611C2.05566 32.1337 2.16395 32.3951 2.35669 32.5878C2.54944 32.7806 2.81086 32.8889 3.08344 32.8889H11.3057C11.314 32.7197 11.3346 32.5514 11.3673 32.3853Z"
            fill="#155DFC"
          />
          <path
            d="M22.6112 19.7025L21.8096 20.5145C22.0085 20.4735 22.1908 20.3745 22.3334 20.23C22.4761 20.0854 22.5728 19.9019 22.6112 19.7025Z"
            fill="#155DFC"
          />
          <path
            d="M6.16699 27.6883C6.16699 27.9609 6.27528 28.2223 6.46802 28.4151C6.66077 28.6078 6.92219 28.7161 7.19477 28.7161H12.1692L12.4775 27.38L12.6112 26.8147V26.7633H8.22255V24.6666H14.7387L16.7942 22.6111H7.19477C6.92219 22.6111 6.66077 22.7194 6.46802 22.9121C6.27528 23.1049 6.16699 23.3663 6.16699 23.6389V27.6883Z"
            fill="#155DFC"
          />
          <path
            d="M34.4206 17.1331L30.957 13.6695C30.8033 13.5154 30.6207 13.3931 30.4196 13.3096C30.2186 13.2262 30.003 13.1832 29.7854 13.1832C29.5677 13.1832 29.3521 13.2262 29.1511 13.3096C28.95 13.3931 28.7674 13.5154 28.6137 13.6695L14.5229 27.8425L13.3615 32.7862C13.318 32.9994 13.317 33.2192 13.3586 33.4328C13.4002 33.6465 13.4835 33.8498 13.6038 34.0312C13.7241 34.2126 13.879 34.3685 14.0596 34.49C14.2403 34.6114 14.4431 34.696 14.6565 34.7389C14.7624 34.7492 14.8691 34.7492 14.9751 34.7389C15.1011 34.7586 15.2294 34.7586 15.3554 34.7389L20.3401 33.6392L34.4206 19.5278C34.5745 19.375 34.6965 19.1932 34.7798 18.993C34.8631 18.7928 34.906 18.5781 34.906 18.3613C34.906 18.1445 34.8631 17.9298 34.7798 17.7296C34.6965 17.5294 34.5745 17.3476 34.4206 17.1948V17.1331ZM19.2918 31.7687L15.5301 32.6012L16.4448 28.8703L27.0104 18.1917L29.9087 21.09L19.2918 31.7687ZM31.0701 19.9287L28.1718 17.0303L29.8059 15.4167L32.7248 18.3356L31.0701 19.9287Z"
            fill="#155DFC"
          />
        </g>
        <defs>
          <clipPath id="clip0_613_2782">
            <rect width="37" height="37" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "User Submits Request",
    description:
      "User submits an access request through the self-service portal with business justification and required details.",
  },
  {
    no: 2,
    icon: (
      <svg
        width="37"
        height="47"
        viewBox="0 0 37 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_584_564)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 23.5C0 18.5935 1.9491 13.8879 5.41852 10.4185C8.88795 6.9491 13.5935 5 18.5 5C23.4065 5 28.1121 6.9491 31.5815 10.4185C35.0509 13.8879 37 18.5935 37 23.5C37 28.4065 35.0509 33.1121 31.5815 36.5815C28.1121 40.0509 23.4065 42 18.5 42C13.5935 42 8.88795 40.0509 5.41852 36.5815C1.9491 33.1121 0 28.4065 0 23.5ZM17.4443 31.418L28.0953 18.1029L26.1713 16.5637L17.0891 27.9129L10.656 22.5528L9.07733 24.4472L17.4443 31.418Z"
            fill="#16A34A"
          />
        </g>
        <defs>
          <clipPath id="clip0_584_564">
            <rect
              width="37"
              height="37"
              fill="white"
              transform="translate(0 5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "2-Level Approval Process",
    description:
      "Request goes through automated multi-level approval workflow with email notifications and approval tracking.",
  },
  {
    no: 3,
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.131 15.4166H12.333V21.5833H22.7115C22.8385 21.5832 22.9634 21.5518 23.0753 21.4918C23.1872 21.4319 23.2825 21.3452 23.3528 21.2395L24.025 20.2328C24.0954 20.1272 24.1908 20.0407 24.3026 19.9808C24.4145 19.9209 24.5395 19.8896 24.6663 19.8896C24.7932 19.8896 24.9182 19.9209 25.03 19.9808C25.1419 20.0407 25.2373 20.1272 25.3077 20.2328L25.8873 21.1023C25.9225 21.1551 25.9702 21.1984 26.0262 21.2283C26.0821 21.2582 26.1446 21.2739 26.208 21.2739C26.2715 21.2739 26.3339 21.2582 26.3899 21.2283C26.4458 21.1984 26.4935 21.1551 26.5287 21.1023L27.1083 20.2328C27.1787 20.1272 27.2741 20.0407 27.386 19.9808C27.4979 19.9209 27.6228 19.8896 27.7497 19.8896C27.8766 19.8896 28.0015 19.9209 28.1134 19.9808C28.2252 20.0407 28.3206 20.1272 28.391 20.2328L29.0308 21.1917C29.0624 21.2392 29.1042 21.2791 29.1531 21.3084C29.2021 21.3378 29.2569 21.356 29.3137 21.3616C29.3705 21.3672 29.4278 21.3601 29.4815 21.3409C29.5352 21.3216 29.584 21.2907 29.6243 21.2503L32.1018 18.7728C32.1377 18.737 32.1662 18.6945 32.1856 18.6477C32.205 18.6009 32.215 18.5507 32.215 18.5C32.215 18.4493 32.205 18.3991 32.1856 18.3522C32.1662 18.3054 32.1377 18.2629 32.1018 18.2271L29.4039 15.5292C29.368 15.4934 29.3255 15.4651 29.2786 15.4457C29.2318 15.4264 29.1817 15.4165 29.131 15.4166Z"
          fill="black"
          fillOpacity="0.25"
        />
        <path
          d="M23.8962 16.9584H16.1878C15.7621 16.9584 15.417 17.3035 15.417 17.7292C15.417 18.1549 15.7621 18.5 16.1878 18.5H23.8962C24.3219 18.5 24.667 18.1549 24.667 17.7292C24.667 17.3035 24.3219 16.9584 23.8962 16.9584Z"
          fill="#FBBF24"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.52842 13.2368C4.625 14.1402 4.625 15.5925 4.625 18.5C4.625 21.4076 4.625 22.8599 5.52842 23.7633C6.43183 24.6667 7.88408 24.6667 10.7917 24.6667C13.6993 24.6667 15.1515 24.6667 16.0549 23.7633C16.9583 22.8599 16.9583 21.4076 16.9583 18.5C16.9583 15.5925 16.9583 14.1402 16.0549 13.2368C15.1515 12.3334 13.6993 12.3334 10.7917 12.3334C7.88408 12.3334 6.43183 12.3334 5.52842 13.2368ZM9.25 15.4167C8.84112 15.4167 8.449 15.5791 8.15988 15.8683C7.87076 16.1574 7.70833 16.5495 7.70833 16.9584C7.70833 17.3672 7.87076 17.7594 8.15988 18.0485C8.449 18.3376 8.84112 18.5 9.25 18.5C9.65888 18.5 10.051 18.3376 10.3401 18.0485C10.6292 17.7594 10.7917 17.3672 10.7917 16.9584C10.7917 16.5495 10.6292 16.1574 10.3401 15.8683C10.051 15.5791 9.65888 15.4167 9.25 15.4167Z"
          fill="#FBBF24"
        />
      </svg>
    ),
    title: "Secure Credential Delivery",
    description:
      "Approved users receive time-bound credentials securely without exposing passwords to administrators.",
  },
  {
    no: 4,
    icon: (
      <svg
        width="34"
        height="36"
        viewBox="0 0 34 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.0715 8.02283V31.4562C33.0699 32.3124 32.7291 33.1331 32.1238 33.7387C31.5185 34.3443 30.698 34.6855 29.8417 34.6875H4.0003C3.14371 34.6875 2.3222 34.3472 1.71649 33.7415C1.11079 33.1358 0.770508 32.3143 0.770508 31.4577V21.7668L6.66584 15.2748C7.3155 14.6168 8.14805 14.1693 9.05533 13.9906C9.96261 13.8119 10.9027 13.9102 11.7533 14.2727L13.998 15.355C14.8843 15.7193 15.8486 15.8526 16.8005 15.7423C17.7523 15.632 18.6606 15.2818 19.4401 14.7245L22.4618 12.3025C24.1678 11.0377 26.0726 10.066 28.0981 9.42729L33.0715 8.02283Z"
          fill="#FBBF24"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.0715 4.00067V8.02288L28.0981 9.42734C26.0721 10.0659 24.1667 11.0376 22.4602 12.3025L19.4401 14.7245C18.6606 15.2819 17.7523 15.6321 16.8005 15.7424C15.8486 15.8527 14.8843 15.7194 13.998 15.355L11.7534 14.2728C10.9027 13.9103 9.96262 13.812 9.05534 13.9907C8.14806 14.1694 7.31551 14.6168 6.66585 15.2749L0.770517 21.7668V4.00067C0.7695 3.57625 0.852347 3.1558 1.0143 2.76349C1.17625 2.37117 1.41412 2.01472 1.71423 1.7146C2.01435 1.41448 2.3708 1.17662 2.76312 1.01467C3.15543 0.852714 3.57588 0.769867 4.00031 0.770883H29.8417C30.6983 0.770883 31.5198 1.11116 32.1255 1.71687C32.7312 2.32257 33.0715 3.14408 33.0715 4.00067Z"
          fill="#C9F7CA"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.84422 14.04V34.6875M16.921 15.7358V34.6875M24.9963 10.7146V34.6767M0.770508 21.7683H33.0715M18.4827 15.3072H33.0715M0.770508 28.2279H33.0715"
          stroke="#191919"
          strokeWidth="1.54167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Audit & Monitor Activity",
    description:
      "Monitor all remote sessions in real-time with complete audit trails and automatic compliance reporting.",
  },
];
const cards: TechCard[] = [
  {
    title: "Multi-Cloud",
    desc: "Supports AWS, Azure,\nGCP",
    icon: (
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.0837 28.108C43.0837 34.2161 38.0743 39.1667 31.8938 39.1667H20.5609C18.7733 36.7851 17.7518 33.9163 17.632 30.9409C17.5122 27.9654 18.2996 25.0238 19.8899 22.5062C21.4802 19.9885 23.7982 18.0137 26.5366 16.8436C29.275 15.6736 32.3043 15.3635 35.2229 15.9546C35.3783 16.5055 35.4893 17.0722 35.5559 17.6544C39.9347 19.1526 43.0837 23.267 43.0837 28.108Z"
          fill="#9810FA"
        />
        <path
          d="M24.4325 7.83337C18.252 7.83337 13.2426 12.784 13.2426 18.8921C13.2426 20.2433 13.4874 21.5358 13.9358 22.7343C13.4002 22.6308 12.856 22.5783 12.3104 22.5777C7.67503 22.5796 3.91699 26.2926 3.91699 30.8732C3.91699 35.4537 7.67503 39.1667 12.3104 39.1667H20.5628C18.7752 36.7851 17.7538 33.9163 17.6339 30.9409C17.5141 27.9654 18.3016 25.0238 19.8919 22.5062C21.4822 19.9885 23.8002 18.0137 26.5385 16.8436C29.2769 15.6736 32.3062 15.3635 35.2249 15.9546L35.1328 15.6452C33.7307 11.1234 29.4693 7.83337 24.4325 7.83337Z"
          fill="#9810FA"
        />
      </svg>
    ),
    bg: "bg-violet-50",
  },
  {
    title: "SaaS-Based",
    desc: "Zero infrastructure\nneeded",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.9896 16.5729C31.9896 8.05829 25.0875 1.15625 16.5729 1.15625C8.05829 1.15625 1.15625 8.05829 1.15625 16.5729C1.15625 25.0875 8.05829 31.9896 16.5729 31.9896"
          stroke="#16A34A"
          strokeWidth="2.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.115 1.23328C18.115 1.23328 22.74 7.32286 22.74 16.5729M15.0317 31.9124C15.0317 31.9124 10.4067 25.8229 10.4067 16.5729C10.4067 7.32286 15.0317 1.23328 15.0317 1.23328M2.12793 21.9687H16.5733M2.12793 11.177H31.0188"
          stroke="#16A34A"
          strokeWidth="2.3125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.8027 25.695C32.5643 26.1637 32.5165 27.3029 31.7333 27.3924L27.7759 27.841L26.0014 31.4053C25.6499 32.1129 24.563 31.7661 24.3827 30.8904L22.4479 21.4616C22.2952 20.7216 22.9612 20.256 23.6041 20.6522L31.8027 25.695Z"
          stroke="#16A34A"
          strokeWidth="2.3125"
        />
      </svg>
    ),
    bg: "bg-emerald-50",
  },
  {
    title: "Health\nFramework",
    desc: "Continuous\nmonitoring",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8161 28.4731C9.27897 24.9966 3.08301 19.2539 3.08301 13.8242C3.08301 4.75299 11.5622 1.36594 18.4997 8.37128C25.4372 1.36594 33.9163 4.75299 33.9163 13.8242C33.9163 19.2539 27.7188 24.9966 23.1833 28.4731C21.1298 30.0456 20.103 30.8334 18.4997 30.8334C16.8963 30.8334 15.8696 30.0471 13.8161 28.4731ZM25.4372 9.63545C25.7438 9.63545 26.0379 9.75726 26.2548 9.9741C26.4716 10.1909 26.5934 10.485 26.5934 10.7917V12.7188H28.5205C28.8272 12.7188 29.1213 12.8406 29.3381 13.0574C29.5549 13.2743 29.6768 13.5684 29.6768 13.875C29.6768 14.1817 29.5549 14.4758 29.3381 14.6926C29.1213 14.9095 28.8272 15.0313 28.5205 15.0313H26.5934V16.9584C26.5934 17.265 26.4716 17.5591 26.2548 17.776C26.0379 17.9928 25.7438 18.1146 25.4372 18.1146C25.1305 18.1146 24.8364 17.9928 24.6196 17.776C24.4027 17.5591 24.2809 17.265 24.2809 16.9584V15.0313H22.3538C22.0472 15.0313 21.7531 14.9095 21.5362 14.6926C21.3194 14.4758 21.1976 14.1817 21.1976 13.875C21.1976 13.5684 21.3194 13.2743 21.5362 13.0574C21.7531 12.8406 22.0472 12.7188 22.3538 12.7188H24.2809V10.7917C24.2809 10.485 24.4027 10.1909 24.6196 9.9741C24.8364 9.75726 25.1305 9.63545 25.4372 9.63545Z"
          fill="#F92D2D"
        />
      </svg>
    ),
    bg: "bg-rose-50",
  },
  {
    title: "Enterprise\nSecurity",
    desc: "SOC 2 & ISO 27001",
    icon: (
      <svg
        width="37"
        height="37"
        viewBox="0 0 37 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.54199 6.58288L3.51533 4.62496L31.6045 32.7141L29.6466 34.6875L26.2087 31.2187C24.0041 33.2537 21.3832 34.7491 18.5003 35.4583C10.5453 33.5158 4.62533 25.5145 4.62533 16.9583V9.66621L1.54199 6.58288ZM18.5003 1.54163L32.3753 7.70829V16.9583C32.3753 20.4733 31.3732 23.8958 29.6466 26.8404L8.71074 5.88913L18.5003 1.54163Z"
          fill="#FBBF24"
        />
      </svg>
    ),
    bg: "bg-slate-100",
  },
];

const AccessGovernanceSteps: React.FC = () => {
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
    <>
      <section ref={rootRef} className="bg-[#F8F9FA]">
        <div className=" mx-auto px-4 sm:px-8 py-4">
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
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section ref={rootRef} className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-14 text-center">
          {/* Heading */}
          <div
            className={inView ? "animate-fadeUp" : "opacity-0 translate-y-4"}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Built with Modern Technology
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Enterprise-grade infrastructure for security and reliability
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 text-[10px] sm:text-xs text-slate-400">
              <Link
                to="/products/firefighter/privacy-policy"
                className="hover:text-red-600 transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                to="/products/firefighter/terms-and-conditions"
                className="hover:text-red-600 transition-colors underline underline-offset-2"
              >
                Terms and Conditions
              </Link>
            </div>

          </div>

          {/* Cards */}
          <div className=" mt-8 grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((c, idx) => (
              <div
                key={idx + "index"}
                style={{ animationDelay: `${idx * 120}ms` }}
                className={[
                  "w-full",
                  "rounded-2xl border border-slate-200",
                  "px-5 py-5",
                  c.bg,
                  "shadow-sm transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.10)]",
                  inView ? "animate-fadeUp" : "opacity-0 translate-y-4",
                ].join(" ")}
              >
                <div className="text-2xl mb-3 w-full flex items-center justify-center">
                  {c.icon}
                </div>

                <h3 className="text-lg font-semibold text-slate-900 whitespace-pre-line leading-snug">
                  {c.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 whitespace-pre-line leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AccessGovernanceSteps;
