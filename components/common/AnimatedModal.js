import React, { useState } from "react";

const AnimatedModal = ({ closeModal, isClosing, HeadingText, filePath, contact }) => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");

    //   Form validation
    const [errors, setErrors] = useState({});

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);


    const handleValidationContact = () => {
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

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };


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
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };




    const handleSubmitContact = async (e) => {
        e.preventDefault();
        if (contact) {
            let isValidForm = handleValidation();

            if (isValidForm) {
                const res = await fetch("/api/contact", {
                    body: JSON.stringify({
                        email: email,
                        fullname: fullname,
                        subject: subject,
                        message: message,
                        phone: phone,
                        type: "Website Contact Us Form",
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
                    setFullname("");
                    setEmail("");
                    setMessage("");
                    setPhone("");
                    setSubject("");
                    closeModal();
                    return;
                }
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setFullname("");
                setEmail("");
                setMessage("");
                setSubject("");
                setPhone("");
                closeModal();
            }
            return;
        } 
        else {
            let isValidForm = handleValidationContact();
            if (isValidForm) {
                const res = await fetch("/api/contact", {
                    body: JSON.stringify({
                        email: email,
                        fullname: fullname,
                        company: company,
                        message: message,
                        company:company,
                        phone: phone,
                        type: "Download Brochure",
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
                    setFullname("");
                    setEmail("");
                    setMessage("");
                    setCompany("");
                    setPhone("");
                    setCompany("");
                    closeModal();
                    return;
                }
                setShowSuccessMessage(true);
                setShowFailureMessage(false);
                setFullname("");
                setEmail("");
                setMessage("");
                setPhone("");
                setCompany("");
                window.open(filePath, "_blank")
                closeModal();
            }
        }

    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
            <div
                className={`bg-white rounded-lg p-5 w-100 lg:w-1/2 md:w-1/2 xl:w-1/2 max-w-md transition-transform transform-gpu ${isClosing ? 'animate-modalClose' : 'animate-modalOpen'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {!contact && <form onSubmit={handleSubmitContact}>
                    <div className="mb-5">
                        <h2 className="text-[18px] font-bold">{HeadingText}</h2>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"
                            value={fullname}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname"
                            placeholder="Full Name*" />
                        {errors?.fullname && (
                            <p className="text-red-500 text-[12px] col-span-4">
                                Fullname cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="phone"
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
                            placeholder="Phone No.*"
                        />
                        {errors?.phone && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Phone No. cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="E-mail*"
                        />
                        {errors?.email && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Email cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            name="company"
                            value={company}
                            placeholder="Organization*"
                            onChange={(e) => {
                                setCompany(e.target.value);
                            }}
                        />
                        {errors?.company && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Organization name cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="1" required
                            name="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></textarea>
                        {errors?.message && (
                            <p className="text-red-500  col-span-4 text-[12px]">
                                Message body cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="flex mt-8 mb-2">
                        <button type="button" className="px-10 w-[100%] pt-2 pb-2 m-1 bg-slate-300 text-black rounded-full
                            font-medium text-sm"
                            onClick={closeModal}
                        >Close</button>
                        <button type="submit" className="px-10 w-[100%] pt-2 pb-2 m-1 border-orange border-1 
                             text-black  rounded-full bg-orange 
                                font-medium text-sm"

                        >Download</button>
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
                </form>
                }


                {/* contact Us */}
                {contact && <form onSubmit={handleSubmitContact}>
                    <div className="mb-5">
                        <h2 className="text-[18px] font-bold">{HeadingText}</h2>
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"
                            value={fullname}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname"
                            placeholder="Full Name*" />
                        {errors?.fullname && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Fullname cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="phone"
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
                            placeholder="Phone No.*"
                        />
                        {errors?.phone && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Phone No. cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="E-mail*"
                        />
                        {errors?.email && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Email cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            name="subject"
                            value={subject}
                            placeholder="Subject*"
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                        />
                        {errors?.subject && (
                            <p className="text-red-500 col-span-4 text-[12px]">
                                Subject cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="w-full px-3 mb-3">
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 text-[12px] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="1" required
                            name="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        ></textarea>
                        {errors?.message && (
                            <p className="text-red-500  col-span-4 text-[12px]">
                                Message body cannot be empty.
                            </p>
                        )}
                    </div>
                    <div className="flex mt-8 mb-2">
                        <button type="button" className="px-10 w-[100%] pt-2 pb-2 m-1 bg-slate-300 text-black rounded-full
                            font-medium text-sm"
                            onClick={closeModal}
                        >Close</button>
                        <button type="submit" className="px-10 w-[100%] pt-2 pb-2 m-1 border-orange border-1 
                             text-black  rounded-full bg-orange 
                                font-medium text-sm"

                        >Send</button>
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
                </form>
                }

            </div>
        </div>
    );
};

export default AnimatedModal;
