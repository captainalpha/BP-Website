import Image from "next/image";
import banner from "../../assets/solution.png";
import banner2 from "../../assets/bannernew.webp";
import { useEffect, useState } from "react";
import Link from "next/link";
function Solution() {
  const [active, setActive] = useState("solutions");

  const toggleActive = () => {
    if (active == "solutions") {
      setActive("services");
    } else {
      setActive("solutions");
    }
  };

  useEffect(() => {
    const timerID = setTimeout(() => toggleActive(), 10000);
    return () => {
      clearTimeout(timerID);
    };
  }, [active]);

  return (
    <div className="md:px-10 ">
      <div className="flex flex-col justify-center w-full items-center px-10 md:pb-10 pb-4">
        <div className="flex space-x-5 p-2 border border-orange text-lg ">
          <button
            onClick={() => setActive("solutions")}
            className={
              active == "solutions"
                ? "bg-orange text-white px-8 md:px-20 py-2 font-bold"
                : "px-8 md:px-20 py-2 font-bold"
            }
          >
            Solutions
          </button>
          <button
            onClick={() => setActive("services")}
            className={
              active == "services"
                ? "bg-orange text-white px-8 font-bold lg:px-20 py-2"
                : "px-8 lg:px-20 py-2 font-bold"
            }
          >
            Services
          </button>
        </div>
      </div>
      <section className="grid lg:grid-cols-2 items-center justify-center   text-center  relative  ">
        <Image
          src={active == "solutions" ? banner : banner2}
          layout="fill"
          objectFit="cover w-[100%] h-[100%]"
          alt=""
          className="object-cover"
        />
        <div></div>
        <div className="flex flex-col w-full justify-center p-20 backdrop-blur-sm  items-center z-10 text-white space-y-5 md:px-40 px-5 ">
          <h2 className=" font-serif text-3xl font-normal tracking-tight md:leading-tight md:text-4xl ">
            {active == "solutions"
              ? "Get your hands on BPAAS Solutions"
              : "Get your hands on BPAAS Services"}
          </h2>
          <p className=" text-base font-semibold ">
            {active == "solutions"
              ? "Take a step forward and get an automated solutions for your enterprise digital expansion. Make digital journey smooth and protected under BPAAS solutions"
              : "Building a good customer experience does not happen by accident, it happens by design. We create client-centric models with our dedicated team to construct the best services"}
          </p>
          <Link passHref href="/contact-us">
            <span className="w-full shadow-xl btn btn-primary btn-lg sm:w-auto border-2 transition duration-300 py-3 px-8 hover:bg-white hover:text-black font-semibold ">
              Contact Us Now
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Solution;
