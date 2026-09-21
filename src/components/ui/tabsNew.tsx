"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const TabsNew = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
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
    }, 4000);

    return () => clearInterval(interval);
  }, [autoSwitching]);

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          " [perspective:1000px] relative flex gap-10  p-15 h-fit  items-center justify-center   overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full ",
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
              "relative py-3 px-5 rounded-lg w-fit mt-4 mb-3 transition-all text-left hover:bg-[#1f1f1f] bg-[#121212] border border-gray-700",
              active.value === tab.value &&
                "bg-gradient-to-r from-[#ec964c] to-[#ff6a00] text-black font-bold",
              tabClassName
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
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
  tabs: Tab[];
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full bg-green-100 col-span-2 h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "w-full flex justify-center items-center h-fit absolute top-0 right-0",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
