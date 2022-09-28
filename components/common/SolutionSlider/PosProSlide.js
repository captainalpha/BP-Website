import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
            <img src="/images/pospro-ss/001.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pospro-ss/002.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/pospro-ss/003.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
