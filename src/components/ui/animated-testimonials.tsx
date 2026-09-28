"use client";

import { Routes } from "@/utils/constants";
import { Image } from "@imagekit/next";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

import { useCallback, useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials?.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      style={{ fontFamily: "var(--font-inter)" }}
      className="mx-auto max-w-sm  px-4 py-20 font-sans antialiased md:max-w-full md:px-8 lg:px-12"
    >
      <div className="relative grid  grid-cols-3 gap-20 md:grid-cols-6">
        <div className="col-span-3">
          <div className="relative h-40 md:h-120  w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={10000}
                    height={10000}
                    sizes="100vh"
                    loading="lazy"
                    draggable={false}
                    className=" h-[20vh] md:h-full w-full  object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex md:col-span-2 col-span-3 flex-col  justify-between md:py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="md:text-4xl text-xl text-white font-bold cursor-pointer  transition-all duration-200 ease-in-out w-fit">
              {testimonials[active].name}
            </h3>
            {/* <p className="text-xs text-red-500 dark:text-neutral-200">
              {testimonials[active].designation}
            </p> */}
            <motion.p className="mt-8  md:text-2xl text-gray-200 dark:text-neutral-200">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index + word}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-between pt-7 ">
            <div className="flex gap-4  md:pt-0">
              <button
                onClick={handlePrev}
                className="group/button cursor-pointer flex h-7 w-7 items-center justify-center  bg-[#ec964c] "
              >
                <IoIosArrowBack className="h-5 w-5 text-[#ec964c] transition-transform duration-300 group-hover/button:rotate-12 dark:text-[#040404]" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex cursor-pointer h-7 w-7 items-center justify-center  bg-[#ec964c] "
              >
                <IoIosArrowForward className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-[#000000]" />
              </button>
            </div>
            <Link
              href={`${Routes.SERVICES_IMPLEMENTATION}?id=${testimonials[active].id}`}
              className={`cursor-pointer  w-fit   h-full transition duration-300 ease-in-out  flex justify-between items-center px-6 group`}
            >
              {testimonials[active].target}
              <span className="ml-4 text-2xl bg-[#ec964c] text-[#000000] opacity-40 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                <GoChevronRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:col-span-1 col-span-3 flex md:flex-col gap-10 items-center justify-center text-white">
          <div className="w-full flex flex-col items-center justify-center md:items-start">
            <h1 className="md:text-5xl text-4xl text-[#ec964c] font-bold">
              $1B+
            </h1>
            <p className="text-xs whitespace-nowrap md:text-lg">
              Savings Projected
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center md:items-start">
            <h1 className="md:text-5xl text-4xl text-[#ec964c] font-bold">
              $120M
            </h1>
            <p className="text-xs whitespace-nowrap md:text-lg">
              Saved from BPAAS
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center md:items-start">
            <h1 className="md:text-5xl text-4xl text-[#ec964c] font-bold">
              40%
            </h1>
            <p className="text-xs whitespace-nowrap md:text-lg">
              Increase In Efficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
