import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { PreviewTransition } from "../animations/Animations";

function UnderDevelopment() {
  return (
    <>
      <Head>
        <title>Under Maintenance</title>
        <meta
          name="description"
          content="This page is currently under development. Check back soon or contact BPAAS Solutions."
        />
      </Head>
      <PreviewTransition>
        <section className="px-4 py-24 mx-auto max-w-7xl mt-10">
          <div className="items-center w-full">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-wide uppercase text-orange md:text-base">
                Work in progress
              </p>
              <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl">
                This page is under development
              </h1>
              <p className="mb-5 text-base text-left text-gray-800 md:text-xl">
                We are building something new here. Please check back soon, or
                reach out if you need help in the meantime.
              </p>
            </div>
          </div>
        </section>
      </PreviewTransition>
    </>
  );
}

export default UnderDevelopment;
