"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Listbox,
} from "@headlessui/react";
import Stepper, { Step } from "../animations/Stepper";
import { Fragment, useState } from "react";
import { CiCircleCheck, CiCircleChevDown } from "react-icons/ci";
import { toast } from "react-toastify";
import { IoCloseCircle } from "react-icons/io5";

interface RequestDemoProps {
  open: boolean;
  onClose: () => void;
}

const industriesList = [
  "BPAAS Proqure",
  "BPAAS Vendora",
  "BPAAS BillSmart",
  "BPAAS Invoicer",
  "BPAAS SmartEx",
  "BPAAS PosPro",
  "Other",
];

export default function RequestDemo({ open, onClose }: RequestDemoProps) {
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validateStep = (step: number) => {
    const newErrors: { [key: string]: boolean } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (step === 1) {
      if (!companyName) newErrors.companyName = true;
      if (!fullName) newErrors.fullName = true;
      if (!email || !emailRegex.test(email)) newErrors.email = true;
      if (!phone || !phoneRegex.test(phone)) newErrors.phone = true;
    }
    if (step === 2) {
      if (selectedIndustries.length === 0) newErrors.selectedIndustries = true;
      if (!message) newErrors.message = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      fullName,
      email,
      companyName,
      phone,
      message,
      selectedIndustries,
    };

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);
    if (result.success) {
      toast.success("Email sent successfully!");
      setCompanyName("");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSelectedIndustries([]);
      onClose();
    } else {
      toast.error("Failed to send email.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-80">
      <DialogBackdrop
        transition
        className="fixed inset-0  backdrop-blur-md transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full md:items-center justify-center  text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-lg  text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="mt-20 md:mt-0">
              <button
                onClick={onClose}
                className=" md:rounded-l-none rounded-full transition-all duration-150 ease-in-out absolute right-0 md:top-28 hover:text-red-600 cursor-pointer bg-[#13d0f6] text-black  p-2 "
              >
                <IoCloseCircle />
              </button>
              <Stepper
                initialStep={1}
                onStepChange={(step) => {
                  console.log(step);
                }}
                onFinalStepCompleted={handleSubmit}
                backButtonText="Previous"
                nextButtonText="Next"
                canProceed={validateStep}
                nextButtonProps={{
                  disabled: loading,
                  children: loading ? (
                    <span>
                      <svg
                        className="inline mr-2 w-4 h-4 animate-spin text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : undefined,
                }}
              >
                <Step>
                  <div className="space-y-4 px-4 py-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-[#ffffff] font-semibold text-xs uppercase">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`px-4 py-3 bg-[#27272a] rounded-lg mt-1 ${
                          errors.companyName
                            ? "border-2 border-red-500"
                            : "focus:ring-[#3c96e0]"
                        } text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#3c96e0] text-gray-100 placeholder-gray-400 transition-all duration-300`}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[#ffffff] font-semibold text-xs uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`px-4 py-3 bg-[#27272a] rounded-lg mt-1 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#3c96e0] text-gray-100 placeholder-gray-400 transition-all duration-300  ${
                          errors.fullName
                            ? "border-2 border-red-500"
                            : "focus:ring-[#3c96e0]"
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-[#ffffff] font-semibold text-xs uppercase">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`px-4 py-3  ${
                            errors.email
                              ? "border-2 border-red-500"
                              : "focus:ring-[#3c96e0]"
                          } text-sm bg-[#27272a] rounded-lg mt-1 shadow-md focus:outline-none focus:ring-2 focus:ring-[#3c96e0] text-gray-100 placeholder-gray-400 transition-all duration-300`}
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[#ffffff]  font-semibold text-xs uppercase">
                          Phone
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Phone Number"
                          value={phone}
                          onChange={(e) =>
                            setPhone(e.target.value.replace(/[^\d+]/g, ""))
                          }
                          maxLength={15}
                          className={`px-4 py-3  ${
                            errors.phone
                              ? "border-2 border-red-500"
                              : "focus:ring-[#3c96e0]"
                          } text-sm bg-[#27272a] rounded-lg mt-1 shadow-md focus:outline-none focus:ring-2 focus:ring-[#4cbfec] text-gray-100 placeholder-gray-400 transition-all duration-300`}
                        />
                      </div>
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-4 px-4 py-6">
                    <div className="flex flex-col gap-1">
                      <label className="text-[#f3faff] font-semibold text-sm uppercase">
                        Industry
                      </label>
                      <Listbox
                        value={selectedIndustries}
                        onChange={setSelectedIndustries}
                        multiple
                      >
                        <div className="relative mt-1">
                          <Listbox.Button
                            className={`relative w-full  ${
                              errors.selectedIndustries
                                ? "border-2 border-red-500"
                                : "focus:ring-[#3c96e0]"
                            }  cursor-default  bg-[#27272a] rounded-lg mt-1 py-3 pl-4 pr-10 text-left shadow-md focus:outline-none focus:ring-2 focus:ring-[#3c96e0] sm:text-sm transition-all`}
                          >
                            <span className="flex flex-wrap">
                              {selectedIndustries.length > 0 ? (
                                selectedIndustries.map((industry) => (
                                  <span
                                    key={industry}
                                    className="border-[#3c96e0] border-2 text-white rounded-sm px-3 py-1 mx-2 my-1 text-[10px] font-semibold"
                                  >
                                    {industry}
                                  </span>
                                ))
                              ) : (
                                <span className="block truncate  w-fit">
                                  Select...
                                </span>
                              )}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <CiCircleChevDown className="h-5 w-5 text-gray-400" />
                            </span>
                          </Listbox.Button>
                          <Listbox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-auto  bg-[#27272a] rounded-lg  py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {industriesList.map((industry, index) => (
                              <Listbox.Option
                                key={index}
                                value={industry}
                                as={Fragment}
                              >
                                {({ selected, active }) => (
                                  <div
                                    className={`cursor-default select-none relative py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-[#080124] transition-all duration-200 ease-in"
                                        : "text-white"
                                    }`}
                                  >
                                    <span
                                      className={`block truncate ${
                                        selected ? "font-medium" : "font-normal"
                                      }`}
                                    >
                                      {industry}
                                    </span>
                                    {selected && (
                                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#3c96e0]">
                                        <CiCircleCheck
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </div>
                      </Listbox>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[#ffffff] font-semibold text-sm uppercase">
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`px-4 py-3  ${
                          errors.message
                            ? "border-2 border-red-500 focus:ring-[#3c96e0]"
                            : "focus:ring-[#3c96e0]"
                        } bg-[#27272a] rounded-lg mt-1 shadow-md focus:outline-none focus:ring-2 focus:ring-[#3c96e0] text-gray-100 placeholder-gray-300 transition-all duration-300 resize-none`}
                      />
                    </div>
                  </div>
                </Step>

                <Step>
                  <div className="space-y-6 px-4 py-6">
                    <h2 className="text-xl font-semibold text-[#3c96e0]">
                      Review Your Info
                    </h2>

                    <div className="text-sm text-gray-100 space-y-2">
                      <p>
                        <strong>Company Name:</strong> {companyName || "N/A"}
                      </p>
                      <p>
                        <strong>Full Name:</strong> {fullName || "N/A"}
                      </p>
                      <p>
                        <strong>Email:</strong> {email || "N/A"}
                      </p>
                      <p>
                        <strong>Phone:</strong> {phone || "N/A"}
                      </p>
                      <p>
                        <strong>Selected Industries:</strong>{" "}
                        {selectedIndustries.length > 0
                          ? selectedIndustries.join(", ")
                          : "N/A"}
                      </p>
                      <p>
                        <strong>Your Message:</strong> {message || "N/A"}
                      </p>
                    </div>
                  </div>
                </Step>
              </Stepper>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
