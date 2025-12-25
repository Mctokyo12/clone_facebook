
import React, { useState } from 'react';
import { delete_comment, edit_comment } from '../../actions/post.action';
import { useDispatch } from 'react-redux';
import { data } from 'react-router';
import { ProfilePicture } from '../../functions/ProfilePicture';
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs';

const GetComment = ({comment , setError}) => {

    const [visible , setVisible] = useState(false);
    const [showEdit , setShowEdit] = useState(false)
    const [content , setContent] = useState(comment.comment)
    const profile = ProfilePicture(comment);
    const dispatch = useDispatch();
    dayjs.extend(relativeTime);
    const update_comment  = ()=>{
        try{
            const data = {
                id: comment.commentid,
                postid: comment.postid,
                comment: content
            }
            dispatch(edit_comment(data , comment.commentid))
            setShowEdit(false)
        }catch (error){
            setError("Une erreur s'est produit. Veuillez Ressayer")
            
        }
    }

    const del_comment  = ()=>{
        try{
            const data = {
                id: comment.commentid,
                postid: comment.postid,
            }
            
            dispatch(delete_comment(data , comment.commentid))
            setShowEdit(false)
        }catch (error){
            setError("Une erreur s'est produit. Veuillez Ressayer")
            
        }

    }

    return (
        <>
            <div className="flex items-center gap-2">
                <div className=" self-start overflow-hidden rounded-full">
                    <img src={profile} alt="" className="h-10 w-10 object-cover aspect-square"/>
                </div>
                <div className="flex-1">
                    <div className="flex gap-2 relative">
                        <div className={`${showEdit ? "w-full" : "bg-light-secondary dark:bg-dark-third"}   px-4 max-w-[calc(100%-100px)] text-justify py-2 rounded-2xl text-gray-500 dark:text-dark-text`}>
                            <h4 className="font-semibold">{comment.lastname}.{comment.firstname}</h4>
                            {showEdit &&   
                                <div>
                                    <div className="px-3 py-3 rounded-3xl w-full  bg-light-secondary dark:bg-dark-third  flex gap-2 items-start  flex-col text-gray-500 dark:text-dark-text  justify-start">
                                        <input type="text" placeholder="Write a comment" className="border-transparent bg-transparent outline-none pl-1 w-4/5" value={content} onChange={(e)=>setContent(e.target.value)}/>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex items-center">
                                                <span className="h-7 w-7  grid place-items-center rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-main text-gray-500 dark:text-dark-text">
                                                    <i className="bx bx-smile text-xl "></i>
                                                </span>
                                                <span className="h-7 w-7  grid place-items-center rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-main text-gray-500 dark:text-dark-text">
                                                    <i className="bx bx-camera text-xl "></i>
                                                </span>
                                                <span className="h-7 w-7   grid place-items-center rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-main text-gray-500 dark:text-dark-text">
                                                    <i className="bx bx-file text-xl "></i>
                                                </span>
                                                <span className="h-7 w-7  grid place-items-center rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-main text-gray-500 dark:text-dark-text">
                                                    <i className="bx  bx-happy-heart-eyes text-xl "></i>
                                                </span>
                                            </div>
                                            <span onClick={()=>update_comment()} className={`bx bx-send ${comment ? " cursor-pointer text-blue":"cursor-no-drop"} text-2xl  self-end `}></span>
                                        </div>
                                    </div>
                                    Click there to 
                                    <span className='text-blue  font-semibold  cursor-pointer' onClick={()=>setShowEdit(false)}> cancel</span>
                                </div>
                                // <form  className=" w-full  bg-gray-100  dark:bg-dark-third flex   items-center  justify-between text-gray-500 dark:text-dark-text ">
                                //     <input type="text" id=""  value={content}  className="border-transparent bg-transparent outline-none pl-1 w-[80%]"  onChange={(e)=>setContent(e.target.value)}/>
                                //     <span id="" onClick={()=>update_comment()} className={`bx bx-send text-2xl ${content ? " cursor-pointer text-blue":"cursor-no-drop"}`}></span>
                                // </form>
                            }
                            {!showEdit && <p className="font-normal text-wrap ">{comment.comment}</p> }
                        </div>
                        {!showEdit && 
                            <div id="more-cmt" className="py-1 px-1 self-center  rounded-full grid place-items-center cursor-pointer dark:text-dark-text dark:hover:bg-dark-third  hover:bg-gray-200 text-gray-500">
                                <span className="bx bx-dots-horizontal-rounded text-xl" onClick={()=>setVisible(!visible)}></span>
                            </div>
                        }
                        {visible && 
                            <div id="cmt-option" className="px-2 absolute right-0   py-2 w-48 dark:bg-dark-second dark:shadow-dark-main shadow-xl dark:text-white bg-gray-200 text-gray-500 rounded-lg ">
                                
                                <a  onClick={()=>{
                                        setShowEdit(!showEdit)
                                        setVisible(false)
                                    }} href="#" className="flex gap-4  dark:hover:bg-dark-third  hover:bg-gray-200 px-1 py-1 justify-start text-justify  rounded-md items-center">
                                    <i className="bx bx-edit-alt text-xl"></i>
                                    <span className="text-lg  justify-self-start font-semibold">edit</span>
                                </a>

                                <a onClick={()=>del_comment()} href="#" className="flex gap-4 dark:hover:bg-dark-third  hover:bg-gray-200 px-1 py-1 justify-start text-justify  rounded-md items-center">
                                    <i className="bx bx-trash text-xl"></i>
                                    <span className="text-lg font-semibold">Delete</span>
                                </a>
                        
                            </div>
                        }

                    </div>

                    {!showEdit && 
                        <div className="text-gray-500 mt-2 dark:text-dark-text text-sm">
                            <span>Like .</span>
                            <span>Reply .</span>
                            <span className="font-normal">{dayjs(comment.created_at).fromNow()} </span>
                        </div>
                    }

                    {/* <!-- <div className="flex  items-center gap-2 mt-2"> */}
                        {/* <div className="self-start overflow-hidden rounded-full">
                            <img src="src/images/avt-7.jpg" alt="" className="h-10 w-10 object-cover"/>
                        </div>
                        <div>
                        <div className="bg-gray-100 dark:bg-dark-third px-4 py-2 max-w-[calc(100%-100px)] text-justify rounded-2xl text-gray-500 dark:text-dark-text">
                            <h4 className="font-semibold">John doe</h4>
                            <p className="font-normal text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="text-gray-500 mt-2 dark:text-dark-text text-sm">
                            <span>Like .</span>
                            <span>Reply .</span>
                            <span className="font-normal">10m</span>
                        </div>
                        </div>
                        
                    </div> --> */}

                </div>
                {/* <!-- <div className="py-1 px-1 self-start  rounded-full grid place-items-center cursor-pointer dark:text-dark-text dark:bg-dark-third  bg-gray-200 text-gray-500">
                    <span className="bx bx-dots-horizontal-rounded text-xl"></span>
                </div> --> */}
            </div>
        </>
    );
};

export default GetComment;