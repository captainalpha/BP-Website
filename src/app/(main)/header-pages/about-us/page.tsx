"use client";

import CardSwap, { Card } from "@/components/animations/CardSwap";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div
          style={{
            height: "600px",
            position: "relative",
            backgroundImage: "url('/images/Untitled design (1).png')",
          }}
        >
          <div className="md:w-1/2  md:h-[500px] flex flex-col justify-center p-4 md:pl-18 ">
            <h1 className="text-7xl font-bold text-[#ec964d] mb-10">
              What Drives BPAAS
            </h1>
            <p className="text-lg">
              Behind every product, feature, and line of code, there&apos;s a
              mission — to simplify the complex, empower businesses, and design
              the future of digital transformation. Discover the mindset,
              passion, and purpose that fuel everything we create.
            </p>
          </div>
          <CardSwap
            cardDistance={50}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3 className="px-7 py-2 ">We Have Best Developers At BPAAS</h3>
              <Image
                src={"/images/1744703364038.jpeg"}
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
            <Card>
              <h3 className="px-7 py-2">We provide Best Services</h3>
              <Image
                src={"/images/1744703364237.jpeg"}
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
            <Card>
              <h3 className="px-7 py-2">We Have Best Solutions</h3>
              <Image
                src={"/images/team.jpg"}
                alt="sd"
                height={10000}
                width={10000}
              />
              <Image
                src={"/images/team.jpg"}
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
          </CardSwap>
        </div>
      </div>

      <div className="text-gray-300 px-6 py-16 md:py-24 max-w-5xl mx-auto">
        {/* Core Belief */}
        <div className="flex items-center gap-10">
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
              Our Core Belief
            </h2>
            <p className="leading-relaxed text-lg">
              <em>“Technology should simplify life, not complicate it.”</em>
              <br />
              <br />
              At BPAAS, we believe digital solutions should be intuitive,
              human-centered, and scalable. We&apos;re not here to build more
              software — we&apos;re here to solve real-world problems with
              clarity, speed, and purpose.
            </p>
          </section>
          <div className="hidden md:block w-full">
            <CardNew
              title="We create with intent — designing tools that streamline operations, automate intelligently, and redefine customer experience."
              Text="Innovation with Purpose"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-emerald-900"
              />
            </CardNew>
          </div>
        </div>

        {/* Philosophy */}
        <div className="flex items-center gap-10">
          <div className="hidden md:block w-full">
            <CardNew
              title="Our platforms grow with you — frictionless, adaptable, and future-ready."
              Text="Sustainable Growth"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-sky-600"
                colors={[[125, 211, 252]]}
              />
            </CardNew>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
              Our Philosophy
            </h2>
            <p className="leading-relaxed text-lg">
              <em>“People first. Then process. Then technology.”</em>
              <br />
              <br />
              Real transformation begins by deeply understanding users — their
              needs, challenges, and journeys — then crafting systems that
              empower them with elegance and simplicity.
            </p>
          </section>
        </div>

        {/* Pillars */}
        <div className="flex items-center gap-10">
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
              Pillars That Power Us
            </h2>
            <ul className="space-y-6 text-lg">
              <li>
                <strong className="text-white">Modular by Design:</strong> We
                build with blocks — reusable, flexible components that grow with
                your needs.
              </li>
              <li>
                <strong className="text-white">
                  Function Meets Aesthetic:
                </strong>{" "}
                Beautiful interfaces that enhance usability and reduce
                complexity.
              </li>
              <li>
                <strong className="text-white">Smart Automation:</strong>{" "}
                Intelligent systems that automate without losing human
                oversight.
              </li>
            </ul>
          </section>
          <div className="hidden md:block w-full">
            <CardNew
              title="Everything we build is guided by real user feedback. If it doesn’t serve our community, it doesn’t ship."
              Text="Customer Obsession"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-pink-900"
                colors={[[255, 0, 215, 1]]}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </CardNew>
          </div>
        </div>

        {/* Engine Behind BPAAS */}
        <div className="flex items-center gap-10">
          <div className="hidden md:block w-full">
            <CardNew
              title="Adaptable solutions that grow with every version of your business."
              Text="Future-Ready Systems"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-purple-600"
                colors={[[125, 211, 252]]}
              />
            </CardNew>
          </div>
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
              The Engine Behind BPAAS
            </h2>
            <ul className="space-y-6 text-lg">
              <li>
                <strong className="text-white">Innovation with Purpose:</strong>{" "}
                We don’t follow trends — we set them. Our products solve real
                challenges with simplicity and precision.
              </li>
              <li>
                <strong className="text-white">Customer Obsession:</strong> Your
                voice guides our roadmap. Every update is inspired by your
                experience.
              </li>
              <li>
                <strong className="text-white">Sustainable Growth:</strong> We
                build future-proof platforms that evolve with your business, not
                against it.
              </li>
            </ul>
          </section>
        </div>

        {/* Vision */}
        <div className="flex items-center gap-10">
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
              Where We&apos;re Headed
            </h2>
            <p className="leading-relaxed text-lg">
              We’re creating a future where launching powerful business systems
              doesn’t require coding knowledge or huge tech teams. Visual tools,
              smart systems, and human-focused design — that&apos;s the path
              we’re paving.
            </p>
          </section>
          <div className="hidden md:block w-full">
            <CardNew
              title="Technology that’s intuitive, not intimidating. We simplify so you can scale."
              Text="Empowered Simplicity"
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-[#ec964d]"
                colors={[[247, 221, 178, 1]]}
              />
            </CardNew>
          </div>
        </div>

        {/* Final Statement */}
        <section className="mb-8 flex flex-col items-center mt-30">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#ec964d] mb-4">
            Why We Exist
          </h2>
          <p className="leading-relaxed text-lg text-center">
            <em>
              “We exist to simplify the complex — to help businesses move
              faster, think smarter, and connect more deeply.”
            </em>
            <br />
            This is our mission, our fuel, and the reason behind every decision
            we make.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;

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
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
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
