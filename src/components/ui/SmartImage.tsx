"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";
import { RiImageCircleAiLine } from "react-icons/ri";

type SmartImageProps = ImageProps;

const SmartImage = (props: SmartImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: props.width, height: props.height }}
    >
      {!loaded && (
        <RiImageCircleAiLine  className="absolute inset-0 h-full w-full  opacity-20 p-4 animate-pulse rounded-md z-0" />
      )}
      <Image
        {...props}
        className={`transition-opacity duration-500 object-contain z-10 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${props.className || ""}`}
        onLoad={() => setLoaded(true)}
        alt="bpaas"
        unoptimized
      />
    </div>
  );
};

export default SmartImage;
