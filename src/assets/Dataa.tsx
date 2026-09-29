import { Routes } from "@/utils/constants";

export const CardData: CardItem[] = [
  {
    title: "ARIA",
    id: "pagenumber1",
    image:
      "https://ik.imagekit.io/wjx8terl3/solutions-images/invoice.mp4?updatedAt=1753683171278",
    modalImages: [
      "/images/modalimage1.webp",
      "/images/modalimage2.webp",
      "/images/modalimage1.webp",
      "/images/modalimage2.webp",
    ],
    isVideo: true,
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
    modalImages: [
      "/images/services-images/hindware1.png",
      "/images/services-images/hindware2.png",
      "/images/services-images/hindware3.png",
    ],
    isVideo: true,
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
    modalImages: [
      "/images/services-images/ussa1.png",
      "/images/services-images/ussa2.png",
    ],
    isVideo: false,
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
    modalImages: [
      "/images/services-images/yoko3.png",
      "/images/services-images/yoko1.png",
    ],
    isVideo: true,
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
    modalImages: [
      "/images/services-images/merino1.png",
      "/images/services-images/merino2.png",
      "/images/services-images/merino3.png",
      "/images/services-images/merino4.png",
    ],
    isVideo: false,
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
