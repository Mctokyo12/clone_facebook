import { useState } from "react";
import { CoverPiture, ProfilePicture } from "../../functions/ProfilePicture"
import axios from "axios";
import { update_profile } from "../../actions/user.action";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post.action";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../functions/getCroppedImg";
import Cover from "./Cover";
import ProfileMenu from "./ProfileMenu";



const HeaderProfile = ({user , setOldCoverVisble ,setVisibleProfilePicture})=>{
    const currentUser = useSelector((state) => state.userReducer);
    
    const dispath = useDispatch();
    const cover =  currentUser.userid == user.userid ?  CoverPiture(currentUser) : CoverPiture(user);
    const profile = currentUser.userid == user.userid ? ProfilePicture(currentUser) : ProfilePicture(user);



    return(
        <div className="mt-14 relative  mx-auto  dark:bg-dark-third  w-[70%]   dark:bg-opacity-35 dark:border-b dark:border-b-white bg-white shadow">
            <div className="w-full h-full ">
                
            
                <Cover user={user}/>

                <div className="mx-4 px-2 -mt-16  h-56  dark:border-b dark:border-b-white shadow relative z-10 ">
                    <div className=" flex items-center gap-4  h-full">
                        <div className="relative w-[15rem]  cursor-pointer">
                            <div className="rounded-full relative  overflow-hidden aspect-square w-full z-0 border-2 dark:border-dark-third">
                                <img src={profile} alt="" srcset="" className=" w-full aspect-square inline-block object-cover -z-1 "/>
                            </div>
                        
                            <span onClick={()=>setVisibleProfilePicture(!false)} className="flex items-center justify-center   absolute right-4  cursor-pointer bottom-2 px-2 py-2  z-30  bg-white rounded-full dark:bg-dark-main dark:text-white">
                                <i className="bx bxs-camera text-xl"></i>
                            </span>
                            
                            <div className="absolute top-0 left-0 w-full  h-full rounded-full  dark:bg-dark-third/40   dark:hover:bg-dark-third/40 bg-light-third/0 hover:bg-light-third/10 cursor-pointer">
                                
                            </div>
                            
                        </div>
                        <div className="w-full mt-12">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center  font-bold text-3xl cursor-pointer  px-4 py-2 w-fit z-20 gap-2n dark:text-white">
                                    {user.firstname} {user.lastname}
                                </div>
                            </div> 
                            {/* <!-- <div className="flex items-center cursor-pointer mt-1  px-4 py-2 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-dark-main dark:text-white">
                                Tchio hurs
                            </div> --> */}
                            <div className="w-full  justify-between flex items-center relative z-10">
                                <div>
                                    <div className="flex items-center cursor-pointer mt-1  px-4 py-2 w-fit z-20 gap-2  dark:text-white">
                                        {/* <!-- Tchio hurs --> */}
                                    </div>

                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center cursor-pointer mt-1 text-white  px-2 py-3 w-fit z-20 gap-2 rounded-lg  bg-blue dark:text-white">
                                        <i className="bx bxs-plus-circle text-xl"></i>
                                        <span className="text-sm font-semibold">Add to story </span>
                                    </div>

                                    <div className="flex items-center cursor-pointer mt-1  px-2 py-3 w-fit z-20 gap-2  bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                                        
                                        <i className="bx bxs-edit-alt text-xl"></i>
                                        <span className="text-sm font-semibold">Edit profile </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <ProfileMenu/>
            </div> 
        </div>
    )
}

export default HeaderProfile