import React from "react";
import CardsApproved from "./CardsAproved";
import Beams from "@/components/animations/Beams";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { Routes } from "@/utils/constants";

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
            beamNumber={12}
            lightColor="#A8A8A8"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="flex flex-col md:flex-row py-10 justify-between items-center space-y-10 md:space-y-0 relative z-10">
          {/* Left: Hero Text */}
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

          {/* Right: Description + CTA */}
          <div className="md:w-1/3 text-gray-300 text-base md:text-lg leading-relaxed">
            <div className="border-t-4 border-[#ec964c] w-10 mb-4" />
            <p className="mb-6">
              BPAAS Solutions delivers intelligent, scalable platforms that
              transform the way organizations operate. By blending automation,
              cloud-native architecture, and deep domain expertise, we empower
              businesses to streamline workflows, reduce complexity, and unlock
              new levels of efficiency. We don’t just build solutions we
              architect digital excellence for the next generation of
              enterprise.
            </p>
            <Link
              href={Routes.COMPANY_COMP}
              className="text-white font-semibold flex items-center space-x-1 hover:underline"
            >
              <button
                className={`cursor-pointer w-fit h-full transition duration-300 ease-in-out  flex justify-between items-center pr-6 group`}
              >
                Discover What We Build
                <span className="ml-4 text-2xl bg-[#ec964c] text-[#000000] opacity-40 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <GoChevronRight />
                </span>
              </button>
            </Link>
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
