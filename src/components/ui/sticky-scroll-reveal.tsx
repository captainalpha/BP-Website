"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface IProps {
  data: IKStudy[];
  contentClassName?: string;
}

export const StickyScroll = ({ data, contentClassName }: IProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = data.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = data.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000", // slate-900
    "#021547", // black
    "#631f72", // neutral-900
    "#036242", // neutral-900
  ];
  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
      "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
      "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto forHidScroll rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {data.map((item, index) => (
            <div key={item.title + index} className="">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl mt-20 font-bold text-[#ec964d]"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.1,
                }}
                className="text-kg max-w-xl text-slate-300"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-20" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-2 hidden h-140 w-140 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {data[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
