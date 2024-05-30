import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';
SwiperCore.use([Autoplay, Pagination, Navigation]);
const ClientsSlider = () => {
    return (
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
                    <div className='flex justify-center'>
                        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-items-center w-full justify-center py-10 gap-5">

                            <img src="/images/clientsLogo/WonderCement.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/volvo.jpg" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/Rubamin.webp" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-sky-600 rounded-md py-[15px] px-[15px] custom-aspect-ratio" />


                            <img src="/images/clientsLogo/experion.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/EcomLogo.svg" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />
                           
                            <img src="/images/clientsLogo/GDL.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex justify-center'>
                        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-items-center w-full justify-center py-10 gap-5">


                            <img src="/images/clientsLogo/AGSINs.svg" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/Apollotubes.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/NivaBupa.svg" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />
                           
                            <img src="/images/clientsLogo/ForbesMarshall.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-sky-600 rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/o2power.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/awipl.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex justify-center'>
                        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-center justify-items-center w-full justify-center py-10 gap-5">

                            <img src="/images/clientsLogo/ASAHI.webp" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/usha.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />

                            <img src="/images/clientsLogo/AGPratham.png" alt=""
                                className="shadow-lg w-[100%] object-contain mix-blend-color-burn bg-white rounded-md py-[15px] px-[15px] custom-aspect-ratio" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default ClientsSlider