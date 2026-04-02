import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import TopBanner2 from "../../components/common/TopBanner2";
import Image from "next/image";

function BpServices() {
  return (
    <div>
      <div className="relative">
        <TopBanner2
          image={"/images/policy-service2.jpg"}
          title="Privacy Policy"
          discription="This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
          btnShow={false}
        />
        <div className="absolute top-[1em] right-[10em]">
          <Image
            src="/images/privacypolicy2.png"
            className="w-1/2 mx-auto"
            width="500"
            height="500"
            alt="customer-developement"
          />
        </div>
      </div>
      <div className="py-0 overflow-hidden mt-5">
       
      </div>

      <div className="bg-slate-100">
        <SectionHeader title="Models to " cTitle=" Deliver" />
        {/* <hr className="pb-2 pt-0 rounded-4xl border-t-4 w-52 m-auto" /> */}
      </div>

      <div className=" bg-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-10 px-12 pb-12 pt-6 sm:p-6 lg:pb-24 justify-center items-center">
            <div className="relative">
              <div className="bg-blue-300 w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Fixed Price Model
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Scope Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Timelines Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Milestone Based Delivery </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-400 w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Hire Team
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  {/* <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p> */}
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Dedicated Resources </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Monthly Billing</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Resource Ramp up/down</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-orange w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Managed Services
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  {/* <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p> */}
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Scope Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">BPAAS Value Addition</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Dedicated/Shared Team</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BpServices;
