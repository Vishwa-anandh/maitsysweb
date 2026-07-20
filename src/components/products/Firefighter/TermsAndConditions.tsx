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

export default function TermsAndConditions() {
  return (
    <>
      <Seo url="/products/firefighter/terms-and-conditions" />
      <div className="min-h-screen bg-white">
      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="bg-white overflow-hidden">
          <div className="flex flex-col px-4 sm:px-6 lg:px-8 py-3 gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Maitsys Access Guardian</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Terms and Conditions
              </h1>
            </div>
            <div className="text-sm text-slate-500">
              <span className="font-medium text-slate-700">Last Updated:</span>{" "}
              05/09/2026
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <p className="text-slate-700 leading-relaxed">
              By accessing or using Maitsys Access Guardian, users agree to
              comply with the following terms and conditions.
            </p>

            <SectionTitle>1. Use of the Application</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys Access Guardian is intended for enterprise SAP access
              governance, firefighter access management, audit monitoring,
              compliance reporting, and related operational activities. Users
              must use the application only for authorized business purposes.
            </p>

            <SectionTitle>2. User Responsibilities</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Users are responsible for:
            </p>
            <Bullet
              items={[
                "Maintaining the confidentiality of login credentials",
                "Using the platform in accordance with organizational policies",
                "Ensuring that all access requests and approvals are legitimate and authorized",
                "Reviewing AI-generated recommendations and audit insights before taking action",
              ]}
            />
            <p className="text-slate-700 leading-relaxed mt-4">
              Unauthorized access attempts, misuse, or activities that violate
              security or compliance requirements are strictly prohibited.
            </p>

            <SectionTitle>3. AI-Powered Features</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys Access Guardian includes AI-powered capabilities such as
              chatbot assistance, audit summaries, risk analysis, and
              intelligent insights. AI-generated responses are provided for
              operational support purposes only and should not be considered as
              legal, compliance, or security advice without independent review.
            </p>

            <SectionTitle>4. Data and Security</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys implements reasonable security measures to protect
              customer and operational data. Customers are responsible for
              managing user access, permissions, and compliance configurations
              within their environments.
            </p>

            <SectionTitle>5. Availability and Updates</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys may enhance, modify, update, or discontinue features,
              functionalities, or integrations as part of ongoing product
              improvements and operational requirements.
            </p>

            <SectionTitle>6. Limitation of Liability</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Maitsys shall not be liable for indirect, incidental, or
              consequential damages arising from the use or inability to use the
              application, including business interruption, data loss, or
              unauthorized activities caused by improper usage or customer-side
              misconfigurations.
            </p>

            <SectionTitle>7. Intellectual Property</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              All product names, branding, software components, designs,
              workflows, and AI capabilities related to Maitsys Access Guardian
              remain the intellectual property of Maitsys.
            </p>

            <SectionTitle>8. Compliance and Governance</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              Customers are responsible for ensuring their use of Maitsys Access
              Guardian complies with applicable organizational, regulatory, and
              legal requirements.
            </p>

            <SectionTitle>9. Support</SectionTitle>
            <p className="text-slate-700 leading-relaxed mb-3">
              Support services and communications may be provided through
              authorized Maitsys channels.
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

            <SectionTitle>10. Acceptance</SectionTitle>
            <p className="text-slate-700 leading-relaxed">
              By using Maitsys Access Guardian, users acknowledge and agree to
              these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
