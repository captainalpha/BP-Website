import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import Image from "next/image";
import ServiceCard from "../../components/services/ServiceCard";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import StripBanner from "../../components/common/StripBanner";
import BillSmart from "../../components/common/SolutionSlider/BillSmart";

function BpaasBillsmart() {
  return (
    <div>
      <TopBanner
        image={"/images/bpass-billsmart-banner.png"}
        title="BPAAS BillSmart"
        discription="Digitize Account Payables to control, optimize and reduce spend with intuitive solutions of BPAAS BillSmart"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center py-10 gap-16 container-bpaas mx-auto">
        <div className="leading-loose px-8">
          {/* <h1 className="md:text-4xl text-3xl font-bold ">
            {" "}
            Welcome to <b className="text-orange">BPAAS</b> BillSmart
          </h1> */}
          <p className="md:text-base text-justify text-xs leading-loose py-8 font-medium">
            {" "}
            BPAAS BillSmart solution delivers functionality of Accounts Payable.
            It provides functionality by which payables processes are handled
            digitally by using BPAAS solutions, rather than manually. BillSmart
            revolutionizes the way businesses process and pay their invoices.
            The solution covers receipt of invoices through different channels
            like email, by hand, and by vendor portal. Once invoices have been
            received, BPAAS integrated extraction engine runs OCR on these
            invoices to extract data and pushes invoices in to workflow system
            of BillSmart for further approvals. The system can be integrated
            with back end ERP’s for validations and other checks related to
            2-way or 3-way matches. The solution delivers improved efficiency,
            increased accuracy and adhere to compliances of the organization.
            The ROI of this solution reduced invoice processing cost, fewer
            vendor queries and increase chances of early payment discounts.
          </p>
        </div>
        <div className="px-8">
          <img
            src="/images/billsmart.png"
            // width={800}
            // height={800}
            alt="billsmart"
            className="object-fit"
          />
        </div>
      </div>

      <div>
        <StripBanner
          image={"/images/bg-ourmission.png"}
          title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning."
        />
      </div>
      <div className="container-bpaas mx-auto px-8 ">
        <SolutionLeft
          img={"/images/services/processing.png"}
          title="Processing"
          discription="Automate processing of the invoices
 from suppliers by using BPAAS
 BillSmart. Get 2-way & 3-way
 matching automated. PO and no
 PO Invoices approval workflow
 configurable with validation and
 checks for capturing duplicate and
 wrong invoicing."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/seamless.png"}
          title="Seamless Integration"
          discription="BPAAS BillSmart delivers open API
 which can be integrated with
 downstream applications for
 accounting and payments.  The
 upstream applications can push
 data or provide view access to
 BillSmart through various
 integration methods. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/implementation.png"}
          title="Implementation
 Ease & Speed"
          discription="BPAAS BillSmart can digitize AP
 process within days not even
 months. Our experienced team
 ensures solution delivers what is
 expected and solution shows
 results as soon as first invoice lot
 is uploaded."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/impowered.png"}
          title="Empowered AP Team"
          discription="An automated AP process reduces
 transactional costs, provides real
 time reporting and areas which
 need attention for faster processing
 of payments. The solution builds
 goodwill with your vendors with
 faster payments and faster
 resolution to invoicing issues. "
        />
      </div>
      <SectionHeader title="An Overview On  " cTitle="BPAAS Billsmart" />
      <div className="pb-10">
        <BillSmart />
      </div>
    </div>
  );
}

export default BpaasBillsmart;
