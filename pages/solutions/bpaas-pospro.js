import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import Image from "next/image";
import ServiceCard from "../../components/services/ServiceCard";
import SolutionRight from "../../components/common/SolutionRight";
import SolutionLeft from "../../components/common/SolutionLeft";
import StripBanner from "../../components/common/StripBanner";
import PosProSlide from "../../components/common/SolutionSlider/PosProSlide";
function BpaasPospro() {
  return (
    <div>
      <TopBanner
        image={"/images/pospro-banner.png"}
        title="BPAAS PosPro"
        discription="Manage Your Sales, All From One Platform"
      />
      <div className="grid grid-row lg:grid-cols-2 lg:px-20 py-10 justify-center items-center gap-16">
        <div className="px-8">
          {/* <div className="md:text-4xl text-3xl text-black font-bold">
            Welcome to <b className="text-orange">BPAAS</b> PosPro
          </div> */}
          <p className="md:text-base text-justify text-xs leading-loose py-2 font-medium">
            BPAAS PosPro is point of sale solution which delivers
            functionalities related to billing, inventory, promotions, site
            management and employee management. The solution has been designed
            to manage and grow your business. The inventory management module
            ensures to maintain inventory for multiple site and triggers alert
            when inventory drops from threshold level defined in the system. It
            offers a total solution that will improve efficiency and performance
            of any business. The reporting dashboards provides analysis of
            performance of your site, stock and employees. The solution can be
            deployed on hosted cloud or is available as SAAS platform. It can be
            integrated with any back end ERPs for further processing of the data
            which has been captured during the day transactions.
          </p>
        </div>
        <div className="px-8">
          <Image height={850} width={850} alt="" src="/images/pos-pro.png" />
        </div>
      </div>

      <StripBanner
        image={"/images/bg-ourmission.png"}
        title="Start Your Smooth Journey With Our Innovative And Advanced Approach For Seamless Functioning."
      />

      <div className="container-bpaas mx-auto px-8">
        <SolutionLeft
          img={"/images/services/pospro-1.png"}
          title="Usability & Design
 Modern User Interface"
          discription="Platform is easier for your staff
 to use and gives better experience
 to the guests. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/pospro-2.png"}
          title="Point of Sale
 Speed is everything"
          discription="The process of selling at point of
 sale need to be fast with minimal
 clicks so that focus remains on
 guest then to POS system. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/pospro-3.png"}
          title="Groups and Franchises
 Multi-Locations?"
          discription="If you plan to have multi-locations
 for your park, our platform
 delivers functionality of multi-
 locations. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/pospro-4.png"}
          title="Reporting & Analytics
 Modern Dashboards"
          discription="Platform delivers reporting which
 helps you in analyzing daily or
 monthly sales for multi locations. "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionLeft
          img={"/images/services/pospro-5.png"}
          title="Waivers
 Discount Codes"
          discription="Functionality of applying discounts
 during sales is flexible and
 customizable and publish
 with ease.  "
        />
        <hr className="h-[2px] bg-black mx-auto" />
        <SolutionRight
          img={"/images/services/pospro-6.png"}
          title="Stock Control
 Inventory Management"
          discription="Ensure you have the right
 stock levels at any time, and
 update with ease. "
        />
      </div>
      {/* Strip Banner */}

      {/* Components 4 */}
      <SectionHeader title="An Overview On " cTitle=" BPAAS PosPro" />
      <div className="pb-10">
        <PosProSlide />
      </div>
    </div>
  );
}

export default BpaasPospro;
