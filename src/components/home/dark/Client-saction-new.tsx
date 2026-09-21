"use client";
import { ItemsBB, Testimonials } from "@/assets/Data";
import GooeyNav from "@/components/animations/GooeyNav";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ClientSectionNew() {
  const [activeType, setActiveType] = useState<string>("All");
  const navItems = [{ label: "All", type: "All" }, ...ItemsBB];

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [inView, controls]);

  return (
    <div className="md:h-fit bg-black mb-10">
      <div>
        <section ref={ref} className="bg-black text-white pt-20 px-4">
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text  leading-tight">
              <span className="text-[#ec964c]">Trusted by Partners. </span>{" "}
              Loved by Customers
            </h2>

            <p className="mt-6 text-white text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We collaborate with top-tier organizations to advance innovation
              through intelligent automation and modern solutions.
            </p>
          </motion.div>

          <div className="mt-14 h-1 bg-gradient-to-r from-[#ff6a0040] via-[#00bdec] to-[#ff6a004a] w-40 mx-auto rounded-full blur-[2px]" />
        </section>
        <div className="flex flex-col items-center">
          <div style={{ position: "relative" }} className="my-8 ">
            <GooeyNav
              items={navItems}
              initialActiveIndex={0}
              onTabChange={(idx) => setActiveType(navItems[idx].type)}
            />
          </div>
          <div className="h-fit rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden w-full">
            <InfiniteMovingCards
              items={Testimonials}
              direction="left"
              speed="fast"
              pauseOnHover={true}
              filterType={activeType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSectionNew;
