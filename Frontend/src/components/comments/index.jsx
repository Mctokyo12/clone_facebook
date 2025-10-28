import { useDispatch, useSelector } from "react-redux";
import AddComment from "./AddComment";
import GetComment from "./Comment"
import { useEffect } from "react";
import Post from "../Posts";


const Comment = ({currentPost , Posts ,showComment , setShowComment})=>{

    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer);
    const estObject = (variable) => variable !== null && typeof variable == "object"
    let post = {}
 
    if(Array.isArray(Posts)){
        post = Posts.find(post=> post.postid == currentPost)
    } 
  

    return (
        <div id="commentaire" className={`fixed overflow-y-auto z-20 top-0  ${showComment ? "opacity-100 visible" :"opacity-0 invisible"}  transition-all left-0 w-full h-full dark:bg-dark-main/85 bg-white/85 dark:text-dark-text text-gray-500`}>

            <div className="max-h-[75%] h-3/4 w-full sm:w-[85%] lg:w-[70%] xl:w-1/2 dark:bg-dark-second bg-white  absolute left-1/2  top-[20%]  -translate-x-1/2 -translate-y-[20%]">
                <div className="flex items-center justify-center py-6  border-b-2 dark:border-dark-text border-gray-300  relative w-full">
                    <h2 className="justify-self-center text-xl  font-semibold">Publication de {estObject(post) ? `${post.lastname}.${post.firstname}` : ""}</h2>
                    <div  id="CloseComment" onClick={()=>setShowComment(false)} className="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className=" bx bx-x text-4xl"></i>
                    </div>
                </div>


                <div className="bg-white w-full h-4/5 overflow-y-scroll dark:bg-dark-second shadow dark:text-dark-text font-medium  py-4  rounded-xl">
                    {estObject(post) ?  <div><Post post={post} user={user} /></div> : <div></div>}    
                    {/* <!-- comment --> */}
                        <div className="px-4 mt-4">
                        {/* <!-- list coment --> */}
                            <div>
                                {estObject(post) && 
                                   Array.isArray(post.comments) &&
                                    post.comments.map((comment , index)=>(
                                        <GetComment comment={comment} key={index}/>
                                    )) 
                                    
                                }

                            </div>
                        {/* <!-- end list comment --> */}
                        </div>
                    {/* <!-- end comment --> */}
                </div>

                {/* <!---post comment--> */}
                    <AddComment postid={currentPost} user={user}/>
                {/* <!---end post comment--> */}

            </div>

        </div>
    )
}  

export default Comment;