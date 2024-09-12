'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Slider(prms){
    return(
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
        {prms.news.map((news, i) => 
        <SwiperSlide>
            <div key={i} className="w-full h-96 relative bg-no-repeat bg-cover" style={{backgroundImage: `url(${news.img})`}}>
                <div className="absolute bottom-0 p-3 bg-slate-950/75">
                    <h1 className="text-white text-xl font-bold">{news.title}</h1>
                    <p className="text-gray-300 line-clamp-2">{news.description}</p>
                </div>
            </div>
        </SwiperSlide>)}
          </Swiper>
    )
}