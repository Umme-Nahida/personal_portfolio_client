'use client'
import {Typewriter,Cursor} from 'react-simple-typewriter';



const TypeWriter = () => {
    return (
           <div className='mb-3 lg:mb-5 text-base md:text-3xl bg-gradient-to-t from-[#0690E3] via-sky-400 to-[#0690E3]  text-transparent bg-clip-text font-extrabold'>
              <Typewriter
                 words={['Frontend Developer', 'React Developer','MERN Stack Developer', 'Full Stack Developer']}
                 loop={true}
                 cursor
                 cursorStyle='_'
                 typeSpeed={100}
                 deleteSpeed={50}
                 delaySpeed={2000}
               />
           </div>
    );
};

export default TypeWriter;