'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image'
export default function Slider({ schoolposts }){
console.log("prms schoolposts", schoolposts)
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
        {schoolposts.map((posts, i) => {
	const postAry = posts.datejson;
	console.log("postAry", postAry);
	return postAry.map((post, indx) => (
	<SwiperSlide key={`${i}-${indx}`}>
            <div className="w-full h-96 relative bg-no-repeat bg-cover" style={{backgroundImage: `url(/uploads/school-imgs/${post.imgsrc})`}}>
		<div className="absolute top-0 right-0 p-3 bg-sky-500">
                    <h1 className="text-xl font-bold text-titleLight dark:text-titleDark">{posts.schoolname}</h1>
                </div>
                <div className="absolute bottom-0 p-3 bg-slate-950/75">
                    <h1 className="text-xl font-bold text-titleLight dark:text-titleDark">{post.title}</h1>
                </div>
            </div>
        </SwiperSlide>));
	}
        )}
          </Swiper>
    );
}