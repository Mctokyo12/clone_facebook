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


const Post = ({post , user  , setEditPost, setcurrentPost , setPostDelete , setShowComment}) => {
    const dispatch = useDispatch();
    const [postMenu , setPostMenu] = useState(false)
    const [reacts , setReacts] = useState("")
     const [visibleReacts , setVisibleReacts] = useState(false)
    const content = Array.isArray(post.post) ? post.post : [];
    const images  = Array.isArray(post.files)? post.files : [] ;
    const comments = Array.isArray(post.comments)? post.comments : [] ;
    const likes  =  Array.isArray(post.likes) ? post.likes: [];
    const types = likes.map((like , index)=> like.type);
    const typesv1 = types.filter((like , index)=> types.indexOf(like) == index);
    const userLike = likes.filter(like => like.userid == user.userid)
    const coverPage = "";
    const profilePage = "";

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
        <div className="bg-white  relative dark:bg-dark-second shadow dark:text-dark-text font-medium  py-4 mt-6 rounded-xl">

            {/* <!-- Auteur --> */}
                <div className=" flex items-center gap-2 justify-between px-4">
                   <div className=" flex items-center gap-2">
                        <div  className="w-10 aspect-square relative ">
                            <div className=" overflow-hidden rounded-full">
                                <img src={profile} alt="" srcset="" className="w-full aspect-square object-cover"/>
                            </div>
                            <span className=" w-3 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h4 className="text-lg">{`${post.lastname}.${post.firstname} `}</h4>
                                {
                                    post.is_profile_picture == 1  ? <span className=' font-medium'> a modifier a sa photo de profile</span> :
                                    post.is_cover_picture == 1  ? <span className='font-med'>  a modifier a sa photo de couverture </span> : ""
                                }
                            </div>
                                
                            <span className="text-base font-light">38m</span>
                        </div>
                   </div>
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
            {postMenu && <PostMenu setEditPost={setEditPost} post={post} setPostDelete={setPostDelete} setPostMenu={setPostMenu} setcurrentPost={setcurrentPost}/>} 
            {/* fin post menu */}

            {/* <!-- Medio Content --> */}
                {images && 
                    <div className={`mt-4 -z-0
                        ${
                            images.length == 1 ? "grid_1" :
                            images.length == 2 ? "grid_2":
                            images.length == 3 ? "grid_3":
                            images.length == 4 ? "grid_4":
                            images.length == 5 ? "grid_5": ""

                        }
                        `} >
                        {images && images.map((img , index)=>(
                            <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${img}`} alt=""  className={`object-cover} img-${index}`} key={index}/>
                        ))} 

                    </div>
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
                    <span>{comments.length > 0 && comments.length} comments 66 Shares</span>
                </div>

                <div className="mt-4 px-4">
                    <div className="h-[1px] bg-gray-100 dark:bg-dark-third mb-2  "></div>
                    <div className="flex items-center justify-between  mb-2 px-4">
                        {<Likes userLike={userLike} visibleReacts={visibleReacts} setVisibleReacts={setVisibleReacts} like_post={Like_post}/>}
                        <div  onClick={
                                ()=>{
                                    setShowComment(true)
                                    setcurrentPost(post.postid)
                                }} 
                            className="flex text-center justify-center cursor-pointer items-center px-2 py-2  rounded-lg  hover:bg-gray-100 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text gap-2 w-1/3 hover:">
                            <i className="bx bx-comment text-2xl"></i>
                            <span className="dark:text-dark-text ">Comment</span>
                        </div>
                        <div className="flex text-center items-center cursor-pointer justify-center px-2 py-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text gap-2 w-1/3">
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
}

Post.defaultProps = {
  post: {},
  user: {},
  setEditPost: ()=>false,
  setcurrentPost: ()=>false,
  setPostDelete: ()=>false,
  setShowComment: ()=>false,
}

export default Post;