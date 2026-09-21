import React, { useState } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";
import { Routes } from "@/utils/constants";
import Link from "next/link";
import RequestDemo from "./models/RequestDemo";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Footer = () => {
  const [requestDemoOpen, setRequestDemoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      setLoading(true);
      const res = await fetch("/api/sendFooterEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("Email received. We'll contact you shortly.");
        setEmail("");
      } else {
        setStatus("Failed to send email.");
      }
      setLoading(false);
    } catch {
      setStatus("Error sending email.");
    }
  };
  return (
    <footer
      style={{ fontFamily: "var(--font-inter)" }}
      className="bg-[#0e0e0e] border-t-[0.4px]  border-[#ffffff32] text-gray-300 py-12 px-6 md:px-16 lg:px-24 mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link href={Routes.HOME}>
              <Image
                src="/images/bpaas-logo.svg"
                alt="BPAAS Logo"
                width={200}
                height={40}
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            We are your IT consulting partner to accelerate your company’s
            growth and success. BPAAS creates a secure and easy-to-access
            channel.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://www.linkedin.com/company/bpaas-solutions-pvt-ltd/?viewAsMember=true"
              target="__blank"
              className="hover:text-white transition "
            >
              <FaLinkedin size={35} />
            </Link>
          </div>
          <div></div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={Routes.HOME} className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => setRequestDemoOpen(true)}
            >
              Request Demo
            </li>
            <li>
              <Link
                href={Routes.CLIENT_PAGE}
                className="hover:text-white transition"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                href={Routes.COMPANY_COMP}
                className="hover:text-white transition"
              >
                Company
              </Link>
            </li>
            {/* <li>
              <Link
                href={Routes.CONTACT_US}
                className="hover:text-white transition"
              >
                Become Partner
              </Link>
            </li> */}
            <li>
              <Link
                href={Routes.CONTACT_US}
                className="hover:text-white transition"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href={Routes.COOKIE_POLICY}
                className="hover:text-white transition"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              <a
                href="mailto:sales@bpaassolutions.com"
                className="hover:text-white transition"
              >
                sales@bpaassolutions.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaPhone className="mt-1" />
              <a
                href="tel:+917503264677"
                className="hover:text-white transition"
              >
                +91-7503264677
              </a>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" /> BPAAS Solutions Private
              Limited,
              <br /> Unit 601 & 602, Vipul Square, Sushant Lok Phase 1,
              Gurugram, Haryana 122009
            </li>
          </ul>

          {/* Email input */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm mx-auto flex gap-4 mt-4"
          >
            {status ? (
              <input
                type="text"
                value={status}
                readOnly
                className="w-full px-4 py-2 rounded bg-transparent border border-gray-800 text-white text-sm focus:outline-none "
              />
            ) : (
              <input
                type="email"
                placeholder="Enter Email..."
                className="w-full px-4 py-2 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ec964c]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            <button
              type="submit"
              disabled={!!status}
              className={`bg-[#ec964c] ${
                status && "bg-gray-800 hover:bg-gray-800 cursor-default"
              } text-white px-4  rounded hover:bg-[#ff7700f3] cursor-pointer transition-all duration-150 ease-in-out`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                <div>{status ? <IoCheckmarkDoneOutline /> : <p>Submit</p>}</div>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between  text-sm text-gray-500">
        <p>© 2025 BPAAS Solutions Pvt. Ltd. | All Rights Reserved</p>
        <Link
          href={Routes.PRIVACY_POLICY}
          className="hover:text-white mt-2 whitespace-normal text-[#ec974c8f] md:text-gray-500"
        >
          Privacy Policy
        </Link>
      </div>
      <RequestDemo
        open={requestDemoOpen}
        onClose={() => setRequestDemoOpen(false)}
      />
    </footer>
  );
};

export default Footer;
