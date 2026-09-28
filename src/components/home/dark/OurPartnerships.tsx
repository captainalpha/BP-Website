"use client";

import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

import PartnershipDialog, {
  Partnership,
} from "./PartnershipDialog";

const partnerships: Partnership[] = [
  {
    id: "oracle",
    name: "Oracle",
    shortDescription:
      "Enterprise technology, databases, cloud, and application development solutions.",
    logo: "/images/partnerships/Oracle-Symbol.png",
    whatIs:
      "Oracle is a global technology company providing enterprise software, database technologies, cloud infrastructure, and business application solutions used by organizations across industries.",
    bpaasTitle: "BPAAS with Oracle",
    bpaasDescription:
      "BPAAS Solutions brings expertise in Oracle technologies to help organizations build, modernize, integrate, and manage enterprise applications.",
    capabilities: [
      "Oracle APEX application development",
      "Oracle Database solutions",
      "Enterprise application modernization",
      "Business process automation",
      "Application integration",
      "Custom dashboards and reporting",
      "Cloud and enterprise solution implementation",
    ],
  },
  {
    id: "newgen",
    name: "Newgen",
    shortDescription:
      "Digital transformation, workflow automation, and enterprise content solutions.",
    logo: "/images/partnerships/Newgen-Logo_2.svg",
    whatIs:
      "Newgen provides enterprise software solutions focused on digital transformation, workflow automation, content services, and process management.",
    bpaasTitle: "BPAAS with Newgen",
    bpaasDescription:
      "BPAAS Solutions helps organizations leverage enterprise automation and workflow technologies to simplify processes, improve operational efficiency, and build scalable digital solutions.",
    capabilities: [
      "Workflow and process automation",
      "Enterprise application integration",
      "Digital process transformation",
      "Document and content workflows",
      "Custom business solutions",
      "System integration",
      "Process optimization",
    ],
  },
  {
    id: "salesforce",
    name: "Salesforce",
    shortDescription:
      "CRM and cloud-based business solutions for customer-centric organizations.",
    logo: "/images/partnerships/SalesforceLogo.jpg",
    whatIs:
      "Salesforce is a cloud-based technology platform known for customer relationship management and a broad ecosystem of business applications and services.",
    bpaasTitle: "BPAAS with Salesforce",
    bpaasDescription:
      "BPAAS Solutions can help organizations extend and integrate Salesforce-based business processes with custom applications, automation, integrations, and enterprise workflows.",
    capabilities: [
      "CRM implementation support",
      "Salesforce integrations",
      "Custom business applications",
      "Workflow automation",
      "Data integration",
      "Business process optimization",
      "Custom dashboards and reporting",
    ],
  },
  {
    id: "redhat",
    name: "Red Hat",
    shortDescription:
      "Open-source enterprise technologies, cloud platforms, and application infrastructure.",
    logo: "/images/partnerships/red_hat_logo.svg",
    whatIs:
      "Red Hat provides enterprise open-source technologies for hybrid cloud, application platforms, automation, Linux, and modern IT infrastructure.",
    bpaasTitle: "BPAAS with Red Hat",
    bpaasDescription:
      "BPAAS Solutions can leverage modern open-source and cloud-native technologies to help organizations build scalable, flexible, and enterprise-ready digital platforms.",
    capabilities: [
      "Cloud-native application development",
      "Enterprise Linux solutions",
      "Application modernization",
      "Containerized applications",
      "Automation solutions",
      "API and system integration",
      "Hybrid cloud solutions",
    ],
  },
];

export default function OurPartnerships() {
  const [selectedPartnership, setSelectedPartnership] =
    useState<Partnership | null>(null);

  return (
    <>
      <section id="Partnerships" className="relative overflow-hidden py-20 md:py-28">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#ec964c]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-[#ec964c]/30 bg-[#ec964c]/5 px-4 py-2 text-sm font-medium tracking-wider text-[#ec964c]">
              TECHNOLOGY ECOSYSTEM
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Our{" "}
              <span className="text-[#ec964c]">
                Partnerships
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
              We bring together enterprise technologies and domain expertise
              to help organizations build smarter, scalable, and
              future-ready digital solutions.
            </p>
          </div>

          {/* Partnership Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerships.map((partnership) => (
              <button
                key={partnership.id}
                type="button"
                onClick={() => setSelectedPartnership(partnership)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#ec964c]/50 hover:bg-[#ec964c]/5 hover:shadow-[0_20px_60px_rgba(236,150,76,0.10)]"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#ec964c]/10 blur-3xl transition-all duration-500 group-hover:bg-[#ec964c]/20" />

                {/* Logo Area */}
                <div className="relative mb-7 flex h-28 items-center justify-center rounded-xl border border-white/10 bg-black/20 p-5 transition-all duration-300 group-hover:border-[#ec964c]/20">
                  {/* Replace these placeholders with actual logos */}
                  {/* <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-white/20 text-sm text-gray-500">
                    {partnership.name} Logo
                  </div> */}

                  {/* When you add logo images, use: */}
                  <img
                    src={partnership.logo}
                    alt={`${partnership.name} logo`}
                    className="max-h-16 max-w-[160px] object-contain"
                  />
                 
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#ec964c]">
                    {partnership.name}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                    {partnership.shortDescription}
                  </p>

                  <div className="mt-6 flex items-center text-sm font-medium text-[#ec964c]">
                    Explore Partnership
                    <FiChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Dialog */}
      <PartnershipDialog
        partnership={selectedPartnership}
        onClose={() => setSelectedPartnership(null)}
      />
    </>
  );
}

