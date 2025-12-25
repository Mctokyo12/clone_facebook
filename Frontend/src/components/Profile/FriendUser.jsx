import React, { useEffect, useState } from 'react';
import { postData } from '../../functions/Friend';
import { HashLoader } from 'react-spinners';
import { RemoveDouble } from '../../functions/Fetch';
import { ProfilePicture } from '../../functions/ProfilePicture';

const FriendUser = ({FriendQuery , userid}) => {
    const [friend , setFriend] = useState([]);
    const [loader , setLoader] = useState(false);
    
    

    useEffect(()=>{
        
        try {
            for (const item of FriendQuery) {
                // console.log(userid);
                
                if(item.sender === userid){
                    postData(`${import.meta.env.VITE_URL_BACKEND}/api/get-friend/${userid}` , "sender" , setFriend, setLoader)
                    break;
                }else if(item.receiver == userid){
                    postData(`${import.meta.env.VITE_URL_BACKEND}/api/get-friend/${userid}` , "receiver" , setFriend, setLoader)
                    break;        
                }
                
                break;
                
            }
           
        } catch (error) {
            console.log(error);
            
        }

    } , [FriendQuery])

    
    return (
        <div className="dark:bg-dark-second mx-auto lg:w-[67%] w-full dark:text-dark-text bg-white shadow  rounded-lg  px-4 py-4 mb-2 mt-4">
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
                {
                    loader ? 
                        <div className='flex justify-center items-center w-full '> 
                            <HashLoader color="#1876f2"  className='text-center'/> 
                        </div> 
                    : 
                        friend.length > 0 ? 
                            RemoveDouble(friend).map((item , index)=>(
                                <li className="flex cursor-pointer justify-between w-full items-center" key={index}>

                                    <div className=" flex justify-between items-center gap-4 ">
                                        <div className=" overflow-hidden size-24 rounded-xl">
                                            <img src={ProfilePicture(item)} alt="" srcset=""  className=" object-cover"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl">{item.lastname} {item.firstname}</h3>
                                            <span className="text-gray-400">1 ami(e)s en commun</span>
                                        </div>
                                        
                                    </div>

                                    <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                                        <span className="bx  bx-dots-horizontal text-lg"></span>
                                    </div>

                                </li>
                            ))
                        : 
                        <div className='font-semibold text-2xl text-light-text dark:text-dark-text'>
                            Vous n'avez aucun(e) Amis
                        </div>
                        
                }

                
            </ul>
        </div>
    );
};

export default FriendUser;