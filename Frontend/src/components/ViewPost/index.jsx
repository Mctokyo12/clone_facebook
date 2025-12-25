
import React, { Component, useEffect, useState } from 'react'
import Comment from '../comments';
import { Link, useSearchParams } from 'react-router';
import axios from 'axios';
import Error from '../Errors';
import PostItem from './PostItem';
import { estObject } from '../../functions/Fetch';
import Header from '../Header';
import { useSelector } from 'react-redux';

const ViewPost = ()=>{


    const [searchParams] = useSearchParams()
    const [loader , setLoader] = useState(false)
    const [error , setError] = useState("")
    const postid = searchParams.get("postid")
    const AllPosts = useSelector((state) => state.postReducer);
    const [currentItem , setCurrentItem] = useState(0);
    const post  = Array.isArray(AllPosts) ? AllPosts.filter(post=> post.postid == postid)[0] : [];
    
    // const getpost = async ()=>{
    //     setLoader(true)
    //     try {
    //        const response = await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/post/${postid}`);
    //        const data = response.data;
    //        data.forEach(item => {
    //          setPost(previousState=>{
    //             return {...previousState , ...item}
    //          })
    //        });
          

    //     } catch (error) {
    //         setError("une erreur c'est produit avec le serveur")
    //     }
    // }

    // useEffect(()=>{
    //     getpost();
    // },[])

    // console.log(post);
    console.log(post);
    



    return(
        <div className="flex items-start ">
            <Header/>
            {/* <!-- heading --> */}
               
            {/* <!-- heading--> */}

            {/* <!-- Main View --> */}
            <div className="flex items-center justify-center py-2  h-screen w-full  relative ">

            
            
                <div className="flex justify-between items-center mx-8 gap-14 h-[80vh] relative w-full">

                    <div className="flex  justify-between dark:shadow items-center   absolute top-4 left-0">
                        <div className="flex gap-2 items-center  w-full " >
                            <Link to={"/"} className="rounded-full relative text-center grid place-items-center size-11  shadow dark:hover:bg-dark-third   dark:bg-dark-main  dark:text-white  bg-gray-200 cursor-pointer">
                                <i className="bx bx-x text-4xl"></i>
                            </Link>
                            <img src="/images/fb-logo.png" alt="" srcset="" className="size-11"/>
                        </div>

                    </div>

                    <div className=" items-center md:flex justify-center gap-2     top-4  absolute  right-0">

                        <div id="grid" className="rounded-full text-xl text-center xl:grid hidden  place-content-center h-12 w-12 hover:bg-gray-300 dark:hover:bg-dark-text/50 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer">
                            <i className='bx bxs-zoom-in text-2xl'></i> 
                        </div>
                    


                        <div className="rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:hover:bg-dark-text/50 dark:text-dark-text  bg-gray-200 cursor-pointer">
                            <i className="bx bxs-zoom-out text-2xl"></i>
                        </div>

                        <div className="rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:hover:bg-dark-text/50 dark:text-dark-text  bg-gray-200 cursor-pointer">
                            <i className="bx bx-exit-fullscreen text-2xl"></i>
                        </div>

                    </div>


                    <span  
                        onClick={()=>{
                            setCurrentItem(currentItem-1)
                        if (currentItem <=0  ){
                                setCurrentItem(post.files.length-1)
                            }
                        }} 
                        className="size-16   rounded-full flex items-center cursor-pointer justify-center dark:bg-dark-third/60  bg-light-third dark:text-white"
                    >
                        <i className="text-5xl bx bx-chevron-left"></i>
                    </span>


                    <div className="w-[70%] h-[90vh]  ">
                        {typeof post == "object" && post != null ? 
                            Array.isArray(post.files) && post.files.length > 0 ?
                                <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${post.files[currentItem]}`} className='object-cover  block  w-[90%]' alt="" srcset="" /> : ""
                            :""
                        }
                    </div>

                    <span 
                        onClick={()=>{
                            setCurrentItem(currentItem+1)
                        if (currentItem >= post.files.length-1 ){
                                setCurrentItem(0)
                            }
                        }} 
                        className="size-16  rounded-full flex items-center justify-center dark:bg-dark-third bg-light-third dark:bg-opacity-60 cursor-pointer dark:text-white "
                    >
                        <i className="text-5xl bx bx-chevron-right"></i>
                    </span>

                    {Array.isArray(post.files) && post.files.length > 1 &&  
                        <div className="absolute  -bottom-16  px-4 flex items-center justify-center gap-3 w-[100%] dark:bg-dark-second/75   py-4">
                            
                            {post.files.map((item , index)=>(
                                <div className={`size-26    ${index==currentItem && "border-blue border-4"} `}>
                                    <img key={index} src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} className='object-cover  block  w-full' alt="" srcset="" /> 
                                </div>
                            ))}
                            
                        </div>
                    }
                    
                </div>

                <PostItem post={post}/>




                {/* <!-- End Photos Story --> */}


                    

                {/* <!--  --> */}
            </div>
            {/* <!-- End Main  --> */}

            

            

        </div>

    )
}

export  default ViewPost ;

