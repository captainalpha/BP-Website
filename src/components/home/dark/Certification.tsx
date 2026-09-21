import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const items = [
  {
    image: "/images/certificates/cmmi-level-3-certification.png",
    title: "Sarah Johnson",
    borderColor: "#000",
    gradient: "linear-gradient(145deg, #000)",
  },

  {
    image: "/images/certificates/iso9001-2015.png",
    title: "Mike Chen",
    borderColor: "#000",
    gradient: "linear-gradient(180deg, #000)",
  },
  {
    image: "/images/certificates/iso27001-2013.png",
    title: "Mike Chen",
    borderColor: "#000",
    gradient: "linear-gradient(180deg, #000)",
  },
  // {
  //   image: "/images/certificates/pci-dss.png",
  //   title: "Mike Chen",
  //   borderColor: "#000",
  //   gradient: "linear-gradient(180deg, #000)",
  // },
];

const Certification = () => {
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
    <div className="mt-10">
      <section ref={ref} className="bg-black text-white pt-20 px-4 mb-10">
        <motion.div
          animate={controls}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="md:text-7xl text-5xl text-white font-extrabold mb-4">
            Our <span className="text-[#ec964c]"> Certification</span>{" "}
          </h1>
          <p className="text-[#ffffff] text-lg text-center">
            Trust is gained with time, and awards are won with excellence. We
            build to achieve both.
          </p>
        </motion.div>

        <div className="mt-14 h-1 bg-gradient-to-r from-[#ff6a0040] via-[#00bdec] to-[#ff6a004a] w-40 mx-auto rounded-full blur-[2px]" />
      </section>
      <div className="flex justify-center items-center">
        <div className=" grid w-fit grid-cols-2 md:flex justify-between gap-10">
          {items.map((item, idx) => (
            <Image
              key={idx}
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain md:grayscale-75 hover:grayscale-0 transition-all duration-200 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
