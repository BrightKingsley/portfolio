"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function PreviewImages({ images }: { images: string[] }) {
  return (
    <div>
      <Swiper
        className="rounded-xl"
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop
        navigation
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        // breakpoints={{
        //   400: {
        //     slidesPerView: 1.6,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //   },
        //   // 768: {
        //   //   slidesPerView: 3,
        //   // },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        // }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          // 640: {
          //   slidesPerView: 2,
          // },
          768: {
            slidesPerView: 2,
          },
          // 1024: {
          //   slidesPerView: 3,
          // },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="mr-6">
            <div className="bg-white shadow-lg rounded-xl overflow-clip w-96_ md:h-80_">
              <Image src={image} alt="" width={1080} height={1080} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
