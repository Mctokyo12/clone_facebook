import React, { useState } from 'react';
import AllMenu from './AllMenu';
import UserMenu from './OthersMenu';
import Notification from './Notification';
import Message from './Message';
import { useSelector } from 'react-redux';
import { ProfilePicture } from '../../functions/ProfilePicture';
import { Link } from 'react-router';


const Header = () => {
   const [allMenu , setallMenu] = useState(false)
   const [userMenu , setuserMenu] = useState(false)
   const [messageMenu , setMessageMenu] = useState(false)
   const [notificationMenu , setNotificationMenu] = useState(false)
   const user = useSelector((state) => state.userReducer);
   const profile = ProfilePicture(user);
//    const [visible , setVisible] = useState(0)


    return (
        <nav className=" bg-white z-20 dark:bg-dark-second dark:border-b-2 pt-3 pb-0 md:py-3 dark:border-dark-third px-3 h-16 flex flex-col items-center justify-center shadow fixed top-0 w-full max-md:h-32 md:flex-row  md:justify-between">
            {/* <!-- LEFT NAV --> */}
                <div className=" flex items-center gap-3 justify-between w-full md:w-max ">
                    <a href="#" className="inline-block md:hidden">
                        <img src="/images/fb-logo-mb.png" alt="" className="w-36" />
                    </a>
                    <a id="fb-logo" href="#"  className="hidden md:inline-block">
                        <img src="/images/fb-logo.png" alt="" className="object-cover aspect-square w-12"/>
                    </a>

                    <span id="search-back" className="rounded-full hidden text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx bx-arrow-back text-xl"></i>
                    </span>

                    <div className="flex items-center gap-1">

                        <div id="search-input" className="flex items-center cursor-pointer justify-center gap-4 bg-gray-100  dark:bg-dark-third rounded-full px-3 py-2">
                            <i className="bx bx-search text-2xl dark:text-dark-text"></i>
                            <input className="bg-transparent cursor-pointer  outline-none md:hidden hidden xl:inline-block" type="text" name="" id="" placeholder="Search facebook" />
                        </div>

                        <div className="rounded-full text-xl md:hidden grid place-items-center py-3 px-3 hover:bg-gray-300  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer  ">
                            <i className="bx bxl-messenger "></i>
                        </div>

                        <div className="rounded-full  text-xl md:hidden grid place-items-center py-3 px-3 hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer">
                            <i className="bx bxs-moon  "></i>
                        </div>

                    </div>
                </div>
            {/* <!-- END LEFT NAV --> */}

            {/* <!-- MAIN NAV--> */}
                <ul className="flex items-center max-md:w-full justify-center w-2/5">

                    <li className="w-1/5">
                        <Link to="/" className="px-2 py-3 inline-block w-full dark:text-blue-500  transition-all  text-center cursor-pointer text-blue-500 border-b-blue-500 border-b-4 relative">
                            <i className="bx bxs-home text-4xl"></i>
                        </Link>
                    </li>

                    <li className="w-1/5">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-movie-play text-4xl relative">
                                <span className="absolute bg-red-500  text-white rounded-full py-2 px-3 -top-1 -right-2 text-xs h-5 w-5 text-center flex justify-center items-center">9+</span>
                            </i>
                        </a>
                    </li>

                    <li className="w-1/5">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-store text-4xl"></i>
                        </a>
                    </li>

                    <li className="w-1/5">
                        <Link to="/friends/" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text  hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-group text-4xl"></i>
                        </Link>
                    </li>

                    <li className="w-1/5 hidden md:inline-block">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md ">
                        <i className="bx bx-layout text-4xl relative">
                            <span className="absolute bg-red-500  text-white rounded-full py-2 px-3 -top-1 -right-2 text-xs h-5 w-5 text-center flex justify-center items-center">9+</span>
                        </i>
                        </a>
                    </li>

                    <li className="w-1/5 inline-block md:hidden ">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md ">
                            <i className="bx bx-menu text-4xl"></i>
                        </a>
                    </li>
                </ul>
            {/* <!-- END MAIN NAV --> */}

            {/* <!-- RIGHT NAV --> */}
                <div className="hidden items-center md:flex justify-center gap-4 mx-4 ">

                    <div id="grid"  onClick={()=>{setallMenu(!allMenu)}} className={`  ${allMenu && "text-blue-500"}  rounded-full text-xl text-center xl:grid hidden  place-content-center h-12 w-12 hover:bg-gray-300 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer`}>
                        <i className='bx bxs-grid text-3xl'></i> 
                    </div>
                
                    <div onClick={()=>{ setMessageMenu(!messageMenu)}} className={` ${messageMenu && "text-blue-500"} rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                        <i className="bx bxl-messenger text-3xl"></i>
                    </div>

                    <div onClick={()=>{setNotificationMenu(!notificationMenu)}} className={`${notificationMenu && "text-blue"} rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer`}>
                        <i className="bx bxs-bell text-3xl"></i>
                        <span className="absolute bg-red-500 text-white rounded-full p-2 top-0 right-0 text-xs h-5 w-5  flex justify-center items-center">9</span>
                    </div>

                    <div id="user-profile" className="xl:flex  hidden items-center justify-center  relative  rounded-xl  h-12    cursor-pointer">
                        <img src={profile} alt="" className="w-12 h-12 object-cover z-10 rounded-full"/>
                        <span onClick={()=>{setuserMenu(!userMenu)}} className="absolute border-[2.5px] border-light-primary bg-light-third dark:border-dark-second z-30 dark:bg-dark-third  rounded-full p-2 bottom-0 right-0 text-xs h-1 w-1  flex justify-center items-center">
                            <i className="bx bx-chevron-down dark:text-dark-text text-xl"></i>
                        </span>
                    </div>

                </div>
            {/* <!-- RIGHT NAV --> */}

            {allMenu &&  <AllMenu/>}
            {userMenu && <UserMenu user={user}/>}
            {notificationMenu && <Notification/>}
            {messageMenu && <Message/>}
            

        </nav>
    );
};

export default Header;