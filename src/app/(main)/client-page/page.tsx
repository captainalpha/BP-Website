import React from "react";
import Image from "next/image"; // Make sure you have next/image installed and configured
import {
  ServiceImplementationData,
  ServiceImplementationDataAndAllCases,
} from "@/assets/Dataa";
import { Metadata } from "next";

const getAllLogoImages = () => {
  // Helper to extract logoImage from kStudy arrays
  const extractLogos = (dataArr: any[]) =>
    dataArr.flatMap(
      (item) =>
        item.kStudy?.map((k: any) => k.logoImageAA).filter(Boolean) || []
    );
  return [
    ...extractLogos(ServiceImplementationData),
    ...extractLogos(ServiceImplementationDataAndAllCases),
  ];
};

export const metadata: Metadata = {
  title: "Our Clients",
};

const ClientPage = () => {
  const logoImages = getAllLogoImages();
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/claintPage.jpg')" }}
      >
        <div className="p-8 md:h-[66vh] flex items-center justify-center">
          <div className="bg-[#0101014d] shadow backdrop-blur-xs p-8 flex flex-col items-center justify-center">
            <h1 className="md:text-7xl font-bold text-5xl text-[#ec964d]">
              Trusted by Leading Brands Worldwide
            </h1>
            <p className="text-lg mt-4">
              At BPAAS, we collaborate with forward-thinking companies to
              deliver scalable solutions, accelerate innovation, and drive
              long-term success.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-6xl font-bold text-[#ec964d] mb-4">
            Our Clients
          </h1>
          <p className="text-white max-w-2xl mx-auto mb-6 text-center text-base md:text-lg">
            We&apos;re proud to work with a diverse group of industry leaders and
            visionary startups. Their trust drives us to deliver excellence in
            every project.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 p-3">
          {logoImages.map((logo, idx) => (
            <Image
              key={idx}
              loading="lazy"
              src={logo}
              alt={`Client logo ${idx + 1}`}
              width={320}
              height={320}
              sizes="100vh"
              className="border-2 bg-[#ffffff] p-2 grayscale hover:grayscale-0 transition-all duration-200 ease-in-out hover:scale-105 rounded-2xl h-full w-full object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
