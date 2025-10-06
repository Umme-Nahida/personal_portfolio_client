'use client'
import React from 'react';
import {motion} from 'framer-motion'
import { fadeIn } from '../../../../variants';
import ServiceSlider from '@/components/modules/work/WorkSlider';
import { IWorkSlides } from '@/types/types';
// import PartiClesContainer from '@/components/PartiClesContainer';

const ProjectInfo = ({workSlides}:{workSlides:IWorkSlides}) => {
    return (
        <div className='flex flex-col xl:flex-row items-center gap-x-8 '>
            {/* text */}
            <div className=' text-center lg:text-left mx-auto mb-5 lg:mb-0 xl:text-left xl:w-[30vw] '>
                <motion.h1
                    variants={fadeIn('up', 0.2)}
                    animate='show'
                    exit='hidden'
                    initial='hidden'
                    className='xl:mb-8 my-2 text-2xl xl:text-4xl text-[#0690E3] '>My Project</motion.h1>
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    animate='show'
                    initial='hidden'
                    exit='hidden'
                    className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>Each project here reflects my dedication, creativity, and expertise. From frontend aesthetics to backend efficiency, I ensure every detail is polished</motion.p>

            </div>
            <motion.div
                variants={fadeIn("down", 0.6)}
                animate='show'
                exit='hidden'
                initial='hidden'
                className='w-full xl:max-w-[65%]  lg:my-10 lg:mx-0'>

                {/* slider */}
                <ServiceSlider key={workSlides.id} workSlides={workSlides}></ServiceSlider>
            </motion.div>
        </div>
    );
};

export default ProjectInfo;