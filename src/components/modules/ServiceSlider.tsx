"use client"
import React from 'react';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination} from 'swiper/modules';
import { Service, serviceData } from '@/utils/service';
import Image from 'next/image';

const ServiceSlider = () => {
    return (
       <Swiper
       slidesPerView={1}
       spaceBetween={15}
       breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className=' '
       >
       {
        serviceData?.map((item:Service,index:number)=>{
            return (
                <SwiperSlide key={index}>
                    <div className=' bg-blue-400/5 backdrop-blur-2xl h-[300px] md:h-[250px] lg:h-[300px] rounded-lg px-4 py-6 cursor-pointer hover:bg-[rgba(89,65,169,0.15)]  transition-all duration-300'>
                        <div className='text-center  flex flex-col items-center justify-center'>
                          {/* icon */}
                          <Image src={item.icon}  alt='service_icon' width={50} height={50}/>
                        {/* title & desc */}
                        <div className='text-center'>
                            <div className='text-xl lg:text-2xl py-2'>{item.title} </div>
                            <p className='text-sm text-[#87868f] '>{item.description} </p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
       }
       
       </Swiper>
    );
};

export default ServiceSlider;