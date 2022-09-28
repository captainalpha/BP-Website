import { Image } from "next/image";
function SolutionRight({ title, discription, img }) {
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-1 md:px-10 px-0  justify-center items-center py-10 gap-16 mx-auto ">
        <div className="space-y-3 leading-loose md:col-span-3  ">
          <h1 className="md:text-2xl text-lg font-semibold capitalize text-orange ">
            {title}
          </h1>
          <hr className=" h-[2px]  bg-orange w-3/4" />
          <p className="md:text-base text-justify text-sm leading-loose  font-medium">
            {" "}
            {discription}
          </p>
        </div>
        <div className="flex  relative md:col-span-2 justify-center items-center">
          <div className="shadow-[12px_10px_rgba(0,0,0,0.2)]  shadow-orange">
            <img src={img} className="w-[200px] h-[170px]" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionRight;
