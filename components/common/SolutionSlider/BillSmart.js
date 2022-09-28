import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/billsmart-ss/dashboard.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/invoice-report.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/login.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/mytickets.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/ocr_modal.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/ticketdetails.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/billsmart-ss/ticketsearch.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
