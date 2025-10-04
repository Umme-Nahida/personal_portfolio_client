
import React from 'react';

const ContactInfo = ({icon,title}:any) => {
    return (
        <div className='p-5 my-5 xl:mb-10 xl:p-5 border border-[#0690E3] bg-blue-400/5 backdrop-blur-2xl flex flex-col items-center justify-center gap-5 text-center '>
            <div className='p-4  rounded bg-gradient-to-br from-sky-400 via-[#0690E3] bg-blue-400/20 backdrop-blur-lg'>
                {icon}
            </div>
            <p className='text-sm font-medium'>{title} </p>
        </div>
    );
};

export default ContactInfo;