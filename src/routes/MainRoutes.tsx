import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import InitLoading from "../components/InitLoading";
import { ScrollToTop } from "../components/ScrollToTop";

// Define lazy components outside the MainRoutes component to prevent remounting and hydration issues.
const HomePage = lazy(() => import("../pages/homePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const CareersPage = lazy(() => import("../pages/CareersPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const PodCastPage = lazy(() => import("../pages/PodCastPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ArticlesPage = lazy(() => import("../pages/ArticlesPage/Home"));
const SapEccDeadline2027 = lazy(
  () => import("../components/articles/Sap_Ecc_Deadline_2027"),
);
const SapBtpCostOptimization = lazy(
  () => import("../components/articles/Sap_Btp_CostOptimization"),
);
const AzureCostOptimizationSolutions = lazy(
  () => import("../components/articles/Azure_CostOptimization_Solutions"),
);
const SapSecurityBestPractices = lazy(
  () => import("../components/articles/Sap_Security_BestPractices"),
);
const EccToS4HanaCloud = lazy(
  () => import("../components/articles/ECC_To_S4HANA_Cloud"),
);
const SapBasisOperationsInCloud = lazy(
  () => import("../components/articles/Sap_Basis_Operations_in_Cloud"),
);
const TransformingSapUpgrades = lazy(
  () => import("../components/articles/Transforming_SAP_Upgrades"),
);
const SapS4HanaConversion = lazy(
  () => import("../components/articles/Sap_S4HANA_Conversion"),
);
const SapS4hanaMigration = lazy(
  () => import("../components/articles/Sap_S4hana_Migration"),
);
const FutureOfSapIntegration = lazy(
  () => import("../components/articles/Future_of_SAP_Integration"),
);
const SapS4HanaCloudPublicEdition = lazy(
  () => import("../components/articles/Sap_S4HANA_Cloud_Public_Edition"),
);
const SapDisasterRecoveryPatternsAwsAzure = lazy(
  () =>
    import("../components/articles/Sap_Disaster_Recovery_Patterns_AWS_Azure"),
);
const AwsCostOptimization = lazy(
  () => import("../components/articles/Aws_Cost_Optimization"),
);

// Products
const SapIdocMonitoring = lazy(
  () => import("../pages/productDetails/Sap_Idoc_Monitoring"),
);
const MioUserMonitoring = lazy(
  () => import("../pages/productDetails/MIO_User_Monitoring"),
);
const Firefighter = lazy(() => import("../pages/productDetails/Firefighter"));
const CloudCostOptimizer = lazy(
  () => import("../pages/productDetails/Cloud_Cost_Optimizer"),
);
const PrivacyPolicy = lazy(
  () => import("../components/products/Strawberry/PrivacyPolicy"),
);
const PrivacyPolicyFireFighter = lazy(
  () => import("../components/products/Firefighter/PrivacyPolicy"),
);
const TermsAndConditionsFireFighter = lazy(
  () => import("../components/products/Firefighter/TermsAndConditions"),
);
const TermsAndConditions = lazy(
  () => import("../components/products/Strawberry/TermsAndConditions"),
);

// Services
const CyberSecurity = lazy(() => import("../pages/services/CyberSecurity"));
const SAPServices = lazy(() => import("../pages/services/SAP_Services"));
const SapMigrationServices = lazy(
  () => import("../pages/services/SapMigrationServices"),
);
const SapBtpServices = lazy(() => import("../pages/services/SapBtpServices"));
const SapSecurityGrcServices = lazy(
  () => import("../pages/services/SapSecurityGrcServices"),
);
const AwsManagedServices = lazy(
  () => import("../pages/services/AwsManagedServices"),
);
const AzureManagedServices = lazy(
  () => import("../pages/services/AzureManagedServices"),
);
const MicrosoftPowerPlatform = lazy(
  () => import("../pages/services/MicrosoftPowerPlatform"),
);
const PowerAppsServices = lazy(
  () => import("../pages/services/PowerAppsServices"),
);
const PowerAutomateServices = lazy(
  () => import("../pages/services/PowerAutomateServices"),
);
const PowerBiServices = lazy(() => import("../pages/services/PowerBiServices"));
const M365AutomationServices = lazy(
  () => import("../pages/services/M365AutomationServices"),
);
const SapEmergencyAccessReport = lazy(
  () => import("../pages/campaign/SapEmergencyAccessReport"),
);
const SapMigrationAccessReport = lazy(
  () => import("../pages/campaign/SapMigrationAccessReport"),
);
const PathToAiImplementation = lazy(
  () => import("../pages/campaign/PathToAiImplementation"),
);

const GeneralPrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const GeneralTermsConditions = lazy(() => import("../pages/TermsConditions"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const MainRoutes: React.FC = () => {
  return (
    <Suspense fallback={<InitLoading />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/podcast" element={<PodCastPage />} />

        {/* articles route */}
        <Route path="/blog" element={<ArticlesPage />} />
        <Route
          path="/blog/sap-ecc-2027-deadline-by-ehp-version"
          element={<SapEccDeadline2027 />}
        />
        <Route
          path="/blog/sap-btp-cost-optimization-strategies"
          element={<SapBtpCostOptimization />}
        />
        <Route
          path="/blog/azure-cost-optimization-finops-cloud-cost-management"
          element={<AzureCostOptimizationSolutions />}
        />
        <Route
          path="/blog/sap-security-best-practices-2026-guide"
          element={<SapSecurityBestPractices />}
        />
        <Route
          path="/blog/sap-ecc-to-s4hana-cloud-migration-roadmap"
          element={<EccToS4HanaCloud />}
        />
        <Route
          path="/blog/sap-basis-automation-cloud"
          element={<SapBasisOperationsInCloud />}
        />
        <Route
          path="/blog/sap-upgrade-factory-approach-ecc-ehp-s4hana"
          element={<TransformingSapUpgrades />}
        />
        <Route
          path="/blog/sap-s4hana-conversion-system-conversion-guide"
          element={<SapS4HanaConversion />}
        />
        <Route
          path="/blog/sap-s4hana-cloud-public-edition-implementation-guide"
          element={<SapS4HanaCloudPublicEdition />}
        />
        <Route
          path="/blog/sap-s4hana-migration"
          element={<SapS4hanaMigration />}
        />
        <Route
          path="/blog/ai-powered-sap-idoc-monitoring"
          element={<FutureOfSapIntegration />}
        />
        <Route
          path="/blog/sap-disaster-recovery-aws-azure-best-practices"
          element={<SapDisasterRecoveryPatternsAwsAzure />}
        />
        <Route
          path="/blog/cloud-cost-optimization-aws-azure"
          element={<AwsCostOptimization />}
        />

        {/* Products */}
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/products/sap-idoc-monitoring"
          element={<SapIdocMonitoring />}
        />
        <Route
          path="/products/mio-user-monitoring"
          element={<MioUserMonitoring />}
        />
        <Route path="/products/firefighter" element={<Firefighter />} />
        <Route
          path="/products/cloud-cost-optimizer"
          element={<CloudCostOptimizer />}
        />

        <Route
          path="/products/sap-idoc-monitoring/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/products/sap-idoc-monitoring/TermsAndConditions"
          element={<TermsAndConditions />}
        />

        <Route
          path="/products/firefighter/privacy-policy"
          element={<PrivacyPolicyFireFighter />}
        />
        <Route
          path="/products/firefighter/terms-and-conditions"
          element={<TermsAndConditionsFireFighter />}
        />

        {/* Services Paths */}
        <Route path="/cyber-security-services" element={<CyberSecurity />} />
        <Route path="/sap-services" element={<SAPServices />} />
        <Route
          path="/sap-migration-services"
          element={<SapMigrationServices />}
        />
        <Route path="/sap-btp-services" element={<SapBtpServices />} />
        <Route
          path="/sap-security-grc-services"
          element={<SapSecurityGrcServices />}
        />
        <Route path="/aws-managed-services" element={<AwsManagedServices />} />
        <Route
          path="/azure-managed-services"
          element={<AzureManagedServices />}
        />
        <Route
          path="/microsoft-power-platform"
          element={<MicrosoftPowerPlatform />}
        />
        <Route path="/power-apps" element={<PowerAppsServices />} />

        <Route path="/power-automate" element={<PowerAutomateServices />} />
        <Route path="/power-bi" element={<PowerBiServices />} />
        <Route path="/m365-automation" element={<M365AutomationServices />} />
        <Route
          path="/blog/sap-emergency-access-compliance-report"
          element={<SapEmergencyAccessReport />}
        />
        <Route
          path="/blog/sap-migration-access-report"
          element={<SapMigrationAccessReport />}
        />
        <Route
          path="/blog/path-to-ai-implementation"
          element={<PathToAiImplementation />}
        />

        <Route path="/privacy-policy" element={<GeneralPrivacyPolicy />} />
        <Route path="/terms-conditions" element={<GeneralTermsConditions />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
