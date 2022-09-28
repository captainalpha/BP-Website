import React, { useState } from "react";
import Head from "next/head";
import TopBanner from "../components/common/TopBanner";
function BecomePartner() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState([]);
  const [designation, setDesignation] = useState("");
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
    if (designation.length <= 0) {
      tempErrors["designation"] = true;
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
          designation: designation,
          message: message,
          phone: phone,
          company: company,
          type: "Become BPAAS Partner",
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
      setDesignation("");
    }
  };

  return (
    <>
      <Head>
        <title>ABOUT US - BPAAS SOLUTIONS</title>
      </Head>
      <div className="mt-20">
        <TopBanner
          image={"/img/become.png"}
          title="Become BPAAS Partner"
          discription="Have a tremendous experience with advanced technological benefits
          and be our exclusive partner."
        />
        {/* <div className="bg-[url('https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1652260426~exp=1652261026~hmac=acf1b1969d77dd65a18ace60098bce3e1de99ca35f8eefbbfabead795a4a0cc5&w=740')] lg:h-[60vh] h-[60vh] sm:h-[70vh] bg-cover bg-no-repeat w-full flex text-white px-10 text-left items-center">
          <div className="lg:w-1/2 space-y-5">
            <h1 className="lg:text-5xl font-bold capitalize sm:text-2xl">
              Become <b className="text-orange">BPASS</b> Partner
            </h1>
            <p className="text-justify">
              Have a tremendous experience with advanced technological benefits
              and be our exclusive partner.
            </p>
          </div>
        </div> */}
        {/* <div className="lg:h-[40vh] h-auto bg-cover  bg-no-repeat w-full flex flex-col p-10 lg:p-20 text-center space-y-8 justify-center ">
          <h1 className="text-4xl font-bold text-left lg:text-center ">
          Become <b>BPASS</b> Partner
          </h1>

          <p className="text-justify lg:text-center"> 
            A dynamic, digital ecosystem that connects vendors with potential buyers. 
          </p>
        </div> */}

        <div className="md:p-16 p-10 lg:py-20 lg:p-10 bg-slate-200">
          <div className="grid lg:grid-cols-2  gap-10 mt-8 ">
            <div className="space-y-5 text-justify leading-loose ">
              <img src="/img/benifits.png" className="w-full h-full" />
            </div>
            <div className="leading-loose">
              <h1 className="font-bold text-primaryText capitalize lg:text-4xl text-3xl">
                Benefits of becoming a BPAAS Business Partner
              </h1>
              {/* <p className="text-justify font-medium text-sm pt-2">
                Enhance your reach to some of the biggest buyers in the country.
                Ensure the best price for your goods, services. Seasoned
                procurement specialists with domain knowledge of your industry.
              </p> */}
              <div className="w-full mt-5">
                <div className="font-medium text-lg">
                  Initiate digital transformation journey for your clients-
                </div>
                <ul className="list-disc lg: pl-5">
                  <li>Increase customer experience</li>
                  <li>
                    Offer IT transformation and modernization to customers
                  </li>
                </ul>
              </div>
              <div className="w-full mt-0">
                <div className="font-medium text-lg">
                  Create new business revenue streams with our solutions-
                </div>
                <ul className="list-disc lg: pl-5 ">
                  <li>Support on all opportunities</li>
                  <li>Joint Go-To market strategy and execution</li>
                </ul>
              </div>
              <div className="w-full mt-0">
                <div className="font-medium text-lg">
                  Enable your sales team to drive solution sales-
                </div>
                <ul className="list-disc lg: pl-5 ">
                  <li>Sales alignment with BPAAS Sales</li>
                  <li>
                    Product understanding and how to position solutions to
                    customers.
                  </li>
                </ul>
              </div>
              <div className="w-full mt-0">
                <div className="font-medium text-lg">
                  Have an idea, convert it to solutions with BPAAS-
                </div>
                <ul className="list-disc lg: pl-5 ">
                  <li>Joint investment on solution development.</li>
                  <li>Joint Solution marketing & selling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:p-16 p-10 lg:py-20 lg:p-10 bg-blue-500">
          <div className="grid lg:grid-cols-2  gap-10 mt-8 ">
            <div className="text-justify leading-loose">
              <h1 className="text-4xl font-bold text-white">OUR SOLUTIONS</h1>
              <p className="text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s the industrys
                standard but also the leap into electronic.{" "}
              </p>
              <div className="w-full md:w-1/2 bg-white text-center rounded-lg mt-2 hover:bg-orange">
                <button className="font-medium text-lg">Learn more</button>
              </div>
            </div>
            <div className="space-y-5 text-justify leading-loose">
              <img className="rounded-xl shadow-lg" src="/images/patner.png" />
            </div>
          </div>
        </div> */}

        <div className="max-w-screen-md mx-auto p-5">
          <div className="text-center mb-12">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Get In <span className="text-orange">Touch</span>
            </h3>
          </div>
          <form className="w-full">
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
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (Ex. Google)"
                />
                {errors?.company && (
                  <p className="text-red-500">Company Name cannot be empty</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  // for="grid-first-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Enter Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
                {errors?.fullname && (
                  <p className="text-red-500">Name cannot be empty</p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  // for="grid-last-name"
                >
                  Designation
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Enter Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                {errors?.designation && (
                  <p className="text-red-500">Designation cannot be empty</p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && (
                  <p className="text-red-500">Email cannot be empty</p>
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
                  placeholder="Phone Number(123-456-7890)"
                  required
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
                />
                {errors?.phone && (
                  <p className="text-red-500">Phone No. cannot be empty</p>
                )}
              </div>
            </div>
            {/* <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  industry
                </label>
                <div className="grid grid-rows-4 grid-flow-col gap-4 justify-around">
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center mt-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                      />
                      <span className="ml-2 text-gray-700">label</span>
                    </label>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  // for="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors?.message && (
                  <p className="text-red-500">Message cannot be empty</p>
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
          </form>
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

        {/* <div className="bg-[url('/images/bg-ourmission.png')] lg:h-[40vh] h-auto bg-cover  bg-no-repeat w-full flex flex-col text-white p-10 lg:p-20 text-center space-y-8 justify-center ">
          <h1 className="text-4xl text-left lg:text-center ">
            Getting Started on C1 Network
          </h1>

          <p className="lg:px-10 md:px-10 text-justify lg:text-center">
            It&apos;s easy – Takes just a few minutes and opens a new world of
            opportunities.
          </p>
        </div> */}
      </div>
    </>
  );
}

export default BecomePartner;
