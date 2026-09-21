import { Routes } from "@/utils/constants";
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";

export const ServiceImplementationData: Testimonial[] = [
  {
    id: 1,
    name: "Accounts Payable For Forbes Marshall",
    quote:
      "Forbes Marshall was looking to automate their vendor invoices which they use to receive from multiple channels. Without effective automation the entire process was manual and took lot of time for approvals, 3-way matches, and validations before payments can be released.",
    src: "https://ik.imagekit.io/wjx8terl3/k-study/forbes-marshall.webp?updatedAt=1753703719135",
    bgImages:
      "url('https://ik.imagekit.io/wjx8terl3/k-study/forbes-marshall.webp?updatedAt=1753703719135')",
    target: "Read More",
    //
    kStudy: [
      {
        title: "Forbes Marshall",
        logoImage: "/images/k-study/download.webp",
        logoImageAA: "/images/k-study/forbesL.webp",
        description:
          "Forbes Marshall was looking to automate their vendor invoices which they use to receive from multiple channels.",
        problemStatementText:
          "Forbes Marshall was looking to automate their vendor invoices which they use to receive from multiple channels. Without effective automation the entire process was manual and took lot of time for approvals, 3-way matches, and validations before payments can be released.",
        projectDetailsText:
          "BPAAS delivered Newgen Accounts Payable Automation solution with BPAAS MetaEx for data extraction from invoices, IBPS for automating the process, and OmniDocs for soring document which in total automated the complete GRN and 3-way Match process along with handling all validation and approvals in System. The system was integrated with Oracle EBS and Image Enablement Features was delivered to give ease to business users. ",
        keyAchievementText: (
          <div>
            <li>Standardize and automate processes across Payables</li>
            <li>Enhance user and vendor experience</li>
            <li>Automation of PO, Non PO, GRN and Invoice Payments</li>
            <li>
              Image Enablement with Oracle EBS ERP using Oracle Integration
              Cloud
            </li>
          </div>
        ),
        stareNumber: 7.9,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
  {
    id: 2,
    name: "Account Opening For Prime Bank Kenya",
    quote:
      "Prime Bank wanted to automate customer onboarding, Account opening and Cheque Book Issuance process which were running manually and was document intensive in nature, which caused lot of delays in processing and left negative impact of customer experience.",
    src: "https://ik.imagekit.io/wjx8terl3/k-study/primeBankBulding.webp?updatedAt=1753703729817",
    bgImages:
      "url('https://ik.imagekit.io/wjx8terl3/k-study/primeBankBulding.webp?updatedAt=1753703729817')",

    target: "Read More",
    //

    kStudy: [
      {
        title: "Prime Bank",
        logoImage: "/images/k-study/prime_bank_africa_logo.webp",
        logoImageAA: "/images/k-study/pinmeA.webp",
        description:
          "Prime Bank wanted to automate customer onboarding, Account opening and Cheque Book Issuance process which were running manually and was document intensive in nature",
        problemStatementText:
          "Prime Bank wanted to automate customer onboarding, Account opening and Cheque Book Issuance process which were running manually and was document intensive in nature, which caused lot of delays in processing and left negative impact of customer experience.",
        projectDetailsText:
          "BPAAS Solutions delivered Customer Onboarding Portal along with automation of Account Opening and Cheque Book Issuance process on Newgen’s Low Code platform. With IBPS core functionality to design process flow along with business rule engine and BAM reporting, Prime Bank was quick able to transform the complete process from manual to system driven, reducing TAT and increasing customer experience",
        keyAchievementText: (
          <div>
            <li>
              Standardize and automate processes across Account Opening, Cheque
              Book Issuance
            </li>
            <li>Enhance Customer Experience</li>
            <li>Automation Manual Activities and Integration with CBS</li>
          </div>
        ),
        stareNumber: 7.9,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
  {
    id: 3,
    name: "Workflow Automation For Experion Developers",
    quote:
      "Axalta Coating Systems is a US based MNC that develops and manufactures coatings for vehicles, industrial, and refinish applications.",
    src: "/images/k-study/News-Article-Cover-Images-2024-05-16T104444.933.webp",
    bgImages:
      "url('/images/k-study/News-Article-Cover-Images-2024-05-16T104444.933.webp')",
    target: "Read More",
    //
    kStudy: [
      {
        title: "Experion",
        logoImage: "/images/k-study/experioninsodelogo.webp",
        logoImageAA: "/images/k-study/experionA.webp",
        description:
          "Emerald Law Offices advises Experion Developers on Real Estate Project acquisition in India",
        problemStatementText:
          "Experion Developers wanted a Note For Approval system to manage the entire capex, projects, infrastructure related approvals which can be managed on a system for faster approvals and easy tracking of notes/files.",
        projectDetailsText:
          "Successfully implemented a Note for Approval (NFA) ISV Solution, providing comprehensive functionality to manage all types of NFAs, including approval hierarchies, Delegation of Authority (DOA), and document attachment and sharing capabilities. The solution featured multiple initiation channels and seamless integration with Newgen “OmniDocs” Document Management System (DMS), Active Directory, and the email server.",
        keyAchievementText: (
          <div>
            <li>Standardize and automate processes</li>
            <li>Enhance internal User Experience</li>
            <li>Faster Approval, Easy Tracking and Delegation of Work</li>
            <li>Single window solution for entire organization</li>
          </div>
        ),
        stareNumber: 21,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
  {
    id: 4,
    name: "Intelligent Document Processing(IDP) For Hindware",
    quote:
      "Hindware was looking to automate their several business processes which were document centric in nature and required lots of time for doing manual data entries from documents into ERP & other applications. This caused lot of delays in finance, procurement, and taxation related process as the number of document where huge.",
    src: "https://ik.imagekit.io/wjx8terl3/k-study/himndware.webp?updatedAt=1753703721898",
    bgImages:
      "url('https://ik.imagekit.io/wjx8terl3/k-study/himndware.webp?updatedAt=1753703721898')",
    target: "Read More",
    //
    kStudy: [
      {
        title: "Hindware",
        logoImage: "/images/k-study/Hindware-logo-brand-page.webp",
        logoImageAA: "/images/k-study/hindwareA.webp",
        description:
          "Hindware Limited is a prominent Indian building products company known for its sanitaryware, bathware, and kitchen appliances",
        problemStatementText:
          "Hindware was looking to automate their several business processes which were document centric in nature and required lots of time for doing manual data entries from documents into ERP & other applications. This caused lot of delays in finance, procurement, and taxation related process as the number of document where huge.",
        projectDetailsText:
          "BPAAS successfully implemented the MetaEx- IDP solution for Hindware which became central engine to process and extract the relevant data from documents like Invoice, PO, Airline Bills, Bill of enteries, electricity bills etc. Using the IDP Solution, User were able to prevent lot of time during process like invoice processing, vendor onboarding, BOE process etc which increased the user experience.",
        keyAchievementText: (
          <div>
            <li>Reduction in Manual Processing</li>
            <li>Improved time and SLA to do processing in ERP</li>
            <li>Ease of business user.</li>
          </div>
        ),
        stareNumber: 21,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
  {
    id: 5,
    name: "Workflow Automation at HMSI",
    quote:
      "The primary objective of this project is to develop Progressive Web Application (PWA) mobile app using Oracle APEX. This innovative solution was crafted to streamline the approval process for service requests initiated through our existing .NET application.",
    src: "https://ik.imagekit.io/wjx8terl3/k-study/manufacturing.webp?updatedAt=1753703725907",
    bgImages:
      "url('https://ik.imagekit.io/wjx8terl3/k-study/manufacturing.webp?updatedAt=1753703725907')",
    target: "Read More",
    //
    kStudy: [
      {
        title: "HMSI",
        logoImage: "/images/k-study/Logo-Honda.webp",
        logoImageAA: "/images/k-study/hondaA.webp",
        description:
          "Honda is a prominent Japanese multinational conglomerate best known for its manufacturing of automobiles, motorcycles, and power equipment.",
        problemStatementText:
          "The primary objective of this project is to develop Progressive Web Application (PWA) mobile app using Oracle APEX. This innovative solution was crafted to streamline the approval process for service requests initiated through our existing .NET application.",
        projectDetailsText:
          "HMSI was using a .NET application that had limited accessibility beyond the premises of HMSI. This posed a significant challenge for employees working remotely or traveling, as they were unable to access the application. As a result, there were delays in approving requests, impacting operational efficiency.",
        keyAchievementText: (
          <div>
            <li>
              Development of a Progressive Web Application (PWA) Mobile App
              using Oracle APEX to streamline 24 internal processes. Each
              process entails a sophisticated 9-level approval workflow.
            </li>
            <li>
              Integrated with existing .NET application, serving as the platform
              from which users initiate service requests. Additionally,{" "}
            </li>
            <li>
              LDAP integration to facilitate user logins, ensuring secure
              access.
            </li>
            <li>
              A user-specific dashboard provides a comprehensive overview,
              showcasing Pending Approvals, Approved, and Rejected requests.
            </li>
            <li>
              Incorporated Email and Push notification integration, enabling
              automated reminders to stakeholders.
            </li>
          </div>
        ),
        stareNumber: 21,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
];

export const ServiceImplementationDataAndAllCases: Testimonial[] = [
  {
    id: 6,
    name: "Invoice Processing For Rubamin",
    quote:
      "Rubamin was looking to automate their vendor invoices for PO, Non PO, Export, Import and Travel invoices which they use to receive from multiple channels. Without effective automation the entire process was manual and took lot of time for approvals, 3-way matches, and validations before payments can be released.",
    src: "/images/k-study/rubin.webp",
    bgImages: "url('/images/k-study/rubin.webp')",
    target: "Read More",
    //
    kStudy: [
      {
        title: "Rubamin",
        logoImage: "/images/k-study/robmaimB.webp",
        logoImageAA: "/images/k-study/rubaminA.webp",
        description:
          "a global leader in the sustainable and circular recycling of critical metals, with a strong focus on recovering valuable metals from industrial waste ",
        problemStatementText:
          "Rubamin was looking to automate their vendor invoices for PO, Non PO, Export, Import and Travel invoices which they use to receive from multiple channels. Without effective automation the entire process was manual and took lot of time for approvals, 3-way matches, and validations before payments can be released.",
        projectDetailsText:
          "BPAAS delivered Invoice Processing Automation solution to automate the complete GRN and 2 way and 3-way Match process along with handling all automated validation and approvals in System. The system was integrated with SAP ERP and Image Enablement features was delivered to give ease to business users. The Solution reduce significant TAT for the end users and ease day to day operations",
        keyAchievementText: (
          <div>
            <li>End to End Automation of vendor Invoices</li>
            <li>
              Significant reduction in TAT and Ease of operation to business
            </li>
            <li>Automation of PO, Non PO, GRN and Invoice Payments</li>
            <li>Image Enablement with SAP ERP</li>
          </div>
        ),
        stareNumber: 7.9,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 21,
        LDown: 21,
      },
    ],
  },
  {
    id: 7,
    name: "Accounts Payable For Wonder Cement",
    quote:
      "Wonder Cement was looking to automate their vendor invoices which they used to receive from multiple channels. The manual process caused delays in approvals and validations before payments.",
    src: "/images/k-study/wonderOficeImages.webp",
    bgImages: "url('/images/k-study/wonderOficeImages.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Wonder Cement",
        logoImage: "/images/k-study/4imageWonder.webp", // Replace with actual logo if available
        logoImageAA: "/images/k-study/wonderA.webp", // Replace with actual logo if available
        description:
          "Wonder Cement aimed to automate vendor invoice processing to reduce manual efforts and improve efficiency.",
        problemStatementText:
          "Wonder Cement was looking to automate their vendor invoices which they use to receive from multiple channels. Without effective automation the entire process was manual and took lot of time for approvals, 3-way matches, and validations before payments can be released.",
        projectDetailsText:
          "BPAAS delivered Newgen Accounts Payable Automation solution with OmniXtract, IBPS, and OmniDocs to automate the complete GRN and 3-way Match process along with handling all validation and approvals in System. The system was integrated with MS Dynamics and Image Enablement Features was delivered to give ease to business users.",
        keyAchievementText: (
          <div>
            <li>Standardize and automate processes across Payables</li>
            <li>Enhance user and vendor experience</li>
            <li>Automation of PO, Non PO, GRN and Invoice Payments</li>
            <li>Image Enablement with MS Dynamics</li>
          </div>
        ),
        stareNumber: 8.3,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 8,
    name: "MDM Creation & Update at AIS Glass",
    quote:
      "AIS Glass faced challenges in manually creating and updating master data for vendors and customers. Lack of real-time visibility impacted finance and procurement operations.",
    src: "/images/k-study/Asahi-India-Glass-Ltd.webp", // Replace with actual image path if available
    bgImages: "url('/images/k-study/Asahi-India-Glass-Ltd.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "AIS Glass",
        logoImage: "/images/k-study/imagesbig4.webp", // Replace with actual logo path
        logoImageAA: "/images/k-study/imagesbig4.webp", // Replace with actual logo path
        description:
          "AIS Glass needed an automated solution to manage their vendor and customer MDM workflows integrated with Oracle ERP.",
        problemStatementText:
          "Due to the large number of vendors, dealers, and distributors, AIS Glass had frequent changes in their master data which used to happen due to different business scenarios. And manually creation and updation of master data was a difficult and tricky task for the backend team in Oracle ERP. Without real-time visibility of who, when, and what is approved for MDM creation and updation, it posted challenge in smooth operations and impacted performance of AIS finance and procurement team.",
        projectDetailsText:
          "The BPAAS team implemented the MDM creation and updation using Newgen’s low Code Application platform to design the complete workflow for creation and updation of vendor and customer MDM. With Newgen workflow and business rules capabilities, BPAAS team quickly defined business rules and workflow routing mechanism for tracking and approving the MDM’s and pushing the MDM changes directly into the Oracle ERP.",
        keyAchievementText: (
          <div>
            <li>Proper Tracking of MDM Changes and Updates</li>
            <li>Real-time visibility of vendor and customer MDMs</li>
            <li>Faster approvals and routing to improve accuracy</li>
            <li>Reduction in PO & SO errors to increase efficiency</li>
          </div>
        ),
        stareNumber: 8.1,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 9,
    name: "Invoice Processing Using OCR For ACG Pharma",
    quote:
      "ACG Pharma aimed to automate vendor invoice processing and reduce human intervention using OCR and achieve high levels of straight-through processing.",
    src: "/images/k-study/acg_unit-11168.webp", // Replace with real image path if available
    bgImages: "url('/images/k-study/acg_unit-11168.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "ACG Pharma",
        logoImage: "/images/k-study/acg_world_logo4.webp", // Replace with real logo path
        logoImageAA: "/images/k-study/acgA.webp", // Replace with real logo path
        description:
          "ACG Pharma is a global player in the pharmaceutical industry seeking OCR-based automation for vendor invoice processing.",
        problemStatementText:
          "ACG Pharma is global player in pharma industry which was to transform their vendor invoice processing through automation and reduce human intervention into the process of Invoices. ACG Pharma has maximum PO based invoice goods invoices and rest with invoice where services which took too much time in ERP to process due to several business scenarios.",
        projectDetailsText:
          "BPAAS delivered Accounts Payable Automation solution with BPAAS MetaEx for data extraction from invoices. With high level of accuracy from invoices and the handling of various business scenarios like 2 way and 3 way match with PO, GRN and invoice, BPAAS was able to deliver 90% of straight through processing of vendor invoices. The system was integrated with SAP ERP and Image Enablement Features was delivered to give ease to business users.",
        keyAchievementText: (
          <div>
            <li>90% and above accuracy from invoices using BPAAS MetaEx</li>
            <li>High level of straight-through processing (STP)</li>
            <li>End-to-end automation with minimal manual intervention</li>
          </div>
        ),
        stareNumber: 8.5,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 10,
    name: "Vendor Portal For Ecom Express",
    quote:
      "Ecom Express faced challenges managing vendor relationships due to lack of a dedicated portal, causing communication gaps and inefficiencies.",
    src: "/images/k-study/ECOM-Express.webp", // Replace with real image if you have
    bgImages: "url('/images/k-study/ECOM-Express.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Ecom Express",
        logoImage: "/images/k-study/ecomBB.webp", // Replace with real logo if you have
        logoImageAA: "/images/k-study/ecomeLogSSS.webp", // Replace with real logo if you have
        description:
          "Ecom Express needed a dedicated vendor portal to streamline onboarding, improve transparency, and enhance vendor communication.",
        problemStatementText:
          "Ecom Express was facing significant challenges in efficiently managing vendor relationships without a dedicated vendor portal. Due to this, it caused inefficient communication, slow onboarding of new vendors, lack of visibility of services and frequent disputes related to payments between Ecom and its vendors.",
        projectDetailsText:
          "BPAAS Solutions implemented an end-to-end vendor portal solution which took care of their manual and slow vendor onboarding process along with delivering a dedicated portal for them to view, accept their PO and submit invoices from the portal itself which delivered transparency and agility to vendors in their operations. With Vendor portal, now vendors can easily track their invoices and raise/respond to queries without any loss of information.",
        keyAchievementText: (
          <div>
            <li>Strengthen Vendor Relationship</li>
            <li>Improved Communication & Efficiency</li>
            <li>Automation of activities and Cost Saving</li>
            <li>Compliance and Risk Management</li>
          </div>
        ),
        stareNumber: 8.2,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 11,
    name: "Upgrade & Migration for Ageas Federal",
    quote:
      "Ageas Federal needed to upgrade its legacy Newgen IBPS & OmniDocs to improve performance, enable new features, and eliminate inefficiencies.",
    src: "/images/k-study/ageas.webp", // Replace with real image if available
    bgImages: "url('/images/k-study/ageas.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Ageas Federal",
        logoImage: "/images/k-study/ageasAAA.webp", // Replace with real logo
        logoImageAA: "/images/k-study/ageasA.webp", // Replace with real logo
        description:
          "Ageas Federal required a comprehensive upgrade of their Newgen platforms to meet modern business demands.",
        problemStatementText:
          "Ageas Federal faced challenges with outdated versions of Newgen IBPS and OmniDocs, resulting in inefficiencies, limited functionality, and difficulty in aligning with evolving business requirements. The organization required a comprehensive upgrade and migration solution to enhance system performance, ensure compatibility with new technologies, and improve operational workflows.",
        projectDetailsText:
          "BPAAS Solutions upgraded both platforms to their latest versions to leverage enhanced functionalities, improved security, and compatibility with modern technologies. Implemented necessary patches and updates to ensure seamless integration with existing IT infrastructure and applications. Migration of existing data from older version along with migration of Retail Policy Issuance process from earlier version of IBPS to latest version without loss of any data or loss of performance.",
        keyAchievementText: (
          <div>
            <li>Optimized system performance for IBPS and OmniDocs</li>
            <li>Improved user and customer experience</li>
            <li>Seamless data migration with zero loss</li>
            <li>Enhanced automation of manual activities</li>
          </div>
        ),
        stareNumber: 8.4,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 12,
    name: "P2P Platform For Panasonic",
    quote:
      "Panasonic Life Solutions aimed to streamline their entire Procure-to-Pay (P2P) cycle, eliminate delays, and integrate with multiple third-party systems including SAP.",
    src: "/images/k-study/Panasonic-logo-at-its-main-office.webp", // Replace with actual image if available
    bgImages: "url('/images/k-study/Panasonic-logo-at-its-main-office.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Panasonic Life Solutions",
        logoImage: "/images/k-study/panasonic.webp", // Replace with real logo if available
        logoImageAA: "/images/k-study/lgolaaa.webp", // Replace with real logo if available
        description:
          "Panasonic Life Solution was struggling with their entire P2P operations due to a scattered and inefficient system landscape.",
        problemStatementText:
          "Panasonic Life Solution was struggling with the entire value chain of Procure to Pay where they had complex and long vendor onboarding, Purchase Indent and Approval Process which was scattered across multiple standalone systems. This lack of centralized tracking impacted operations across departments and factories due to delayed procurement and strained vendor relations.",
        projectDetailsText:
          "BPAAS team proposed a 3-phase solution for implementing a single P2P Platform for Panasonic. This took care of their entire Purchase Indent Process, Vendor Onboarding Process, integrated with PO Approvals system and Payment process, along with connecting several third-party applications including SAP ERP. The new platform enabled centralized tracking, faster operations, and greater process transparency.",
        keyAchievementText: (
          <div>
            <li>Single unified P2P platform across 29 business departments</li>
            <li>
              Standardization and automation of Purchase and Onboarding
              Processes
            </li>
            <li>Faster TAT and streamlined procurement operations</li>
            <li>Integration with SAP and third-party applications</li>
          </div>
        ),
        stareNumber: 8.6,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 13,
    name: "Workflow and MDM Solution For Usha",
    quote:
      "Usha Appliances wanted to upgrade their workflow system for better performance, user experience, and automation of Customer, Vendor, and Material Master processes.",
    src: "/images/k-study/usahOfice.webp", // Replace with real image path
    bgImages: "url('/images/k-study/usahOfice.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Usha Appliances",
        logoImage: "/images/k-study/usha-fan.webp", // Replace with actual logo
        logoImageAA: "/images/k-study/ushaA.webp", // Replace with actual logo
        description:
          "Usha aimed to implement a centralized workflow system to manage all master data and improve UI/UX across departments.",
        problemStatementText:
          "Usha Appliances was looking to replace their existing workflow platform with a new workflow automation solution for improved performance, UI, and functionality for automating their Customer, Vendor, Pricing, Customer Credit and Material Master Processes.",
        projectDetailsText:
          "BPAAS Implemented the end-to-end workflow solution for automating their customer code creation, vendor code creation/extension and updation process along with delivering various validations like integration with Govt Database for real-time validation of details submitted by Vendor and Customer. Alerts, notifications, and an improved UI ensured excellent user experience across CO, Factory, and Warehouses.",
        keyAchievementText: (
          <div>
            <li>Centralized workflow for Customer, Vendor & Material Master</li>
            <li>Integration with Govt database for real-time validation</li>
            <li>Improved turnaround time and compliance</li>
            <li>Enhanced user interface and experience</li>
          </div>
        ),
        stareNumber: 8.4,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 14,
    name: "Python Based RPA Bot For Rubamin",
    quote:
      "Rubamin wanted to automate its finance reconciliation process using RPA to reduce delays and manual effort.",
    src: "/images/k-study/rubin.webp", // Replace with real image path if available
    bgImages: "url('/images/k-study/rubin.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Rubamin (RPA Bot)",
        logoImage: "/images/k-study/robmaimB.webp", // Replace with actual logo path
        logoImageAA: "/images/k-study/rubaminA.webp", // Replace with actual logo path
        description:
          "Rubamin aimed to reduce manual work in finance reconciliation using Python-based RPA bots.",
        problemStatementText:
          "Rubamin was looking to automate its finance process using the RPA bot which could reduce human intervention. The process was slow and took 3-5 days for invoice reconciliation, which impacted their efficiencies and caused operational delays.",
        projectDetailsText:
          "BPAAS Solutions implemented the Python-based RPA bot at Rubamin for their invoice reconciliation process. The Bot was configured with various business logics, rules, and exception-handling scenarios to manage different types of transactions and seamlessly post them into the SAP ERP. It also sent reports and notifications post completion of tasks.",
        keyAchievementText: (
          <div>
            <li>Faster processing of invoice reconciliation</li>
            <li>Reduction in manual processing</li>
            <li>Improved SLA and turnaround time in ERP</li>
            <li>Ease of use and automated reporting</li>
          </div>
        ),
        stareNumber: 8.3,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
  {
    id: 15,
    name: "Incident Automation For Air Water India",
    quote:
      "Air Water India needed to automate its incident reporting and RCA processes to reduce delays, improve analysis, and enable data-driven decisions.",
    src: "/images/k-study/airwater.webp", // Replace with real image if available
    bgImages: "url('/images/k-study/airwater.webp')",
    target: "Read More",
    kStudy: [
      {
        title: "Air Water India",
        logoImage: "/images/k-study/logossdf.webp", // Replace with actual logo if available
        logoImageAA: "/images/k-study/airA.webp", // Replace with actual logo if available
        description:
          "Air Water India aimed to digitize their manual incident reporting and RCA (Root Cause Analysis) process for improved accountability and analysis.",
        problemStatementText:
          "Air Water India was managing the RCA (Root Cause Analysis) process manually, which made it time-consuming. Teams struggled to gather comprehensive data sets including logs, metrics, user feedback, and historical records, making it hard to uncover critical insights and resolve recurring issues.",
        projectDetailsText:
          "BPAAS designed and developed a robust portal on Oracle APEX to automate the RCA process for 8 different incident scenarios. The system included dynamic approval workflows, RCA stage tracking, customizable reporting, and feedback mechanisms to gather insights and ensure follow-up actions. It allowed stakeholders to generate detailed RCA reports and ensured transparency and accountability.",
        keyAchievementText: (
          <div>
            <li>Automation of 8 RCA incident types with dynamic workflows</li>
            <li>Full-stage tracking from issue detection to resolution</li>
            <li>Customizable RCA reports for stakeholders</li>
            <li>Stakeholder feedback system for continuous improvement</li>
          </div>
        ),
        stareNumber: 8.6,
        stars: (
          <div className="flex items-center justify-center w-full ">
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <IoMdStar className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
            <MdOutlineStarBorder className="text-amber-400 text-2xl hover:scale-150 transition-all duration-150 ease-in" />
          </div>
        ),
        LUp: 0,
        LDown: 0,
      },
    ],
  },
];

export const CardData: CardItem[] = [
  {
    title: "ARIA",
    id: "pagenumber1",
    image:
      "https://ik.imagekit.io/wjx8terl3/solutions-images/invoice.mp4?updatedAt=1753683171278",
    // image: "/images/solutions-images/invoice.mp4",
    modalImages: [
      "/images/modalimage1.webp",
      "/images/modalimage2.webp",
      "/images/modalimage1.webp",
      "/images/modalimage2.webp",
    ],
    isVideo: true,
    // icon: <FaShoppingCart className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/PBGEMD System.webp",
    description:
      "ARIA – Your Context-Aware AI Assistant for Fast, Human-like Interaction Across All Platforms.",

    longDescription: `
    ARIA is a smart AI-powered virtual assistant designed for enterprise environments. 
    Whether it's customer support, procurement queries, or internal HR responses — ARIA delivers fast, natural, and precise replies across platforms like web, chat, email, and internal systems. 
    Unlike static bots, ARIA understands context, learns behavior, and automates resolution workflows.
  `,

    features: [
      "Conversational AI with NLP",
      "Cross-Channel Integration (Web, Chat, Email)",
      "Automated Task Resolution",
      "Knowledge Base Sync",
      "Human Escalation Logic",
      "Multi-language Support",
      "Custom Workflows with Business Rules",
    ],

    useCases: [
      "Customer Support Automation",
      "Procurement Assistance",
      "HR Helpdesk Support",
      "IT Ticketing Responses",
      "Internal Policy Answering Assistant",
    ],

    benefits: [
      "Reduce Ticket Resolution Time by 80%",
      "24/7 Support Availability",
      "AI that Understands Enterprise Context",
      "Easy API Integration with ERP/CRM/HRMS",
      "Zero Training Required for End Users",
    ],

    painPointsSolved: [
      "Delayed human support responses",
      "High support workload",
      "Inconsistent answers from support agents",
      "Fragmented internal knowledge access",
    ],

    industryApplications: [
      "IT Services",
      "E-commerce",
      "BPO & Call Centers",
      "HR Departments",
      "Procurement Teams",
    ],

    faq: [
      {
        question: "Can ARIA replace my human support team?",
        answer:
          "ARIA complements your team by handling repetitive queries and routing complex ones to humans efficiently.",
      },
      {
        question: "Does ARIA support multiple languages?",
        answer:
          "Yes, ARIA supports over 25 languages and can be customized further.",
      },
      {
        question: "Can I train ARIA with my own internal knowledge base?",
        answer:
          "Absolutely. ARIA integrates with SharePoint, Google Drive, and custom CMS for knowledge ingestion.",
      },
    ],

    pricingNote:
      "ARIA is available under per-seat or usage-based pricing models. Contact us for enterprise quotes.",
    ctaLabel: "Try ARIA in Action",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber1`,
  },

  {
    title: "Vendor Portal",
    id: "pagenumber3",
    image:
      "https://ik.imagekit.io/wjx8terl3/solutions-images/Streamline%20Ecommerce%20and%20Supply%20Chain%20with%20SKUPREME_%20Effortless%20Growth%20and%20Optimization.jpeg?updatedAt=1756729132458",
    modalImages: [
      "/images/services-images/mepl1.png",
      "/images/services-images/mepl2.png",
      "/images/services-images/mrpl3.png",
    ],
    isVideo: false,
    // icon: <FaUserTie className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/Vendor Portal.webp",
    description:
      "End-to-End Vendor Lifecycle Management — Onboard, Approve, and Manage Vendors Seamlessly with Intelligent Automation.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <p>
          ✔ End-to-End Vendor Lifecycle Management Onboard, approve, and manage
          vendors seamlessly with automated workflows
        </p>
        <p>
          ✔ Document & Compliance Tracking Collect, verify, and monitor vendor
          documents and compliance status in real-time.
        </p>
        <p>
          ✔ Purchase Order & Invoice Management Enable vendors to view POs,
          submit invoices, and track payments—digitally and transparently.
        </p>
        <p>
          ✔ Communication & Collaboration Hub Centralized messaging and alerts
          keep vendors and internal teams aligned at every step.
        </p>
        <p>
          ✔ Performance Monitoring & Analytics Track vendor KPIs, delivery
          timelines, and service quality through intuitive dashboards.
        </p>
        <p>
          ✔ Secure, Scalable & ERP-Ready Fully secure and easily integrated with
          your existing ERP or procurement systems.
        </p>
      </div>
    ),

    features: [
      "Self-Service Vendor Onboarding",
      "Approval Routing and Role-Based Access",
      "Compliance & KYC Management",
      "Auto Reminders and Notifications",
      "Document Upload & Versioning",
      "Integration with ERP/CRM",
      "Audit Logs and Reporting",
    ],

    useCases: [
      "Supplier Registration & Vetting",
      "Automated Compliance Checks",
      "Multi-department Vendor Approval",
      "Vendor Collaboration Hub",
      "Vendor Performance Tracking",
    ],

    benefits: [
      "Reduce Vendor Onboarding Time by 70%",
      "Eliminate Manual Email Follow-ups",
      "Ensure Compliance from Day One",
      "Centralized Documentation & Communication",
      "Real-Time Dashboard for Procurement Teams",
    ],

    painPointsSolved: [
      "Scattered vendor data and documents",
      "Manual compliance tracking",
      "Slow multi-step approval processes",
      "No audit trail of communication",
    ],

    industryApplications: [
      "Manufacturing",
      "Retail",
      "Construction",
      "Logistics",
      "Public Sector",
    ],

    faq: [
      {
        question: "Can vendors upload their own documents?",
        answer:
          "Yes, vendors can upload, edit, and view their own documentation through their self-service portal.",
      },
      {
        question: "How are approvals managed?",
        answer:
          "Approvals are configurable by role, department, or custom logic, and come with automated alerts.",
      },
      {
        question: "Does it support integration with our ERP?",
        answer:
          "Yes, the Vendor Portal integrates with SAP, Oracle, MS Dynamics, and custom ERPs via API.",
      },
    ],

    pricingNote:
      "Vendor Portal is offered with a fixed platform fee and optional add-ons for analytics, integrations, and AI scoring.",
    ctaLabel: "Digitize Vendor Management",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber3`,
  },
  {
    title: "MetaEx",
    id: "pagenumber2",
    image: "https://ik.imagekit.io/wjx8terl3/solutions-images/hud%20futuristic%20animation%20-AI%20generation.mp4?updatedAt=1756794381108",
    // image: "/images/solutions-images/metaEx.webp",
    modalImages: [
      "/images/services-images/hindware1.png",
      "/images/services-images/hindware2.png",
      "/images/services-images/hindware3.png",
    ],
    isVideo: true,
    // icon: <FaProjectDiagram className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/Meta Ex.webp",
    description:
      "MetaEx – Decode Documents at the Speed of AI. Automate data extraction with unmatched accuracy, scale, and speed.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <li>AI-Powered Document Ingestion</li>
        <p className="mb-2">
          Supports structured, semi-structured, and unstructured documents
          (PDFs, images, Excel, Word, etc.). Automatically classifies document
          types using AI/ML.
        </p>
        <li>Intelligent Data Extraction</li>
        <p className="mb-2">
          Extracts metadata and key information using AI/ML and OCR techniques.
          Handles complex fields such as tables, line items, and nested values.
        </p>
        <li>Custom Template and Freeform Processing</li>
        <p className="mb-2">
          Offers both template-based high-accuracy processing and adaptive AI
          for freeform, dynamic documents.
        </p>
        <li>Auto-Learning and Continuous Improvement</li>
        <p className="mb-2">
          Learns from human validation and feedback to continuously improve
          accuracy
        </p>
        <li>Multi-Language Support</li>
        <p className="mb-2">
          Processes documents in multiple regional and global languages.
        </p>
      </div>
    ),

    features: [
      "Meta Data Sync",
      "Real-time Updates",
      "Secure Transfers",
      "Easy Integration",
    ],

    useCases: [
      "Invoice and Receipt Processing",
      "Document Verification in Banking",
      "Healthcare Records Digitization",
      "Logistics & Shipment Docs Automation",
    ],

    benefits: [
      "Eliminate Manual Data Entry",
      "99.9% Accuracy on Structured Documents",
      "End-to-End Encryption",
      "Save 200+ Hours/Month on Ops",
    ],

    painPointsSolved: [
      "Slow document processing",
      "Human error in data entry",
      "Lack of centralized document intelligence",
      "Inefficient manual verification",
    ],

    industryApplications: [
      "Finance & Banking",
      "Healthcare",
      "Logistics",
      "Retail",
      "Manufacturing",
    ],

    faq: [
      {
        question: "What types of documents can Meta Ex handle?",
        answer:
          "It can process PDFs, scanned images, Word docs, and Excel sheets with high accuracy.",
      },
      {
        question: "Do I need to train it on my documents?",
        answer:
          "No. It comes with pre-trained models, but you can fine-tune them for your needs.",
      },
      {
        question: "Can I integrate it with my ERP?",
        answer: "Yes. We support all major systems via API and plug-ins.",
      },
    ],

    pricingNote:
      "Custom pricing based on usage. Contact us for enterprise plans.",

    ctaLabel: "Request a Demo",

    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber2`,
  },
  {
    title: "Account Payable",
    id: "pagenumber4",
    image: "/images/solutions-images/accounts.webp",
    modalImages: [
      "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(6).png?updatedAt=1756794999832",
      "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(4).png?updatedAt=1756794999797",
      "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(7).png?updatedAt=1756794999810",
      "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(5).png?updatedAt=1756794999770",
    ],
    isVideo: false,
    // icon: <FaFileInvoiceDollar className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/Account Payable.webp",
    description:
      "From Invoice to Payment—Smarter, Faster, Paperless. Reimagine Accounts Payable with Automation.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <p>
          ✔ Automated Invoice Capture & Validation <br /> Extract and validate
          invoice data automatically using OCR and AI, reducing manual effort
          and errors.
        </p>
        <p>
          ✔ Touchless Invoice Processing <br />
          Enable straight-through processing with intelligent workflows and
          exception handling
        </p>
        <p>
          ✔ 3-Way Matching & Approval Workflows <br />
          Automatically match invoices with POs and GRNs, and route them through
          customizable approval hierarchies.
        </p>
        <p>
          ✔ Real-Time Tracking & Payment Status <br />
          Gain full visibility into invoice status, approval stages, and payment
          timelines from a centralized dashboard.
        </p>
        <p>
          ✔ Vendor Self-Service Portal <br />
          Allow vendors to submit invoices, check payment status, and receive
          automated notifications—reducing follow-ups.
        </p>
        <p>
          ✔ Secure, Compliant, and ERP-Integrated <br />
          Ensure data security and regulatory compliance while seamlessly
          integrating with your existing ERP systems.
        </p>
      </div>
    ),

    features: [
      "AI-Powered Invoice Data Extraction",
      "Purchase Order Matching (2-way / 3-way)",
      "Automated Approval Workflows",
      "Duplicate Invoice Detection",
      "Vendor Communication Integration",
      "Payment Scheduling & Processing",
      "Audit Logs & Compliance Reporting",
    ],

    useCases: [
      "High-volume invoice processing",
      "Touchless invoice approvals",
      "Vendor payment planning",
      "ERP-integrated financial operations",
      "Multi-level finance approvals",
    ],

    benefits: [
      "Reduce Invoice Processing Time by 80%",
      "Minimize Late Payment Penalties",
      "Improve Vendor Relationships",
      "Enhance Financial Visibility & Compliance",
      "Eliminate Paper-Based Processes",
    ],

    painPointsSolved: [
      "Manual data entry from paper invoices",
      "Delayed invoice approvals",
      "Missed or duplicate payments",
      "Lack of visibility into outstanding payables",
    ],

    industryApplications: [
      "Finance & Accounting",
      "Retail Chains",
      "Healthcare & Pharma",
      "Construction",
      "B2B Procurement Teams",
    ],

    faq: [
      {
        question: "Can the system read scanned invoices?",
        answer:
          "Yes, it uses OCR and AI models to extract data from scanned or PDF invoices.",
      },
      {
        question: "How does approval routing work?",
        answer:
          "Invoices are automatically routed based on defined thresholds, departments, or project codes.",
      },
      {
        question: "Will this work with our existing accounting software?",
        answer:
          "Yes, it integrates with most ERPs and accounting systems including Tally, SAP, Oracle, QuickBooks, and more.",
      },
    ],

    pricingNote:
      "AP automation is billed based on document volume, with enterprise plans available for large finance teams.",
    ctaLabel: "Automate Your AP Now",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber4`,
  },
  {
    title: "Vendor and Customer MDM",
    id: "pagenumber5",
    image:
      "https://ik.imagekit.io/hnooxnfml/download%20(1)%20(1).png?updatedAt=1755860452105",
    // image: "/images/solutions-images/note.webp",
    modalImages: [
      "/images/services-images/ussa1.png",
      "/images/services-images/ussa2.png",
    ],
    isVideo: false,
    // icon: <FaClipboardCheck className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/Note For Approval.webp",
    description:
      "Clean Data. Clear Decisions. Confident Growth. Unify your vendor and customer master for smarter processes and stronger relationships.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <p>
          🔸 Master Data Workflow Management <br />
          Create, modify, deactivate, or merge records via intelligent workflows
          Controlled validations and approvals across each lifecycle stage
        </p>
        <p>
          🔸 Workflow Automation <br />
          Configurable, multi-level approval processes, SLA tracking, role-based
          routing, and complete audit trails
        </p>
        <p>
          🔸 Data Quality & Standardization <br />
          Auto-formatting of GSTIN, PAN, addresses, Fuzzy logic for duplicate
          detection and clean data management
        </p>
        <p>
          🔸 Intelligent Search & Match <br />
          Smart search engine to detect existing or similar records. Prevents
          duplication right at the point of entry
        </p>
        <p>
          🔸 Integrated Validation Engine <br />
          Real-time checks with GST portal, PAN, IFSC, and ERP systems. Ensures
          accuracy and compliance before final record posting
        </p>
        <p>
          🔸 ERP Integration <br />
          Seamless integration with SAP, Oracle, MS Dynamics, and legacy
          platforms. Supports both real-time and batch data synchronization
        </p>
        <p>
          🔸 Dashboards & Reporting <br />
          Actionable insights on process performance and request lifecycle
        </p>
        <p>Tracks data quality issues and supports proactive governance</p>
      </div>
    ),

    features: [
      "Single Source of Truth for Vendor & Customer Records",
      "Automated Data Deduplication",
      "Custom Approval Workflows for Data Updates",
      "Validation Against Official Sources (GSTIN, PAN, etc.)",
      "Multi-Region, Multi-Language Support",
      "Auto-Triggered Notifications for Updates",
      "Change Logs and Full Audit Trails",
    ],

    useCases: [
      "Centralizing master data across business units",
      "Cleaning legacy ERP/CRM records",
      "Vendor onboarding consistency",
      "Compliance with GST, KYC, and tax laws",
      "Improving data-driven decision making",
    ],

    benefits: [
      "Reduce data redundancy by 90%",
      "Accelerate vendor/customer onboarding",
      "Improve compliance and governance",
      "Enable accurate reporting & analytics",
      "Lower operational risk from incorrect data",
    ],

    painPointsSolved: [
      "Duplicate or outdated vendor/customer records",
      "Lack of a unified database",
      "Inefficient data update processes",
      "Non-compliance with regulatory data standards",
    ],

    industryApplications: [
      "BFSI (Banking & Insurance)",
      "Manufacturing & Supply Chains",
      "Telecom & Utilities",
      "Retail & Distribution",
      "Government Entities",
    ],

    faq: [
      {
        question: "How is the data validated?",
        answer:
          "Through real-time API validation using government and third-party sources like GSTN, PAN, Aadhar, etc.",
      },
      {
        question: "Can it work across different countries?",
        answer:
          "Yes, it supports multi-country formats, validation rules, and localization.",
      },
      {
        question: "What happens to existing bad data?",
        answer:
          "Our system detects and flags duplicates and inaccuracies, allowing you to merge, archive, or correct records easily.",
      },
    ],

    pricingNote:
      "MDM is priced by number of master records and modules. Volume discounts apply to large organizations.",
    ctaLabel: "Clean Your Master Data Now",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber5`,
  },
  {
    title: "AI Based Capex & Opex Workflow (NFA & Committee Meeting)",
    id: "pagenumber6",
    image:
      "https://ik.imagekit.io/wjx8terl3/solutions-images/meetting.mp4?updatedAt=1753683166367",
    // image: "/images/solutions-images/meetting.mp4",
    modalImages: [
      "/images/services-images/yoko3.png",
      "/images/services-images/yoko1.png",
    ],
    isVideo: true,
    // icon: <FaUsers className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/Committee Meeting.webp",
    description:
      "Smart Approvals. Stronger Control. Digitize Capex & Opex Approvals for Governance and Speed.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <p>Automated Proposal Submission</p>
        <p className="mb-2">
          Digital forms with structured input, document uploads, and auto-budget
          linking
        </p>
        <p>AI Classification & Prioritization</p>
        <p className="mb-2">
          Identifies Capex vs. Opex, flags urgency, and recommends next steps.
        </p>
        <p>Dynamic Workflow Routing</p>
        <p className="mb-2">
          Auto-routing through configurable approval hierarchies with SLA
          tracking.
        </p>
        <p>NFA Validation Engine</p>
        <p className="mb-2">
          Ensures proper documentation, compliance, and pre-checks before
          approvals
        </p>
        <p>Committee Meeting Management</p>
        <p className="mb-2">
          Prepares agenda, collates NFAs, captures decisions, and archives
          minutes.
        </p>
        <p>ERP Integration</p>
        <p className="mb-2">
          Syncs with SAP, Oracle, and other systems for seamless data flow.
        </p>
        <p>Audit & Compliance Logs</p>
        <p className="mb-2">
          End-to-end traceability for internal and regulatory audits.
        </p>
      </div>
    ),

    features: [
      "Custom Approval Chains for Capex & Opex",
      "Committee Meeting Scheduling & Notes",
      "Budget Threshold Alerts & Escalations",
      "Real-time Document Collaboration",
      "Integration with Finance & ERP Systems",
      "AI-Powered Recommendations & Approvals",
      "Comprehensive Audit Logs",
    ],

    useCases: [
      "Multi-level Capex or Opex approval processes",
      "Department-level budget approvals",
      "Governance committee workflows",
      "Policy-based digital documentation",
      "Meeting-based group decision tracking",
    ],

    benefits: [
      "Faster approval cycles with clear governance",
      "Reduced paperwork and manual routing",
      "Improved transparency for audit and compliance",
      "Better collaboration between departments and finance",
      "Real-time visibility into budget usage",
    ],

    painPointsSolved: [
      "Slow NFA movement across departments",
      "Manual meeting-based approval delays",
      "Lack of visibility into Capex/Opex status",
      "Audit challenges from untracked decisions",
    ],

    industryApplications: [
      "Enterprises with Capex Governance Models",
      "Public Sector & PSU Organizations",
      "Large Corporates with Multi-Tier Finance Teams",
      "Construction & Infrastructure",
      "Educational Institutions and Trusts",
    ],

    faq: [
      {
        question: "Can this system handle both Capex and Opex?",
        answer:
          "Yes, it has dedicated flows for both with separation in policy and approval logic.",
      },
      {
        question: "What if my approval flow requires multiple committees?",
        answer:
          "The system supports parallel and sequential committee flows, including dynamic routing.",
      },
      {
        question: "Is this suitable for government or public institutions?",
        answer:
          "Absolutely. It aligns with governance models and can be audited easily.",
      },
    ],

    pricingNote:
      "Pricing depends on number of users and approval volume. Government rates available on request.",
    ctaLabel: "Digitize Your Approvals Now",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber6`,
  },
  {
    title: "Master Data Management – Material & Item",
    id: "pagenumber7",
    image: "https://ik.imagekit.io/wjx8terl3/solutions-images/_%20Ready%20to%20reclaim%20your%20time%20and%20boost%20your%20productivity_%20__At%20EcoTek%20Social,%20we%20believe%20that%20automation%20is%20the%20secret%20sauce%20to%20working%20smarter,%20not%20harder!%20_%E2%9C%A8%20Imagine%20having%20an%20AI%20assistant%20that%20handles%20all%20tho.jpeg?updatedAt=1756812647168",
    // image: "/images/solutions-images/vendorOnboarding.webp",
    modalImages: [
      "/images/services-images/merino1.png",
      "/images/services-images/merino2.png",
      "/images/services-images/merino3.png",
      "/images/services-images/merino4.png",
    ],
    isVideo: false,
    // icon: <FaFlask className="my-6 text-5xl md:text-7xl" />,
    icon: "/images/icons/New Product Development.webp",
    description:
      "Standardize Your Material & Item Data. Eliminate Duplicates. Power Operational Accuracy Across Systems.",

    longDescription: `
    The Material & Item MDM module centralizes all inventory-related master data across plants, warehouses, systems, and suppliers. 
    It automates data cleansing, classification, and governance of items including raw materials, packaging, assets, and consumables.
    With standardized naming conventions, hierarchy mapping, and validation logic, it ensures accuracy across procurement, inventory, and finance operations.
  `,

    features: [
      "Centralized Material Master Repository",
      "Duplicate Detection & Resolution",
      "Custom Field Mapping & Taxonomy Setup",
      "Unit of Measure (UoM) Standardization",
      "Real-time Validation against ERP Standards",
      "Automated Classification (UNSPSC, HSN, etc.)",
      "Multi-Plant, Multi-Currency Support",
    ],

    useCases: [
      "Cleaning legacy material master data from ERP systems",
      "Setting up a global item taxonomy for procurement",
      "Avoiding duplicate material creation across teams",
      "Ensuring consistent UoM and tax code usage",
      "Managing catalogs in large supply chains",
    ],

    benefits: [
      "Improve Procurement Accuracy",
      "Reduce Inventory Cost via De-Duplication",
      "Ensure Compliance with Tax and Audit Policies",
      "Boost Supply Chain Efficiency",
      "Accelerate Material Onboarding by 5x",
    ],

    painPointsSolved: [
      "Duplicate material codes across systems",
      "Inconsistent units, tax codes, and descriptions",
      "Lack of visibility into global inventory",
      "Difficulty in catalog standardization",
    ],

    industryApplications: [
      "Manufacturing",
      "Retail & FMCG",
      "Oil & Gas",
      "Construction & Real Estate",
      "Pharma & Chemicals",
    ],

    faq: [
      {
        question: "Can this integrate with our SAP material master?",
        answer:
          "Yes, we support direct integration with SAP, Oracle, and other ERP platforms.",
      },
      {
        question: "What about custom fields for my industry?",
        answer:
          "The system supports full customization of fields, classifications, and validation rules.",
      },
      {
        question: "Do you support auto-classification of items?",
        answer:
          "Yes, our AI engine can auto-assign categories like UNSPSC, HSN, and material groups.",
      },
    ],

    pricingNote:
      "MDM for Material is priced by number of SKUs and integration requirements. One-time and recurring plans available.",
    ctaLabel: "Get Clean Material Data Now",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber7`,
  },

  {
    title: "E-Procurement",
    icon: "/images/icons/E-Procurement.webp",
    id: "pagenumber8",
    image:
      "https://ik.imagekit.io/hnooxnfml/Untitled%20video%20-%20Made%20with%20Clipchamp%20(1).mov/ik-video.mp4?updatedAt=1755860452227",
    modalImages: [
      "/images/services-images/Screenshot 2025-08-28 111913.png",
      "/images/services-images/Screenshot 2025-08-28 111953.png",
      "/images/services-images/Screenshot 2025-08-28 112035.png",
    ],
    isVideo: true,
    description:
      "Simplify Sourcing. Accelerate Savings. Digitize Procurement with Full Visibility and Control.",

    longDescription: (
      <div className="grid grid-cols-1 gap-2">
        <p>Digital Purchase Requisition (PR)</p>
        <p className="mb-2">
          Automated PR creation with workflow-based approvals.
        </p>
        <p>Vendor Management</p>
        <p className="mb-2">
          Onboarding, qualification, and real-time collaboration with vendors.
        </p>
        <p>RFQ & Quotation Management</p>
        <p className="mb-2">
          Create and float RFQs; collect, compare, and evaluate vendor quotes.
        </p>
        <p>E-Auction Support</p>
        <p className="mb-2">
          Reverse/forward auction capability for strategic sourcing.
        </p>
        <p>Purchase Order (PO) Automation</p>
        <p className="mb-2">
          Auto-generate and dispatch POs post final approval.
        </p>
        <p>Budget & Approval Controls</p>
        <p className="mb-2">
          Budget checks, multi-level approval flows, and audit trails.
        </p>
        <p>Document Management</p>
        <p className="mb-2">
          Centralized storage of RFQs, POs, quotes, contracts, etc.
        </p>
        <p>Analytics & Dashboards</p>
        <p className="mb-2">
          Real-time insights into procurement cycle time, vendor performance,
          and spend analysis.
        </p>
        <p>ERP Integration</p>
        <p className="mb-2">
          Seamless sync with SAP, Oracle, and other ERPs for PR, PO, GRN, and
          invoicing.
        </p>
        <p>Compliance & Audit Ready</p>
        <p className="mb-2">
          Configurable rules engine, full traceability, and policy adherence.
        </p>
      </div>
    ),

    features: [
      "Digital Purchase Requisitions (PR)",
      "RFQ/RFP Creation and Management",
      "Vendor Quote Comparison Engine",
      "Automated PO Generation",
      "Approval Workflows with Multi-Level Routing",
      "Budget Integration & Spend Limits",
      "Contract Repository with Alerts",
    ],

    useCases: [
      "Streamlining sourcing for indirect procurement",
      "Managing multi-vendor RFQs and competitive bidding",
      "Reducing cycle time for PO approvals",
      "Tracking budget consumption by department",
      "Ensuring policy compliance in buying process",
    ],

    benefits: [
      "Cut Procurement Cycle Time by 50%",
      "Ensure Spend Compliance",
      "Improve Visibility into Sourcing Activity",
      "Drive Better Vendor Negotiation with Data",
      "Standardize Approval & PO Workflows",
    ],

    painPointsSolved: [
      "Manual PR and PO processes",
      "Lack of visibility into vendor quotes",
      "Policy violations in purchasing",
      "Poor tracking of spend commitments",
    ],

    industryApplications: [
      "Manufacturing",
      "Automotive",
      "Telecom",
      "IT Services",
      "Public Sector Procurement",
    ],

    faq: [
      {
        question: "Does the system support quote comparison?",
        answer:
          "Yes. It auto-compares vendor quotes based on criteria like price, delivery, and terms.",
      },
      {
        question: "Can I set budget limits and approvals?",
        answer:
          "Absolutely. You can set department-wise thresholds, budget alerts, and approval flows.",
      },
      {
        question: "How are purchase orders generated?",
        answer:
          "POs are auto-created based on approved requisitions or quotes — with full audit history.",
      },
    ],

    pricingNote:
      "Modular pricing based on number of users and transactions. Scalable for mid-size and enterprise buyers.",
    ctaLabel: "Digitize Your Procurement",
    openPage: `${Routes.SERVICES_PAGES}?page=pagenumber8`,
  },
];
