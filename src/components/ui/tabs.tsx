"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {  IoIosArrowDropright,  IoIosCheckmarkCircle } from "react-icons/io";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode ;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [autoSwitching, setAutoSwitching] = useState(true);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
    setAutoSwitching(false);
  };

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!autoSwitching) return;

    const interval = setInterval(() => {
      setTabs((prevTabs) => {
        const newTabs = [...prevTabs];
        const first = newTabs.shift();
        if (first) newTabs.push(first);
        setActive(newTabs[0]);
        return newTabs;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSwitching]);

  return (
    <div className="flex justify-between">
      <div
        className={cn(
          " [perspective:1000px] relative flex flex-col h-full items-center justify-center w-[40vw]  overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full ",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative cursor-pointer py-3 flex justify-between px-5 group duration-300 ease-in-out hover:scale-[1.10] rounded-lg w-full mt-4 mb-3 transition-all text-left  from-[#dadada26] to-[#0000003c] backdrop-blur-xs hover:bg-black hover:backdrop-blur-none border border-gray-700",
              active.value === tab.value &&
                "bg-gradient-to-r from-[#000000] to-[#f1f1f13c] backdrop-blur-xs font-bold scale-[1.10]",
              tabClassName
            )}
          >
            {tab.title}{" "}
            {active.value === tab.value ? (
              <div className="flex items-center justify-center">
                <IoIosCheckmarkCircle />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <IoIosArrowDropright />
              </div>
            )}
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full col-span-2 h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1.07 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.7 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-fit h-fit absolute top-0 right-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
