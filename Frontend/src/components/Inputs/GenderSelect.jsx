import React from 'react';

const GenderSelect = ({genderror , register}) => {
    return (
        <div className='flex flex-col relative'>
            <span className="text-sm text-start mb-2 ">Gender</span>
            <div className="flex items-center gap-2 justify-between">
                <span className={`border ${genderror ? "border-[#b94a48]" : "border-gray-300 "}   flex items-center justify-between placeholder:text-lg dark:border-dark-text bg-transparent rounded-md px-2 w-full  py-2`}>
                    <label >Femme</label>
                    <input type="radio" name="gender" value="Female" {...register("gender")} />
                </span>
                <span className={`border ${genderror ? "border-[#b94a48]" : "border-gray-300 "} flex items-center justify-between placeholder:text-lg dark:border-dark-text bg-transparent rounded-md px-2 w-full  py-2`}>
                    <label >Homme</label>
                    <input type="radio" name="gender"   value="Male"  {...register("gender")}/>
                </span>
                <span className={`border ${genderror ? "border-[#b94a48]" : "border-gray-300 "}  flex items-center justify-between placeholder:text-lg dark:border-dark-text bg-transparent rounded-md px-2 w-full  py-2`}>
                    <label >Personnalise</label>
                    <input type="radio" value="custom" name="sex" />
                </span>
            </div>

            <div 
                className={ 
                        `w-full  mt-4 md:mt-0 ${genderror ? "" : "hidden"}  bg-[#b94a48] relative rounded-sm text-xs text-white px-2.5 py-4 
                        md:-left-80 md:-translate-y-1/2 md:w-[300px] md:top-1/2  md:absolute `
                    }
                >
                    {genderror && genderror.message}
                <span 
                    className={
                        `absolute -top-2 left-3 rotate-45 bg-[#b94a48] h-4 w-4 md:left-72.5  md:top-1/2 md:-translate-y-1/2`
                    }
                ></span> 
            </div>

        </div>
    );
};

export default GenderSelect;