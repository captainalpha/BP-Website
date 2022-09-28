import Image from "next/image";
import Link from "next/link";

function AboutSection() {
  return (
    <div className="flex md:justify-end md:pb-20 md:px-20 mt-5  relative">
      <div className="md:shadow-[15px_-15px_rgba(0,0,0,0.3)]  md:shadow-orange">
        <Image alt="" src={require("../../assets/about.png")} />
        <div className="md:absolute flex space-y-5 flex-col p-10 lg:left-20 lg:bottom-0 w-full  md:w-5/6 lg:w-3/5 bg-gradient-to-br from-[#D8EEFF] to-white z-10 border">
          <h1 className=" text-primaryText capitalize text-4xl">
            We are Automation to your business.
          </h1>
          <p className="text-justify">
            Automation is the new highlight of the market trend, and it is not
            only the trend that everyone wants to get hands-on with but a value
            that it adds to your processing. Today organizations are looking for
            a partner with technical strength to build automated internal
            processing for higher productivity. BPAAS Solutions are building
            solutions for making the workflow simpler and smoother without any
            headache. BPAAS Solutions was born with a vision of developing
            processes across departments and delivering them as a service to the
            client. Over the period, BPAAS has developed solutions related to
            Supply Chain Management, AI-based extraction, Point Sale solutions,
            and invoicing solutions. The company plans to extend these solutions
            to clients as a service and develop solutions around Supply Chain
            Management, resulting in process automation.
          </p>
          <Link href="/about-us">
          <button className="self-end text-orange transition duration-400 font-semibold  hover:bg-orange hover:text-white border px-8 py-2 text-sm border-orange">
            Know More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
