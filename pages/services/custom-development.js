import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";

function CustomDevelopment() {
  return (
    <div>
      <TopBanner
        image={"/images/service1.png"}
        title="Custom Development"
        discription="BPAAS is equipped with the capability of delivering complex and high standard custom developed applications, portals and solutions etc."
      />
      <SectionHeader title="What we do is Custom " cTitle="Web Development ?" />
      {/* <hr className="pb-2 pt-0 rounded-4xl border-t-4 w-3/5 m-auto" /> */}
      <div className="py-0 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 pb-10">
          {/* <div>
            <span className="text-gray-600 text-lg font-semibold">Main features</span>
            <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">A technology-first approach to payments <br className="lg:block" hidden/> and finance</h2>
        </div> */}

          <div className=" grid border md:gap-0 gap-6  divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-2 xl:grid-cols-4">
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 border-t-[3px] hover:border-orange">
                <img
                  // src="https://img.freepik.com/free-vector/customer-satisfaction-vector-banner_1325-2767.jpg?w=826"
                  src="/svg/customer-dev.svg"
                  className="w-1/2 mx-auto"
                  width="350"
                  height="350"
                  alt="customer-developement"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Custom Application Development (Bespoke)
                  </h5>
                  <p className="text-sm text-gray-600 text-justify font-medium">
                    BPAAS delivers exact need of the organization and evolve the
                    organization as time passes, with new development. Our team
                    develops solutions as per the business ideas and offers
                    custom solutions across cross-platforms, browsers and
                    operating systems for consistent revenue.
                  </p>
                </div>
                {/* <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a> */}
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 border-t-[3px] hover:border-orange">
                <img
                  // src="https://img.freepik.com/free-vector/customer-satisfaction-vector-banner_1325-2767.jpg?w=826"
                  src="/svg/software-dev.svg"
                  className="w-1/2 mx-auto"
                  width="350"
                  height="350"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Software Product Development
                  </h5>
                  <p className="text-sm text-gray-600 text-justify font-medium">
                    Software has become a part of our existence and every
                    organization needs to develop software which meet their
                    business requirements and processes. BPAAS provides
                    strategic plan of development, robust backend services and
                    interactive UI and shares experience of BPAAS Software
                    development journey.
                  </p>
                </div>
                {/* <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a> */}
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 border-t-[3px] hover:border-orange">
                <img
                  // src="https://img.freepik.com/free-vector/customer-satisfaction-vector-banner_1325-2767.jpg?w=826"
                  src="/svg/application-maintenance.svg"
                  className="w-1/2 mx-auto"
                  width="350"
                  height="350"
                  alt="burger illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Application Maintenance
                  </h5>
                  <p className="text-sm text-gray-600 text-justify font-medium leading-6">
                    With experience on managing BPAAS Solutions and custom
                    application development, we at BPAAS complement business
                    needs of application maintenance, reengineering, redesigning
                    and maintaining application to remain high-performing and
                    efficient.
                  </p>
                </div>
                {/* <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a> */}
              </div>
            </div>
            <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8 border-t-[3px] hover:border-orange">
                <img
                  // src="https://img.freepik.com/free-vector/customer-satisfaction-vector-banner_1325-2767.jpg?w=826"
                  src="/svg/app-integration.svg"
                  className="w-1/2 mx-auto "
                  width="350"
                  height="350"
                  alt="app-integration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
                    Application Integration
                  </h5>
                  <p className="text-sm text-gray-600 text-justify font-medium leading-6">
                    BPAAS offers integration services to customers for their
                    existing or new applications to keep business updated and
                    running. Our experience of integrating BPAAS Solutions with
                    ERPs, Custom Apps and other applications make us to offer
                    the best integration services for your custom apps.
                  </p>
                </div>
                {/* <a href="#" className="flex justify-between items-center group-hover:text-yellow-600">
                        <span className="text-sm">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
                    </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100">
        <SectionHeader title="Models to " cTitle=" Deliver" />
        {/* <hr className="pb-2 pt-0 rounded-4xl border-t-4 w-52 m-auto" /> */}
      </div>

      <div className=" bg-slate-100">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-10 px-12 pb-12 pt-6 sm:p-6 lg:pb-24 justify-center items-center">
            <div className="relative">
              <div className="bg-blue-300 w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Fixed Price Model
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  {/* <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p> */}
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Scope Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Timelines Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Milestone Based Delivery </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-400 w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Hire Team
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  {/* <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p> */}
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Dedicated Resources </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Monthly Billing</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Resource Ramp up/down</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-orange w-72 h-60 rounded-lg mx-auto">
                <div className="bg-white w-72 h-60 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className="m-4 text-lg md:text-2xl font-bold">
                    Managed Services
                  </h1>
                  <hr className="m-4 rounded-2xl border-t-4" />
                  {/* <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p> */}
                  <ul className="list-none hover:list-disc ml-6 px-2">
                    <li className="font-medium">Scope Finalization </li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">BPAAS Value Addition</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                    <li className="font-medium">Dedicated/Shared Team</li>
                    <hr className="pb-2 rounded-2xl border-t-1" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomDevelopment;
