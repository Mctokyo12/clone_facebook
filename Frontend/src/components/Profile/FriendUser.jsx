import React from 'react';

const FriendUser = () => {
    return (
            <div className="dark:bg-dark-second mx-auto w-[67%] dark:text-dark-text bg-white shadow  rounded-lg  px-4 py-4 mb-2 mt-4">
                <div className="w-full flex items-center justify-between">
                    <h2 className="font-semibold text-xl">Ami(e)s</h2>
                    <div id="search-input" className="flex items-center cursor-pointer justify-center gap-4 bg-gray-100  dark:bg-dark-third rounded-full px-3 py-2">
                        <i className="bx bx-search text-2xl dark:text-dark-text"></i>
                        <input className="bg-transparent cursor-pointer  outline-none md:hidden hidden xl:inline-block" type="text" name="" id="" placeholder="Search facebook" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-blue-500 cursor-pointer  font-semibold px-2 py-2 dark:hover:bg-dark-main hover:bg-gray-100">Invitations</span>

                        <span className="text-blue-500 cursor-pointer  font-semibold px-2 py-2 dark:hover:bg-dark-main hover:bg-gray-100">Retrouve des ami(e)s</span>
                        
                        <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                            <span className="bx  bx-dots-horizontal text-lg"></span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <li className="py-3 px-2  w-36 font-semibold text-lg flex  items-center  justify-center rounded-sm text-blue-500 border-b-4 border-blue-500">
                        <a href="#" >Tous les amies</a>
                    </li>

                    <li className="py-3 px-2  w-32 font-semibold text-lg flex  items-center  justify-center rounded-sm">
                        <a href="#" >Ajouts recent</a>
                    </li>

                    
                    <li className="py-3 px-2  w-32 font-semibold text-lg flex  items-center  justify-center rounded-sm">
                        <a href="#" >Suivi(e)s</a>
                    </li>
                </div>
               
                <ul className="mt-5 flex flex-wrap gap-2 w-1/2">

                    <li className="flex justify-between w-full items-center">

                        <div className=" flex justify-between items-center gap-4 ">
                            <div className=" overflow-hidden size-24 rounded-xl">
                                <img src="/images/post-2 (3).jpg" alt="" srcset=""  className=" object-cover"/>
                            </div>
                            <div>
                                <h3 className="font-semibold text-xl">Setup Ia</h3>
                                <span className="text-gray-400">1 ami(e)s en commun</span>
                            </div>
                            
                        </div>

                        <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                            <span className="bx  bx-dots-horizontal text-lg"></span>
                        </div>

                    </li>
                    
                </ul>
            </div>
    );
};

export default FriendUser;