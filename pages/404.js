import Link from "next/link";
import { PreviewTransition } from "../animations/Animations";
import Image from "next/image";
function ForOFor() {
  return (
    <PreviewTransition>
      <section className="px-4 py-24 mx-auto max-w-7xl ">
        <div className="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
          <div>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
              Oops! The page you are looking for is under construction.
            </h1>
            <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
              Or maybe you are at wrong page...
            </p>
            <Link 
              href="/"
              className="w-full mb-2 btn btn-lg btn-light sm:w-auto py-3 px-4 bg-orange text-white sm:mb-0"
            >
              Back to homepage
            </Link>
          </div>
          <div>
            <div className="w-full h-full -z-50  bg-gray-200 rounded-lg">
              <Image alt="" src="/assets/404.jpg" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
    </PreviewTransition>
  );
}

export default ForOFor;
