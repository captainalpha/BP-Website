import { ServiceImplementationData } from "@/assets/Dataa";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CaseStudies = () => {
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
    <div className=" overflow-hidden relative flex items-center justify-center ">
      <div>
        <section ref={ref} className="bg-black text-white pt-20 px-4">
          <motion.div
            animate={controls}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h1 className="md:text-7xl text-5xl text-white font-extrabold mb-4">
              Success <span className="text-[#ec964c]">Stories</span>{" "}
            </h1>
            <p className="text-[#ffffff] md:text-lg text-center px-8">
              Nothing is better than showing what you have done and how you are
              improving.
            </p>
          </motion.div>

          <div className="mt-14 h-1 bg-gradient-to-r from-[#ff6a0040] via-[#00bdec] to-[#ff6a004a] w-40 mx-auto rounded-full blur-[2px]" />
        </section>
        <AnimatedTestimonials testimonials={ServiceImplementationData} />
      </div>
    </div>
  );
};

export default CaseStudies;
