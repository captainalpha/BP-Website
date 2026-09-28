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
          backgroundImage: "url('/images/pexels-phael-2558823.jpg')",
          fontFamily: "var(--font-inter)",
        }}
      >
        <div className="flex flex-col justify-center bg-[#0000002e] backdrop-blur-xs h-[85vh] items-center px-4  md:px-20 ">
          <Image
            src="/images/Logo-Reverse-png.png"
            alt="logo"
            height={500}
            width={500}
            className=" "
          />
          <div className=" md:p-8 flex flex-col items-center justify-center">
            {/* <h1 className="text-6xl text-[#ec964d] font-bold">
              Newgen Software
            </h1> */}
            <p className="text-xs text-center md:text-xl mt-4 ">
              <a
                href="https://newgensoft.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec964d]"
              >
                Newgen
              </a>{" "}
              is the leading provider of a Low Code Application Platform along
              with Enterprise Content Management and Customer Communication
              Management Solutions for delivering seamless digital
              transformation for organizations with capabilities to automate
              business processes.{" "}
              <a
                href="https://www.bpaassolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ec964d]"
              >
                BPAAS Solutions
              </a>{" "}
              aims to provide you with customer with process automation by
              reducing manual activities and delivering enhanced customer
              experience. With low code-based platforms for greater efficiency,
              improved compliance, and scalability.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-10">
        {/* Card 1 */}
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
              BPAAS Solutions Practice on Newgen Platform
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              BPAAS Solutions been a{" "}
              <span className="text-[#ec964d] font-semibold">
                Platinum Partner of Newgen Software
              </span>{" "}
              for last 4 years delivered complex implementations on Newgen
              Platform for multiple clients in verticals of{" "}
              <span className="text-white font-medium">
                Manufacturing, Insurance, Real Estate, IT/ITES, Telecom and
                Banking
              </span>
              . Awarded The Best Innovation Partner by Newgen, BPAAS Solutions
              continues to deliver exceptional service and support to our
              clients.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-10 flex flex-col items-center text-center ">
          <Image
            src="/images/Vendora.jpg"
            alt="logo"
            height={300}
            width={300}
            className="rounded-lg mb-6"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[#ec964d] mb-4">
              ISV Solution on Newgen Platform
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              BPAAS Solutions have gone beyond just the implementation of Newgen
              Solution, BPAAS now have developed and deployed ISV Solutions like{" "}
              <span className="text-[#ec964d] font-medium">
                Note For Approval(NFA), Vendora(Vendor Portal)
              </span>{" "}
              and{" "}
              <span className="text-[#ec964d] font-medium">
                Master Data Management
              </span>{" "}
              Solution to client to deliver best of class solutions using the
              Core Newgen Capabilities. With these ISV Solutions, Customer can
              drastically reduce their time to market and with reduced
              customization efforts
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#ec964d] text-4xl">Solution Details</h1>
        <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
          <h1 className="text-[#639fcb] mb-8">NFA Flyer</h1>
          <Image
            src="/images/NFALogin.png"
            alt="logo"
            height={600}
            width={800}
            className="rounded-lg mb-6"
          />
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-[#ec964d]">What is NFA?</h1>
              <p>
                – The need for efficient and transparent approval processes is
                most important for any large organization. Traditional methods
                of obtaining approvals for procurement requests involve manual
                intervention, time-consuming tasks, leading to delays, errors,
                and lack of accountability.
              </p>
              <p>
                – Recognizing this challenge, the development of the Note for
                Approval System emerged as a solution to streamline and optimize
                the approval workflow within an organization.
              </p>
            </div>
            <div>
              <h1 className="text-[#ec964d]">Why NFA?</h1>
              <p>
                – The conventional approval methods, often relying on emails,
                paperwork, or in-person signatures has many challenges. These
                include loss of documents, unclear approval paths, and
                difficulties in tracking the status of requests.
              </p>
              <p>
                – The Note for Approval System addresses these challenges by
                leveraging technology to automate, centralize, and enhance the
                entire approval process. By providing a digital platform for
                creating, submitting, and tracking notes for approval, the
                system aims to accelerates the approval process & make it
                transparent to organization&apos;s stakeholders.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                User Friendly Interface
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                The approval system will boast an intuitive and user-friendly
                interface, ensuring ease of use for all employees involved in
                the approval workflow.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Customizable Workflow
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                Different approval processes require different steps. This
                system supports customizable workflows, allowing departments to
                configure the approval process to their specific needs.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Role Based Access Control
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                To maintain data security and privacy, the system will
                incorporate role-based access control, allowing only authorized
                personnel to initiate, review, and approve requests.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Notifications and Reminders
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                Automated notifications and reminders will be sent to relevant
                stakeholders at each stage of the approval process, minimizing
                delays and ensuring timely responses.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Integration Capabilities
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                The system will integrate seamlessly with existing tools and
                platforms used within the organization, minimizing disruption
                and ensuring a smooth transition.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Audit Trail
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                A comprehensive audit trail will be maintained, providing a
                detailed history of all approval actions. This feature enhances
                transparency and accountability.
              </p>
            </CardSpotlight>
          </div>
        </div>
        <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
          <h1 className="text-[#639fcb] mb-8">Vendora Onboarding</h1>
          <Image
            src="/images/VendoraLogin.png"
            alt="logo"
            height={600}
            width={800}
            className="rounded-lg mb-6"
          />
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-[#ec964d]">
                Why companies should opt for vendora?
              </h1>
              <p className="text-[#ffffffc5]">
                – The arduous and time-intensive procedure of integrating and
                administrating vendor documents for regulatory compliance.
              </p>
              <p className="text-[#ffffffc5]">
                – The manual and laborious verification of vendor documents such
                as GSTIN, PAN, and ITR, necessitating access to multiple
                government portals.
              </p>
              <p className="text-[#ffffffc5]">
                – The manual data entries and approvals in ERP&apos;s for the
                creation of vendor codes, a process that is both time-consuming
                and prone to errors.
              </p>
              <p className="text-[#ffffffc5]">
                – The absence of a centralized system to manage and address
                vendor issues and queries related to payments, leading to
                inefficiencies and communication gaps.
              </p>
              <p className="text-[#ffffffc5]">
                – The lack of a comprehensive vendor ledger and spend analytics,
                which hampers visibility into vendor transactions and
                expenditure patterns.
              </p>
              <p className="mt-4">
                These points highlight the need for a more streamlined and
                automated vendor management system. Such a system could
                significantly reduce the time and effort involved in these
                processes, improve accuracy, and provide valuable insights for
                decision-making.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-10">
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                User Friendly Interface
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                It has an intuitive and user-friendly interface for the vendor
                registration where new vendors can submit their information such
                as company name, contact information, tax identification,
                certifications, and other relevant documentation.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Customizable Workflow
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                Different approval processes require different steps. This
                system supports customizable workflows, allowing departments to
                configure the approval process to their specific needs.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Field Level Validation
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                System is integrated with government APIs to validate the
                details like GST, PAN, Bank Account, legal status, financial
                stability etc.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Role Based Access Control
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                To maintain data security and privacy, the system is
                incorporated role-based access control, allowing only authorized
                personnel to initiate, review, and approve requests.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Integration Capabilities
              </p>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                Integrate vendor information into relevant system, such as
                procurement, finance and enterprise resource planning (ERP)
                systems.
              </p>
            </CardSpotlight>
            <CardSpotlight className="h-full w-full cursor-pointer">
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Other Features
              </p>
              <div className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                <li>Report & Dashboard</li>
                <li>Status Visibility</li>
                <li>Duplicate Vendor Check</li>
                <li>Audit Trail</li>
                <li>Email Notification</li>
              </div>
            </CardSpotlight>
          </div>
        </div>

        <div className="flex bg-gradient-to-br from-[#232323] rounded-xl to-[#0d0d0d] p-12 m-10 flex-col justify-center items-center">
          <h1 className="text-[#639fcb] mb-8">Master Data Management</h1>
          <p className="text-center text-lg">
            Master Data Management (MDM) is the process of consolidating and
            maintaining a single, high-quality record for customers, products,
            suppliers, and other key entities within a business by integrating
            data from various sources. This unified master data provides a
            reliable and consistent foundation for accurate reporting, reduced
            errors, elimination of redundancy, and informed decision-making
            across an organization.
          </p>
          <div className="flex gap-12 py-16 justify-between items-center">
            <div>
              <h1 className="text-[#ec964d] text-lg">
                When MDM is Missing: Key Business Hurdles
              </h1>
              <p className="flex items-center gap-2">
                <FaCircleCheck />
                Incorrect And Outdated Master Data Within ERP Systems.
              </p>
              <p className="flex items-center gap-2">
                <FaCircleCheck />
                Non-standardized Processes for Master Data Creation and Updates.
              </p>
              <p className="flex items-center gap-2">
                <FaCircleCheck />
                Manual processes lacking proper data validation, approvals and
                tracking.
              </p>
              <p className="flex items-center gap-2">
                <FaCircleCheck />
                Poor Data Integrity And Scalability Issues Resulting From
                Inconsistent And Duplicate Data.
              </p>
            </div>

            <Image
              src="/images/asdfsadfsadf.png"
              alt="logo"
              height={400}
              width={400}
              className="rounded-lg mb-6"
            />
          </div>
          <div>
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-xl text-[#639fcb]">
                Key Advantages of Master Data Management
              </h1>
              <p>
                By providing a single source of truth for critical business
                information, the MDM solution eliminates data issues such as
                redundancies and errors. This delivers high-quality data that
                can be utilized across the organization, leading to reduced
                operational challenges, better compliance, enhanced scalability,
                and improved user experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10">
              <CardSpotlight className="h-full w-full text-center cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Operational Efficiencies
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Standardized MDM creation and update processes and clear
                  approval workflows governed by TATs and SLAs helps eliminate
                  bottlenecks and speeds up MDM operations.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full text-center cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Easier Rollouts
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  With a single source of truth for MDM, organizations can
                  effectively scale their operations by seamlessly integrating
                  with third-party applications. This reduces the need for
                  extensive data cleansing, enabling faster rollouts and
                  smoother deployments.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full text-center cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  Reduction in Overall IT Cost
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  A centralized MDM process reduces reliance on individual
                  stakeholders, streamlines operations, and drives overall cost
                  savings.
                </p>
              </CardSpotlight>
            </div>
          </div>
          <div className="mt-16">
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <h1 className="text-xl text-[#639fcb]">
                Solution Highlights & Technology Stack
              </h1>
              <p>
                The Master Data Management solution addresses key business
                challenges by standardizing master data across departments. It
                follows a structured six-step process
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-10">
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  1. Data Governance Setup
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Define clear policies and standards for creation,
                  modification, and deletion of master data.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  2. Data Modeling
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Establish the structure, relationships, and business rules for
                  master data entities.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  3. Data Collection & Validation
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Gather data from various source to ensure accuracy and
                  completeness by performing checks for missing values, format
                  errors, and inconsistencies.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  4. Data Approval & Release
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Ensure that only accurate, validated, and authorized master
                  data is made available for use across the organization and
                  properly created or updated in the core system.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  5. Data Distribution
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Deliver validated and approved master data from the central
                  MDM system to all relevant downstream systems.
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-full w-full  cursor-pointer">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                  6. Data Maintenance
                </p>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm hidden md:block">
                  Manage, update, correct, and retire master data continuously
                  to ensure its accuracy, consistency, and relevance over time.
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
                MDM is organized into domains, with commonly used master data
                types including
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
                  📍 Location Master
                </div>
                <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                  💻 Item Master
                </div>
                <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                  💵 Finance Master
                </div>
                <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                  🏷️ Pricing Master
                </div>
                <div className="bg-[#262626] hover:bg-[#ec964d] hover:text-black transition-all duration-300 p-4 rounded-xl flex items-center justify-center gap-2 text-gray-200 font-medium">
                  💼 Asset Master
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
