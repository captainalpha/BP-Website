import Head from "next/head";
import TopBanner from "../components/common/TopBanner";
import Image from "next/image";

function AboutUs() {
  return (
    <>
      <Head>
        <title>ABOUT US - BPAAS SOLUTIONS</title>
      </Head>
      <div className="mt-20">
        <TopBanner
          image={"/images/banner-about.png"}
          title="About Us"
          discription="We are working to build and enhance the functionality of any business model with our expertise and automation services"
        />

        <div className="grid lg:grid-cols-2 md:p-16 px-10 pb-10 pt-14 lg:py-20 lg:p-10 gap-10 ">
          <div className="space-y-5 text-justify leading-loose">
            {/* <p className=" font-bold text-2xl">About us</p> */}
            <h1 className="text-2xl lg:text-4xl font-bold text-orange capitalize">
              Who we are ?
            </h1>
            <p className="md:text-base text-justify text-sm leading-loose  pt-0 md:py-2 font-medium">
              Today, lot of organizations look out for solutions which can
              automate their internal processes and bring higher productivity.
              These organizations can be big or small in revenue but they look
              for partners who can add value to their processes and bring
              automation using their technical strength. Looking at this aspect
              of the clients, BPAAS Solutions was born with a vision of
              developing processes across departments and deliver them as a
              service to the client. Over the period of 4 years, BPAAS has
              developed such solutions related to Supply Chain Management, AI
              Based Extraction, Point of Sale solutions and invoicing solutions.
              The company plans to extend these solutions to clients as a
              service and develop solutions around Supply Chain Management and
              bring automation.
            </p>
          </div>
          <div className="space-y-5 text-justify leading-loose ">
            <h1 className="text-2xl lg:text-4xl font-bold text-orange capitalize">
              What we do ?
            </h1>
            <p className="md:text-base text-justify text-sm leading-loose  pt-0 md:py-2 font-medium">
              BPAAS Solutions is in to development of solutions and providing
              services to customers for OEM’s like Newgen & Automation Anywhere.
              The solutions have been developed on Open Source Technologies and
              are available to customers as a service or On-Premise deployment
              at their data centers. BPAAS is also in to providing consulting
              for studying processes and providing optimum solution for
              automation of those processes. We as an organization believe that
              the speed and pace at which technology is growing and bringing
              ways to automate processes for higher productivity, we as an
              organization can provide solutions to customers which have higher
              ROI and reduces burden on internal IT systems.
            </p>
          </div>
        </div>
        <div className="bg-[url('/images/bg-ourmission.png')] lg:h-[40vh] h-auto bg-cover  bg-no-repeat w-full flex flex-col text-white p-10 lg:p-20 text-center space-y-8 justify-center ">
          <h1 className="text-4xl font-bold text-left lg:text-center capitalize md:px-10">
            our mission
          </h1>
          <p className="lg:px-10 md:px-10 text-justify lg:text-center tracking-tighter md:tracking-normal">
            BPAAS Solutions logo presents our mission. The blue shows subtlety,
            loyalty and trust towards our customers. It also denotes experience,
            business traditions and values. The orange denotes youthfulness and
            freshness within the organization to deliver best className
            solutions to customers. It talks about the new age team and its
            thought process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center py-10 lg:gap-6 gap-6 container-bpaas mx-auto">
          <div className="px-4 md:px-0">
            <Image
              src="/images/ourjourney.png"
              width={800}
              height={800}
              alt="proqure"
            />
          </div>
          <div className="leading-loose px-4 md:px-0">
            <h1 className="md:text-4xl text-3xl font-bold capitalize ">
              our <b className="text-orange"> journey</b>
            </h1>
            <h3 className="pb-8 font-medium">
              Developed 6 Solutions in 5 years of Journey
            </h3>
            <Image
              src="/images/ourjourney-path.png"
              width={800}
              height={600}
              alt="proqure"
            />
          </div>
        </div>
        {/* 
        <div className="md:p-16 p-10 lg:py-20 lg:p-10">
          <h1 className="text-4xl font-bold text-orange">OUR SOLUTIONS</h1>
          <div className="grid lg:grid-cols-2  gap-10 mt-8 ">
            <div className="space-y-5 text-justify leading-loose">
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.{" "}
              </p>
            </div>
            <div className="space-y-5 text-justify leading-loose ">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.{" "}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default AboutUs;
