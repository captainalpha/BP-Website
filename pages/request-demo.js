import SectionHeader from "../components/common/SectionHeader";
import TopBanner from "../components/common/TopBanner";
import React, { useState } from "react";

import Select from "react-select";

const data = [
  { value: "BPAAS Proqure", label: "BPAAS Proqure" },
  { value: "BPAAS Vendora", label: "BPAAS Vendora" },
  { value: "BPAAS BillSmart", label: "BPAAS BillSmart" },
  { value: "BPAAS Invoicer", label: "BPAAS Invoicer" },
  { value: "BPAAS SmartEx", label: "BPAAS SmartEx" },
  { value: "BPAAS PosPro", label: "BPAAS PosPro" },
  { value: "other", label: "Other" },
];
function RequestDemo() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState([]);
  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 9) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (company.length <= 0) {
      tempErrors["company"] = true;
      isValid = false;
    }
    if (industry.length <= 0) {
      tempErrors["industry"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/contact", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          industry: industry,
          message: message,
          phone: phone,
          company: company,
          type: "Request Demo Form",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
      setPhone("");
      setCompany("");
      setIndustry([]);
    }
  };

  return (
    <div className="pb-10">
      <div
        className={`lg:h-[80vh] h-[60vh] mt-20 w-full text-white flex p-10 items-center bg-no-repeat bg-cover bg-[url('/img/request.png')] `}
      >
        <div className="space-y-4 lg:w-1/2  md:text-left">
          <h1 className="lg:text-5xl text-3xl font-bold capitalize ">
            Request Demo
          </h1>
          <p className="w-full lg:text-2xl text-justify">
            Take a step forward and allow us to take you through the demo of our
            services to decide on futuristic growth.
          </p>
        </div>
      </div>

      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-8 pt-6">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Request Demo
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 ">
            Get In <span className="text-orange">Touch</span>
          </h3>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-password"
              >
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
                type="text"
                required
                placeholder="Enter Company Name"
              />
              {errors?.company && (
                <p className="text-red-500">Company Name cannot be empty</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-password"
              >
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="text"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                required
                placeholder="Enter Full Name"
              />
              {errors?.fullname && (
                <p className="text-red-500">Name cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-first-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Enter Email"
              />
              {errors?.email && (
                <p className="text-red-500">Email cannot be empty.</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-last-name"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                maxLength={10}
                pattern="^-?[0-9]\d*\.?\d*$"
                onChange={(e) =>
                  e.target.validity.valid
                    ? setPhone(e.target.value)
                    : e.target.value == ""
                    ? setPhone("")
                    : null
                }
                value={phone}
                required
                placeholder="Enter Phone Number"
              />
              {errors?.phone && (
                <p className="text-red-500">Phone No. cannot be empty.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-password"
              >
                industry
              </label>
              <Select
                isMulti
                name="colors"
                value={industry}
                onChange={(item) => setIndustry(item)}
                options={data}
                className="basic-multi-select"
                classNamePrefix="select bg-gray-200"
              />
              {errors?.industry && (
                <p className="text-red-500">Please Select an Industry</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                // for="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows="6"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Leave A Message ..."
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
              {errors?.message && (
                <p className="text-red-500">Message body cannot be empty.</p>
              )}
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="flex flex-row items-center justify-start">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-10 mt-8 py-2 bg-[#130F49] hover:bg-orange text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                >
                  {buttonText}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="text-cyan-500 ml-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="text-left">
            {showSuccessMessage && (
              <p className="text-green-500 font-semibold text-sm my-2">
                Thankyou! Your Message has been delivered.
              </p>
            )}
            {showFailureMessage && (
              <p className="text-red-500">
                Oops! Something went wrong, please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
