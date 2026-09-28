import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/client-page`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/company-comp`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/cookie-policy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/contact-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/privacy-policy`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/service-implementation`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/service-page`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/about-us`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/development-page`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/explore-client-story`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/job-opening`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/oracle`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL_PROD}/header-page/resource-augmentation`,
    },
  ];
}
