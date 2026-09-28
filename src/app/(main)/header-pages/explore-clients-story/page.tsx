"use client";

import {
  ServiceImplementationData,
  ServiceImplementationDataAndAllCases,
} from "@/assets/Dataa";
import PixelTransition from "@/components/animations/PixelTransition";
import { Routes } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { RiImageCircleAiLine } from "react-icons/ri";

const ClineStory = () => {
  const [loaded, setLoaded] = useState(false);
  const data = useMemo(
    () => [
      ...ServiceImplementationData,
      ...ServiceImplementationDataAndAllCases,
    ],
    []
  );

  return (
    <section>
      <div
        id="testimonies"
        className="relative md:h-[86vh] h-[34vh] w-full overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/testimoniesVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex justify-between items-center px-6 md:px-20 h-full text-white">
          <div className="bg-[#ffffff27] backdrop-blur-md p-6 rounded-2xl">
            <h1 className="md:text-7xl text-3xl text-center md:text-start font-bold text-[#ec964d]">
              Discover How BPAAS Transformed Businesses
            </h1>
            <p className="md:text-lg md:text-start text-center mt-4 max-w-xl text-white">
              Real stories. Real impact. Hear directly from the organizations
              we&apos;ve empowered through automation, digital innovation, and
              intelligent process solutions. Our clients share how BPAAS helped
              them overcome operational challenges and scale with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-8 xl:mx-auto ">
        <div>
          <div className=" w-full h-[8vh] rounded-b-full border-b-2"></div>
        </div>
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 mt-10">
          <div className="mb-12 space-y-6 md:mb-20 md:text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Stories That Speak for BPAAS
            </h1>
            <p className="text-lg text-gray-300 md:text-xl max-w-3xl mx-auto">
              From automation to innovation, our clients have experienced real
              transformation. Here&apos;s how BPAAS helped them solve complex
              challenges, streamline processes, and unlock growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
          {data?.map((el) => (
            <Link
              key={el?.id}
              href={`${Routes.SERVICES_IMPLEMENTATION}?id=${el.id}`}
            >
              <PixelTransition
                firstContent={
                  <div
                    style={{ fontFamily: "var(--font-inter)" }}
                    className="px-4 py-7 h-full flex flex-col items-center justify-between"
                  >
                    <div className="w-full">
                      {!loaded && (
                        <RiImageCircleAiLine className=" inset-0 h-full w-full  opacity-20 p-4 animate-pulse rounded-md z-0" />
                      )}
                      <Image
                        src={el?.kStudy?.[0].logoImageAA ?? ""}
                        alt="default pixel transition content, a cat!"
                        className={`w-full p-4 rounded-sm h-50 object-contain bg-white shadow ${
                          loaded ? "opacity-100" : "opacity-0"
                        }`}
                        sizes="100vh"
                        height={1000}
                        onLoad={() => setLoaded(true)}
                        width={1000}
                      />
                    </div>
                    <h1 className="text-center md:text-xl font-bold md:mt-4 ">
                      {el?.name}
                    </h1>
                    <p className="md:py-4 text-center w-full text-xs md:text-sm md:p-4 rounded-sm object-contain shadow ">
                      {el?.kStudy?.[0].description}
                    </p>
                  </div>
                }
                secondContent={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      backgroundColor: "#f5f5f7",
                    }}
                  >
                    <div className="flex flex-col items-center justify-between p-5 h-full">
                      {!loaded && (
                        <RiImageCircleAiLine className=" inset-0 h-full w-full text-black  opacity-20 p-4 animate-pulse rounded-md z-0" />
                      )}
                      <Image
                        src={el?.src}
                        alt="default pixel transition content, a cat!"
                        className={`w-full p-4 rounded-sm h-50 object-contain bg-white shadow${
                          loaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoad={() => setLoaded(true)}
                        height={100}
                        width={100}
                        sizes="100vh"
                      />
                      <h1 className="text-black">
                        {el?.kStudy?.[0].problemStatementText}
                      </h1>
                      <h1 className="text-black p-3 ">
                        Click to see the story
                      </h1>
                    </div>
                  </div>
                }
                gridSize={1}
                pixelColor="#fff"
                animationStepDuration={0.1}
                className="custom-pixel-card cursor-pointer hover:scale-110  transition-all duration-150 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClineStory;
