import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
            <img src="/images/vendor-ss/001.PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/002(a).PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/002(b).PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/003.PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/004(a).PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/004(b).PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/005.PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/006.PNG" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/vendor-ss/007.PNG" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
