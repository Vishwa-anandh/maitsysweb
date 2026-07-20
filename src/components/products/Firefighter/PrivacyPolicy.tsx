import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg sm:text-xl font-semibold text-slate-900 mt-8 mb-3">
    {children}
  </h2>
);

const Bullet = ({ items }: { items: string[] }) => (
  <ul className="mt-2 space-y-2 list-disc pl-5 text-slate-700">
    {items.map((t, i) => (
      <li key={i + "index"} className="leading-relaxed">
        {t}
      </li>
    ))}
  </ul>
);

import Seo from "../../SEO";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo url="/products/firefighter/privacy-policy" />
      <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="bg-white overflow-hidden">
          <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-3 gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Maitsys Access Guardian</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Privacy Statement
              </h1>
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-medium text-slate-700">Last Updated:</span>{" "}
              05/09/2026
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-slate-700 leading-relaxed">
              Maitsys Access Guardian is committed to protecting customer and
              user data. The application is designed to support secure SAP
              privileged access governance, audit monitoring, and compliance
              management while maintaining confidentiality, integrity, and
              availability of information.
            </p>

            <SectionTitle>Data Collection and Usage</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys Access Guardian may collect and process:
            </p>
            <Bullet
              items={[
                "User profile and authentication information",
                "SAP access request and approval details",
                "Audit logs and session activities",
                "Risk analysis and compliance-related data",
                "System usage and operational telemetry",
              ]}
            />
            <p className="text-slate-700 leading-relaxed mt-4">
              This data is used solely for:
            </p>
            <Bullet
              items={[
                "Emergency access governance",
                "Audit and compliance reporting",
                "Security monitoring and risk analysis",
                "Workflow automation and approval processing",
                "AI-powered operational insights and chatbot assistance",
              ]}
            />

            <SectionTitle>Data Security</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys implements industry-standard security controls, including:
            </p>
            <Bullet
              items={[
                "Role-based access management",
                "Secure authentication and authorization",
                "Encryption of sensitive data in transit and at rest",
                "Audit logging and monitoring mechanisms",
                "Access governance and compliance controls",
              ]}
            />

            <SectionTitle>Data Sharing</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys does not sell customer data. Information processed within
              Maitsys Access Guardian is only used for authorized business and
              operational purposes and may be shared with customer-authorized
              administrators or compliance teams where required.
            </p>

            <SectionTitle>AI Features</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              AI-powered capabilities within Maitsys Access Guardian are
              designed to provide operational insights, audit summaries, chatbot
              assistance, and risk intelligence. AI-generated outputs are
              intended to support administrative and compliance activities and
              should be reviewed by authorized personnel.
            </p>

            <SectionTitle>Compliance</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys Access Guardian is designed to support enterprise
              governance, risk, and compliance requirements within SAP
              environments.
            </p>

            <SectionTitle>Contact</SectionTitle>
            <p className="text-slate-700 leading-relaxed mb-3">
              For privacy-related questions or support requests:
            </p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <p className="text-slate-700">
                Email:{" "}
                <a
                  href="mailto:contact@maitsys.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@maitsys.com
                </a>
              </p>
              <p className="text-slate-700 mt-1">
                Website:{" "}
                <a
                  href="https://maitsys.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  maitsys.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
