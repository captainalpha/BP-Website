declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

type ColorScheme = "light" | "dark" | "system";

type FrameType = HTMLElement & { initialRotation: number; rotation: number };

interface IKStudy {
  title: string;
  logoImage?: string;
  logoImageAA?: string;
  description?: string;
  problemStatementText?: string;
  projectDetailsText?: string;
  keyAchievementText?: React.ReactNode;
  stareNumber?: number;
  stars?: React.ReactNode;
  LUp?: number;
  LDown?: number;
  content?: string;
}
// interface IKStudy {
//   title: string;
//   description?: React.ReactNode;
//   content?: React.ReactNode;
// }

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  bgImages?: string;
  designation?: string;
  src: string;
  target?: string;
  kStudy?: IKStudy[];
};

interface IUserInToken {
  id: string;
  name: string;
  phone: string;
  exp?: number;
}

interface IUser {
  _id: string;
  name: string;
  phone: string;
  email: string;
  password?: string;
  addedBy: string | null;
  updatedBy: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface IJob {
  _id: string;
  position: string;
  description: string;
  minimumExperience: string;
  jobType: string;
  employmentType: string;
  addedBy: string | null;
  addedByObj?: IUser;
  updatedBy: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
}
 

 interface FAQItem {
  question: string;
  answer: string;
}

 interface CardItem {
  title: string;
  id: string;
  image: string;
  modalImages: string[];
  isVideo: boolean;
  icon: string; 
  description: string;
  longDescription: React.ReactNode;
  features: string[];
  useCases: string[];
  benefits: string[];
  painPointsSolved: string[];
  industryApplications: string[];
  faq: FAQItem[];
  pricingNote: string;
  ctaLabel: string;
  openPage: string;
}



