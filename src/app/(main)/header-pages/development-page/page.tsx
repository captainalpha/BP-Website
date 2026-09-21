import React from "react";
import Link from "next/link";
import { Routes } from "@/utils/constants";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import SmartImage from "@/components/ui/SmartImage";

const Development = () => {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div
        id="testimonies"
        className="relative md:h-[86vh] h-[34vh] w-full overflow-hidden"
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/developmentPage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex justify-between items-center px-6 md:px-20 h-full text-white">
          <div className="bg-[#1818183e] shadow backdrop-blur-xs p-8 flex flex-col items-center justify-center">
            <h1 className="md:text-6xl text-3xl text-center  font-bold text-[#ec964d]">
              Bespoke Software Built for Your Unique Business Needs
            </h1>
            <p className="md:text-xl  text-center mt-4 max-w-xl text-white">
              At BPAAS, we excel in delivering complex, high-standard custom web
              and mobile applications, portals, and integrated
              solutions—designed precisely for your business goals.
            </p>
          </div>
        </div>
      </div>

      <section id="section-one" className="w-full px-6 md:px-16 py-20 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ec964c] text-center mb-4">
            What We Do in Custom Web & App Development?
          </h2>
          <p className="text-lg text-center text-gray-400 max-w-3xl mx-auto mb-16">
            From building tailored digital solutions to maintaining and
            integrating them across your systems, we deliver software that
            performs, scales, and grows with your business.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <CardSpotlight className=" p-6 rounded-2xl border flex flex-col items-center justify-center border-[#1D3A52] shadow-md">
              <SmartImage
                src="/images/icons/customer-dev.svg"
                alt=""
                width={130}
                height={130}
                className="object-contain"
              />
              <h3 className="text-xl font-bold relative z-20 mt-2 ">
                Custom Application Development (Bespoke)
              </h3>
              <p className="text-gray-300 text-center relative z-20 text-sm">
                BPAAS delivers exact need of the organization and evolve the
                organization as time passes, with new development. Our team
                develops solutions as per the business ideas and offers custom
                solutions across cross-platforms, browsers and operating systems
                for consistent revenue.
              </p>
            </CardSpotlight>

            <CardSpotlight className=" p-6 rounded-2xl border flex flex-col items-center justify-center border-[#1D3A52] shadow-md">
              <SmartImage
                src="/images/icons/software-dev.svg"
                alt=""
                width={130}
                height={130}
                className="object-contain"
              />
              <h3 className="text-2xl font-semibold relative z-20 mb-3 ">
                Software Product Development
              </h3>
              <p className="text-gray-300 text-center relative z-20 text-sm">
                Software has become a part of our existence and every
                organization needs to develop software which meet their business
                requirements and processes. BPAAS provides strategic plan of
                development, robust backend services and interactive UI and
                shares experience of BPAAS Software development journey.
              </p>
            </CardSpotlight>

            <CardSpotlight className=" p-6 rounded-2xl border flex flex-col items-center justify-center border-[#1D3A52] shadow-md">
              <SmartImage
                src="/images/icons/application-maintenance.svg"
                alt=""
                width={130}
                height={130}
                className="object-contain"
              />
              <h3 className="text-2xl font-semibold relative z-20 mb-3 ">
                Application Maintenance
              </h3>
              <p className="text-gray-300 relative text-center z-20 text-sm">
                With experience on managing BPAAS Solutions and custom
                application development, we at BPAAS complement business needs
                of application maintenance, reengineering, redesigning and
                maintaining application to remain high-performing and efficient.
              </p>
            </CardSpotlight>

            <CardSpotlight className=" p-6 rounded-2xl border flex flex-col items-center justify-center border-[#1D3A52] shadow-md">
              <SmartImage
                src="/images/icons/app-integration.svg"
                alt=""
                width={130}
                height={130}
                className="object-contain"
              />
              <h3 className="text-2xl relative z-20 font-semibold mb-3 ">
                Application Integration
              </h3>
              <p className="text-gray-300 relative text-center z-20 text-sm">
                BPAAS offers integration services to customers for their
                existing or new applications to keep business updated and
                running. Our experience of integrating BPAAS Solutions with
                ERPs, Custom Apps and other applications make us to offer the
                best integration services for your custom apps.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </section>

      <section id="section-tow" className="w-full px-6 md:px-16 py-20  text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Choose the{" "}
            <span className="text-[#ec964c]">Right Engagement Model</span>
          </h2>
          <p className="text-lg text-center relative z-20 text-gray-400 max-w-3xl mx-auto mb-16">
            Whether you&#39;re launching a one-time build or managing a long-term
            roadmap, we offer flexible engagement options that suit your pace,
            scope, and priorities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <CardSpotlight className=" p-6 rounded-2xl border border-[#1D3A52] shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 relative z-20">
                Fixed Price
              </h3>
              <p className="text-gray-300 relative z-20 text-sm">
                Ideal for well-defined projects. We finalize scope and timelines
                upfront, then deliver based on milestones—ensuring
                predictability and accountability.
              </p>
            </CardSpotlight>

            <CardSpotlight className=" p-6 rounded-2xl border border-[#1D3A52] shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 relative z-20">
                Hire a Dedicated Team
              </h3>
              <p className="text-gray-300 relative z-20 text-sm">
                Need ongoing development? Scale with our dedicated experts,
                billed monthly. Ramp team size up or down as your project
                evolves.
              </p>
            </CardSpotlight>

            <CardSpotlight className=" p-6 rounded-2xl border border-[#1D3A52] shadow-sm">
              <h3 className="text-2xl font-semibold mb-2 relative z-20">
                Managed Services
              </h3>
              <p className="text-gray-300 relative z-20 text-sm">
                A hybrid model: we finalize scope together, bring in BPAAS
                expertise, and support with dedicated or shared teams—complete
                with oversight and value-add.
              </p>
            </CardSpotlight>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-16 py-20 bg-[#0a1b2a81] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#eb964c]">Scale Smarter</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Start your journey with BPAAS today. Get matched with top-tier
            talent and build your dream team without the traditional overhead.
          </p>

          <Link
            href={Routes.CONTACT_US}
            className="px-8 py-3 text-sm cursor-pointer font-medium bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-200"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Development;
