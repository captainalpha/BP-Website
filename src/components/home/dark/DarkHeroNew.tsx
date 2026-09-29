"use client";

import React from "react";
import dynamic from "next/dynamic";
import CardsApproved from "./CardsAproved";

const Beams = dynamic(() => import("@/components/animations/Beams"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

const DarkHeroNew = () => {
  return (
    <div
      style={{ fontFamily: "var(--font-inter)" }}
      className="md:py-8 px-3 md:px-16 relative overflow-hidden"
    >
      <div className="max-w-10xl mx-auto relative">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={8}
            lightColor="#A8A8A8"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="flex flex-col md:flex-row py-10 justify-between items-center space-y-10 md:space-y-0 relative z-10">
          <div className="md:w-2/3">
            <h1
              style={{ fontFamily: "var(--font-inter)" }}
              className="text-5xl md:text-7xl font-extrabold uppercase leading-tight"
            >
              <span className="block"> Transform Your </span>
              <span className="block">
                Business with
                <span className="text-[#ec964c] font-bold">
                  {" "}
                  BPAAS <span className="text-white">Solutions</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="md:w-1/3 text-gray-300 text-base md:text-lg leading-relaxed">
            <div className="border-t-4 border-[#ec964c] w-10 mb-4" />
            <p className="mb-6 font-light">
              BPAAS Solutions delivers intelligent, scalable platforms that
              transform the way organizations operate. By blending automation,
              cloud-native architecture, and deep domain expertise, we empower
              businesses to streamline workflows, reduce complexity, and unlock
              new levels of efficiency. We don&apos;t just build solutions we
              architect digital excellence for the next generation of
              enterprise.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CardsApproved />
      </div>
    </div>
  );
};

export default DarkHeroNew;
