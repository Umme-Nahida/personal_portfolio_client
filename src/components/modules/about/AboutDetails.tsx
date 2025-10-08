"use client"


import Image from 'next/image';
import CountUp from "react-countup"
import img from "../../../../public/assets/developer.png"
import { IAboutInfo } from '@/types/types';

const AboutDetails = ({ aboutInfo }: { aboutInfo: IAboutInfo }) => {

    return (
        <div className='my-20 xl:mt-20 container mx-auto lg:h-full flex flex-col xl:flex-row justify-center items-center gap-x-10'>
            {/* text */}
            <div
                className=' sm:flex sm:justify-center sm:items-center md:flex md:justify-center md:items-center xl:flex-1 xl:justify-start xl:pl-24 rounded-full relative'>
                <Image
                    src={img}
                    alt='about_me'
                    width={600}
                    height={300}
                    className="relative rounded-full w-[60%] shadow-[0_0_100px_10px_rgba(56,189,249,0.7)] z-20 border-8  border-cyan-400 "
                ></Image>

            </div>

            {/* details about */}
            <div
                className='xl:flex-1 xl:justify-center flex items-center justify-center mt-10'>
                <div>
                    <h1 className='text-xl xl:text-2xl mb-3 text-left  font-medium bg-gradient-to-br from-[#0690E3] via-sky-400 to-[#0690E3]  text-transparent bg-clip-text'>About Me</h1>
                    <h2 className='text-2xl xl:text-4xl text-[#0690E3]'>{aboutInfo.title} </h2>
                    <p className='text-sm text-white mt-4'>{aboutInfo.description}</p>
                    {/* counter */}
                    <div className='mt-5 xl:mt-10 flex items-center justify-start lg:justify-start md:max-w-xl xl:max-w-none xl:mx-0 mx-auto'>
                        <div className='flex items-center justify-around gap-10'>
                            {/* experience */}
                            {
                                aboutInfo.stats.map((item) => {
                                    const numericNum = parseFloat(item.value.replace(/\D/g, ""))
                                    return (
                                        <div key={item.label} className='relative flex-1 after:w-[1px] after:h-full  after:bg-white/10 after:absolute after:top-0 after:left-28'>
                                            <div className='text-2xl xl:text-4xl font-extrabold text-[#0690E3] mb-2'>
                                                <CountUp start={0} end={Number(numericNum)} duration={5}></CountUp> +
                                            </div>
                                            <div className='text-xs uppercase tracking-[1px] loading-[1.4] max-w-[100px]'>{item.label} </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutDetails;