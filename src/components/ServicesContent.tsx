import { IHorizontalDropdown } from "@/utils/types";
import ThreeColumnNav from "./ThreeColumnNav";
import { Routes } from "@/utils/constants";
const horizontalDropdowns: IHorizontalDropdown[] = [
  {
    label: "Development",
    icon: "/images/icons/app-development.webp",
    left: [
      {
        label: "Bespoke Software Built for Your Unique Business Needs",
        description:
          "Define precise goals by mapping user flows, challenges, and success criteria.",
        link: Routes.DEVELOPMENT_PAGE,
      },
      {
        label: "What We Do in Custom Web & App Development?",
        description:
          "From building tailored digital solutions to maintaining and integrating them across your systems, we deliver software that performs, scales, and grows with your business.",
        link: Routes.DEVELOPMENT_PAGE_ONE,
      },
      {
        label: "Choose the Right Engagement Model",
        description:
          "Whether you're launching a one-time build or managing a long-term roadmap, we offer flexible engagement options that suit your pace, scope, and priorities.",
        link: Routes.DEVELOPMENT_PAGE_TOW,
      },
    ],
    right: [
      {
        label: "Product Owners",
        description:
          "Build features that match your product vision and user needs—delivered with precision and agility.",
        link: "#",
      },
      {
        label: "Tech Leads",
        description:
          "Collaborate on architecture, ensure clean code practices, and scale systems that are built to last.",
        link: "#",
      },
      {
        label: "Startups & SMEs",
        description:
          "Accelerate product launch with lean, scalable tech—no unnecessary complexity or cost.",
        link: "#",
      },
      {
        label: "Enterprise IT Heads",
        description:
          "Modernize legacy apps, integrate systems, and streamline operations with custom digital solutions.",
        link: "#",
      },
      {
        label: "CXOs",
        description:
          "Drive innovation and ROI by digitizing core services, automating processes, and enabling data-driven decisions.",
        link: "#",
      },
    ],
  },
  {
    label: "OEM Partnerships",
    icon: "/images/icons/innovation.webp",
    left: [
      {
        label: "Newgen",
        description:
          "A low code digital transformation platform that streamlines business processes, content management, and customer communication.",
        link: Routes.OEM_PARTNERSHIP_NEWGEN,
      },
      {
        label: "Oracle",
        description:
          "A global technology company offering cloud infrastructure, databases, and enterprise software for scalable business solutions.",
        link: Routes.OEM_PARTNERSHIP_ORACLE,
      },
      {
        label: "Automation Anywhere",
        description:
          " A leading provider of robotic process automation (RPA) tools that help automate repetitive tasks using AI-powered bots.",
        link: Routes.OEM_PARTNERSHIP_AUTOMATION,
      },
    ],
    right: [
      {
        label: "Enterprise IT Leaders",
        description:
          "Gain faster deployment cycles, reduced development costs, and scalable enterprise solutions by integrating with trusted OEM platforms.",
        link: "#",
      },
      {
        label: "Digital Transformation Teams",
        description:
          "Leverage ready-to-use solutions from leading OEMs to accelerate digital transformation initiatives with minimal internal disruption.",
        link: "#",
      },
      {
        label: "Operations & Process Managers",
        description:
          "Automate repetitive tasks and streamline workflows using integrated OEM technologies like RPA, improving efficiency across departments.",
        link: "#",
      },
      {
        label: "CXOs & Decision Makers",
        description:
          "Access cutting-edge tech stacks and future-proof your organization by partnering with OEM leaders for strategic innovation.",
        link: "#",
      },
    ],
  },
  {
    label: "Resource Augmentation",
    icon: "/images/icons/outsourcing.webp",
    left: [
      {
        label: "Learn about Resource Augmentation At BPAAS",
        description:
          "Discover how BPAAS uses Resource Augmentation to boost your team’s capabilities by providing skilled professionals on-demand, helping you scale faster and more efficiently without long-term commitments.",
        link: Routes.RESOURCE_AUGMENTATION,
      },
      {
        label: "How It Works – Our Process",
        description:
          "We understand that time, quality, and alignment are critical when you’re scaling your team. That’s why our resource augmentation process is built to be lean, transparent, and outcome-driven. From understanding your needs to integrating top-tier talent into your team, we ensure every step is smooth, strategic, and stress-free.",
        link: Routes.RESOURCE_AUGMENTATION_HOW_IT_WORKS,
      },
      {
        label: "Expertise You Can Rely On",
        description:
          "At BPAAS, we don’t just provide people—we deliver specialized professionals equipped with the exact skills your project needs. Whether you’re building a web app, launching a mobile product, migrating to the cloud, or running data science experiments, we’ve got you covered.",
        link: Routes.RESOURCE_AUGMENTATION_TALENT_POOL,
      },
    ],
    right: [
      {
        label: "Project Managers",
        description:
          "Quickly ramp up teams to meet tight deadlines or project spikes without hiring hassles.",
        link: "#",
      },
      {
        label: "CTOs & CIOs",
        description:
          "Expand your technology bandwidth without increasing fixed overheads.",
        link: "#",
      },
      {
        label: "HR & Procurement Teams",
        description:
          "Get vetted profiles, seamless onboarding, and compliance handling from one partner.",
        link: "#",
      },
      {
        label: "Agile Teams",
        description:
          "Integrate external developers into sprints for development, QA, or DevOps support.",
        link: "#",
      },
      {
        label: "Startups & Agencies",
        description:
          "Augment teams instantly to deliver faster for clients and MVP launches.",
        link: "#",
      },
    ],
  },
];

const ServicesContent = () => {
  return (
    <div
      className="shadow-md md:px-20 py-10 w-full"
      style={{
        background:
          "linear-gradient(to bottom, #000 0%, #101010 60%, #212121 100%)",
      }}
    >
      <p className="text-2xl text-[var(--primary)]">
        Your Intelligent Source to Develop
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Smart solutions, expertly developed—your trusted partner in building
        what&apos;s next.
      </p>
      <ThreeColumnNav data={horizontalDropdowns} />
    </div>
  );
};

export default ServicesContent;
