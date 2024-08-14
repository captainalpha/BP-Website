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
          <div className="mt-5">
            <p className="text-[17px] text-justify">
              Effective Date: 12th Aug 2024 <br />
              <br /> BPAAS Solutions Pvt. Ltd. (&ldquo;we,&rdquo;
              &ldquo;our,&rdquo; &ldquo;us&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website&nbsp;
              <Link passHref href="/">
                <a className="text-sky-600 hover:text-[#fb923c]">
                  bpaassolutions.com
                </a>
              </Link>
              . Please read this policy carefully to understand our views and
              practices regarding your personal data.
            </p>
          </div>
          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Information We Collect
            </h1>
            <p className="text-[17px] text-justify mt-3">
              &ldquo;Personal data&rdquo; is defined to include information that
              whether on its own or in combination with other information may be
              used to readily identify or contact you such as: name, address,
              email address, phone number etc.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>Personal Data :</b> We may collect personal identification information
              (such as name, email address, phone number) when you voluntarily
              submit it through our Site. 
            </p>
            <p className="text-[17px] text-justify mt-3"> 
              <b>Usage Data :</b> We automatically collect
              information about your interaction with our Site, including IP
              address, browser type, operating system, and pages visited.
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
            How We Use Your Information
            </h1>
            <p className="text-[17px] text-justify mt-3"> 
              <b>To Provide Services :</b> We use your information to deliver the services you request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BpServices;
