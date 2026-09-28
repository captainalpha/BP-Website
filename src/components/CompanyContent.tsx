import { IHorizontalDropdown } from "@/utils/types";
import ThreeColumnNav from "./ThreeColumnNav";
import { Routes } from "@/utils/constants";
const horizontalDropdowns: IHorizontalDropdown[] = [
  {
    label: "Customer Stories",
    icon: "/images/icons/review.webp",
    left: [
      {
        label: "Explore The Success Achieved By Our Clients",
        description:
          "Understand business needs, user personas, and workflows to define software goals precisely.",
        link: Routes.SUCCESS_STORY_BY_CLINT,
      },
      {
        label: "Explore The Success Achieved By Our Team",
        description:
          "Understand business needs, user personas, and workflows to define software goals precisely.",
        link: Routes.COMPANY_COMP,
      },
    ],
  },
  {
    label: "About Us",
    icon: "/images/icons/link.webp",
    left: [
      {
        label: "What Drives Bpaas",
        description:
          "Deploy enterprise content management systems to digitize documents and automate workflows.",
        link: Routes.WHAT_DRIVES_BPAAS,
      },
    ],
  },
  {
    label: "Job Opening",
    icon: "/images/icons/job-offer.webp",
    left: [
      {
        label: "Learn Your Dream Job At Bpaas",
        description:
          "Shortlist skilled professionals with verified expertise to match your project needs.",
        link: Routes.JOB_FORM,
      },
    ],
  },
];

const CompanyContent = () => {
  return (
    <div
      className="shadow-md md:px-20 py-10 w-full"
      style={{
        background:
          "linear-gradient(to bottom, #000 0%, #101010 60%, #212121 100%)",
      }}
    >
      <p className="text-2xl text-[var(--primary)]">What we do</p>
      <p className="text-sm text-gray-500 mt-2">
        Smart solutions, expertly devtner in building what&apos;s next.
      </p>
      <ThreeColumnNav data={horizontalDropdowns} />
    </div>
  );
};

export default CompanyContent;
