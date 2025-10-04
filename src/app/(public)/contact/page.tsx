
"use client"
import ContactForm from '@/components/modules/contact/ContactForm';
import ContactInfo from '@/components/modules/contact/ContactInfo';
// import PartiClesContainer from '@/components/PartiClesContainer';
import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
const ContactPage = () => {
    return (
        <div id='contact' className='pt-28 pb-32 xl:py-16 xl:pr-10 '>
            {/* <PartiClesContainer></PartiClesContainer> */}
            <h1 className='text-xl xl:text-3xl mb-5 text-center  font-medium bg-gradient-to-br from-[#0690E3] via-sky-400 to-[#0690E3]  text-transparent bg-clip-text'>Contact Me</h1>
            {/* contact container */}
            <div className='flex flex-col-reverse xl:flex-row items-start justify-center gap-5 xl:gap-x-10'>
                <div
                className='flex-1 w-full xl:w-[50%]'>
                  <ContactInfo 
                   icon={<FaEnvelope className='text-3xl'></FaEnvelope>}
                   title={"ummenahida20@gmail.com"}
                  ></ContactInfo>
                  <ContactInfo 
                   icon={<FaGithub className='text-3xl'></FaGithub>}
                   title={"https://github.com/Umme-Nahida"}
                  ></ContactInfo>

                </div>
                <div
                className='flex-1 w-full xl:w-[50%] xl:pt-4'>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;