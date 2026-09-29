import { ReactNode } from "react";

export interface ICarouselItem {
  id: number;
  content: ReactNode;
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