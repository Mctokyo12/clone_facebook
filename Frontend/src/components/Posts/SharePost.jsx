import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ProfilePicture } from '../../functions/ProfilePicture';
import dayjs from 'dayjs';
import { CheckUrl } from '../../functions/Fetch';
import { Link } from 'react-router';
import Public from '../../svg/public';

import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid';


const SharePost = ({SharePostId}) => {
    const dispatch = useDispatch();
    const AllPosts = useSelector((state)=>state.postReducer);
    
    const post = Array.isArray(AllPosts) ? AllPosts.filter(post=>post.postid == SharePostId)[0]:{}
    
    const content = Array.isArray(post.post) ? post.post : [];
    const images  = Array.isArray(post.files)? post.files : [] ;
  
    dayjs.extend(relativeTime);    
    
    const profile = ProfilePicture(post);

 
   
    return (
        <div className="bg-white  relative dark:bg-dark-second  text-light-text shadow dark:text-dark-text font-medium py-2   rounded-xl">

            {/* <!-- Auteur --> */}
                <div className=" flex items-center gap-2 justify-between px-8">
                   <Link to={`/profile?id=${post.userid}`} className=" flex items-center gap-2">
                        <div  className="w-10 aspect-square relative ">
                            <div className=" overflow-hidden rounded-full">
                                <img src={profile} alt="" srcset="" className="w-full aspect-square object-cover"/>
                            </div>
                            <span className=" w-3 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h4 className="text-lg font-semibold">{`${post.lastname}.${post.firstname} `}</h4>
                                {
                                    post.is_profile_picture == 1  ? <span className=' font-normal'> a change a sa photo de profile</span> :
                                    post.is_cover_picture == 1  ? <span className='font-normal'>  a change a sa photo de couverture </span> : ""
                                }
                            </div>
                                
                            <span className="text-base font-light flex gap-1 items-center">
                                {/* {dayjs().from(dayjs(post.created_at))} */}
                                {dayjs(post.created_at).fromNow()} 
                                <div className=' size-1  bg-light-third dark:bg-dark-text rounded-full'></div>
                                {post.is_shared == 1 ? 
                                    (  
                                        <div className='flex items-center gap-0.5'>
                                            <ArrowPathRoundedSquareIcon height={25}/>
                                            <span className=''>Reshared</span>
                                        </div>

                                    )
                                    : (
                                        <Public color="#828387" />
                                    )
                                }
                                    
                                
                            </span>
                        </div>
                   </Link>
                    {/* <span onClick={()=>{setPostMenu(!postMenu)}} className="h-8 cursor-pointer self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                        <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                    </span> */}
                </div>
            {/* <!-- Fin Auteur --> */}

            {/* <!-- Text Content --> */}
                
                <div className={`px-8 mt-4  ${content[1] ? 'h-[340px] bg-cover flex items-center justify-center ': ""} ` } style={{backgroundImage:  `url(${content[1]})`}}>
                    <p className=" text-justify font-normal text-lg text-gray-800 dark:text-dark-text">
                        
                        {
                            content[0]
                        }
                        

                    </p>
                </div>
            {/* <!--Fin  Text Content --> */}
                        
                
            {/* <!-- Medio Content --> */}
            
                {images && 
                    
                    post.is_cover_picture == 1 || post.is_profile_picture == 1 ?
                        post.is_profile_picture == 1 ? 
                            
                            <div className='mt-4 -z-0 relative flex items-center justify-center flex-col'>
                                {user.cover_picture == null ?  
                                    <div className='mt-4 h-40 w-full bg-amber-300 dark:bg-dark-third'>
                                        
                                    </div>
                                    : 
                                    <Link to={`/photos?postid=${post.postid}`} className='mt-4  h-56 overflow-hidden w-full'>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${user.cover_picture}`} alt=""  className={`object-cover w-full`}/>
                                    </Link>
                                }
                                <Link to={`/photos?postid=${post.postid}`} className='rounded-full -mt-36  w-[80%]  border-4 aspect-square overflow-hidden border-light-secondary dark:border-dark-third'>
                                    <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${images[0]}`} className='object-cover  block  w-full' alt="" srcset="" />
                                </Link>
                            </div>
                            
                        :
                        
                        <Link to={`/photos?postid=${post.postid}`} className='mt-4 -z-0'>
                            <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${images[0]}`} className='object-cover  w-full' alt="" srcset="" />
                        </Link>
                        
                    :
                     
                    <Link  to={`/photos?postid=${post.postid}`} className={`mt-4 -z-0 cursor-pointer
                        ${
                            images.length == 1 ? "grid_1" :
                            images.length == 2 ? "grid_2":
                            images.length == 3 ? "grid_3":
                            images.length == 4 ? "grid_4":
                            images.length == 5 ? "grid_5": ""

                        }
                        `} >
                        {images && images.map((img , index)=>{
                            return(
                                <img src={CheckUrl(img)} alt=""  className={`object-cover img-${index}`} key={index}/>
                            )

                        })} 

                    </Link>
                    
                }

            {/* <!-- Fin Medio Content --> */}

    
            
        </div>
    );
};



export default SharePost;