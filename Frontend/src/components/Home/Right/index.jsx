import React from 'react';





const Right = () => {

    return (
       <div className="fixed right-0 hidden top-20 mt-3 mr-6 xl:block w-1/6">
            <div>
                <div className="flex text-xl items-center justify-between">
                    <h4 className=" font-semibold text-gray-500 dark:text-dark-text ">Friend Resquets</h4>
                    <span className="px-2 py-2 rounded-lg  cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third text-blue-500">See All</span>
                </div>
                <ul className='mt-2'>
                    <li>
                        <a href="#" className="flex gap-4 items-center pl-2 py-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
                            <img src="/images/avt-4.jpg" alt="" className="rounded-full aspect-square object-cover  w-[4.5rem]"/>
                            <div>
                                <span className="text-gray-500 text-lg dark:text-dark-text font-semibold">Sakura Hinata <span className=" font-light">6d</span> </span>
                                <div className="flex items-center mt-2 gap-2 w-full">
                                    <span className="py-1 font-semibold text-center w-1/2 bg-blue-500 text-white rounded-lg">Confirm</span>
                                    <span className="py-1 font-semibold text-center w-1/2  bg-gray-300  text-black rounded-lg">Delete</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                
                
            </div>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-dark-third mt-9"></div>
            <div className="flex items-center justify-between mt-3">
                <h4 className=" font-semibold text-gray-500 dark:text-dark-text text-xl">Contacts</h4>
                <div className="flex items-center justify-between">
                    <span className="px-2 py-2 cursor-pointer self-start   grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                        <i className="bx bx-search text-xl font-semibold"></i>
                    </span>
                    <span className="px-2 py-2 cursor-pointer self-start  grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                        <i className="bx bx-dots-horizontal-rounded font-semibold text-xl"></i>
                    </span>
                </div>
            </div>
            <div className="mt-2">
                <ul>
                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                            <div className="relative">
                                <div className="overflow-hidden rounded-full">
                                    <img src="s/images/profile.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                                </div>
                                <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                            </div>
                            <h4 className="font-semibold">Tokyo</h4>
                        </a>
                    </li>

                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                        <div className="relative">
                            <div className="overflow-hidden rounded-full">
                                <img src="/images/avt-2.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                            </div>
                            <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <h4 className="font-semibold">Pogas Di Ace</h4>
                        </a>
                    </li>

                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                        <div className="relative">
                            <div className="overflow-hidden rounded-full">
                                <img src="/images/avt-3.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                            </div>
                            <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <h4 className="font-semibold">Roronoa Zoro</h4>
                        </a>
                    </li>

                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                        <div className="relative">
                            <div className="overflow-hidden rounded-full">
                                <img src="/images/avt-4.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                            </div>
                            <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <h4 className="font-semibold">Ussop</h4>
                        </a>
                    </li>

                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                        <div className="relative">
                            <div className="overflow-hidden rounded-full">
                            <img src="/images/avt-5.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                            </div>
                            <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <h4 className="font-semibold">Nami</h4>
                        </a>
                    </li>

                
                    <li className="mb-1">
                        <a href="#" className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                            <div className="relative">
                                <div className="overflow-hidden rounded-full">
                                    <img src="src/images/avt-7.jpg" alt="" srcset="" className="w-12 aspect-square object-cover  font-bold"/>
                                </div>
                                <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                            </div>
                            <h4 className="font-semibold">Monky D Luffy</h4>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Right;