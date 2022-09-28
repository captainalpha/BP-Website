import Image from "next/image";
import Link from "next/link";

function CaseStudyCard({ title, image, address, linkcs }) {
  return (
    <div className="relative group shadow-lg w-[350px] shadow-lg items-center">
      <Image
        className="group-hover:scale-105 duration-700"
        alt=""
        src={image}
        height={800}
        width={800}
      />
      <div className="absolute bg-gray-100  border rounded break-all text-justify  h-2/3 w-2/3 bottom-1 left-0  z-40 md:p-4 p-1 flex flex-col justify-between text-[14px] leading-4">
        <h1 className=" overflow-hidden text-sm font-medium break-normal">
          {" "}
          {title}
        </h1>
        <a href={linkcs}>
          <button className="self-end text-orange transition duration-400 font-semibold  hover:bg-orange hover:text-white border px-8 py-2 text-sm border-orange mx-auto duration-300">
            Know More
          </button>
        </a>
      </div>
    </div>
  );
}

export default CaseStudyCard;
