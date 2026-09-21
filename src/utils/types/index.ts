import { ReactNode } from "react";

export interface ICarouselItem {
  id: number;
  content: ReactNode;
}

export interface INavLink {
  label: string;
  href: string;
  content?: ReactNode;
}

export interface ILabelDescription {
  label: string;
  description: string;
  link: string;
}

export interface IHorizontalDropdown {
  label: string;
  icon: string;
  left: ILabelDescription[];
  right?: ILabelDescription[];
}

export interface IHeroData {
  image: string;
  title: string;
  description: string;
  subTitle: string;
}
