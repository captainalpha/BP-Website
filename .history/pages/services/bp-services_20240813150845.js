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
      

      <div className=" bg-slate-100  p-[5em]">
        <div className="container mx-auto">
         <div className="text-left">
            <h1 className="lg:text-4xl text-3xl font-bold capitalize ">
                <span>Privacy</span>{' '} 
                <span className="text-[#fb923c]">Statement</span></h1>
         </div>
         <h1 className="text-1xl font-bold text-zinc-800">Objective:</h1>
         <p></p>
        </div>
      </div>
    </div>
  );
}

export default BpServices;