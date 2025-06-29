import SectionHeader from "../../components/common/SectionHeader";
import OEMTopBar from "../../components/common/OEMTopBar";
import OEMSection from "../../components/common/OEMSection";
import Link from "next/link";
import OEMCapabilitiesStudies from "../../components/common/OEMCapabilitiesStudies";
import ContactUs from "../../components/common/ContactUs";
import OEMVendoraOnboarding from "../../components/common/OEMVendoraOnboarding";
import ClientsSlider from "../../components/common/ClientsSlider";
import MasterDataManagement from "../../components/common/MasterDataManagement";

function nTraining() {
  return (
    <div className="overflow-x-hidden">
      <OEMTopBar
        logo={"/images/Newgen-Logo-2022-1536x397.png"}
        heading="Newgen Software"
        sideIMage={"/images/EnterpriseContentManagement.png"}
        targetLink={"https://newgensoft.com/"}
        content={(
          <>
            <span className="text-blue-500 hover:text-primaryText">
              <Link passHref href="https://newgensoft.com/" className='cursor-pointer'>
                Newgen
              </Link> </span>
            is the leading provider of a Low Code Application Platform along with
            Enterprise Content Management and Customer Communication Management Solutions for delivering seamless
            digital transformation for organizations with capabilities to automate business processes.&nbsp;
            <span className="text-blue-500 hover:text-primaryText">
              <Link passHref href="/" className='cursor-pointer'>
                BPAAS Solutions
              </Link> </span>aims to provide you with customer with process automation by reducing
            manual activities and delivering enhanced customer experience.  With low code-based platforms
            for greater efficiency, improved compliance, and scalability.
          </>
        )}
      />
      <OEMSection />
      <section>
        <div className="py-5 lg:py-10 md:py-10 xl:py-10 px-5 md:px-10 flex flex-col justify-center overflow-x-hidden items-center text-center space-y-3 transition-transform transform-gpu hover:scale-105">
          <h1 className="lg:text-4xl text-2xl capitalize font-bold">
            Solution<span className="text-orange"> Details</span>
          </h1>
        </div>
        <OEMCapabilitiesStudies />
        <OEMVendoraOnboarding />
        <MasterDataManagement/>
      </section>
      <section>
        <div className="my-5">
          <h1 className="lg:text-4xl flex justify-center text-2xl capitalize font-bold">
            Our<span className="text-orange">&nbsp;Clients</span>
          </h1>
          <p className="text-[20px] flex justify-center text-center lg:text-justify md:text-justify xl:text-justify mx-5 lg:mx-0 md:mx-0 xl:mx-0 mb-10 mt-4">
            We have joined hands with many to raise the development bars with automation.
          </p>
          <div>
          <ClientsSlider />
          </div>
        </div>
        <ContactUs />
      </section>
    </div>
  );
}

export default nTraining;
