import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import Image from "next/image";
import ServiceCard from "../../components/services/ServiceCard";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import StripBanner from "../../components/common/StripBanner";

function BpaasProqure() {
  return (
    <div id="creation">
      <TopBanner
        image={"/images/proqure-banner.png"}
        title="BPAAS Proqure"
        discription="BPAAS Proqure provides automation of RFQ Generation/Approval, RFQ/RFP release to multiple
        vendors, capture Vendor Responses, Comparative Analysis of Quotes, Purchase Order Generation,
        and Purchase Requisition. It delivers open APIs for integration with back-end ERP systems"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center py-10 lg:gap-20 gap-6 container-bpaas mx-auto">
        <div className="leading-loose px-8 ">
          {/* <h1 className="md:text-4xl text-3xl font-bold ">
            Welcome To <b className="text-orange">BPAAS</b> Proqure
          </h1> */}
          <p className="md:text-base text-justify text-xs leading-loose py-8 font-medium">
            {" "}
            BPAAS Proqure is a digital procurement solution which allows your
            procurement team or employees to request a purchase from virtually
            anywhere. This solution provides an organization with set of
            functionalities to support the procurement of goods and services.
            The solution brings transparency across your organization, reduces
            costs and improves operations efficiency. The solution gives your
            vendors/partners ease to bid, ease to query and follow compliances
            as desired by your organization. Proqure reporting platform provides
            management for single view of purchases completed, purchases
            pending, purchases in-progress with statuses, spend analytics,
            vendors selected etc. The reporting platform provides useful
            information which helps organization to take decisions and decide
            future road map of procurement in the organization. BPAAS Proqure
            solution can be deployed on data center servers or on hosted cloud
            or can be provided as SAAS platform.
          </p>
        </div>
        <div className="px-8">
          <img
            src="/images/proqure.png"
            // width={800}
            // height={800}
            alt="proqure"
            className="object-cover"
          />
        </div>
      </div>

      <div id="release">
        <StripBanner
          image={"/images/bg-ourmission.png"}
          title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning."
        />
      </div>
      <div className="container-bpaas mx-auto px-8 pt-6 pb-10">
        <SolutionLeft
          img={"/images/services/prequre-1.png"}
          title="Purchase Requisition
 Simplified"
          discription="Every organization needs to raise
 requisition to procure material and
 need faster way to get approvals.
 With BPAAS requisition module
 in place, the purchasing
 department can raise request
 with necessary documentation
 for approvals and procurement."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/prequre-2.png"}
          title="Smooth Quotation
  Process"
          discription="Traditional approach to quotation
  management can be a complex &
  error-prone process leading to loss
  of business. RFQs, RFPs, and RFIs
  can be raised to vendors and can
  enable vendors to submit
  quotations and other documents
  digitally through BPAAS Proqure."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/prequre-3.png"}
          title="Easy Integrations"
          discription="Procurement Systems need
 information from ERP Systems to
 ensure organization is not doing a lot of
 buying and spending. BPAAS
 Proqure delivers API which can be
 integrated with downstream and
 upstream applications to ensure
 data transparency and helps
 purchasing managers to take
 approval decisions."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/prequre-4.png"}
          title="Solution Extension"
          discription="BPAAS Proqure solution can be
  integrated with other BPAAS
  Solutions which can deliver
  functionalities of Vendor
  Management and Purchase Order
 Einvoicing. "
        />
      </div>
    </div>
  );
}

export default BpaasProqure;
