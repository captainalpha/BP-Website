"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import {
  ServiceImplementationData,
  ServiceImplementationDataAndAllCases,
} from "@/assets/Dataa";
import Image from "next/image";

const ServicesImplementation = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) return null;

  const data = [
    ...ServiceImplementationData,
    ...ServiceImplementationDataAndAllCases,
  ].find((el) => el?.id === Number(id));

  if (!data) return null;

  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div className="">
        <div
          className="md:h-[85vh] h-[70vh] w-full bg-cover bg-center items-center flex"
          style={{ backgroundImage: data.bgImages }}
        >
          <div className="flex  items-center px-4 md:px-20  w-full justify-center">
            <div className="bg-[#44444458] p-10 rounded-2xl backdrop-blur-xs text-center right-0">
              <h1 className="md:text-7xl text-3xl text-[#ec964d] font-bold uppercase">
                LEARN ABOUT {data.kStudy?.[0].title}
              </h1>
              <p className="text-md md:px-60 mt-4">{data.quote}</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="border-red-800 border-8 h-55 w-55 absolute top-0 right-10 z-0 rounded-b-full border-t-0 blur-xs" />
          <div className="border-green-800 border-8 h-52 w-49 absolute top-0 right-13 z-0 rounded-b-full border-t-0 blur-xs" />
          <div className="border-yellow-800 border-8 h-49 w-43 absolute top-0 right-16 z-0 rounded-b-full border-t-0 blur-xs" />
          <div className="bg-red-800 h-12 w-full absolute top-60 z-0 rotate-8 blur-xs" />
          <div className="bg-green-800 h-12 w-full absolute top-72 z-0 rotate-8 blur-xs" />
          <div className="bg-yellow-800 h-12 w-full absolute top-84 z-0 rotate-8 blur-xs" />
          {/*  */}
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-6 gap-y-4 p-2 pt-27 mt:pt-2 md:p-20 z-50">
            {/* Overview Card */}
            <div className="hover:bg-[#000000] bg-[#02020282] border border-[#2c2c3e] col-span-1 w-full h-full rounded-2xl flex flex-col justify-between items-center py-17 px-4 transition-all duration-300 ease-in-out backdrop-blur-xl">
              <div className="text-2xl md:text-3xl text-[#ec964d] font-bold text-center tracking-wide  drop-shadow-[0_0_6px_#ec964d]">
                {data.kStudy?.[0]?.title}
              </div>
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                {data.kStudy?.[0]?.logoImage && (
                  <Image
                    src={data.kStudy[0].logoImage}
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-full object-cover animate-fade-in"
                  />
                )}
              </div>
              <div className="text-center text-gray-300 text-lg  leading-relaxed font-light">
                {data.kStudy?.[0].description}
              </div>
            </div>

            {/* Details Card */}
            <div className="hover:bg-[#000000] bg-[#02020282] border border-[#2c2c3e] col-span-2 w-full h-fit rounded-2xl p-6 md:p-8 flex flex-col justify-between  transition-all duration-300 ease-in-out backdrop-blur-xl">
              <div>
                <h1 className="text-[#ec964d] bg-[#181818] w-fit p-2 text-lg md:text-xl rounded-md font-semibold shadow-md">
                  Problem Statement
                </h1>
                <p className="text-gray-300 p-2 leading-relaxed font-light">
                  {data.kStudy?.[0].problemStatementText}
                </p>
              </div>
              <div>
                <h1 className="text-[#ec964d] bg-[#181818] w-fit p-2 text-lg md:text-xl rounded-md font-semibold shadow-md">
                  Project Details
                </h1>
                <p className="text-gray-300 p-2 leading-relaxed font-light">
                  {data.kStudy?.[0].projectDetailsText}
                </p>
              </div>
              <div>
                <h1 className="text-[#ec964d] bg-[#181818] w-fit p-2 text-lg md:text-xl rounded-md font-semibold shadow-md">
                  Key Achievement
                </h1>
                <div className="text-gray-300 p-2 leading-relaxed font-light">
                  {data.kStudy?.[0].keyAchievementText}
                </div>
              </div>
            </div>

            {/* Metrics Card */}
            <div className="hover:bg-[#000000] bg-[#02020272] border border-[#2c2c3e] col-span-1 w-full h-full rounded-2xl flex flex-col justify-between items-center p-6 md:p-10  transition-all duration-300 ease-in-out backdrop-blur-xl">
              <h1 className="text-[#ec964d] text-xl md:text-2xl text-center font-semibold drop-shadow-[0_0_4px_#ec964d]">
                BPAAS Satisfaction Score
              </h1>
              <div className="text-white text-4xl font-extrabold ">
                <div className="text-6xl md:text-8xl text-center ">
                  {data.kStudy?.[0].stareNumber}
                </div>
                <div className="text-yellow-400 text-center">
                  {data.kStudy?.[0].stars}
                </div>
                <p className="text-gray-300 text-center mt-2">
                  BPAAS Retention Rate
                </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesImplementation;
