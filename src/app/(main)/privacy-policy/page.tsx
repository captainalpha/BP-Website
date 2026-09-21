// app/services/bp-services/page.tsx
import React from "react";
import { GiCheckedShield } from "react-icons/gi";

const Page = () => {
  return (
    <div>
      <div className="w-full px-4 md:px-20  max-w-screen-xl mx-auto ">
        <h1 className="text-4xl flex items-center font-bold mb-6 text-white border-b border-[#ec964d] pb-2">
          <GiCheckedShield className="text-[#ec964d] mr-4" /> Privacy Policy
        </h1>
        <p className="text-xs text-gray-500">
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website.
        </p>
      </div>
      <div className="w-full px-4 md:px-20 py-16 max-w-screen-xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1
            className="text-2xl md:text-3xl font-bold"
            style={{ color: "#ec964d" }}
          >
            Privacy Statement
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective Date: 12th Aug 2024
          </p>
          <p className="text-base text-muted-foreground">
            BPAAS Solutions Pvt. Ltd. (“we,” “our,” “us”) is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you
            visit our website{" "}
            <span className="font-bold">bpaassolutions.com</span>. Please read
            this policy carefully to understand our views and practices
            regarding your personal data.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Information We Collect
          </h1>
          <p className="text-base text-muted-foreground">
            “Personal data” is defined to include information that whether on
            its own or in combination with other information may be used to
            readily identify or contact you such as: name, address, email
            address, phone number etc. <br />
            <br />
            <strong>Personal Data</strong> : We may collect personal
            identification information (such as name, email address, phone
            number) when you voluntarily submit it through our Site. <br />
            <strong>Usage Data</strong> : We automatically collect information
            about your interaction with our Site, including IP address, browser
            type, operating system, and pages visited.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            How We Use Your Information
          </h1>
          <p className="text-base text-muted-foreground">
            <strong>To Provide Services</strong> : We use your information to
            deliver the services you request. For internal record-keeping
            purposes. <br />
            <strong>To Improve Our Site</strong> : We analyse usage data to
            enhance the functionality and user experience of our Site. <br />
            <strong>To Communicate</strong> : We may use your contact
            information to respond to inquiries, send updates, and provide
            customer support. <br />
            To periodically send promotional emails to the email address you
            provide regarding new products from BPAAS Solutions, special offers
            from BPAAS Solutions or other information about BPAAS Solutions that
            we think you may find interesting. <br />
            For BPAAS Solutions market research purposes, including, but not
            limited to, the customization of the Website or Services according
            to your interests.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Sharing Your Information
          </h1>
          <p className="text-base text-muted-foreground">
            We do not sell, trade, or otherwise transfer your personal data to
            outside parties except as described in this policy. We may share
            information with trusted third parties who assist us in operating
            our Site, conducting our business, or servicing you, provided those
            parties agree to keep this information confidential.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Data Security
          </h1>
          <p className="text-base text-muted-foreground">
            We implement a variety of procedural and technological security
            measures to maintain the safety of your personal information from
            unauthorized access or disclosure. BPAAS Solutions may use
            encryption, passwords, and physical security measures to help
            protect your personal information against unauthorized access and
            disclosure. However, no method of transmission over the internet or
            electronic storage is 100% secure.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Information Disclosed At Your Request
          </h1>
          <p className="text-base text-muted-foreground">
            We may share your personal information with other users or third
            parties to whom you explicitly ask us to send your information or if
            you explicitly consent to such disclosure upon receipt of a specific
            Service.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Your Rights
          </h1>
          <p className="text-base text-muted-foreground">
            You have the right to access, correct, or delete your personal data.
            You may also object to the processing of your data or request data
            portability. To exercise these rights, please contact us at{" "}
            <a
              href="mailto:sales@bpaassolutions.com"
              className="text-blue-500 underline"
            >
              sales@bpaassolutions.com
            </a>
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold" style={{ color: "#ec964d" }}>
            Links to Third-Party Websites
          </h1>
          <p className="text-base text-muted-foreground">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of these
            third-party sites. We encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white px-6 py-12 md:px-20 md:py-16 rounded-2xl shadow-lg space-y-6 mt-16 mx-4 md:mx-20">
        <p className="text-base leading-relaxed text-neutral-300">
          <strong className="text-orange-400">NOTE:</strong> Changes to This
          Policy — We may update this Privacy Policy from time to time. We will
          notify you of any changes by posting the new policy on this page. You
          are advised to review this Privacy Policy periodically for any
          updates.
        </p>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-base leading-relaxed text-neutral-300">
            <strong className="text-orange-400">Contact Us</strong>
            <br />
            If you have any questions about this Privacy Policy, please reach
            out:
          </p>
          <ul className="mt-3 space-y-2 pl-4 list-disc text-neutral-300">
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:sales@bpaassolutions.com"
                className="underline text-blue-400 hover:text-blue-300"
              >
                sales@bpaassolutions.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span> BPAAS
              Solutions Private Limited, Unit number 601 & 602, Vipul Square,
              Sushant Lok Phase 1, Gurugram, Haryana 1220092
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
