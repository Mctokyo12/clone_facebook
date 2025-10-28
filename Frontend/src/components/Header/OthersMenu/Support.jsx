import React from 'react';

const Support = ({setvisible}) => {
    return (
        <div id="help" className="gap-2   px-4 py-4 w-[95%] sm:w-2/3 md:w-[50%] lg:w-[33%] xl:w-[26%] h-[40%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-gray-200 shadow">
            {/* <!-- Header Support  --> */}
            <div className="flex items-center gap-4  ">
                <span onClick={()=>setvisible(0)} className=" back help rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                    <i className="bx bx-arrow-back text-xl"></i>
                </span>
                <h4 className="font-semibold text-2xl cursor-pointer">Help & Support</h4>
            </div>
            {/* <!-- End Header Support --> */}

            {/* <!-- Help Option --> */}
            <div className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center gap-3">
                    <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx "></i>
                    </span>
                    <h4 className=" font-semibold">Help Center</h4>
                </div>
            </div>

            <div className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center gap-3">
                    <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx "></i>
                    </span>
                    <h4 className=" font-semibold">Support Inbox</h4>
                </div>
            </div>

            <div className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                <div className="flex items-center gap-3">
                    <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx "></i>
                    </span>
                    <h4 className=" font-semibold">Report a problem</h4>
                </div>
            </div>

            
            {/* <!-- end Help Option --> */}
        </div> 
    );
};

export default Support;