import React from "react";
import {
  FaCheckCircle,
  FaProjectDiagram,
  FaRegHandshake,
  FaUserCheck,
} from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdOutlineSpeed,
  MdPeopleAlt,
} from "react-icons/md";
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaUsers,
} from "react-icons/fa";
import { PiHandshakeLight } from "react-icons/pi";
import Link from "next/link";
import { Routes } from "@/utils/constants";

const ResourceAugmentation = () => {
  return (
    <div>
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
          <source src="/images/Resource Augmentation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex justify-between items-center px-6 md:px-20 h-full text-white">
          <div className="bg-[#ffffff16] shadow backdrop-blur-xs p-8 flex flex-col items-center justify-center">
            <h1 className="md:text-6xl text-3xl text-center  font-bold text-[#ec964d]">
              Augment Your Team with Top-Tier Tech Talent
            </h1>
            <p className="md:text-xl  text-center mt-4 max-w-xl text-white">
              Supercharge your project delivery by hiring skilled developers,
              designers, and engineers on your terms. Fast, flexible, and
              scalable.
            </p>
          </div>
        </div>
      </div>
      {/* Why Teams Trust BPAAS for Resource Augmentatio */}
      <section className="p-1 md:p-8 mt-8">
        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#eb964c] mb-16">
            Why Teams Trust <span className="text-[#639fcb]">BPAAS</span> for
            Resource Augmentation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-[#161a23] shadow-lg p-6 flex gap-4 items-start border border-[#1D3A52] ">
              <FaUserCheck className="text-[#eb964c] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Vetted Experts Only
                </h4>
                <p className="text-sm text-gray-300">
                  Gain access to pre-screened developers with proven experience
                  and domain expertise.
                </p>
              </div>
            </div>

            <div className="bg-[#161a23] shadow-lg p-6 flex gap-4 items-start border border-[#1D3A52] ">
              <MdPeopleAlt className="text-[#eb964c] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Full Control & Transparency
                </h4>
                <p className="text-sm text-gray-300">
                  You manage the team. We provide the resources, support, and
                  visibility you need.
                </p>
              </div>
            </div>

            <div className="bg-[#161a23] shadow-lg p-6 flex gap-4 items-start border border-[#1D3A52] ">
              <PiHandshakeLight className="text-[#eb964c] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Flexible Engagement Models
                </h4>
                <p className="text-sm text-gray-300">
                  Scale your team up or down as your project evolves—zero
                  long-term commitments.
                </p>
              </div>
            </div>

            <div className="bg-[#161a23] shadow-lg p-6 flex gap-4 items-start border border-[#1D3A52] ">
              <MdOutlineAttachMoney className="text-[#eb964c] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Cost-Effective & Efficient
                </h4>
                <p className="text-sm text-gray-300">
                  Save up to 50% on hiring costs without compromising on
                  quality.
                </p>
              </div>
            </div>

            <div className="bg-[#161a23] shadow-lg p-6 flex gap-4 items-start border border-[#1D3A52] ">
              <MdOutlineSpeed className="text-[#eb964c] text-3xl" />
              <div>
                <h4 className="font-semibold text-lg text-white">
                  Fast Deployment
                </h4>
                <p className="text-sm text-gray-300">
                  Get skilled professionals onboarded within days, not weeks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Models Section */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#eb964c] mb-4">
            Choose the Model That Fits Your Needs
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">
            From solo specialists to full project teams—pick what works for your
            business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#161a23] border border-[#2D4A66] shadow-md p-8">
              <FaRegHandshake className="text-[#eb964c] text-4xl mb-4" />
              <h4 className="font-semibold text-xl mb-2 text-white">
                Dedicated Team
              </h4>
              <p className="text-gray-300 text-sm">
                A full-fledged remote team working exclusively for you. Ideal
                for long-term, evolving projects.
              </p>
            </div>

            <div className="bg-[#161a23] border border-[#2D4A66] shadow-md p-8">
              <MdPeopleAlt className="text-[#eb964c] text-4xl mb-4" />
              <h4 className="font-semibold text-xl mb-2 text-white">
                Individual Resources
              </h4>
              <p className="text-gray-300 text-sm">
                Hire a single developer, designer, or QA expert to plug into
                your existing workflow.
              </p>
            </div>

            <div className="bg-[#161a23] border border-[#2D4A66] shadow-md p-8">
              <FaProjectDiagram className="text-[#eb964c] text-4xl mb-4" />
              <h4 className="font-semibold text-xl mb-2 text-white">
                Project Outsourcing
              </h4>
              <p className="text-gray-300 text-sm">
                Let us handle your complete project delivery—from strategy to
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=" text-white px-6 md:px-20 py-16 space-y-24">
        {/* SECTION 1 – How It Works */}
        <section
          id="howItWorks"
          className="flex items-center flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#eb964c] ">
            A Seamless Hiring Journey Designed Around You
          </h2>

          <p className="mt-4 text-lg text-gray-300 max-w-3xl text-center">
            We understand that time, quality, and alignment are critical when
            you’re scaling your team. That’s why our resource augmentation
            process is built to be lean, transparent, and outcome-driven. From
            understanding your needs to integrating top-tier talent into your
            team, we ensure every step is smooth, strategic, and stress-free.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-[#161a23] p-6 border border-gray-700">
              <h4 className="text-xl font-semibold  mb-2">
                Discovery & Consultation
              </h4>
              <p className="text-gray-400 text-sm">
                We begin with a deep dive into your project goals, technical
                needs, and ideal candidate profiles. This helps us tailor a
                perfect match for your culture and requirements.
              </p>
            </div>

            <div className="bg-[#161a23] p-6 border border-gray-700">
              <h4 className="text-xl font-semibold  mb-2">
                Talent Identification & Shortlisting
              </h4>
              <p className="text-gray-400 text-sm">
                Based on your needs, we screen and select from our curated pool
                of professionals. Every candidate is evaluated for skills,
                experience, and communication.
              </p>
            </div>

            <div className="bg-[#161a23] p-6 border border-gray-700">
              <h4 className="text-xl font-semibold  mb-2">
                Interviews & Selection
              </h4>
              <p className="text-gray-400 text-sm">
                You review the shortlisted profiles, conduct interviews, and
                select the best-fit candidates. You stay in control while we
                handle the sourcing.
              </p>
            </div>

            <div className="bg-[#161a23] p-6 border border-gray-700">
              <h4 className="text-xl font-semibold  mb-2">
                Onboarding & Integration
              </h4>
              <p className="text-gray-400 text-sm">
                Our team ensures a fast and smooth onboarding process—setting up
                tools, timelines, and communication channels so your resource is
                fully productive from day one.
              </p>
            </div>

            <div className="bg-[#161a23] p-6 border border-gray-700 md:col-span-2">
              <h4 className="text-xl font-semibold  mb-2">
                Support, Monitoring & Scaling
              </h4>
              <p className="text-gray-400 text-sm">
                Post-deployment, we stay involved to track performance, resolve
                blockers, and help you scale up or down based on your changing
                priorities.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 – Talent Pool */}
        <section
          className="flex items-center flex-col justify-center"
          id="talentPool"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#eb964c]">
            Access a Deep Network of Specialized Talent
          </h2>

          <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl">
            At BPAAS, we don’t just provide people—we deliver specialized
            professionals equipped with the exact skills your project needs.
            Whether you’re building a web app, launching a mobile product,
            migrating to the cloud, or running data science experiments, we’ve
            got you covered.
          </p>

          <p className="mt-4 text-gray-400 text-sm">
            Our talent pool is global, diverse, and vetted for technical
            mastery, soft skills, and agile mindset. You choose the skills; we
            bring the experts.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaLaptopCode className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Frontend Technologies
                </h5>
              </div>
              <ul className=" space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  React
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Angular
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Vue
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Next.js
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  HTML5
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Tailwind CSS
                </li>
              </ul>
            </div>

            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaServer className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Backend Frameworks
                </h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Node.js
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Spring Boot
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Django
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Laravel
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  .NET Core
                </li>
              </ul>
            </div>

            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaMobileAlt className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Mobile Development
                </h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Flutter
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  React Native
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Swift
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Kotlin
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Native iOS/Android
                </li>
              </ul>
            </div>

            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaCloud className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Cloud & DevOps
                </h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  AWS
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  GCP
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Azure
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Docker
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Kubernetes
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  GitHub Actions
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Terraform
                </li>
              </ul>
            </div>

            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaDatabase className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Data & AI/ML
                </h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  MySQL
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  PostgreSQL
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  MongoDB
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  TensorFlow
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Power BI
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Python (pandas, scikit-learn)
                </li>
              </ul>
            </div>

            <div className="bg-[#161a23] p-5 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <FaUsers className="text-[#eb964c] w-5 h-5" />
                <h5 className="text-[#639fcb] text-md font-semibold">
                  Other Key Roles
                </h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  UI/UX Designers
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  QA Testers (Manual & Automation)
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Scrum Masters & Product Owners
                </li>
                <li>
                  <FaCheckCircle className="inline w-4 h-4 text-green-600 mr-2" />
                  Tech Leads & Solution Architects
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* CTS */}
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

export default ResourceAugmentation;
