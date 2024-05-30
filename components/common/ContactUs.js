import React, { useState } from 'react'
import AnimatedModal from './AnimatedModal'
const ContactUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setIsClosing(false);
    };

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 500);
    }
    return (
        <>
            <div className='mx-[1em] md:mx-[4em] xl:mx-[4em] lg:mx-[4em] mb-[5em] mt-[1em] lg:mt-0 md:mt-0 xl:mt-0 shadow-lg rounded-md bg-gradient-to-r from-blue-100 to-teal-100'>
                <div className="lg:h-[40vh] md:h-[40vh] xl:h-[40vh] h-[100%] w-full text-white flex lg:items-center md:items-center xl:items-center items-justify bg-no-repeat bg-cover rounded-md"
                    style={{ backgroundImage: "url(/images/ContactUsImg.svg)" }}
                >

                    <div className='justify-between block lg:flex md:flex xl:flex'>
                        <div className='px-10 block lg:flex md:flex xl:flex justify-center flex-col lg:w-[70%] md:w-[70%] xl:w-[70%]'>
                            <span className="lg:text-[15px] text-black text-sm leading-[1.8] tracking-[0.025em]">
                                <h4 className='text-2xl text-orange font-medium mb-2 mt-2 lg:mt-0 md:mt-0 xl:mt-0 text-center lg:text-justify md:text-justify xl:text-justify'> Contact Us</h4>
                                <p className='text-justify'>
                                    <span className='text-[18px]'>We&apos;re Here to Help
                                        Have questions, inquiries, or just want to say hello?</span> <br />
                                    <span className='font-medium text-[18px]'>Feel free to reach out to us using the form below. Our team is dedicated to provide you with the assistance you need.
                                </span>
                                </p>
                            </span>
                        </div>
                        <div className='flex justify-center flex-col m-auto'>
                            <button className="px-10 w-[100%] pt-3 pb-3 mt-10 mb-10 lg:mb-0 md:mb-0 xl:mb-0 border-orange border-2 hover:border-orange hover:border-2 
                            hover:text-orange text-black  rounded-full bg-orange hover:bg-transparent
                                font-medium text-sm"
                                onClick={openModal}
                                >
                                    Send Message</button>
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <AnimatedModal
                    closeModal={closeModal} 
                    isClosing={isClosing}
                    filePath={"/images/Brochure/Brochure_ BPAAS_Solution_for_Vendor_Onboarding.pdf"}
                    contact={true}
                    HeadingText={(
                        <>
                                <span className="text-black">Contact</span>
                                {' '}
                                <span className="text-orange">Us</span>
                        </>
                    )}
                    />
                )}
            </div>

        </>
    )
}

export default ContactUs