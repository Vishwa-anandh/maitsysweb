import React from "react";

import SAP from "../../../assets/image/logo/sap-cloud.png";
import ServiceNow from "../../../assets/image/logo/service-now.png";
import jira from "../../../assets/image/logo/Jira.png";
import slack from "../../../assets/image/logo/Slack.png";
import microsoftTeams from "../../../assets/image/logo/MicrosoftTeams.png";
import salesforce from "../../../assets/image/logo/Salesforce.png";

import QuickViewUi from "../../ui/CountUp/QuickViewUi";
const IntegrateToolsUI: React.FC = () => {
  const tools = [
    {
      name: "ServiceNow",
      logo: ServiceNow,
    },
    {
      name: "Jira",
      logo: jira,
    },
    {
      name: "Slack",
      logo: slack,
    },
    {
      name: "Microsoft Teams",
      logo: microsoftTeams,
    },
    {
      name: "Salesforce",
      logo: salesforce,
    },
    {
      name: "SAP CPI",
      logo: SAP,
    },
  ];

  return (
    <div className=" py-6 px-8">
      <div className="max-w-6xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Integrate with Your Tools
          </h1>
          <p className="text-gray-600 text-lg">
            Connect Strawberry with your existing workflow tools and platforms
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index + "index"}
              className="bg-white rounded-2xl p-3  shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center "
            >
              <img
                src={tool.logo}
                alt={tool.name}
                title={tool.name}
                width={120} // adjust based on your design
                height={80}
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const textSpan = document.createElement("span");
                    textSpan.className =
                      "text-lg font-bold text-gray-900 text-center";
                    textSpan.textContent = tool.name;
                    parent.appendChild(textSpan);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <QuickViewUi
        title="Ready to Transform Your IDOC Monitoring?"
        description="Join leading enterprises using Strawberry to achieve complete SAP integration visibility."
        linkName="Connect with Us"
        url="/contact-us"
        title_className="text-3xl text-red-600 text-black lg:text-5xl font-bold text-center leading-tight lg:leading-[1.15]"
      />
    </div>
  );
};

export default IntegrateToolsUI;
