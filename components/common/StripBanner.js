import Link from "next/link";
function StripBanner({ image, title, discription, onClick }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="lg:h-[40vh] h-auto bg-cover  bg-no-repeat w-full flex flex-col text-white p-10 lg:p-20 text-center space-y-8 justify-center "
    >
      <h1 className="text-xl lg:text-4xl font-semibold text-center capitalize md:px-10 container-bpaas lg:leading-relaxed mx-auto">
        {title}
      </h1>
      <Link passHref href="/contact-us">
        <button
          href="/contact-us"
          className="px-4 py-2 border w-52 m-auto border-white hover:bg-orange transition duration-500"
        >
          Contact Us
        </button>
      </Link>
    </div>
  );
}

export default StripBanner;
