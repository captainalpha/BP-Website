import React from "react";
import { CardData } from "@/assets/Dataa";
import OneColumnNav from "./OneColumnNav";

const SolutionsContent = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #000 0%, #101010 60%, #212121 100%)",
      }}
      className="shadow-md md:px-20 py-10 w-full"
    >
      <p className="text-3xl text-[var(--primary)]">
        Digital Transformation in Action
      </p>
      <p className="text-sm text-gray-300 mt-2">
        Empowering your business with scalable, intelligent, and future-ready
        solutions to drive real results.
      </p>
      <OneColumnNav data={CardData} />
    </div>
  );
};

export default SolutionsContent;
