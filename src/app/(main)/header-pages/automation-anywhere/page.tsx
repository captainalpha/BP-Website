"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="h-[85vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/bpaas/automationanywhere.png?updatedAt=1757929888757')",
          fontFamily: "var(--font-inter)",
        }}
      ></div>
      <div style={{ fontFamily: "var(--font-inter)" }}>
        <hr className="mt-30 mb-10 text-gray-800" />
        <section
          className="w-full py-24 px-6 md:px-20 text-gray-200"
        >
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Title */}
            <div className=" flex flex-col items-center justify-center text-center w-full ">
              <Image
                src="/images/automation-logo.png"
                alt="logo"
                height={300}
                width={300}
                className="my-20"
              />
              <p className="text-lg md:text-xl text-gray-400">
                Unleashing digital workers that never sleep — intelligent
                automation for the modern enterprise.
              </p>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-between">
              {/* Left: Content Overview */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  What is Automation Anywhere?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Automation Anywhere is a market leader in Robotic Process
                  Automation (RPA), enabling businesses to automate rule-based,
                  repetitive tasks using digital bots powered by AI. Through our
                  BPAAS integration, we deliver scalable, secure, and
                  high-performance automation solutions tailored to your unique
                  business needs.
                </p>

                <h3 className="text-2xl font-semibold text-white pt-4">
                  How BPAAS Makes It Smarter
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Design and deploy intelligent bots that work 24/7 across
                    departments and systems.
                  </li>
                  <li>
                    Use AI/ML to handle unstructured data, decisions, and
                    dynamic processes.
                  </li>
                  <li>
                    Seamlessly integrate bots with your existing tech stack —
                    ERP, CRM, portals, and more.
                  </li>
                  <li>
                    Govern, scale, and monitor all automation activities via one
                    secure dashboard.
                  </li>
                </ul>
              </div>

              {/* Right: Features Box */}
              <CardNew
                title="Automation Anywhere unlocks productivity with advanced RPA and AI — enabling smart bots that mimic human actions and scale business impact."
                Text="Smart Automation for the Modern Enterprise"
              >
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-[#ef5525]"
                  colors={[[255, 248, 0, 1]]}
                />
              </CardNew>
            </div>
            <div className="relative">
              <div className="bg-[#ef5525] h-70 w-70 float-animation rounded-full absolute right-20 top-0" />
              <div className="bg-[#ef5525] h-40 w-40 rounded-full absolute left-20 bottom-10" />
              <div className="bg-[#ef5525] h-16 w-16 float-animation rounded-full absolute left-60 top-25" />
              <div className="p-8 rounded-2xl bg-[#2e2e2e95] backdrop-blur-sm shadow-xl space-y-6">
                <h4 className="text-xl font-semibold text-white">
                  BPAAS-Driven RPA Innovation
                </h4>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <strong className="text-white">
                      Bot Development & Orchestration:
                    </strong>
                    <br />
                    BPAAS builds, deploys, and manages bots optimized for speed,
                    compliance, and efficiency.
                  </div>
                  <div>
                    <strong className="text-white">
                      End-to-End Process Automation:
                    </strong>
                    <br />
                    From invoice processing to HR onboarding — automate it all.
                  </div>
                  <div>
                    <strong className="text-white">Cognitive RPA:</strong>
                    <br />
                    Combine Automation Anywhere with OCR, NLP, and ML to handle
                    human-like decisions.
                  </div>
                  <div>
                    <strong className="text-white">
                      Real-Time ROI Tracking:
                    </strong>
                    <br />
                    Get full visibility into time saved, cost reduced, and
                    productivity gained.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-12">
              <a
                href="https://www.automationanywhere.com/"
                target="blink"
                className="p-4 border-2 border-white text-xs hover:bg-white transition-all duration-200 hover:text-black"
              >
                Learn More About Automation Anywhere
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;

const CardNew = ({
  title,
  Text,
  children,
}: {
  title: string;
  Text: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  p-4  h-[30rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center text-2xl font-bold">
          {Text}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </button>
  );
};
