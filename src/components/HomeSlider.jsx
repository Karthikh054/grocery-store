"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";

function HomeSlider() {
  return (
    <div className="homeSlider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
  );
}

export default HomeSlider;
