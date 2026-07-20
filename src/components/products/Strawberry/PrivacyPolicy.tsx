import Seo from "../../SEO";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Seo url="/products/sap-idoc-monitoring/privacy-policy" />
      <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>

        <p className="mt-3 text-sm text-slate-600">
          Strawberry SAP IDoc Monitoring (“Solution”) is committed to protecting
          customer and user privacy. This policy explains how data is collected,
          used, and protected.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-6 text-slate-700">
          <section>
            <h2 className="font-semibold text-slate-900">1. Data Collected</h2>
            <p className="mt-1">
              The Solution collects technical metadata needed for monitoring SAP
              IDoc processing, such as IDoc number, status, message type,
              timestamps, and system identifiers. The Solution does not
              intentionally store business transaction content or personal data.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              2. Purpose of Processing
            </h2>
            <p className="mt-1">
              Data is used only to provide monitoring and alerting, improve
              operational visibility, enable reporting, and maintain performance
              and security.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">3. Data Security</h2>
            <p className="mt-1">
              The Solution uses industry-standard security controls, including
              encryption in transit (TLS), encryption at rest, role-based access
              control, and tenant data isolation.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              4. Data Ownership & Sharing
            </h2>
            <p className="mt-1">
              All customer data remains the property of the customer. The
              Solution provider does not sell, share, or distribute customer
              data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">5. Data Retention</h2>
            <p className="mt-1">
              Retention periods are configurable by customers. Data may be
              deleted automatically based on retention settings or upon customer
              request.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">6. Compliance</h2>
            <p className="mt-1">
              The Solution follows GDPR principles such as data minimization,
              access control, and deletion rights where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              7. Third-Party Services
            </h2>
            <p className="mt-1">
              The Solution may use SAP Business Technology Platform services for
              hosting and infrastructure, following SAP security and compliance
              standards.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">8. Updates</h2>
            <p className="mt-1">
              This Privacy Policy may be updated periodically. Updated versions
              will be published with revision dates.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">9. Contact</h2>
            <p className="mt-1">
              For privacy-related inquiries, contact{" "}
              <a
                href="mailto:contact@maitsys.com"
                className="font-medium text-slate-900 underline underline-offset-4"
              >
                contact@maitsys.com
              </a>.
            </p>
            <p className="mt-1 text-slate-600">Company: Maitsys</p>
          </section>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Maitsys
        </p>
      </div>
    </main>
    </>
  );
};
export default PrivacyPolicy;
