import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';


const LoginInput = ({type , placeholder , name , error , register }) => {
    
    return (
        <div className={`flex gap-4 mb-4 ${error ? "md:mb-8" : ""}  h-full relative justify-center ${name=="password" ? " flex-col-reverse":"flex-col"}  w-full   items-center`}>
            
            <div className={ 
                    `w-full md:w-[300px] ${error ? "" : "hidden"}   bg-[#b94a48] relative rounded-sm text-xs text-white px-2.5 py-4 
                    md:-left-80 md:-translate-y-1/2  md:top-1/2  md:absolute  `
                }
            >
                {error && error.message}
                
                
                <span className={
                    `absolute  rotate-45 bg-[#b94a48] h-4 w-4 ${name == "email" ? "left-3 -bottom-1.5 ": "-top-1.5 left-3"} md:left-73 md:top-1/2 md:-translate-y-1/2`}
                ></span> 
            </div>

            <input type={type} placeholder={placeholder}  name={name} className={`placeholder:text-lg border  ${error ? "border-[#b94a48] " : "focus:border-blue-500"} outline-none  dark:border-dark-text/85 bg-transparent rounded-md px-2  w-full py-2`} {...register(name)}/>


            <ExclamationCircleIcon className={`size-6 ${error ? "" : "hidden"} text-[#b94a48] mr-1 absolute right-0 md:top-2 ${name=="email" ? " top-22.5":"top-2" }`}/>
        </div>
    );
};

export default LoginInput;