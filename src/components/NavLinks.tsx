import { INavLink } from "@/utils/types";
import SolutionsContent from "./SolutionsContent";
import ServicesContent from "./ServicesContent";
import CompanyContent from "./CompanyContent";

export const navLinks: INavLink[] = [
  {
    label: "Solutions",
    href: "#",
    content: <SolutionsContent />,
  },
  {
    label: "Services",
    href: "#",
    content: <ServicesContent />,
  },
  {
    label: "Company",
    href: "#",
    content: <CompanyContent />,
  },
  // {
  //   label: "Clients",
  //   href: Routes.CLIENTS,
  // },
  // {
  //   label: "Become BPAAS Partner",
  //   href: Routes.BECOME_PARTNER,
  // },
  // {
  //   label: "Company",
  //   href: Routes.COMPANY,
  // },
  // {
  //   label: "Contact Us",
  //   href: Routes.CONTACT_US,
  // },
];
