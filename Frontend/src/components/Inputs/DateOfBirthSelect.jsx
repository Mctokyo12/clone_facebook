import React from 'react';

const DateOfBirthSelect = ({bday , bmonth , byear , months , years , days ,daterror  ,handleRegisterChange}) => {

    return (
        <div className='flex   flex-col  relative'>
            <span className="text-sm text-start mb-2">Date de naissance</span>
            <div className="flex items-center gap-2 justify-between w-full">

                <select name="bday"  value={bday} onChange={handleRegisterChange}   className="border border-gray-300  placeholder:text-lg  dark:border-dark-second bg-transparent rounded-md px-2 w-full  outline-none focus:border-blue-500 py-2">
                    {days.map((day ,index)=>(
                        <option value={day} key={index}>{day}</option>
                    ))}
                </select>

                <select name="bmonth"  value={bmonth}  onChange={handleRegisterChange}   className="border border-gray-300  placeholder:text-lg  dark:border-dark-second bg-transparent rounded-md px-2 w-full  outline-none focus:border-blue-500 py-2">
                    {months.map((month,index)=>(
                        <option value={month} key={index} >{month}</option>
                    ))}
                </select>

                <select name="byear"  value={byear}  onChange={handleRegisterChange}  className="border border-gray-300  placeholder:text-lg  dark:border-dark-second bg-transparent rounded-md px-2 w-full  outline-none focus:border-blue-500 py-2">
                    {years.map((year ,index)=>(
                        <option value={year} key={index}>{year}</option>
                    ))}
                </select>
            </div>

            <div 
                className={ 
                        `w-full mt-4 md:mt-0 ${daterror ? "" : "hidden"}   bg-[#b94a48] relative rounded-sm text-xs text-white px-2.5 py-4 
                        md:-left-80 md:-translate-y-1/2 md:w-[300px] md:top-1/2  md:absolute `
                    }
                >
                    {daterror && daterror}
                <span 
                    className={
                        `absolute -top-2 left-3 rotate-45 bg-[#b94a48] h-4 w-4 md:left-72.5  md:top-1/2 md:-translate-y-1/2`
                    }
                ></span> 
            </div>
        </div>
    );
};

export default DateOfBirthSelect;