import React, { useState } from 'react';
import Support from './Support';
import Setting from './Setting';
import DisplayAccessibility from './DisplayAccessibility';
import { ProfilePicture } from '../../../functions/ProfilePicture';
import { Link, useNavigate } from 'react-router';

const UserMenu = ({user}) => {
    const [visible , setvisible] = useState(0);
    const profile = ProfilePicture(user);
    const navigate = useNavigate()
    const logout = ()=>{
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user" , "");   
            navigate("/login")
        }
    }


    return (
        <> 
           {visible==0 && 
                <div id="profile" className="gap-2  px-4 py-4 w-[95%] scrollbar sm:w-2/3 md:w-[50%] lg:w-[33%] xl:w-[26%] h-[65%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text  bg-light-primary shadow">

                    <Link to={`/profile?id=${user.userid}`} className="flex items-center gap-4  px-2 py-2 dark:hover:bg-dark-third hover:bg-gray-200 cursor-pointer rounded-lg ">
                        <div className="h-16 w-16 overflow-hidden">
                            <img src={profile} className=" w-full aspect-square rounded-full object-cover"/>
                        </div>
                        <div className="text-justify">
                            <h4 className="font-semibold ">{user.firstname} {user.lastname}</h4>
                            <span>See you profile</span>
                        </div>
                    </Link>

                    <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-1"></div>

                    <div className="flex gap-3 items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                            <i className="bx bx-edit"></i>
                        </span>
                        <div>
                            <h4 className="font-semibold">Give Feedback</h4>
                            <span>Help us improve facebook</span>
                        </div>
                    </div>

                    <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-1"></div>

                    <div  onClick={()=>setvisible(1)} className="display-option setting flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="settings_filled_icon dark:invert-100"></i>
                            </span>
                            <h4 className=" font-semibold">Setting & privaty</h4>
                        </div>
                        <span>
                            <i className="right_icon   text-3xl"></i>
                        </span>
                    </div>

                    <div onClick={()=>setvisible(2)} className="display-option help flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center gap-3">
                             <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="help_filled_icon dark:invert-100"></i>
                            </span>
                            <h4 className=" font-semibold">Help & support</h4>
                        </div>
                        <span>
                            <i className=" right_icon text-3xl"></i>
                        </span>
                    </div>

                    <div onClick={()=>setvisible(3)} className="display-option display flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="dark_filled_icon dark:invert-100"></i>
                            </span>
                            <h4 className=" font-semibold">Display & Accessibility</h4>
                        </div>
                        <span>
                            <i className="right_icon text-3xl"></i>
                        </span>
                    </div>

                    <div  onClick={logout}  className="flex gap-3 justify-between items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <div className="flex items-center gap-3">
                            <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="bx bx-log-out "></i>
                            </span>
                            <h4 className=" font-semibold">Logout</h4>
                        </div>
                    </div>

                </div>  
           }

           {visible == 1 && <Setting setvisible={setvisible}/>}
           {visible == 3 && <DisplayAccessibility setvisible={setvisible}/>}
           {visible == 2 && <Support setvisible={setvisible}/>} 


        </>
    );
};

export default UserMenu;