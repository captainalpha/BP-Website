import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import Image from "next/image";
import ServiceCard from "../../components/services/ServiceCard";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import StripBanner from "../../components/common/StripBanner";
import InvoicerSlide from "../../components/common/SolutionSlider/InvoicerSlide";
function BpaasInvoicer() {
  return (
    <div>
      <TopBanner
        image={"/images/Invoicerbanner.png"}
        title="BPAAS Invoicer"
        discription="E-Invoicing - Upload, Auto-reconciliation, Data validation and tracking through BPAAS Invoicer"
      />

      <div className="grid grid-row lg:grid-cols-2 lg:px-20 py-10 md:justify-center items-center gap-16">
        <div className="px-8">
          {/* <div className="md:text-4xl text-3xl text-black font-bold">
            Welcome to <b className="text-orange">BPAAS</b> Invoicer
          </div> */}
          <p className="md:text-base text-justify text-xs leading-loose py-2 font-medium">
            BPAAS Invoicer is a dependable and cost effective solution which
            delivers E-invoicing feature as per GST guidelines. E-invoicing is
            an invoicing process under GST regime in which all organizations are
            required to generate E-invoice number and bar code by uploading
            invoices in IRP portal. BPAAS Invoicer provides portal integrated
            with IRP portal and provides functionality of picking invoice data
            from back-end ERP and uploading data in IRP portal and then generate
            invoice copy in required format. The solution has mass upload
            functionality where users can mass upload invoices in portal for
            further processing. BPAAS Invoicer has a dashboard which show cases
            real time data of invoice upload and generation from GST portal.
            BPAAS Invoicer can be deployed on premise data center or hosted
            cloud or can be provided as SAAS platform.
          </p>
        </div>
        <div className="px-8 mx-auto">
          <img
            // height={600}
            // width={600}
            alt=""
            className="mx-auto object-cover"
            src="/images/invoicerfeature.png"
          />
        </div>
      </div>

      <StripBanner
        image={"/images/bg-ourmission.png"}
        title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning."
      />

      <div className="container-bpaas mx-auto px-8">
        <SolutionLeft
          img={"/images/services/invoicer-1.png"}
          title="Upload e-Invoice Directly"
          discription="Directly upload multiple invoice
 to IRP through GSTN portal
 without visiting any other sources
 & instantly file GST returns."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/invoicer-2.png"}
          title="Auto - Reconciliation"
          discription="Upload B2B transaction invoices
 on GSTN portal electronically &
 the details will get auto -
 populated in GST ANX - 1 &
 GST ANX - 2."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/invoicer-3.png"}
          title="Advance Data Validation"
          discription="Marg ERP automaticlly validates
 your data to identify errors,
 violations, incorrect entries &
 missing mandatory fields to ensure
 100% compliance of legal
 accuracy."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/invoicer-4.png"}
          title="Generation of QR Code"
          discription="Generate QR code to provide
 information about a particular
 invoice in a quick manner,
 without retrieving from any
 external sources."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/invoicer-5.png"}
          title="E-way Bill Generation"
          discription="Generate & Directly upload single
 / Bulk E-way bill with JSON file
 on the portal & reconcile
 automatically."
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/invoicer-6.png"}
          title="Track e-Invoices"
          discription="Generate, print & track e-invoice
 in real - time as per the proposed
 format. Get end - to - end
 assistance for filing GST returns."
        />
      </div>
      {/* Strip Banner */}

      {/* Components 4 */}
      <SectionHeader title="An Overview On  " cTitle="BPAAS Invoicer" />
      <div className="pb-10">
        <InvoicerSlide />
      </div>
    </div>
  );
}

export default BpaasInvoicer;
