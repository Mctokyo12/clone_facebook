import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Link, Outlet } from 'react-router';
import { FillArray, RemoveDouble } from '../../functions/Fetch';
import axios from 'axios';
import { HashLoader} from "react-spinners";

const AllFriend = ({userid , FriendQuery}) => {
    const [friend , setFriend] = useState([]);
    const [showProfile , setShowProfile] = useState(false)
    const [loader, setLoader] = useState(false)

    const postData = async(action)=> {
        setLoader(true)
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/get-friend/${userid}` , {
                "action": action
            })
            const data = response.data;
            FillArray(data , setFriend)
            setLoader(false)
        } catch (e) {
            console.log(e);
            
        }

    }
    
    useEffect(()=>{
        for (const item of FriendQuery) {
            if(item.sender === userid){
                postData("sender")
                break;
            }else if(item.receiver === userid){
                postData("receiver")
                console.log(friend);    
                break;           
            }
            break;
            
        }

    },[FriendQuery])



    return (
        <>
            <Header/>
            <div className="flex items-start flex-col   relative mt-30 lg:mt-16">

                {/* <!-- sidebar friend --> */}
                    <div className={`fixed  ${showProfile ? "max-lg:hidden" :"" } w-full  h-screen overflow-y-auto py-3 px-2 lg:w-[25%] dark:bg-dark-second dark:text-dark-text  bg-white text-gray-500 `}>
                        <div className="flex justify-between  flex-col w-full border-b-2 border-b-light-third dark:border-dark-third">
                            <div className='flex  items-center my-3 ' >
                                <Link to={'/friends/'}    className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2  mr-2 shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                                    <i className="arrow_back_icon "></i>
                                </Link>
                                <div className='flex flex-col w-full'>
                                    <h3 className="font-semibold text-sm">Ami(e)s</h3>
                                    <h2 className='text-2xl text-black font-bold dark:text-dark-text'>Tou(te)s les Ami(e)s </h2>
                                </div>
                                
                            </div>

                            <div id="search-input" className="flex items-center cursor-pointer  gap-4 bg-gray-100  dark:bg-dark-third rounded-full px-3 py-2 mb-4">
                                <i className="bx bx-search text-2xl dark:text-dark-text"></i>
                                <input className="bg-transparent cursor-pointer w-[80%] outline-none md:hidden hidden xl:inline-block" type="text" name="" id="" placeholder="Recherche dans Messenger" />
                            </div>

                        </div>
                   
                        {friend.length > 0 && <h2 className=' text-black text-base my-2'>{`${RemoveDouble(friend).length} ami(e)s`}</h2>}   
                  
                        {/* <!-- sidebar friend main--> */}
                            <ul className="mt-4 flex flex-col gap-4 ">

                                {   loader ? 
                                       <div className='flex items-center justify-center w-full'>
                                            <HashLoader color="#1876f2" /> 
                                        </div> 
                                    :
                                    friend.length != 0 ? 
                                        RemoveDouble(friend).map((user , index)=>(
                                            <Link to={`profile/${user.userid}`} key={index}  onClick={()=>setShowProfile(true)} className="notification rounded-lg px-2 py-2  hover:bg-light-secondary relative cursor-pointer dark:bg-dark-third flex items-center gap-4">
                                                <div className=" w-16 aspect-square  bg-amber-200 overflow-hidden rounded-full">
                                                    <img 
                                                        src={ 
                                                            user.profile_picture  == null ? 
                                                                user.gender == "Female" ? 
                                                                    "/images/user_female.jpg" : "/images/default_pic.png"
                                                                : 
                                                            `${import.meta.env.VITE_URL_BACKEND}/storage/${user.profile_picture}`
                                                        } 
                                                        alt=""
                                                        className="w-full aspect-auto object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className='font-semibold text-black dark:text-dark-text text-lg'>{`${user.firstname} ${user.lastname}`}</h3>
                                                    <span className="text-gray-800 dark:text-dark-text text-sm">2 amis en commun</span>
                                                </div>
                                        
                                                <span className=" h-8 cursor-pointer right-2 absolute top-1/2 -translate-y-1/2   w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                                                    <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                                                </span>
                                            </Link>
                                        )) 
                                    : "Aucun Ami(e)"
                                }

                            </ul>
                        {/* <!-- end sidebar friend main --> */}

                    </div>
                {/* <!-- end sidebar friend --> */}

                {/* <!-- Main Friend --> */}
                
                <div  className={`fixed ${showProfile ? "" : "max-lg:hidden"}  top-32 left-0 z-40  w-full  max-lg:border max-lg:border-light-third  max-lg:text-justify  h-lvh  overflow-x-hidden  lg:left-[25%] lg:top-16  px-2 lg:mx-auto   lg:w-[77%]  lg:h-[37.5rem] `}>
                    <div className="dark:text-dark-text  mx-auto lg:w-[90%] ">

                        {!showProfile && 
                            <h3 className='text-light-text font-bold absolute top-1/2 -translate-y-1/2 text-2xl dark:bg-dark-textrk-text'>Selection des noms des personnes pour avoir une apercu de leur profile.</h3>
                        }

                        <Outlet />
                    </div>
                </div>
                
                {/* <!-- End Main  --> */}
            </div>
        </>
    );
};

export default AllFriend;