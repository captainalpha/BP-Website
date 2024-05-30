import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import AnimatedModal from './AnimatedModal';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const OEMCapabilitiesStudies = () => {
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
        <div>
            <div id="ApprovalNFA" className="mx-5 lg:mx-[4em] md:mx-[4em] xl:mx-[4em] mb-[1em] shadow-lg rounded-md bg-gradient-to-r from-blue-100 to-teal-100 md:p-[3em]">
                <div className="container mx-auto">
                    <div id="section1">
                        <div className="container m-auto px-2 lg:px-12 md:px-12 xl:px-6 pb-8 ">
                            <div className="flex justify-center text-center pt-5 lg:pt-0 md:pt-0 xl:pt-0">
                                <h1 className="text-2xl capitalize font-bold transition-transform transform-gpu hover:scale-105">NFA Flyer</h1>
                            </div>
                            <div className="hidden lg:flex xl:flex md:flex justify-center">
                                <div className="lg:w-[80%] mx-auto">
                                    <div className="py-10 lg:px-10">
                                        <Swiper
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={false}
                                            className="mySwiper"
                                            breakpoints={{
                                                480: {
                                                    autoplay: false,
                                                },
                                            }}
                                        >
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/NFALogin.png" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/CreateNFA.png" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/HistoryNFA.png" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/bDashboardNFA.png" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/PendingNFA.png" alt="Img" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="/images/NFA-ss/Ppopup.png" alt="Img" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em] mt-4">What is NFA?</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    &ndash;&nbsp;The need for efficient and transparent approval processes is most important for any large organization. Traditional methods of obtaining approvals for procurement requests involve manual intervention, time-consuming tasks, leading to delays, errors, and lack of accountability.
                                    </p>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    &ndash;&nbsp;Recognizing this challenge, the development of the Note for Approval System emerged as a solution to streamline and optimize the approval workflow within an organization.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em] mt-4">Why NFA?</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    &ndash;&nbsp;The conventional approval methods, often relying on emails, paperwork, or in-person signatures has many challenges. These include loss of documents, unclear approval paths, and difficulties in tracking the status of requests.
                                    </p>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    &ndash;&nbsp;The Note for Approval System addresses these challenges by leveraging technology to automate, centralize, and enhance the entire approval process. By providing a digital platform for creating, submitting, and tracking notes for approval, the system aims to accelerates the approval process & make it transparent to organization&apos;s stakeholders.
                                    </p>
                                </div>

                                <div className="xl:grid lg:grid md:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-3 gap-5">
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">User Friendly Interface</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">The approval system will boast an intuitive and user-friendly interface, ensuring ease of use for all employees involved in the approval workflow.
                                    </p>
                                    </div>
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Customizable Workflow</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">Different approval processes require different steps. This system supports customizable workflows, allowing departments to configure the approval process to their specific needs.
                                    </p>
                                    </div>
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Role Based Access Control</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">To maintain data security and privacy, the system will incorporate role-based access control, allowing only authorized personnel to initiate, review, and approve requests.
                                    </p>
                                    </div>
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                   <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Notifications and Reminders</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    Automated notifications and reminders will be sent to relevant stakeholders at each stage of the approval process, minimizing delays and ensuring timely responses.
                                    </p>
                                   </div>
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Integration Capabilities</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                        The system will integrate seamlessly with existing tools and platforms used within the organization, minimizing disruption
                                        and ensuring a smooth transition.
                                    </p>
                                    </div>
                                    <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-5'>
                                    <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Audit Trail</h5>
                                    <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    A comprehensive audit trail will be maintained, providing a detailed history of all approval actions. This feature enhances transparency and accountability.
                                    </p>
                                    </div>
                                </div>
                                <div className="my-4">
                                        <button className="px-5 w-[80%] xl:w-[20%] sm:w-[100%] md:w-[20%] lg:w-[20%]  pt-2 pb-2 mt-10 border-orange border-2 text-orange hover:text-black rounded-full hover:bg-orange 
                            font-medium text-sm"
                            onClick={openModal}
                            >
                                            Download Brochure
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                    <AnimatedModal
                    closeModal={closeModal} 
                    isClosing={isClosing}
                    filePath={"/images/Brochure/NFA_Flyer.pdf"}
                    HeadingText={(
                        <>
                                <span className="text-black">Download</span>
                                {' '}
                                <span className="text-orange">Brochure</span>
                        </>
                    )}
                    />
                )}
        </div>
    )
}

export default OEMCapabilitiesStudies