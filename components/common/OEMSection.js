import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Autoplay, Pagination, Navigation]);
const OEMSection = () => {
    return (
        <>
            {/* <div className="grid lg:grid-cols-2 md:p-16 px-10 pb-10 pt-14 lg:py-5 lg:p-15 gap-20 "> */}
            <div className="xl:grid md:grid lg:grid lg:grid-cols-2 p-0 md:p-16 xl:p-16 lg:p-16 px-5 pb-0 lg:pb-0 md:pb-0 xl:pb-0 pt-7 xl:pt-14 lg:pt-14 md:pt-14 gap-20">
                {/* <div className="space-y-5 text-justify leading-loose shadow-lg rounded-md bg-gradient-to-t from-red-100 via-gray-50 to-blue-50 pt-[1em] px-[3em] pb-[3em] py-[3em]"> */}
                <div className="xl:space-y-5 lg:space-y-5 md:space-y-5 text-justify leading-loose shadow-lg rounded-md bg-gradient-to-t from-red-100 via-gray-50 to-blue-50 pt-4 px-6 pb-6">

                    <div className='lg:flex md:flex xl:flex block justify-center'>
                        <div className="lg:w-[60%]">

                            <div className="px-4 lg:px-10">
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
                                        <img src="/images/AwardNewgen.png" alt="img" className='w-100 h-[50vh] mt-10 rounded-lg object-cover' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/Award2.png" alt="" className='w-100 h-[50vh] mt-10 rounded-lg object-cover' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <h1 className="lg:text-[19px] pt-4 text-xl capitalize font-bold">
                        <span className="text-orange">BPAAS Solutions </span>Practice on Newgen Platform
                    </h1>
                    <p className="lg:text-[15px] text-sm mt-5 leading-[1.8] tracking-[0.025em]">
                        BPAAS Solutions been a <span className="text-slate-600 font-bold">Platinum Partner of Newgen Software</span> for last 4 years delivered complex implementations on Newgen Platform for multiple clients in verticals<span className="text-slate-600 font-bold"> of Manufacturing, Insurance, Real Estate, IT/ITES, Telecom and Banking. </span>
                        Awarded The Best Innovation Partner by Newgen, BPAAS Solutions continues to deliver exceptional service and support to our clients.
                    </p>
                </div>
                <div className="mt-10 lg:mt-0 md:mt-0 xl:mt-0 space-y-5 text-justify leading-loose shadow-lg rounded-md bg-gradient-to-t from-red-100 via-gray-50 to-blue-50 pt-[1em] px-[1em] lg:px-[3em] md:px-[3em] xl:px-[3em] pb-[3em] py-[3em]">
                    <div className='flex justify-center'>
                        <img src="/images/Vendora.jpg" alt="img" className="w-100 h-[50vh] mt-10 rounded-lg object-cover" layout='fill' />
                    </div>
                    <h1 className="lg:text-[19px] pt-4 text-xl capitalize font-bold">
                        ISV Solution on<span className="text-orange"> Newgen Platform </span>
                    </h1>
                    <p className="lg:text-[15px] text-sm mt-5 leading-[1.8] tracking-[0.025em]">BPAAS Solutions have gone beyond just the implementation of Newgen Solution, BPAAS now have developed and deployed ISV Solutions like 
                    <Link href="#ApprovalNFA">
                        <span className="text-blue-500 cursor-pointer"> Note For Approval(NFA)</span>
                    </Link> and  {' '} 
                    <Link href="#VendorPortal">
                        <span className="text-blue-500 cursor-pointer">
                            Vendora(Vendor Portal)
                            </span>
                        </Link> Solution to client to deliver best of class solutions using the Core Newgen Capabilities.
                        With these ISV Solutions, Customer can drastically reduce their time to market and with reduced customization efforts</p>
                </div>
            </div>
        </>
    )
}

export default OEMSection