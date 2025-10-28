import React, { Profiler } from 'react';
import { ProfilePicture } from '../../functions/ProfilePicture';




const CreatePost = ({setshowPostPopup , user}) => {
    const profile = ProfilePicture(user)

    return (
        <div className="bg-white dark:bg-dark-second shadow dark:text-dark-text font-medium px-4 py-4 mt-6 rounded-xl">
            <div  className=" flex  items-center gap-3 mb-3">
                <div className="overflow-hidden rounded-full">
                    <img src={profile} alt="" srcset="" className="w-13 aspect-square object-cover"/>
                </div>
                <div id="TextPost" onClick={()=>setshowPostPopup(true)}  className="w-full flex items-center px-4 py-4 rounded-3xl h-11 text-center bg-gray-100  dark:bg-dark-third  dark:text-dark-text cursor-pointer">
                    <span className="text-center text-gray-500 dark:text-dark-text font-normal text-xl">What's on your mind , Tuat ? </span>
                </div>
            </div>
            <div className="h-[1px] bg-gray-100 dark:bg-dark-third mb-3"></div>
            <div className=" flex items-center justify-between ">
                <div id="LiveVideo" className="flex w-1/3  justify-center cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bxs-video-plus text-4xl text-red-500"></i>
                    <span>Live video</span>
                </div>
                <div id="MediaPost" className="flex w-1/3  justify-center cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-images text-4xl text-green-500"></i>
                    <span>Photos/Video</span>
                </div>
                <div id="Activite" className="flex w-1/3  justify-center cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-smile text-4xl text-yellow-500"></i>
                    <span>Humeur/Activite</span>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;