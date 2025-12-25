import React, { useEffect, useState } from 'react';
import AddComment from '../comments/AddComment';
import Comment from '../comments/Comment'
import Likes from './Likes'
import PostMenu from './PostMenu';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { like_post } from '../../actions/post.action';
import PropTypes from 'prop-types';
import { ProfilePicture } from '../../functions/ProfilePicture';
import { CheckUrl} from '../../functions/Fetch';
import { Link } from 'react-router';
import Public from '../../svg/public';
// import Moment from 'react-moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/20/solid';
import SharePost from './SharePost';


const Post = ({post , user  , setEditPost, setcurrentPost , setPostDelete , setShowComment , setShowSharePopup , view}) => {
    const dispatch = useDispatch();
    const [postMenu , setPostMenu] = useState(false)
    const [reacts , setReacts] = useState("")
    const [visibleReacts , setVisibleReacts] = useState(false)
    const content = Array.isArray(post.post) ? post.post : [];
    const images  = Array.isArray(post.files)? post.files : [];
    const comments = Array.isArray(post.comments)? post.comments : [] ;
    const likes  =  Array.isArray(post.likes) ? post.likes: [];
    const types = likes.map((like , index)=> like.type);
    const typesv1 = types.filter((like , index)=> types.indexOf(like) == index);
    const userLike = likes.filter(like => like.userid == user.userid)
    const coverPage = "";
    const profilePage = "";
    dayjs.extend(relativeTime);
    // if (post.is_profile_picture == 1) {
        
    // }
    
    
    
    const profile = ProfilePicture(post);

    const Like_post = async (type)=>{
        const data = {
            postid: post.postid,
            userid: user.userid,
            content: "post",
            type: type,
        }
        dispatch(like_post(data , post.postid))
        setVisibleReacts(false)
    }
    
   
    return (
        <div className="bg-white  relative dark:bg-dark-second  text-light-text shadow dark:text-dark-text font-medium  py-4 mt-6 rounded-xl">

            {/* <!-- Auteur --> */}
                <div className=" flex items-center gap-2 justify-between px-4">
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
                    <span onClick={()=>{setPostMenu(!postMenu)}} className="h-8 cursor-pointer self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                        <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                    </span>
                </div>
            {/* <!-- Fin Auteur --> */}

            {/* <!-- Text Content --> */}
                
                <div className={`px-4 mt-4  ${content[1] ? 'h-[340px] bg-cover flex items-center justify-center ': ""} ` } style={{backgroundImage:  `url(${content[1]})`}}>
                    <p className=" text-justify font-normal text-lg text-gray-800 dark:text-dark-text">
                        
                        {
                            content[0]
                        }
                        

                    </p>
                </div>
            {/* <!--Fin  Text Content --> */}

            {/* post menu */}
            {postMenu 
                && 
                <PostMenu 
                    setEditPost={setEditPost} 
                    post={post} 
                    setPostDelete={setPostDelete} 
                    setPostMenu={setPostMenu} 
                    setcurrentPost={setcurrentPost}
                />
            } 
            {/* fin post menu */}
                        
            {/* post share */}
                {post.is_shared == 1 && <SharePost SharePostId={post.post_share_id}/>}
            {/* fin post share */}

            {/* <!-- Medio Content --> */}
            
                {images && 
                    
                    post.is_cover_picture == 1 || post.is_profile_picture == 1 ?
                        post.is_profile_picture == 1 ? 
                            !view ? 
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
                            :""
                        :
                        !view ?
                            <Link to={`/photos?postid=${post.postid}`} className='mt-4 -z-0'>
                                <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${images[0]}`} className='object-cover  w-full' alt="" srcset="" />
                            </Link>
                        :""
                    :
                    !view ? 
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
                    :""
                }

            {/* <!-- Fin Medio Content --> */}

            {/* <!-- details --> */}
                <div className="mt-4 flex justify-between items-center px-4 text-gray-500 dark:text-dark-text">
                    <div className="flex items-center gap-2 bg-light-primary dark:bg-dark-main rounded-lg">
                        <div class="flex items-center gap-2">
                            <div class="flex items-center px-0">
                                {
                                    typesv1.map((type , index)=>(
                                        type == 'angry' ? <img src="/reacts/angry.svg" alt="" srcset="" className=" size-6" key={index}/> :
                                        type == "love" ?  <img src="/reacts/love.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                                        type == "haha" ?  <img src="/reacts/haha.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                                        type == "sad"  ?  <img src="/reacts/sad.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                                        type == "like" ?  <img src="/reacts/like.svg" alt="" srcset=""  className=" size-6" key={index}/>:
                                        type == "wow"  ?  <img src="/reacts/wow.svg" alt="" srcset=""  className=" size-6" key={index}/> : ""

                                    ))
                                }
                                
                                
                                
                            </div>
                            <span>{likes.length > 0 && likes.length }</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>{comments.length > 0 && `${comments.length} comments`}</span>
                        <span>{post.share > 0 && `${post.share} shares`}</span>
                    </div>

                </div>

                <div className="mt-4 px-4">
                    <div className="h-[1px] bg-gray-100 dark:bg-dark-third mb-2  "></div>
                    <div className="flex items-center justify-between  mb-2 px-4">
                        {<Likes 
                            userLike={userLike} 
                            visibleReacts={visibleReacts} 
                            setVisibleReacts={setVisibleReacts} 
                            like_post={Like_post}
                        />}
                        <div  onClick={
                                ()=>{
                                    setShowComment(true)
                                    setcurrentPost(post.postid)
                                }} 
                            className="flex text-center justify-center cursor-pointer items-center px-2 py-2  rounded-lg  hover:bg-gray-100 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text gap-2 w-1/3 hover:">
                            <i className="bx bx-comment text-2xl"></i>
                            <span className="dark:text-dark-text ">Comment</span>
                        </div>
                        <div 
                            onClick={()=>{
                                setShowSharePopup(true)
                                setcurrentPost(post.postid)
                            }} 
                            className="flex text-center items-center cursor-pointer justify-center px-2 py-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text gap-2 w-1/3"
                        >
                            <i className="bx bx-share text-2xl"></i>
                            <span className="dark:text-dark-text ">Share</span>
                        </div>
                    </div>
                    <div className="h-[1px] bg-gray-100 dark:bg-dark-third"></div>
                </div>
            {/* <!-- end Details --> */}

            {/* <!-- comment --> */}
                {/* <div className="px-4 mt-4"> */}
                  {/* <!-- list coment --> */}
                    <div>
                      {/* <Comment/> */}
                    </div>
                  {/* <!-- end list comment --> */}
                  {/* <AddComment/> */}
                {/* </div> */}
            {/* <!-- end comment --> */}
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    setEditPost: PropTypes.func,
    setcurrentPost: PropTypes.func,
    setPostDelete: PropTypes.func,
    setShowComment: PropTypes.func,
    setShowSharePopup: PropTypes.func,
    view: PropTypes.bool
}

Post.defaultProps = {
  post: {},
  user: {},
  setEditPost: ()=>false,
  setcurrentPost: ()=>false,
  setPostDelete: ()=>false,
  setShowComment: ()=>false,
  setShowSharePopup: ()=>false,
  view: false
}

export default Post;