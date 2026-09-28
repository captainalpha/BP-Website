"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";


const page = () => {
  return (
    <div>
      <div
        className="h-[85vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(&apos;https://ik.imagekit.io/bpaas/1.jpg?updatedAt=1757929888909&apos;)",
          fontFamily: "var(--font-inter)",
        }}
      ></div>
      <div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-10 flex flex-col items-center text-center ">
            <Image
              src="/images/Award2.png"
              alt="logo"
              height={300}
              width={300}
              className="rounded-lg mb-6"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#ec964d] mb-4">
                BPAAS Solutions Practice on Oracle Platform
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                As an
                <span className="text-[#ec964d] font-semibold">
                  Oracle PartnerNetwork (OPN) member
                </span>
                , BPAAS Solutions delivers complex implementations and custom
                solutions on the Oracle platform for clients across diverse
                verticals, including{" "}
                <span className="text-white font-medium">
                  Financial Services, Healthcare, Retail, Manufacturing, and
                  Communications
                </span>
                . Recognized within the Oracle ecosystem for driving customer
                success, BPAAS Solutions is committed to delivering exceptional
                service and innovative solutions that maximize our clients&apos;
                investment in Oracle technologies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-10 flex flex-col items-center text-center ">
            <Image
              src="/images/Award2.png"
              alt="logo"
              height={300}
              width={300}
              className="rounded-lg mb-6"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-[#ec964d] mb-4">
                Custom Solutions on Oracle Platform
              </h1>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                BPAAS Solutions extends beyond standard implementation by
                developing and deploying bespoke solutions on Oracle Cloud
                Infrastructure (OCI). These include{" "}
                <span className="text-[#ec964d] font-medium">
                  Automated Approval Workflows, Supplier Lifecycle Management
                  Portals
                </span>
                , and{" "}
                <span className="text-[#ec964d] font-medium">
                  Enterprise Data Management
                </span>{" "}
                solutions. By leveraging Oracle&apos;s powerful and flexible
                platform, we provide clients with tailored applications that
                accelerate their time-to-market and reduce the need for
                extensive customization efforts.
              </p>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#ec964d] text-4xl">Solution Details</h1>
          <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
            <h1 className="text-[#639fcb] mb-8">
              Approval Workflow Automation
            </h1>
            <Image
              src="https://ik.imagekit.io/bpaas/Untitled%20design%20(1)%20(1).png?updatedAt=1758277077118"
              alt="logo"
              height={600}
              width={800}
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-[#ec964d]">
                  What is Approval Workflow Automation?
                </h1>
                <p>
                  – In any large organization, the need for efficient and
                  transparent approval processes for everything from invoices to
                  expense reports is critical. Traditional methods often involve
                  manual hand-offs and email chains, leading to delays, a lack
                  of visibility, and compliance risks.
                </p>
                <p>
                  – Recognizing this, our Approval Workflow Automation solution,
                  built on Oracle Process Automation, streamlines and optimizes
                  these workflows within an organization.
                </p>
              </div>
              <div>
                <h1 className="text-[#ec964d]">
                  Why Automate Approvals on Oracle?
                </h1>
                <p>
                  – Manual approval methods are prone to challenges like lost
                  documents, unclear approval hierarchies, and difficulty
                  tracking request statuses.
                </p>
                <p>
                  – Our solution addresses these issues by leveraging Oracle&apos;s
                  robust technology to automate, centralize, and enhance the
                  entire approval process. By providing a digital platform for
                  creating, submitting, and tracking approvals, the system
                  accelerates the process and makes it transparent to all
                  stakeholders.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  User-Friendly Interface
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  The approval system boasts an intuitive, web-based interface,
                  ensuring ease of use for all employees involved in the
                  approval workflow.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Customizable Workflows
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Different approval processes require different rules. The
                  system supports customizable, rule-based workflows, allowing
                  departments to configure approvals based on amount, category,
                  or other business data.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Role-Based Access Control
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  To maintain security and compliance, the system incorporates
                  role-based access control, ensuring only authorized personnel
                  can initiate, review, and approve requests.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Notifications and Reminders
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Automated email notifications and reminders are sent to
                  stakeholders at each stage, minimizing delays and ensuring
                  timely responses.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Integration Capabilities
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  The system integrates seamlessly with Oracle Fusion Cloud
                  Applications (ERP, SCM) and other third-party systems,
                  ensuring a smooth data flow and process continuity.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Audit Trail
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  A comprehensive audit trail is maintained, providing a
                  detailed, unchangeable history of all approval actions for
                  enhanced transparency and accountability.
                </p>
              </CardSpotlight>
            </div>
          </div>
          <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
            <h1 className="text-[#639fcb] mb-8">
              Supplier Lifecycle Management
            </h1>
            <Image
              src="https://ik.imagekit.io/bpaas/Untitled%20design%20(1).png?updatedAt=1758277335449"
              alt="logo"
              height={600}
              width={800}
              className="rounded-lg mb-6"
            />
            <div className="flex flex-col gap-8">
              <div>
                <h1 className="text-[#ec964d]">
                  Why companies need modern Supplier Lifecycle Management?
                </h1>
                <p className="text-[#ffffffc5]">
                  – The time-consuming and fragmented process of onboarding new
                  suppliers and managing their compliance documents.
                </p>
                <p className="text-[#ffffffc5]">
                  – The manual effort required to verify supplier credentials,
                  such as tax IDs and compliance certifications, across multiple
                  systems.
                </p>
                <p className="text-[#ffffffc5]">
                  – Manual data entry and approvals in ERP systems for creating
                  and updating supplier records, a process that is slow and
                  prone to errors.
                </p>
                <p className="text-[#ffffffc5]">
                  – The lack of a centralized portal for suppliers to manage
                  their own information and address queries, leading to
                  communication gaps.
                </p>
                <p className="text-[#ffffffc5]">
                  – The absence of a comprehensive 360-degree view of supplier
                  performance and risk, which hampers strategic sourcing and
                  relationship management.
                </p>
                <p className="mt-4">
                  These challenges highlight the need for a streamlined and
                  automated supplier management system. Oracle&apos;s solutions can
                  significantly reduce administrative effort, improve data
                  accuracy, and provide valuable insights for strategic
                  decision-making.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Self-Service Portal
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  An intuitive, user-friendly portal for suppliers to
                  self-register, upload documents, and update their profiles,
                  reducing the administrative burden on your team.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Configurable Onboarding
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  The system supports customizable registration and
                  qualification workflows, allowing you to gather specific
                  information required for different types of suppliers.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Automated Validation
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Leverage integrations to automatically validate supplier
                  details like tax information and compliance status, ensuring
                  data accuracy and mitigating risk.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  360-Degree Supplier View
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Consolidate all supplier information—including performance
                  evaluations, compliance status, and transaction history—into a
                  single, unified profile.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Seamless ERP Integration
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Integrate approved supplier data directly into Oracle Fusion
                  Cloud ERP and other procurement systems, eliminating manual
                  data entry and ensuring consistency.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Other Features
                </p>
                <div className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  <li>Performance Evaluation</li>
                  <li>Compliance & Profile Audits</li>
                  <li>Automated Notifications</li>
                  <li>Risk Management</li>
                  <li>Duplicate Check</li>
                </div>
              </CardSpotlight>
            </div>
          </div>

          <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
            <h1 className="text-[#639fcb] mb-8">Master Data Management</h1>
            <p className="text-center text-lg">
              Oracle Master Data Management (MDM) solutions consolidate, clean,
              govern, and share an organization&apos;s critical business
              data—including customer, product, and supplier information—to
              create a single source of truth. This unified master data provides
              a reliable and consistent foundation for accurate reporting,
              reduced operational costs, and informed decision-making across the
              entire enterprise.
            </p>
            <div className="flex gap-12 py-16 justify-between items-center">
              <div>
                <h1 className="text-[#ec964d] text-lg">
                  When MDM is Missing: Key Business Hurdles
                </h1>
                <p className="flex items-center gap-2">
                  <FaCircleCheck />
                  Inaccurate and inconsistent master data across ERP, SCM, and
                  CRM systems.
                </p>
                <p className="flex items-center gap-2">
                  <FaCircleCheck />
                  Non-standardized, manual processes for creating and updating
                  master data.
                </p>
                <p className="flex items-center gap-2">
                  <FaCircleCheck />
                  Lack of proper data governance, validation, and tracking,
                  leading to compliance risks.
                </p>
                <p className="flex items-center gap-2">
                  <FaCircleCheck />
                  Poor data integrity and scalability issues caused by duplicate
                  and fragmented information.
                </p>
              </div>

              <Image
                src="https://ik.imagekit.io/bpaas/asdfsadfsadf.png?updatedAt=1758277525505"
                alt="logo"
                height={400}
                width={400}
                className="rounded-lg mb-6"
              />
            </div>
            <div>
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl text-[#639fcb]">
                  Key Advantages of Oracle Master Data Management
                </h1>
                <p>
                  By providing a single, authoritative source for critical
                  business information, Oracle&apos;s MDM solution eliminates data
                  silos and inconsistencies. This delivers high-quality, trusted
                  data that can be leveraged across the organization, leading to
                  reduced operational friction, better compliance, enhanced
                  analytics, and improved business agility.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10">
                <CardSpotlight className="h-full w-full text-center cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Improved Operational Efficiency
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Standardized data creation and update processes governed by
                    clear workflows and approvals help eliminate bottlenecks and
                    speed up operations.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full text-center cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Foundation for Analytics
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    With a single source of truth, organizations can trust their
                    data, enabling more accurate business intelligence,
                    reporting, and AI-driven insights.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full text-center cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Stronger Data Governance
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    A centralized MDM process with clear data stewardship and
                    quality rules reduces reliance on siloed knowledge and
                    drives overall compliance and cost savings.
                  </p>
                </CardSpotlight>
              </div>
            </div>
            <div className="mt-16">
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl text-[#639fcb]">
                  Solution Highlights & Technology Stack
                </h1>
                <p>
                  Oracle Enterprise Data Management (EDM) Cloud addresses key
                  business challenges by standardizing master data across
                  applications. It follows a structured, collaborative process.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10">
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    1. Data Modeling & Governance
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Define and register applications, data domains, and
                    properties. Establish clear governance policies and
                    standards for master data.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    2. Data Consolidation
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Consolidate master data from multiple sources into a single
                    central repository using pre-built connectors and
                    integration tools.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    3. Data Cleansing & Validation
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Visually compare and rationalize data from different
                    sources. Use automated workflows and validation rules to
                    ensure data is accurate and complete.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    4. Collaborative Workflow
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Enable business users to request changes through a secure
                    workflow, ensuring that only validated and authorized data
                    is approved.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    5. Data Synchronization
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Automatically synchronize approved master data from the
                    central hub to all relevant downstream systems, both Oracle
                    and non-Oracle.
                  </p>
                </CardSpotlight>
                <CardSpotlight className="h-full w-full  cursor-pointer">
                  <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    6. Data Maintenance & Audit
                  </p>
                  <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                    Continuously manage, update, and correct master data over
                    time, with a complete audit trail of all changes for full
                    transparency.
                  </p>
                </CardSpotlight>
              </div>
            </div>
            <div className="mt-32 w-full">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Master Data Management Categories
                </h2>
                <p className="text-gray-400 mb-8">
                  Oracle MDM is organized into domains, with purpose-built
                  applications for the most common master data types.
                </p>

                {/* Button */}
                <div className="flex justify-center mb-12">
                  <button className="bg-[#1f1f1f] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#ec964d] hover:text-black transition-all duration-300">
                    Types of Master Data
                  </button>
                </div>

                {/* Boxes Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    🧑 Customer Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    📦 Product Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    🚚 Supplier Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    👥 Employee Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    📍 Site/Location Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    💼 Asset Master
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    💵 Financials Master (CoA)
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    📊 Reference Data
                  </div>
                  <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                    ...and more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// const CardNew = ({
//   title,
//   Text,
//   children,
// }: {
//   title: string;
//   Text: React.ReactNode;
//   children?: React.ReactNode;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <button
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  p-4  h-[30rem] relative"
//     >
//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20">
//         <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center text-2xl font-bold">
//           {Text}
//         </div>
//         <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
//           {title}
//         </h2>
//       </div>
//     </button>
//   );
// };
