import React from "react";

// ✅ Import icons (your actual SVGs in /assets/image/icons/)
import reactIcon from "../assets/image/icons/react.svg";
import nextIcon from "../assets/image/icons/next.svg";
import firebaseIcon from "../assets/image/icons/firebase.svg";
import awsIcon from "../assets/image/icons/aws.svg";
import gcpIcon from "../assets/image/icons/gcp.svg";
import azureIcon from "../assets/image/icons/azure.svg";
import iosIcon from "../assets/image/icons/ios.svg";
import androidIcon from "../assets/image/icons/android.svg";
import pgIcon from "../assets/image/icons/pg.svg";
import sapIcon from "../assets/image/icons/sap.svg";
import node from "../assets/image/icons/nodejs.svg";
import tailwindcss from "../assets/image/icons/tailwindcss.png";

interface Tech {
  name: string;
  description: string;
  icon: string;
  color: string;
}

const technologies: Tech[] = [
  {
    name: "SAP",
    description:
      "Enterprise resource planning software to manage business operations and customer relations.",
    icon: sapIcon,
    color: "bg-[#E1F5FE]",
  },
  {
    name: "React JS",
    description:
      "A popular JavaScript library for building fast, interactive user interfaces.",
    icon: reactIcon,
    color: "bg-[#E8F7FF]",
  },
  {
    name: "Next JS",
    description:
      "A React framework for production, with SSR, static generation, and API routes.",
    icon: nextIcon,
    color: "bg-[#F0F0F0]",
  },
  {
    name: "tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    icon: tailwindcss,
    color: "bg-[#F0F0F0]",
  },
  {
    name: "Node JS",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for scalable network applications.",
    icon: node,
    color: "bg-[#F0F0F0]",
  },
  {
    name: "Firebase",
    description:
      "A platform that helps you quickly build and scale web and mobile applications.",
    icon: firebaseIcon,
    color: "bg-[#FFF8E1]",
  },
  {
    name: "AWS",
    description:
      "Amazon Web Services provides reliable, scalable, and low-cost cloud computing services.",
    icon: awsIcon,
    color: "bg-[#FFF4E5]",
  },
  {
    name: "Microsoft Azure",
    description:
      "Azure offers cloud computing solutions for building, testing, and managing applications.",
    icon: azureIcon,
    color: "bg-[#E6F0FF]",
  },
  {
    name: "Google Cloud (GCP)",
    description:
      "Google’s suite of cloud computing services for deploying and scaling applications.",
    icon: gcpIcon,
    color: "bg-[#E3F2FD]",
  },
  {
    name: "iOS",
    description:
      "Apple’s mobile operating system used to develop high-quality native iPhone apps.",
    icon: iosIcon,
    color: "bg-[#FFF5F5]",
  },
  {
    name: "Android",
    description:
      "Google’s open-source mobile platform powering billions of devices worldwide.",
    icon: androidIcon,
    color: "bg-[#E8F5E9]",
  },
  {
    name: "PostgreSQL",
    description:
      "An advanced open-source relational database with enterprise-class performance.",
    icon: pgIcon,
    color: "bg-[#F3E5F5]",
  },
];
const TechnologiesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-20 text-center from-white to-gray-50">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
        Technologies We Expertise
      </h2>

      {/* Red underline */}
      <div className="w-12 h-1 bg-red-500 mx-auto my-4 rounded-full"></div>

      <p className="text-gray-700 max-w-2xl mx-auto mb-16 text-lg">
        Build your idea with advanced technologies to shape the quality of your
        business.
      </p>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {technologies.map((tech, index) => (
          <div
            key={index + "index"}
            className="flex flex-col items-center text-center from-white to-gray-50"
          >
            <div
              className={`${tech.color} w-20 h-20 flex items-center justify-center rounded-full shadow-md`}
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-red-600">
              {tech.name}
            </h3>

            <p className="mt-3 text-gray-700 max-w-xs">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
