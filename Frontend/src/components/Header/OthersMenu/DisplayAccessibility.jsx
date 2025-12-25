import React, { useState } from 'react';
import { Theme } from '../../../functions/Theme';

const DisplayAccessibility = ({setvisible}) => {
    const [theme , setTheme] = useState(localStorage.theme)


    return (
        <div id="display" className="gap-2   px-4 py-4 w-[95%] sm:w-2/3 md:w-[50%] lg:w-[33%] xl:w-[26%] h-[77%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-light-primary shadow">
            {/* <!-- Header Display --> */}
            <div className="flex items-center gap-4 mb-2 ">
                <span onClick={()=>setvisible(0)} className="back display rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                    <i className="bx bx-arrow-back text-xl"></i>
                </span>
                <h4 className="font-semibold text-2xl cursor-pointer">Display & Accessibility</h4>
            </div>
            {/* <!-- End Header Display --> */}

            {/* <!-- Display Option --> */}
            <div className="flex gap-3 justify-between items-center px-2 py-2  cursor-pointer">
                <div className="flex items-start gap-3">
                    <span className="rounded-full text-xl self-start  relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx bxs-moon"></i>
                    </span>
                    <div>
                        <div className="mb-2">
                            <span className=" font-semibold">Dark Mode</span>
                            <p className="text-justify  text-xs">Adjust the appearance of Facebook to reduce glare and give your eyes a break.</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                                <span className="font-bold">Off</span>
                                <input type="radio" name="theme" id=""  className="cursor-pointer size-5"onChange={(e)=>{
                                    localStorage.theme = "light"
                                    e.target.checked = true
                                    Theme() 
                                }}/>
                            </span>

                            <span className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                                <span className="font-bold">On</span>
                                <input type="radio" name="theme" id="" className="cursor-pointer  size-5" onChange={(e)=>{
                                    localStorage.theme = "dark"
                                    Theme() 
                                }}/>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex gap-3 justify-between items-center px-2 py-2  cursor-pointer">
                <div className="flex items-start gap-3">
                    <span className="rounded-full text-xl self-start  relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx bxs-sun"></i>
                    </span>
                    <div>
                        <div className="mb-2">
                            <span className=" font-semibold">Compact mode</span>
                            <p className="text-justify  text-xs">Make your font size smaller so more content can fit on the screen.</p>
                        </div>
                        <div className="flex flex-col">
                            <span className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                                <span className="font-bold">Off</span>
                                <input type="radio" name="theme"    id="" className="cursor-pointer size-5" onChange={(e)=>{
                                    localStorage.theme = "dark"
                                    Theme() 
                                }}/>
                            </span>

                            <span className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                                <span className="font-bold">On</span>
                                <input type="radio" name="theme" id="" className="cursor-pointer  size-5" onChange={(e)=>{
                                    localStorage.theme = "light"
                                    Theme() 
                                }}/>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center gap-3">
                    <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx bxs-keyboard"></i>
                    </span>
                    <h4 className=" font-semibold">Keyboard</h4>
                </div>
                <span>
                    <i className="bx  bx-right-arrow-circle text-3xl"></i>
                </span>
            </div>
            
            {/* <!-- end Display Option --> */}
        </div>
    );
};

export default DisplayAccessibility;