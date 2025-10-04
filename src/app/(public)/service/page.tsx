"use client"
// import PartiClesContainer from '@/components/PartiClesContainer';

import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants';
import ServiceSlider from '@/components/modules/ServiceSlider';

const Service = () => {
    return (
        <div id='service' className=' lg:py-16 text-center'>
            {/* <PartiClesContainer></PartiClesContainer> */}
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-y-5 items-start justify-center gap-x-8'>
                    {/* text */}
                    <motion.div
                     variants={fadeIn('left',2.0)} 
                     exit='hidden' initial='hidden'  
                     animate='show' 
                    className=' text-center mx-auto xl:mx-0 xl:text-left xl:w-[30vw] '>
                        <h1 className='xl:mt-10 xl:mb-5 text-2xl xl:text-4xl text-[#0690E3] '>My services</h1>
                        <p className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>I specialize in crafting modern, responsive, and user-friendly web solutions.</p>

                    </motion.div>
                    <motion.div 
                     variants={fadeIn('down',0.4)}
                     animate='show'
                     initial='hidden'
                     exit='hidden'
                    className= 'w-full xl:max-w-[65%]  mr-10 lg:mt-10'>
                    {/* slider */}
                    <ServiceSlider></ServiceSlider> 
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Service;