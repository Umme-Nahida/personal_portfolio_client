"use client"


import Image from 'next/image';
import React, { useState } from 'react';
import CountUp from "react-countup"
import img from "../../../../public/assets/developer.png"

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div>
            <div className='mt-5 xl:mt-20 container mx-auto lg:h-full flex flex-col xl:flex-row justify-center items-center gap-x-10'>
                {/* text */}
                <div
                    className='flex-1 xl:pl-24 rounded-full relative'>
                    <Image 
                     src={img}
                     alt='about_me'
                     width={600}
                     height={300}
                     className="relative rounded-full w-[60%] shadow-[0_0_100px_10px_rgba(56,189,249,0.7)] z-20 border-8  border-cyan-400 "
                     ></Image>

                    {/* <div className="absolute right-24 -top-10 bg-gradient-to-tr from-[#0690E3] via-sky-400 to-[#0690E3] w-[480px] h-[480px] z-0" style={{clipPath:"ellipse(25% 40% at 50% 50%)"}}>
                        hi
                     </div> */}

                </div>

                {/* details about */}
                <div
                    className='flex-1 flex justify-center mt-10'>
                    <div>
                        <h1 className='text-xl xl:text-2xl mb-3 text-left  font-medium bg-gradient-to-br from-[#0690E3] via-sky-400 to-[#0690E3]  text-transparent bg-clip-text'>About Me</h1>
                        <h2 className='text-2xl xl:text-4xl text-[#0690E3]'>Front-End Web Developer.</h2>
                        <p className='text-sm text-white mt-4'>Transforming ideas into captivating digital experiences ✨ | Passionate web developer with a creative mindset and a keen eye for detail. Combining the art of design with the power of coding to craft seamless and user-centric websites. Proficient in cutting-edge technologies and frameworks, I thrive on solving complex problems and delivering innovative solutions. Let&apos;s collaborate and bring your vision to life!</p>
                        {/* counter */}
                        <div className='mt-5 xl:mt-10 flex items-center justify-center lg:justify-start md:max-w-xl xl:max-w-none xl:mx-0 mx-auto'>
                            <div className='flex items-center justify-around gap-10'>
                                {/* experience */}
                                <div className='relative flex-1 after:w-[1px] after:h-full  after:bg-white/10 after:absolute after:top-0 after:left-28'>
                                    <div className='text-2xl xl:text-4xl font-extrabold text-[#0690E3] mb-2'>
                                        <CountUp start={0} end={12} duration={5}></CountUp> +
                                    </div>
                                    <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>Finished Projects</div>
                                </div>
                                <div className='relative flex-1 after:w-[1px] after:h-full  after:bg-white/10 after:absolute after:top-0 after:left-24'>
                                    <div className='text-2xl xl:text-4xl font-extrabold text-[#0690E3] mb-2'>
                                        <CountUp start={0} end={2} duration={5}></CountUp> +
                                    </div>
                                    <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>Happy Client</div>
                                </div>
                                <div className='relative flex-1 after:w-[1px] after:h-full  after:bg-white/10 after:absolute after:top-0 after:left-24'>
                                    <div className='text-2xl xl:text-4xl font-extrabold text-[#0690E3] mb-2'>
                                        <CountUp start={0} end={1} duration={5}></CountUp> +
                                    </div>
                                    <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>Experience</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;