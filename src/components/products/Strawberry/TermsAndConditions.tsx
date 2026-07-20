import Seo from "../../SEO";

const TermsAndConditions = () => {
  return (
    <>
      <Seo url="/products/sap-idoc-monitoring/TermsAndConditions" />
      <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-900">
          Terms and Conditions
        </h1>

        <p className="mt-3 text-sm text-slate-600">
          These Terms and Conditions govern the use of Strawberry SAP IDoc
          Monitoring as a subscription-based SaaS solution.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-6 text-slate-700">
          <section>
            <h2 className="font-semibold text-slate-900">
              1. Subscription & License
            </h2>
            <p className="mt-1">
              The solution is provided as a subscription-based SaaS service.
              Customers receive a non-exclusive, non-transferable license for
              internal business use only.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">2. Usage Scope</h2>
            <p className="mt-1">
              The solution provides monitoring, alerting, and analytics related
              to SAP IDoc processing and does not modify SAP business data.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              3. Customer Responsibilities
            </h2>
            <p className="mt-1">
              Customers must maintain valid SAP licenses and ensure the
              protection of system credentials. Unauthorized access or misuse is
              strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              4. Intellectual Property
            </h2>
            <p className="mt-1">
              All intellectual property rights related to the solution remain
              with the provider. The software may not be copied, distributed,
              reverse engineered, or resold.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              5. Limitation of Liability
            </h2>
            <p className="mt-1">
              The provider is not liable for indirect, incidental, or
              consequential damages. Total liability is limited to the
              subscription fees paid by the customer in the last 12 months.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              6. Suspension & Termination
            </h2>
            <p className="mt-1">
              Violation of these terms may result in suspension or termination
              of access to the service without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-900">
              7. Updates to Terms
            </h2>
            <p className="mt-1">
              These Terms and Conditions may be updated periodically. Continued
              use of the solution constitutes acceptance of the revised terms.
            </p>
          </section>
        </div>

        <footer className="mt-10 text-xs text-slate-500">
          © {new Date().getFullYear()} Maitsys. All rights reserved.
        </footer>
      </div>
    </main>
    </>
  );
};
export default TermsAndConditions;
