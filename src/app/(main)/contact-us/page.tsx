"use client";

import ClientSectionNew from "@/components/home/dark/Client-saction-new";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiEdit2 } from "react-icons/fi";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { toast } from "react-toastify";

export default function ScheduleCallForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    company: "",
    designation: "",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName: formData.name,
      email: formData.email,
      companyName: formData.company,
      designation: formData.designation,
      phone: formData.phone,
      message: formData.requirements,
    };

    try {
      const res = await fetch("/api/scheduleCall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "+91 ",
          company: "",
          designation: "",
          requirements: "",
        });
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{ fontFamily: "var(--font-inter)" }}
      className="min-h-screen w-full flex flex-col items-center justify-center "
    >
      <div className="relative h-fit  w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/contactusbgver.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex items-center justify-center p-4 w-full ">
          <div className="bg-gradient-to-br h-full rounded-3xl backdrop-blur-xs from-[#020202d5] to-[#140d01de] text-white p-5  shadow-2xl w-full max-w-xl">
            <h1 className="text-4xl font-bold text-center mb-4 text-white">
              Schedule a Call
            </h1>
            <p className="text-center text-gray-400 mb-8">
              Wed love to hear from you! Fill out the form to schedule a demo.
              <br />
              Or call us directly at{" "}
              <span className="text-[#ec964c] font-semibold cursor-pointer">
                <a href="tel:+91-7503264677">+91 7503264677</a>
              </span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative flex ">
                  <FiUser className="absolute top-3 left-4 text-gray-500" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name*"
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff15] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative ">
                  <FiMail className="absolute top-3 left-4 text-gray-500" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Company Email*"
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff15] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="relative ">
                  <FiPhone className="absolute top-3 left-4 text-gray-500" />
                  <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff15] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative ">
                  <PiBuildingOfficeDuotone className="absolute top-3 left-4 text-gray-500" />
                  <input
                    name="company"
                    type="text"
                    placeholder="Company Name*"
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff15] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="relative  md:col-span-2">
                  <FiBriefcase className="absolute top-3 left-4 text-gray-500" />
                  <input
                    name="designation"
                    type="text"
                    placeholder="Designation*"
                    className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff15] border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="relative ">
                <FiEdit2 className="absolute top-3 left-4 text-gray-500" />
                <textarea
                  name="requirements"
                  placeholder="Requirements"
                  className="w-full pl-12 pr-4 py-2 rounded-lg bg-[#ffffff16] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={4}
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white hover:bg-black border border-white hover:text-white text-black px-8 py-2 cursor-pointer hover:scale-105 transition-transform duration-200 shadow-lg flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-screen">
        <ClientSectionNew />
      </div>
    </div>
  );
}
