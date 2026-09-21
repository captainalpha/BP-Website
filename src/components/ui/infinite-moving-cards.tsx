"use client";

import { cn } from "@/lib/utils";
import { Image } from "@imagekit/next";
import React, { useEffect, useState } from "react";
import { RiImageCircleAiFill } from "react-icons/ri";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  filterType,
}: {
  items: {
    image: string;
    bgColor: string;
    type: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  filterType?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    getDirection();
    getSpeed();
    setStart(true);
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "28s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const filteredItems =
    filterType && filterType !== "All"
      ? items.filter((item) => item.type === filterType)
      : items;

  return (
    <div>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {[...filteredItems, ...filteredItems].map((item, idx) => {
            return (
              <div
                key={item.image + idx}
                className={`relative h-34 w-50 p-2 object-contain ${item.bgColor} shadow-2xl rounded-lg transition-all duration-500 flex items-center justify-center`}
                style={{ minWidth: "8rem", minHeight: "8.5rem" }}
              >
                {loading && (
                  <div className="absolute inset-0 flex flex-col p-2 text-black font-bold items-center justify-center bg-opacity-10 z-10">
                    <RiImageCircleAiFill className="w-full h-full animate-pulse" />
                    Loading...
                  </div>
                )}
                <Image
                  src={item.image}
                  alt="logos"
                  height={10000}
                  width={10000}
                  className={`h-34 w-50 object-contain rounded-lg transition-all duration-500`}
                  onLoad={() => setLoading(false)}
                  style={loading ? { opacity: 0 } : { opacity: 1 }}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
