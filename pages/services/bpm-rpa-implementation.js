import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import CaseStudy from "../../components/common/CaseStudy";

function BpmRpaImplementation() {
  return (
    <div>
      <TopBanner
        image={"/images/service2.png"}
        title="BPM/RPA Implementation"
        discription="Unleash the power of BPM/RPA tools with BPAAS Solutions"
      />
      <div className="bg-slate-100">
        <SectionHeader title="BPM/RPA " cTitle="Services Implementation" />
        {/* <hr className="pb-2 pt-0 rounded-4xl border-t-4 w-5/12 m-auto" /> */}
      </div>
      <div className="p-8 flex items-center justify-center bg-gray-100 lg:pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex  relative">
            <div className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
              <p className=" text-center text-2xl font-bold text-gray-500 group-hover:text-gray-700">
                {" "}
                BPM Services{" "}
              </p>
              <hr />
              <ul className=" space-y-8 p-2 list list-disc text-gray-500 group-hover:text-gray-700 mt-2  md:text-base text-justify text-sm leading-loose py-2 font-medium">
                {" "}
                <li className="">
                  BPAAS Solutions is a demo-ready and sales-ready partner of
                  Newgen. We have certified professionals who have worked on
                  multiple projects related to various industries like
                  Financials, Banking, Insurance, Manufacturing, Legal etc.
                </li>
                <li>
                  We provide implementation, upgrade and support services for
                  Newgen Products. (OmniDocs, OmniExtract, iBPS, E-Gov, Mobile).
                </li>
                <li>
                  BPAAS has developed solutions which can be integrated with
                  Newgen Products. BPAAS Vendora, Proqure, Invoicer, SmartEx
                  have open API’s which are integrable with Newgen Products and
                  this can deliver revenue driven outcomes along with high ROI.
                </li>
              </ul>

              <div className="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0">
                {" "}
              </div>
            </div>
          </div>

          <div className="flex relative">
            <div className="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9">
              <p className="text-2xl text-center font-bold text-gray-500 group-hover:text-gray-700">
                {" "}
                RPA Services{" "}
              </p>
              <hr />

              <ul className="space-y-8 p-2 list list-disc text-gray-500 group-hover:text-gray-700 mt-2 md:text-base text-justify text-sm leading-loose py-2 font-medium">
                {" "}
                <li>
                  BPAAS Solutions is a certified partner to Automation Anywhere
                  and UI Path. We as a partner provide implementation and
                  support services for both the OEM’s.
                </li>
                <li>
                  As part of services, we provide consulting to organizations
                  which can help them to understand importance of digitization
                  using BOTs, risk & mitigations and lastly return on
                  investments with this automation
                </li>
                <li>
                  BOTs developed can be integrated with BPAAS Solutions and can
                  provide end to end solutions which can meet business
                  requirements and result in solutions which have low
                  maintenance cost and high ROI.{" "}
                </li>
              </ul>

              <div className="bg-blue-400 group-hover:bg-blue-600 h-full w-4 absolute top-0 left-0">
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto">
        <div className="">
          <SectionHeader title="CASE" cTitle=" STUDIES" />
          {/* <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-4 w-100 m-auto" /> */}
        </div>
        <div className="container mx-auto">
          <div className="" id="section1">
            {/* <SectionHeader title="Axalta Coating Systems India Pvt Ltd" /> */}
            <div className=" pb-0 px-5 md:px-10    flex flex-col justify-center items-center text-center space-y-3">
              {/* <h1 className="lg:text-4xl text-2xl capitalize font-bold">
                Axalta Coating Systems India Pvt Ltd
              </h1> */}
            </div>
            {/* <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2 w-52 m-auto " /> */}
            <div className="container m-auto px-6 md:px-12 xl:px-6 pb-8 ">
              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 lg:items-center ">
                {/* <div className=" " id="section1">
                  <CaseStudy
                    title="Axalta Coating Systems is a US based MNC that develops and manufactures coatings for vehicles, industrial, and
                    refinish applications."
                    image="/images/casestudy-1.png"
                  />
                </div> */}
                <div className="sm:space-y-0 md:pt-8 mx-auto">
                  <div className="md:flex hidden">
                    <img
                      src="/images/ss2.png"
                      className=" mx-auto rounded"
                      alt="illustration"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="">
                  <h1 className=" text-2xl capitalize font-bold py-2">
                    Axalta Coating Systems India Pvt Ltd
                  </h1>
                  <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2  m-auto " />
                  <div className="text-gray-600 font-medium text-left">
                    Axalta Coating Systems is a US based MNC that develops and
                    manufactures coatings for vehicles, industrial, and refinish
                    applications
                  </div>

                  <h5 className="text-orange font-bold mt-4 text-left">
                    The Problem
                  </h5>
                  <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                  <p className=" text-gray-600 font-medium text-left">
                    Data from Certificate of Analysis (COA), received from
                    vendors, had to be manually entered in the database
                  </p>
                  <h5 className="text-orange  font-bold mt-4">The Solution</h5>
                  <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                  <p className="mt-2 text-gray-600 font-medium">
                    Application to recognize and extract the COAs. A platform
                    for business user to verify and approve the same.
                  </p>
                  <h5 className="text-orange font-bold mt-4">Why We Won</h5>
                  <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                  <p className="mt-2 text-gray-600 font-medium">
                    Designed & constructed a web portal. Used custom Java
                    application & utilities to pull COA attachments from email,
                    extract data and display on the portal page. Exception
                    handling included.
                  </p>
                </div>
                <div className="md:hidden flex">
                  <img
                    src="/images/ss2.png"
                    className=" mx-auto rounded"
                    alt="illustration"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="sm:space-y-0 pt-8 mx-auto">
            <img
              src="/images/ss2.png"
              className="lg:w-[60%] mx-auto rounded"
              alt="illustration"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
      <div className="container mx-auto py-8">
        <div className="">
          {/* <SectionHeader title="NatSteel Holdings" />
          <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2 w-52 m-auto" /> */}
          <div className="container m-auto px-6 md:px-12 xl:px-6" id="section2">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:items-center">
              <div className="">
                <h1 className=" text-2xl capitalize font-bold py-2 md:text-right">
                  NatSteel Holdings
                </h1>
                <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2  m-auto " />
                <div className="text-gray-600 font-medium md:text-right">
                  NatSteel is a leading Pan-Asian company that delivers premium
                  reinforcement steel products and solutions for the
                  construction industry. It is a Tata Steel subsidiary,
                  headquartered in Singapore
                </div>
                <h5 className="text-orange font-bold mt-4 md:text-right">
                  The Problem
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className=" text-gray-600 font-medium md:text-right">
                  Being a leading manufacturer, there are lot of transactions of
                  procurement of raw material with multiple vendors
                </p>
                <h5 className="text-orange  font-bold mt-4 md:text-right">
                  The Solution
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium md:text-right">
                  Need of a centralized system to handle the volume of
                  transactions – everything from submitting proposal, receiving
                  order to raising an invoice.
                </p>
                <h5 className="text-orange font-bold mt-4 md:text-right">
                  Why We Won
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium md:text-right">
                  Created a centralized E-procurement system that includes 3
                  portals: Customer Portal – for document management Buyer
                  Portal – RFP to RFQ Vendor Portal – PR to PO
                </p>
              </div>
              <div className="relative mx-auto ">
                <img
                  src="/images/ss3.png"
                  className="mx-auto rounded"
                  alt="illustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sm:space-y-0 pt-8">
          <img
            src="/images/ss3.png"
            className="lg:w-[60%] mx-auto rounded"
            alt="illustration"
            loading="lazy"
          />
        </div> */}
      </div>
      <div className="container mx-auto">
        <div className="">
          {/* <SectionHeader title="YNI Global Shared Service" />
          <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2 w-52 m-auto" /> */}
          <div
            className="container m-auto px-6 md:px-12 xl:px-6 py-8"
            id="section3"
          >
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:items-center">
              <div className="hidden md:flex" id="section3">
                <img
                  src="/images/ss1.png"
                  className=" mx-auto rounded"
                  alt="illustration"
                  loading="lazy"
                />
              </div>
              <div className="">
                <h1 className=" text-2xl capitalize font-bold py-2">
                  YNI Global Shared Service
                </h1>
                <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2  m-auto " />
                <div className="text-gray-600 font-medium text-left">
                  YNI Group is a Dubai based group with presence in various
                  countries. Broad category of YNI activities – IT Services,
                  Financial Services, Shipping Services and Global Shared
                  Services (GSS)
                </div>
                <h5 className="text-orange font-bold mt-4">The Problem</h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className=" text-gray-600 font-medium">
                  Manual process handling between multiple systems. Information
                  dependency between these systems. Tracking Issues.
                </p>
                <h5 className="text-orange  font-bold mt-4">The Solution</h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium">
                  Portal along with AI extraction to generate tickets from
                  emails received with invoice as attachment, extract data from
                  invoices.
                </p>
                <h5 className="text-orange font-bold mt-4">Why We Won</h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium">
                  Design and construction of a customized web portal which was
                  delivered for UAT within 1 month of project start.
                  Integrations with other client systems. Dashboard, tracking &
                  reporting included.
                </p>
              </div>
              <div className="md:hidden flex">
                <img
                  src="/images/ss2.png"
                  className=" mx-auto rounded"
                  alt="illustration"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sm:space-y-0 pt-8">
          <img
            src="/images/ss1.png"
            className="lg:w-[60%] mx-auto rounded"
            alt="illustration"
            loading="lazy"
          />
        </div> */}
      </div>
      <div className="container mx-auto md:pt-8 pb-20">
        <div className="">
          {/* <SectionHeader title="Prime Bank" /> */}

          {/* <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2 w-52 m-auto" /> */}
          <div className="container m-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:items-center">
              <div className="">
                <h1 className=" text-2xl capitalize font-bold py-2 md:text-right">
                  Prime Bank
                </h1>
                <hr className="pb-2 mt-0 pt-0 rounded-4xl border-t-2  m-auto " />
                <div className="text-gray-600 font-medium md:text-right">
                  Prime Bank Kenya is a commercial bank in Kenya, licensed and
                  supervised by the Central Bank of Kenya. The bank is a
                  mid-sized retail bank that caters to both individuals and
                  corporate clients
                </div>
                <h5 className="text-orange font-bold mt-4 md:text-right">
                  The Problem
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className=" text-gray-600 font-medium md:text-right">
                  All bank processes were manual – error prone, consuming time
                  and generating a lot of paperwork.
                </p>
                <h5 className="text-orange capitalize  font-bold mt-4 md:text-right">
                  The Solution
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium md:text-right">
                  Use BPM tool to automate the process and hence improve
                  efficiency and accuracy.
                </p>
                <h5 className="text-orange font-bold mt-4 md:text-right">
                  Why We Won
                </h5>
                <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                <p className="mt-2 text-gray-600 font-medium md:text-right">
                  Through Newgen BPM implementation, automated 13 processes
                  including account openings, card applications & complex ones
                  like telegraphic transfer.
                </p>
              </div>
              <div className="relative ">
                <img
                  src="/images/ss4.png"
                  className=" mx-auto rounded "
                  alt="illustration"
                  loading="lazy"
                />
                {/* <CaseStudy
                  title="Prime Bank Kenya is a commercial bank in Kenya, licensed and supervised by the Central Bank of Kenya.

                  The bank is a mid-sized retail bank that caters to both individuals and corporate clients."
                  image="/images/casestudy-1.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="sm:space-y-0 pb-12 pt-8">
          <img
            src="/images/ss4.png"
            className="lg:w-[60%] mx-auto rounded "
            alt="illustration"
            loading="lazy"
          />
        </div> */}
      </div>
    </div>
  );
}

export default BpmRpaImplementation;
