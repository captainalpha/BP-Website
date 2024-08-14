import { useState } from "react";
import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import TopBanner2 from "../../components/common/TopBanner2";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { MdChecklistRtl } from "react-icons/md";
import { BsCopy } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";


function BpServices() {
 const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  const privacyStatement = [
    {
      heading: "Information We Collect",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            <p className="text-[17px] text-justify mt-3">
              &ldquo;Personal data&rdquo; is defined to include information that
              whether on its own or in combination with other information may be
              used to readily identify or contact you such as: name, address,
              email address, phone number etc.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>Personal Data :</b> We may collect personal identification
              information (such as name, email address, phone number) when you
              voluntarily submit it through our Website.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>Usage Data :</b> We automatically collect information about your
              interaction with our Website, including IP address, browser type,
              operating system, and pages visited.
            </p>
          </p>
        </>
      ),
    },
    {
      heading: "How We Use Your Information",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            <b>To Provide Services :</b> We use your information to deliver the
            services you request. For internal record-keeping purposes.
          </p>
          <p className="text-[17px] text-justify mt-3">
            <b>To Improve Our Site :</b> We analyse usage data to enhance the
            functionality and user experience of our Site.
          </p>
          <p className="text-[17px] text-justify mt-3">
            <b>To Communicate :</b> We may use your contact information to respond
            to inquiries, send updates, and provide customer support. To
            periodically send promotional emails to the email address you provide
            regarding new products from BPAAS Solutions, special offers from BPAAS
            Solutions or other information about BPAAS Solutions that we think you
            may find interesting. For BPAAS Solutions market research purposes,
            including, but not limited to, the customization of the Website or
            Services according to your interests.
          </p>
        </>
      ),
    },
    {
      heading: "Sharing Your Information",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            We do not sell, trade, or otherwise transfer your personal data to
            outside parties except as described in this policy. We may share
            information with trusted third parties who assist us in operating our
            Site, conducting our business, or servicing you, provided those
            parties agree to keep this information confidential.
          </p>
        </>
      ),
    },
    {
      heading: "Data Security",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            We implement a variety of procedural and technological security
            measures to maintain the safety of your personal information from
            unauthorized access or disclosure. BPAAS Solutions may use encryption,
            passwords, and physical security measures to help protect your
            personal information against unauthorized access and disclosure.
            However, no method of transmission over the internet or electronic
            storage is 100% secure.
          </p>
        </>
      ),
    },
    {
      heading: "Information Disclosed At Your Request",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            We may share your personal information with other users or third
            parties to whom you explicitly ask us to send your information or if
            you explicitly consent to such disclosure upon receipt of a specific
            Service.
          </p>
        </>
      ),
    },
    {
      heading: "Your Rights",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            You have the right to access, correct, or delete your personal data.
            You may also object to the processing of your data or request data
            portability. To exercise these rights, please contact us at&nbsp;
            <a
              className="text-sky-600 hover:text-[#fb923c]"
              href="mailto:sales@bpaassolutions.com"
            >
              sales@bpaassolutions.com
            </a>
          </p>
        </>
      ),
    },
    {
      heading: "Links to Third-Party Websites",
      content: (
        <>
          <p className="text-[17px] text-justify mt-3">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of these third-party
            sites. We encourage you to review their privacy policies before
            providing any personal information.
          </p>
        </>
      ),
    },
  ];
  return (
    <div>
      <div className="relative">
        <TopBanner2
          image={"/images/policy-service2.jpg"}
          title="Privacy Policy"
          discription="This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."
          btnShow={false}
        />
        <div className="absolute top-[1em] right-[10em] hidden sm:block md:block lg:block xl:block">
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
        <div className="container mx-auto max-w-9xl">
          <div className="text-left">
            <h1 className="lg:text-4xl text-3xl font-bold capitalize ">
              <span>Privacy</span>{" "}
              <span className="text-[#fb923c]">Statement</span>
            </h1>
          </div>

          <div className="mt-5 mb-8">
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

          {/* {privacyStatement?.map((item, ind) => (
        <div key={ind} className="max-w-[1200px] mx-auto mb-4">
          <div
            className={`px-4 py-3 mt-4 shadow-md transition-colors duration-500 ease-out cursor-pointer ${
              expandedIndex === ind ? "bg-[#fb923c]" : "border-[#fb923c] border-2"
            }`}
            onClick={() => handleToggle(ind)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[17px] font-sans font-semibold">
                {item?.heading}
              </h3>
              <div className="transition-transform duration-500 ease-out">
                {expandedIndex === ind ? (
                  <AiOutlineMinus className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              expandedIndex === ind ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-3"
            }`}
          >
            <div className="p-4 border-t-2 border-[#fb923c] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              {item?.content}
            </div>
          </div>
        </div>
      ))} */}
  
        

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
              <b>Personal Data :</b> We may collect personal identification
              information (such as name, email address, phone number) when you
              voluntarily submit it through our Site.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>Usage Data :</b> We automatically collect information about
              your interaction with our Site, including IP address, browser
              type, operating system, and pages visited.
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              How We Use Your Information
            </h1>
            <p className="text-[17px] text-justify mt-3">
              <b>To Provide Services :</b> We use your information to deliver
              the services you request. For internal record-keeping purposes.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>To Improve Our Site :</b> We analyse usage data to enhance the
              functionality and user experience of our Site.
            </p>
            <p className="text-[17px] text-justify mt-3">
              <b>To Communicate :</b> We may use your contact information to
              respond to inquiries, send updates, and provide customer support.
              To periodically send promotional emails to the email address you
              provide regarding new products from BPAAS Solutions, special
              offers from BPAAS Solutions or other information about BPAAS
              Solutions that we think you may find interesting. For BPAAS
              Solutions market research purposes, including, but not limited to,
              the customization of the Website or Services according to your
              interests
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Sharing Your Information
            </h1>
            <p className="text-[17px] text-justify mt-3">
              We do not sell, trade, or otherwise transfer your personal data to
              outside parties except as described in this policy. We may share
              information with trusted third parties who assist us in operating
              our Site, conducting our business, or servicing you, provided
              those parties agree to keep this information confidential.
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Data Security
            </h1>
            <p className="text-[17px] text-justify mt-3">
              We implement a variety of procedural and technological security
              measures to maintain the safety of your personal information from
              unauthorized access or disclosure. BPAAS Solutions may use
              encryption, passwords, and physical security measures to help
              protect your personal information against unauthorized access and
              disclosure. However, no method of transmission over the internet
              or electronic storage is 100% secure.
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Information Disclosed At Your Request
            </h1>
            <p className="text-[17px] text-justify mt-3">
              We may share your personal information with other users or third
              parties to whom you explicitly ask us to send your information or
              if you explicitly consent to such disclosure upon receipt of a
              specific Service.
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Your Rights
            </h1>
            <p className="text-[17px] text-justify mt-3">
              You have the right to access, correct, or delete your personal
              data. You may also object to the processing of your data or
              request data portability. To exercise these rights, please contact
              us at&nbsp;
              <a
                className="text-sky-600 hover:text-[#fb923c]"
                href="mailto:sales@bpaassolutions.com"
              >
                sales@bpaassolutions.com
              </a>
            </p>
          </div>

          <div className="mt-[2em]">
            <h1 className="text-[20px] font-bold text-[#fb923c]">
              Links to Third-Party Websites
            </h1>
            <p className="text-[17px] text-justify mt-3">
              Our website may contain links to external websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </div>

          <div className="mt-[2em]  lg:mt-10 md:mt-10 xl:mt-10 bg-gradient-to-r from-red-100 to-blue-100 p-2 md:p-[3em]">
            <p className="text-[17px] text-normal sm:text-justify lg:text-justify xl:text-justify md:text-justify mt-3">
              <b>NOTE : </b> Changes to This Policy We may update this Privacy
              Policy from time to time. We will notify you of any changes by
              posting the new policy on this page. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
            <p className="text-[17px] text-normal sm:text-justify lg:text-justify xl:text-justify md:text-justify mt-3">
              Contact Us If you have any questions about this Privacy Policy,
              Please contact us at:
              <br />
              <b>Email : </b>
              <br />
              <a
                className="text-sky-600 hover:text-[#fb923c]"
                href="mailto:sales@bpaassolutions.com"
              >
                sales@bpaassolutions.com
              </a>
              <br />
              <b>Address :</b>
              <br />
              BPAAS Solutions Private Limited, Unit number 601 & 602, Vipul
              Square, Sushant Lok Phase 1, Gurugram, Haryana 1220092
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BpServices;
