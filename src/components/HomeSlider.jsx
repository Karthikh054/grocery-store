"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider">
      <div className="container">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <Image
                src={"/slide1.png"}
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <Image
                src={"/slide1.png"}
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <Image
                src={"/slide1.png"}
                alt="slide1"
                width={1344}
                height={514}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
