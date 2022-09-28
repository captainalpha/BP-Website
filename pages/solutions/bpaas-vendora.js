import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import Image from "next/image";
import ServiceCard from "../../components/services/ServiceCard";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import StripBanner from "../../components/common/StripBanner";
import VendorSlide from "../../components/common/SolutionSlider/VendorSlide";

function BpaasVendora() {
  return (
    <div>
      <TopBanner
        image={"/images/bpaas-vendora-banner.png"}
        title="BPAAS Vendora"
        discription="Simplify your business processes and easily create stronger relationships with your vendors by 
        collaborating with them in a secure, online environment."
      />
      <div className="grid grid-row lg:grid-cols-2 container-bpaas mx-auto py-10 justify-center items-center gap-16">
        <div className="px-8 ">
          <p className="md:text-base text-justify text-xs leading-loose py-2 font-medium">
            BPAAS Vendora is a solution which enables organizations to deliver
            effective vendor management. This solution delivers functionalities
            like vendor onboarding, vendor invoicing for both PO and Non-PO
            engagements, vendor compliances, reporting of statuses to vendor of
            their payments etc. The solution has an integrated workflow system
            which allows organizations to have proper approval flow for all kind
            of transactions related to their external vendors. This solution can
            be integrated with BPAAS Proqure which is RFP management solution
            and this integrated solution can deliver functionalities related to
            end to end supplier management. The solution can be deployed on data
            center servers or on hosted cloud or can be provided as SAAS
            platform. BPAAS Vendora saves time, improves data quality,
            eliminates manual entry to ERP and improves compliance.
          </p>
        </div>
        <div className="px-8">
          <img
            // height={900}
            // width={900}
            alt=""
            src="/images/vendora-features.png"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div>
        <StripBanner
          image={"/images/bg-ourmission.png"}
          title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning."
        />
      </div>

      <div className="container-bpaas mx-auto px-8">
        <SolutionLeft
          img={"/images/services/vendora-1.png"}
          title="Optimize Business Process"
          discription="BPAAS Vendora provides a single
 application for your supplier
 management. It delivers ease of
 doing business, ease of uploading
 documents, ease of getting updates,
 ease of communication and ease
 of managing history for audits and
 compliances."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/vendora-2.png"}
          title="Reduce Cost"
          discription="BPAAS Vendora delivers a
 significant reduction in
 communication by digitizing
 them. This solution will maximize
 current operations of the
 procurement department by
 helping them to focus more on
 challenging and high value
 functions, and reducing calls from
 vendors and internal customers. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/vendora-3.png"}
          title="Enhanced Visibility"
          discription="BPAAS Vendora increases visibility
 and transparency within
 organization and between
 organization and suppliers. The
 solution delivers visibility from
 submission of invoices to approval,
 to status, and to payments. Spend
 Analytics provides visibility to
 organization to take healthy
 decisions on spend costs. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/vendora-4.png"}
          title="Size doesn’t Matter"
          discription="Whether organization is large,
 medium, or small, today’s world
 need digitization to provide
 enhanced experience to their
 clients and suppliers. Whether
 you are processing 100 or 1000
 invoices, BPAAS Vendora
 streamlines processes and
 improve efficiencies and gives
 ROI."
        />
      </div>
      <SectionHeader title="An Overview On  " cTitle="BPAAS Vendora" />
      <div className="pb-10">
        <VendorSlide />
      </div>
    </div>
  );
}

export default BpaasVendora;
