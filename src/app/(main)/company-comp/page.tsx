import CardSwap, { Card } from "@/components/animations/CardSwap";
import { TimelinePage } from "@/components/home/dark/Timeline";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import React from "react";

const OurJourney = () => {
  return (
    <div style={{ fontFamily: "var(--font-inter)" }}>
      <div className="overflow-hidden  ">
        <div
          style={{
            height: "600px",
            position: "relative",
            backgroundImage:
              "url('https://ik.imagekit.io/bpaas/Untitled%20design%20(1).png?updatedAt=1757937204830')",
          }}
        >
          <div className="md:w-1/2 md:h-[500px] flex flex-col justify-center p-3 md:pl-18 ">
            <h1 className="text-5xl md:text-7xl font-bold text-[#ec964d] mb-10">
              Who We Are
            </h1>
            <p className="text-lg">
              At BPAAS Solutions, we empower businesses to evolve faster and
              operate smarter. With deep domain expertise and advanced
              automation technologies, we help organizations streamline
              processes, boost productivity, and unlock real, measurable growth.
            </p>
          </div>
          <CardSwap
            cardDistance={50}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3 className="px-7 py-2">We Have Best Developers At BPAAS</h3>
              <Image
                src={
                  "https://ik.imagekit.io/bpaas/images/modalimage1.png?updatedAt=1751871585343"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
              <Image
                src={
                  "https://ik.imagekit.io/bpaas/images/modalimage2.png?updatedAt=1751871585396"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
            <Card>
              <h3 className="px-7 py-2">We provide Best Services</h3>
              <Image
                src={
                  "https://ik.imagekit.io/bpaas/services-images/Screenshot%202025-08-28%20111913.png?updatedAt=1757937607084"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
              <Image
                src={
                  "https://ik.imagekit.io/bpaas/services-images/Screenshot%202025-08-28%20111913.png?updatedAt=1757937607084"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
            <Card>
              <h3 className="px-7 py-2">We Have Best Solutions</h3>
              <Image
                src={
                  "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(6).png?updatedAt=1756794999832"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
              <Image
                src={
                  "https://ik.imagekit.io/wjx8terl3/solutions-images/image%20(6).png?updatedAt=1756794999832"
                }
                alt="sd"
                height={10000}
                width={10000}
              />
            </Card>
          </CardSwap>
        </div>
      </div>
      <section className="h-fit items-center justify-center flex  pt-16 px-4 md:px-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* BPM Services */}
          <CardSpotlight className="p-6 rounded-2xl border border-[#1D3A52] shadow-sm  mb-20 max-w-5xl mx-auto ">
            <h3 className="text-3xl relative z-20 font-semibold mb-4 text-[#ec964c] border-b border-gray-700 pb-2">
              Who we are ?
            </h3>
            <div className="space-y-4 relative z-20 text-gray-300 text-md leading-relaxed">
              Today, lot of organizations look out for solutions which can
              automate their internal processes and bring higher productivity.
              These organizations can be big or small in revenue but they look
              for partners who can add value to their processes and bring
              automation using their technical strength. Looking at this aspect
              of the clients, BPAAS Solutions was born with a vision of
              developing processes across departments and deliver them as a
              service to the client. Over the period of 4 years, BPAAS has
              developed such solutions related to Supply Chain Management, AI
              Based Extraction, Point of Sale solutions and invoicing solutions.
              The company plans to extend these solutions to clients as a
              service and develop solutions around Supply Chain Management and
              bring automation.
            </div>
          </CardSpotlight>

          {/* RPA Services */}
          <CardSpotlight className="p-6 rounded-2xl border border-[#1D3A52] shadow-sm  mb-20 max-w-5xl mx-auto">
            <h3 className="text-3xl relative z-20 font-semibold mb-4 text-[#ec964c] border-b border-gray-700 pb-2">
              What we do ?
            </h3>
            <div className="space-y-4 relative z-20 text-gray-300 text-md leading-relaxed">
              BPAAS Solutions is in to development of solutions and providing
              services to customers for OEM’s like Newgen & Automation Anywhere.
              The solutions have been developed on Open Source Technologies and
              are available to customers as a service or On-Premise deployment
              at their data centers. BPAAS is also in to providing consulting
              for studying processes and providing optimum solution for
              automation of those processes. We as an organization believe that
              the speed and pace at which technology is growing and bringing
              ways to automate processes for higher productivity, we as an
              organization can provide solutions to customers which have higher
              ROI and reduces burden on internal IT systems.
            </div>
          </CardSpotlight>
        </div>
      </section>
      <div>
        <CardSpotlight className="p-6 rounded-2xl border border-[#1D3A52] shadow-sm  mb-20 max-w-5xl mx-auto ">
          <h3 className="text-3xl relative z-20 font-semibold mb-4 text-[#ec964c] w-full text-center">
            our mission
          </h3>
          <div className="space-y-4 relative text-center z-20 text-gray-300 text-md leading-relaxed">
            BPAAS Solutions logo presents our mission. The blue shows subtlety,
            loyalty and trust towards our customers. It also denotes experience,
            business traditions and values. The orange denotes youthfulness and
            freshness within the organization to deliver best className
            solutions to customers. It talks about the new age team and its
            thought process.
          </div>
        </CardSpotlight>
      </div>
      <TimelinePage />
    </div>
  );
};

export default OurJourney;
