import TopBanner from "../../components/common/TopBanner";
import SectionHeader from "../../components/common/SectionHeader";
import { useState } from "react";

function ResourceAugmentation() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState([]);
  const [designation, setDesignation] = useState("");
  const [project, setProject] = useState("");
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
    if (project.length <= 0) {
      tempErrors["project"] = true;
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
          message: project,
          phone: phone,
          type: "Resource Augmentation Form",
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
      setProject("");
    }
  };
  return (
    <div>
      <TopBanner
        image={"/images/service3.png"}
        title="Resource Augmentation"
        discription="Hire Experienced Developers providing quality services and delivering quality products"
      />
      <div>
        {/* <SectionHeader title="Resource Augmentation" />
        <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-52 m-auto" /> */}
      </div>

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-6 md:grid md:grid-cols-2  md:gap-6 lg:gap-12">
            <div className=" flex justify-center flex-col">
              <h2 className="text-gray-900 pb-2 font-bold md:text-4xl text-2xl">
                Why Take <b className="text-orange">BPAAS</b> Resource
                Augmentation Services ?
              </h2>
              {/* <hr className="rounded-4xl border-t-2 w-full m-2" /> */}
              <ul className="list-disc space-y-2 p-6 font-medium">
                <li> Client-centric model with dedicated teams</li>
                <li> Access to quality resources and skill sets</li>
                <li> Complete flexibility to scale up or down</li>
                <li> Full control over project development</li>
                <li> Cost optimization and progress visibility</li>
                <li> No setup or maintenance costs</li>
              </ul>
            </div>
            <div className="">
              <form>
                <div className=" bg-secondary p-6 text-white">
                  <p className="mb-8 text-3xl flex items-center underline underline-offset-8">
                    Lets Discuss Your Requirement
                  </p>
                  <div className="mb-4">
                    <input
                      className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Enter Name"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                    {errors?.fullname && (
                      <p className="text-red-500">Name cannot be empty</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors?.email && (
                      <p className="text-red-500">Email cannot be empty</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <input
                      className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Phone"
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
                  <div className="mb-1">
                    <input
                      className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Project"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    />
                    {errors?.project && (
                      <p className="text-red-500">Project cannot be empty</p>
                    )}
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="px-10  py-2 bg-[#130F49] hover:bg-orange text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
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
          </div>
        </div>
      </div>
      <div className="pb-24 bg-blue-200">
        <div className="underline-offset-8 pt-0 mt-0">
          <SectionHeader title="Hiring " cTitle="Model" />
        </div>
        <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
          <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-xl px-4 py-6 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-primaryText">
                  Dedicated Team
                </h3>
                <ul className=" list-inside list-disc font-medium">
                  <li> For large Projects</li>
                  <li>Evolutionary Enhancements</li>
                  <li>Full time dedicated set of resources</li>
                  <li>No Hidden Cost</li>
                </ul>
                {/* <a
                  href="#"
                  className="block font-medium capitalize  text-orange hover:text-cyan-700"
                >
                  Know more
                </a> */}
              </div>
              <img
                src="/img/dedicated.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-4 py-6 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-primaryText">
                  Individual Resources
                </h3>
                <ul className=" list-inside list-disc font-medium">
                  <li>Full time Dedicated Member</li>
                  <li> For Remote team augmentation</li>
                  <li> Project Management handled by you</li>
                  <li> No Hidden cost</li>
                </ul>{" "}
                {/* <a
                  href="#"
                  className="block capitalize  font-medium text-orange hover:text-cyan-700"
                >
                  Know more
                </a> */}
              </div>
              <img
                src="/img/individual.svg"
                className="w-2/3 ml-auto"
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
            <div className="bg-white rounded-2xl shadow-xl px-4 py-6 sm:px-12 lg:px-8">
              <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-primaryText">
                  Project Outsource
                </h3>
                <ul className=" list-inside list-disc font-medium">
                  <li>Pre-Defined Projects</li>
                  <li>Milestone based Payment</li>
                  <li>Project Management by Us</li>
                  <li>No Hidden cost</li>
                </ul>{" "}
                {/* <a
                  href="#"
                  className="block capitalize  font-medium text-orange hover:text-cyan-700"
                >
                  Know more
                </a> */}
              </div>
              <img
                src="/img/project-outsource.svg"
                className="w-2/3 ml-auto "
                alt="illustration"
                loading="lazy"
                width="900"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceAugmentation;
