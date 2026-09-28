import Image from "next/image";
import React from "react";

const BpaasLogoAnimation = () => {
  return (
    <div>
      <div className="flex items-center w-33 justify-start group relative">
        {/* First Image - always visible */}
        <Image
          src="/images/Bpl.png"
          alt="Bpaas Logo"
          height={10110}
          width={11100}
          className="h-full w-8"
        />

        {/* Wrapper for second image - control sliding animate */}
        <div className="relative w-0 group-hover:w-25 overflow-hidden transition-all duration-200 ease">
          <Image
            src="/images/BpT.png"
            alt="Bpaas Logo"
            height={11100}
            width={101110}
            className="h-full w-27 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default BpaasLogoAnimation;
