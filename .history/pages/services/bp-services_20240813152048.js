import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import TopBanner2 from "../../components/common/TopBanner2";
import Image from "next/image";
import Link from "next/link";

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
        <div className="container mx-auto max-w-6xl">
          <div className="text-left">
            <h1 className="lg:text-4xl text-3xl font-bold capitalize ">
              <span>Privacy</span>{" "}
              <span className="text-[#fb923c]">Statement</span>
            </h1>
          </div>
          <div className="mt-4">
            {/* <h1 className="text-1xl font-bold text-zinc-800">Objective:</h1> */}
            <p className="text-[16px] text-justify">
              Effective Date: 12th Aug 2024 <br/><br/> BPAAS Solutions Pvt. Ltd. (“we,”
              “our,” “us”) is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website  {' '}
              <Link passHref href="/">
            <a className="text-sky-600 hover:text-orange">
            bpaassolutions.com
            </a>
          </Link>
              . Please read this policy
              carefully to understand our views and practices regarding your
              personal data.
            </p>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-zinc-800">Information We Collect :</h1>
            <p>
              Effective Date: 12th Aug 2024 <br/><br/> BPAAS Solutions Pvt. Ltd. (“we,”
              “our,” “us”) is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website  {' '}
              <Link passHref href="/"><a className="text-sky-600 hover:text-orange">bpaassolutions.com</a></Link>. 
              Please read this policy carefully to understand our views and practices regarding your personal data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BpServices;