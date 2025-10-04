'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaDownload } from 'react-icons/fa6';
import banner3 from '../../../../public/assets/developer.jpeg'
import TypeWriter from '@/components/TypeWriter';

const MainHome = () => {
    return (
        <div id='home' className='sm:h-full lg:h-[650px]'>
          <div className="w-full xl:text-left text-center mx-auto mt-5 lg:mt-10">
               {/* flex item */}
                <div className=" flex flex-col-reverse lg:flex-row  items-center justify-between ">
                
                {/* text */}
                <div
                className=" text-cener flex flex-col justify-center xl:pt-10 xl:text-left h-full">
                  <h6 className="mb-2 lg:mb-5">Hey There!</h6>
                  <div className="flex items-center justify-center lg:justify-start font-sora gap-x-2">
                      <h1 className="text-sky-400 md:text-3xl font-sora font-extrabold mb-3 lg:mb-5">I am  
                      </h1>
                       <TypeWriter></TypeWriter>
                  </div>
                  <p className="text-sm md:text-base text-[#7B899E]  max-w-sm xl:max-w-lg mx-auto xl:mx-0 mb-5">
                   Hi, I am Nahida, I am a Passionate MERN-stack web developer with expertise in building attractive, user-friendly websites. I am dedicated to crafting smooth web experiences and building responsive websites using HTML, CSS, JavaScript, and React with an unwavering focus on clean code and user-centric design.
                
                  </p>
                  <div>
                   {/* button */}
                    <div className="flex gap-5 text-center mx-auto items-center justify-center lg:justify-start" >
                      <a href='/assets/Resume.pdf' download='Resume' >
                      <button 
                      className="flex items-center gap-2 shadow-outline border-2 border-sky-400 text-sky-400 hover:text-white rounded-md py-2 px-3  hover:bg-sky-400 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-100 ">
                       Resume
                       {/* <FaDownload></FaDownload> */}
                      </button>
                      </a>
                      <Link href='/contact'>
                      <button 
                      className="shadow-outline border-2 border-sky-400 text-sky-400 hover:text-white rounded-md py-2 px-3  hover:bg-sky-400 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-100 ">Hire me</button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* image */}
                  <div
                  className="lg:pr-0 lg:mt-10 lg:block hidden">
                   <Image className="rounded-lg  " src={banner3} width={530} height={600}  alt="banner-img" />
                  </div>
                
                </div>
          </div>
        </div>
    );
};

export default MainHome;