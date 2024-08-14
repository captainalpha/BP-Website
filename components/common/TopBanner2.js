import Link from "next/link";
function TopBanner2({ image, title, discription, onClick,btnShow}) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`lg:h-[80vh] h-[60vh] mt-20 w-full text-white flex p-10 items-center bg-no-repeat bg-cover `}
    >
      <div className="space-y-4 lg:w-1/2  md:text-left">
        <h1 className="lg:text-5xl text-3xl font-bold capitalize ">{title}</h1>
        <p className="w-full lg:text-xl lg:text-justify tracking-tighter">
          {discription}
        </p>
    {btnShow&&(
        <Link passHref href="/request-demo">
          <button className="px-8 py-2  border-white border-2 hover:bg-orange font-medium text-xl">
            Request Demo
          </button>
        </Link>
    )}
      </div>
    </div>
  );
}

export default TopBanner2;
