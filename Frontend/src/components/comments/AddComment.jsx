import axios from 'axios';
import React, { useState } from 'react';
import { add_comment } from '../../actions/post.action';
import { useDispatch } from 'react-redux';
import { ProfilePicture } from '../../functions/ProfilePicture';

const AddComment = ({postid , user , setError}) => {
    const [comment , setComment] = useState("");
    const dispatch = useDispatch();
    const profile = ProfilePicture(user);
     
    const add_comments = async ()=>{
        try {
            const data ={
                postid: postid,
                userid: user.userid,
                comment: comment
            }

            dispatch(add_comment(data))
            setComment("");

        } catch (error) {
            setError("Une erreur s'est produit. Veuillez Ressayer")
        }

    }





    return (
        
        <div className="flex dark:bg-dark-second py-4 px-4 bg-light-primary items-center gap-2  ">
            
            <div className="overflow-hidden rounded-full">
                <img src={profile} alt="" className="h-10 w-10 object-cover"/>
            </div>

            <div className="px-3 py-3 rounded-3xl w-full bg-light-third/65  dark:bg-dark-third  flex gap-2 items-start  flex-col text-gray-500 dark:text-dark-text  justify-start">
                <input type="text" placeholder="Write a comment" className="border-transparent bg-transparent outline-none pl-1 w-4/5" value={comment} onChange={(e)=>setComment(e.target.value)}/>
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
                    <span onClick={()=>add_comments()} className={`bx bx-send ${comment ? " cursor-pointer text-blue":"cursor-no-drop"} text-2xl  self-end `}></span>
                </div>
            </div>

        </div>
    );
};

export default AddComment;