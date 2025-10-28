
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import React, { useState } from 'react';


const RegisterInput = ({type , placeholder , name ,register , errors , error}) => {

    return (
        <div className={`flex gap-4 ${errors && name=='email' || name=='password' ? "md:mb-4" :"" }  h-full relative justify-center flex-col w-full   items-center`}>
            
            <input type={type} placeholder={placeholder}  name={name} className={`placeholder:text-lg border ${!errors && error == ""  ? 'border focus:border-blue-500':'border-[#b94a48]'} outline-none    dark:border-dark-second bg-transparent rounded-md px-2 w-full py-2`} {...register(name)}/>
            
            <div 
                className={ 
                    `w-full ${!errors && error == "" ? "hidden": "" }  bg-[#b94a48]  relative rounded-sm text-xs text-white px-2.5 py-4 
                    ${name == "lastname" ? "md:-right-56" : name =="firstname" ? "md:-left-55" : "md:-left-82  md:w-[300px]"} md:top-1/2 md:-translate-y-1/2  md:absolute `
                }
            >
                {errors && errors.message || error && error} 
                
                <span className={
                    `absolute -top-2 left-3 rotate-45 bg-[#b94a48] h-4 w-4 ${name == "lastname" ? "md:-left-2 ": name == "firstname" ? "md:left-46":"md:left-73"} md:top-1/2 md:-translate-y-1/2`}
                ></span> 
            </div>
            

            <ExclamationCircleIcon className={`size-6 ${!errors && error == "" ? 'hidden':''} text-[#b94a48] mr-1 absolute right-0 top-2 `}/>
        </div>
    );
};

export default RegisterInput;