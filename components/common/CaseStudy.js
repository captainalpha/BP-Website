import Image from "next/image";

function CaseStudyCard({ title, image }) {
  return (
    <div className="relative group shadow-lg w-[350px] shadow-lg items-center">
      <Image
        className="group-hover:scale-105 duration-700"
        alt=""
        src={image}
        height={800}
        width={800}
      />
      <div className="absolute bg-white border-2 border-slate-100 rounded h-auto w-4/5 bottom-1 left-0  z-40 md:p-4 p-1 flex flex-col justify-between text-[14px] leading-4">
        <h1 className="text-justify overflow-hidden font-medium"> {title}</h1>
      </div>
    </div>
  );
}

export default CaseStudyCard;
