import React from "react";
import Head from "next/head";
import TopBanner from "../../components/common/TopBanner";
import StripBanner from "../../components/common/StripBanner";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import SmartexSlide from "../../components/common/SolutionSlider/SmartexSlide";
import Image from "next/image";
import SectionHeader from "../../components/common/SectionHeader";
function BpassSmartex() {
  return (
    <>
      <Head>
        <title>Bpaas Smartex - BPAAS SOLUTIONS</title>
      </Head>
      <div className="mt-20">
        <TopBanner
          image={"/images/invoicer-banner.png"}
          title="BPAAS SmartEx"
          discription="Extract accurately relevant content from documents, emails, uploads
        and data sources using BPAAS SmartEx (AI Built Engine)."
        />

        <div className="grid grid-row lg:grid-cols-2 lg:px-20 py-10 md:justify-center items-center gap-16">
          <div className="px-8">
            {/* <h2 className="text-gray-900 pb-2 font-bold md:text-4xl text-2xl">
              Welcome To <b className="text-orange">BPAAS</b> SmartEx
            </h2> */}
            {/* <hr className="rounded-4xl border-t-2 w-full m-2" /> */}
            {/* <h1 className="text-3xl underline">Key Features</h1> */}
            <p className=" md:text-base text-justify text-xs leading-loose py-8 font-medium">
              BPAAS SmartEx solution is an extraction engine solution which
              enables extraction of data from documents which has been scanned
              shared through different mode of communications. The engine
              extracts data and has capability to export data to different
              systems as required by an organization. This engine enables
              organization to analyze and interpret scanned images and convert
              them into real electronic text. It increases the value of your
              scanned documents by making content searchable and reusable. The
              engine has capability to be integrated with other solutions of
              BPAAS and can deliver much bigger functionalities along with other
              solutions. The engine can be deployed on premise data center or
              hosted cloud or can be provided as SAAS platform. BPAAS SmartEx
              delivers high accuracy of extraction along with reduction in size
              of the document without losing quality of the document.
            </p>
          </div>
          <div className="px-8 m-auto">
            <img
              // width={500}
              // height={450}
              alt=""
              src="/images/services/smartex-mobi.png"
              className="object-cover"
            />
          </div>
        </div>

        <div className="pb-20">
          <img
            className="w-4/5 m-auto object-fill flex md:hidden "
            src="/images/smart.png"
            alt-=""
          />
          <img
            className="w-4/5 m-auto object-fill hidden md:flex py-8"
            src="/images/smartdesktop.png"
            alt-=""
          />
        </div>

        <StripBanner
          image={"/images/bg-ourmission.png"}
          title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning.

          "
        />

        <div className="container-bpaas mx-auto px-8">
          <SolutionLeft
            img={"/images/services/smartex-1.png"}
            title="AI-Based"
            discription="BPAAS SmartEx is AI Based
 engine for analysing text and
 extracting data for all the
 departments in the organization."
          />
          <hr className="h-[2px] bg-black mx-auto" />
          <SolutionRight
            img={"/images/services/smartex-2.png"}
            title="Identification Quality"
            discription="BPAAS SmartEx has maximum
 identification quality in
 extracting and validating data.
 The solution can be integrated
 with BPAAS Proqure &amp; Vendora
 for end-to-end automation."
          />
          <hr className="h-[2px] bg-black mx-auto" />
          <SolutionLeft
            img={"/images/services/smartex-3.png"}
            title="Automate Extraction"
            discription="BPAAS SmartEx delivers high
 degree of automation with
 lowest proportion of manual
 effort. It is a perfect solution to
 automate extraction and further
 processing of extracted data."
          />
        </div>
        <SectionHeader title="An Overview On  " cTitle="BPAAS SmartEx" />
       <div className='pb-10'>
        <SmartexSlide />
        </div>
      </div>
    </>
  );
}

export default BpassSmartex;
