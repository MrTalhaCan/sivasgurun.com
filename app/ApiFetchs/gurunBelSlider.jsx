'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
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
        <SwiperSlide key={i}>
            <div className="w-full h-96 relative bg-no-repeat bg-cover" style={{backgroundImage: `url(${news.img})`}}>
                <a href={news.link} className="absolute top-1 right-1 p-3 bg-sky-500" target="_blank">
<Image
	className="w-5 -rotate-45"
        width={20}
        height={20}
        src="/link.png"
	alt={`belediye-haber-${i} link icon`}
      />
</a>
                <div className="absolute bottom-0 p-3 bg-slate-950/75">
                    <h1 className="text-xl font-bold text-titleLight dark:text-titleDark">{news.title}</h1>
                    <p className="text-gray-300 line-clamp-2">{news.description}</p>
                </div>
            </div>
        </SwiperSlide>)}
          </Swiper>
    )
}