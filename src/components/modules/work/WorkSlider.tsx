"use client"
// Import Swiper React components
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


// import required modules
import Image from 'next/image';
import Link from 'next/link';
import { IWorkSlides } from '@/types/types';

const ServiceSlider = ({ workSlides }: { workSlides: IWorkSlides[] }) => {

  return (
    
      <div className='grid grid-cols-2 gap-4 cursor-pointer px-5'>
        {
          workSlides?.map((slide, index) => (

              <div
                key={index}
                className='relative rounded overflow-hidden flex items-center justify-center group'>
                <div className='flex items-center justify-center overflow-hidden relative'>
                  {/* image */}
                  <Image src={slide.path} width={500} height={250} alt='' />
                  {/* gradient overlay */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-70 transition-all duration-700'></div>
                  {/* text content added */}
                  <div className=' absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 group-hover:translate-x-0 transition-all duration-300'>
                    <div className=' flex justify-center items-center gap-x-2 text-[13px] tracking-[0.2em] '>
                      {/* title */}
                      <Link href={slide?.clientLink} target='_blank'>
                        <div className='delay-100 font-bold text-xm border rounded-full py-2 px-3 flex items-center'>
                          GitHub
                          <button className='text-lg'>
                            <FaGithub />
                          </button>
                        </div>
                      </Link>
                      {/* title */}
                      <Link href={slide?.live} target='_blank'>
                        <div className='text-xm font-bold border rounded-full py-2 px-3 flex items-center translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 '>
                          Live
                          <button className='text-lg'>
                            <TbWorld />
                          </button>
                        </div>
                      </Link>

                      {/* icon */}
                      {/* <div className='text-xm font-bold border rounded-full py-2 px-3 flex items-center translate-y-[500%] group-hover:translate-y-0 transition-all duretion-300 delay-200'>
                                         Details
                                       <button className='text-lg'>
                                         <MdDetails />
                                       </button>
                                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
          ))
        }

      </div>
  );
};

export default ServiceSlider;