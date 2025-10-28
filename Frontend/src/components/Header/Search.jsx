import React from 'react';

const Search = () => {
    return (
        <div id="search" className="gap-2   invisible px-4 py-4 w-[95%] sm:w-2/3 md:w-[50%] lg:w-[33%] xl:w-[25%] h-[60%]  fixed top-32 left-0 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-gray-200 shadow">
            {/* <!-- Header Search --> */}
                <div className="flex items-center justify-between gap-4 mb-2 ">
                    <span className="font-semibold">Recent searches</span>
                    <span className="text-blue-500 cursor-pointer">Edit</span>
                </div>
            {/* <!-- End Header Search --> */}

            {/* <!-- Search Option --> */}


            {/* <!-- end Search Option --> */}
        </div>

    );
};

export default Search;