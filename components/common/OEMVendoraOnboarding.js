import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
import AnimatedModal from './AnimatedModal';
SwiperCore.use([Autoplay, Pagination, Navigation]);
const OEMVendoraOnboarding = () => {
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
        <div id='VendorPortal' className="mx-5 lg:mx-[4em] md:mx-[4em] xl:mx-[4em]  mb-[0em] lg:mb-[5em] md:mb-[5em] xl:mb-[5em] shadow-lg rounded-md bg-gradient-to-r from-blue-100 to-teal-100  md:p-[3em]">
            <div className="container mx-auto">
                <div className="" id="section1">
                    <div className="container m-auto px-6 md:px-12 xl:px-6 pb-8 ">
                        <div className='flex justify-center text-center pt-5 lg:pt-0 md:pt-0 xl:pt-0'>
                            <h1 className=" text-2xl capitalize font-bold mb-10 ">Vendora Onboarding</h1>
                        </div>
                        <div className='hidden lg:flex xl:flex md:flex justify-center'>
                            <div className="lg:w-[80%] mx-auto">
                                <div className="pb-10 lg:px-10">
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
                                            <img src="/images/VOnboardingSS/VendoraLogin.png" alt="Img" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/images/VOnboardingSS/VStep1.png" alt="Img" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>




                        <div className="">
                            <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em] mt-4">Why companies should opt for vendora?</h5>
                                <p className='lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]'>
                                &ndash;&nbsp;The <span className='font-medium'>arduous and time-intensive procedure</span> of integrating and administrating vendor documents for regulatory compliance.
                                </p>
                                <p className='lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]'>
                                &ndash;&nbsp;The <span className='font-medium'>manual and laborious verification</span> of vendor documents such as GSTIN, PAN, and ITR, necessitating access to multiple government portals.
                                </p>
                                <p className='lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]'>
                                &ndash;&nbsp;The <span className='font-medium'>manual data entries and approvals in ERP&apos;s</span> for the creation of vendor codes, a process that is both time-consuming and prone to errors.
                                </p>
                                <p className='lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]'>
                                &ndash;&nbsp;The <span className='font-medium'>absence of a centralized system</span> to manage and address vendor issues and queries related to payments, leading to inefficiencies and communication gaps.
                                </p>
                                <p className='lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]'>
                                &ndash;&nbsp;The <span className='font-medium'>lack of a comprehensive vendor ledger and spend analytics,</span> which hampers visibility into vendor transactions and expenditure patterns.
                                </p>
                                <div className='my-4'>
                                    <span className='lg:text-[14.5px] text-sm leading-[1.8] tracking-[0.025em] font-[500]'>
                                        These points highlight the need for a more streamlined and automated vendor management system. Such a system could significantly reduce the time and effort involved in these processes, improve accuracy, and provide valuable insights for decision-making.
                                    </span>
                                </div>
                           

                            {/* <h5 className="text-orange font-bold leading-[1.8] tracking-[0.025em] mt-4 ">Features/Capabilities(How BPAAS Vendora solve above problem statement?)</h5>
                            <hr className="pb-2 pt-0 rounded-4xl border-t-2 w-full m-auto" />
                            <div className="lg:text-[15px] text-sm mt-5 leading-[1.8] tracking-[0.025em]">
                                <li>
                                    A <span className='font-medium'>holistic vendor integration solution</span> that provides a frictionless experience, equipped with a centralized databank for vendor-specific information and requisite documents for regulatory adherence.
                                </li>
                                <li>
                                    A <span className='font-medium'>self-service methodology</span> that enables vendors to independently upload their documents and information, cultivating a sense of autonomy and accountability.
                                </li>
                                <li>
                                    An <span className='font-medium'>all-encompassing 360-degree perspective</span> of vendor activities, ensuring absolute transparency and aiding in informed decision-making
                                </li>
                                <li>
                                <span className='font-medium'>Intrinsic automation and approval workflows</span> that accelerate the onboarding process, minimizing manual intervention and enhancing operational efficiency.
                                </li>
                                <li>
                                    The facility for <span className='font-medium'>digital issuance of vendor Purchase Orders (POs),</span> streamlining the procurement process and guaranteeing prompt order execution.
                                </li>
                                <li>
                                    A <span className='font-medium'>systematic arrangement of alerts, reminders, and notifications</span> for proficiently managing vendor inquiries, assuring swift resolution and fostering robust vendor relationships.
                                </li>
                                <div className='my-4 p-2 '>
                                    <span className='lg:text-[15px] text-sm mt-5 leading-[1.8] tracking-[0.025em] font-medium'>
                                        These points underscore the exhaustive nature of the vendor portal solution, accentuating its user-centric design, transparency, efficiency, and proactive communication mechanisms.
                                    </span>
                                </div>
                            </div> */}
                            {/* <div className="my-4">
                                    <button className="px-5 w-[80%] xl:w-[20%] sm:w-[100%] md:w-[20%] lg:w-[20%]  pt-2 pb-2 mt-10 border-orange border-2 text-orange hover:text-black rounded-full hover:bg-orange 
                            font-medium text-sm"
                            onClick={openModal}
                            >
                                        Download Brochure
                                    </button>
                                
                            </div> */}

                        </div>



                        <div className="xl:grid lg:grid md:grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mt-3 gap-5">
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">User Friendly Interface</h5>
                                <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">It has an intuitive and user-friendly interface for the vendor registration where new vendors can submit their information such as company name, contact information, tax identification, certifications, and other relevant documentation.
                                </p>
                            </div>
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Customizable Workflow</h5>
                                <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">Different approval processes require different steps. This system supports customizable workflows, allowing departments to configure the approval process to their specific needs.
                                </p>
                            </div>
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Field Level Validation</h5>
                                <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">System is integrated with government APIs to validate the details like GST, PAN, Bank Account, legal status, financial stability etc.
                                </p>
                            </div>
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Role Based Access Control</h5>
                                <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">To maintain data security and privacy, the system is incorporated role-based access control, allowing only authorized personnel to initiate, review, and approve requests.
                                </p>
                            </div>
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Integration Capabilities</h5>
                                <p className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    Integrate vendor information into relevant system, such as procurement, finance and enterprise resource planning (ERP) systems.
                                </p>
                            </div>
                            <div className='mt-3 xl:mt-0 lg:mt-0 md:mt-0 shadow-lg rounded-md bg-gradient-to-r from-sky-50 to-blue-50 px-5 py-3'>
                                <h5 className="text-orange font-[500] text-[15px] leading-[1.8] tracking-[0.025em]">Other Features</h5>
                                <div className="lg:text-[14.5px] text-sm mt-1 leading-[1.8] tracking-[0.025em]">
                                    <li>Report & Dashboard</li>
                                    <li>Status Visibility</li>
                                    <li>Duplicate Vendor Check</li>
                                    <li>Audit Trail</li>
                                    <li>Email Notification</li>
                                </div>
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
            {isModalOpen && (
                <AnimatedModal
                    closeModal={closeModal}
                    isClosing={isClosing}
                    filePath={"/images/Brochure/Brochure_ BPAAS_Solution_for_Vendor_Onboarding.pdf"}
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

export default OEMVendoraOnboarding