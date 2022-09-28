import Image from "next/image";
import banner from "../../assets/banner.png";
function CallToAction() {
  return (
    <section className="grid items-center justify-center px-4 py-24 text-center  relative">
      <Image src={banner} layout="fill" objectFit="cover" alt="" />
      <div className="flex flex-col w-full justify-center items-center z-10 text-white space-y-5 lg:px-40 md:px-20 px-5 ">
        <h2 className=" font-serif text-3xl font-normal tracking-tight md:leading-tight md:text-4xl ">
          Get started with BPAAS Solutions...
        </h2>
        <p className=" text-base font-semibold ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
        <a
          href="#"
          className="w-full shadow-xl btn btn-primary btn-lg sm:w-auto border p-3"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
