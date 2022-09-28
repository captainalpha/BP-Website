import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Scrollbar, Navigation } from "swiper";
import Image from "next/image";

function SliderHome() {
  return (
    <Swiper
      // className={styles.mySwiper}
      modules={[Pagination, Scrollbar, Autoplay]}
      //   spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="md:w-screen w-auto  lg:h-[91vh] h-[70vh] relative p-5 bg-[url(/images/banner-1.png)] hover:scale-105 duration-500 transition bg-cover bg-no-repeat ">
          {/* <Image
            layout="fill"
            className=" hover:scale-110 duration-1000"
            alt=""
            src="/images/banner-1.png"
          /> */}
          <div className="absolute text-white flex flex-col justify-center  lg:h-[91vh] h-[70vh]  lg:max-w-[50vw] p-10 space-y-4">
            <h1
              style={{ lineHeight: 1.4 }}
              className="lg:text-5xl text-3xl capitalize font-bold text-orange"
            >
              <span className="bg-white">Digitizing And Connecting</span> <br />{" "}
              your supply chain can be complex.
            </h1>
            <p className="text-2xl lg:text-justify tracking-tighter">
              BPAAS has knowledge, experience and ready solutions which can
              initiate journey towards digitization and new technologies.
            </p>
            {/* <button className="px-4 py-2 border border-white hover:border-orange hover:text-orange max-w-xs">
              Request Demo
            </button> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="md:w-screen w-auto   lg:h-[91vh] h-[70vh] relative p-5 bg-[url(/images/banner-2.png)] hover:scale-105 duration-500 transition bg-cover bg-no-repeat">
          {/* <Image
            className=" hover:scale-110 duration-1000"
            layout="fill"
            alt=""
            src="/images/banner-2.png"
          /> */}
          <div className="absolute text-white lg:max-w-[50vw] flex flex-col justify-center lg:h-[91vh] h-[70vh] p-10 space-y-4">
            <h1
              style={{ lineHeight: 1.4 }}
              className="lg:text-5xl text-3xl capitalize font-bold text-orange "
            >
              Service &amp; Delivery <br />
              <span className="bg-white"> truly different</span>
            </h1>
            <p className="text-2xl lg:text-justify tracking-tighter">
              We work with your team to start small, deliver results and scale
              up for true digital transformation that adds value and results in
              cost saving.
            </p>
            {/* <button className="px-4 py-2 border border-white hover:border-orange hover:text-orange max-w-xs">
              Request Demo
            </button> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="md:w-screen w-auto   lg:h-[91vh] h-[70vh] relative p-5 bg-[url(/images/banner-3.png)] hover:scale-105 duration-500 transition bg-cover bg-no-repeat">
          {/* <Image
            className=" hover:scale-110 duration-1000"
            layout="fill"
            alt=""
            src="/images/banner-3.png"
          /> */}
          <div className="absolute text-white lg:max-w-[50vw] flex flex-col justify-center  lg:h-[91vh] h-[70vh] p-10 space-y-4">
            <h1
              style={{ lineHeight: 1.4 }}
              className="lg:text-5xl text-3xl font-bold capitalize text-orange"
            >
              All in all <br /> <span className="bg-white">Automation</span>{" "}
            </h1>
            <p className="text-2xl lg:text-justify tracking-tighter">
              Simply makes working life easier &amp; more efficient.
            </p>
            {/* <button className="px-4 py-2 border border-white hover:border-orange hover:text-orange max-w-xs">
              Request Demo
            </button> */}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderHome;
