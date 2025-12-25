import React, { useState } from 'react';
import Post from '../Posts';
import GetComment from '../comments/Comment';
import AddComment from '../comments/AddComment';
import { useSelector } from 'react-redux';
import { estObject } from '../../functions/Fetch';

const PostItem = ({post}) => {

    const [error , setError] = useState("")
    const user = useSelector((state) => state.userReducer);


    return (
        <div className="max-h-[75%] h-[70vh] -mt-18  w-full sm:w-[85%] lg:w-[70%] xl:w-1/2 dark:bg-dark-second bg-white ">
            

            <div className="bg-white w-full h-[73vh]  scrollbar overflow-y-scroll dark:bg-dark-second shadow dark:text-dark-text font-medium ">
                {estObject(post) ?  <div className='-mt-6'><Post post={post} view={true} user={user} /></div> : <div></div>}    
                {/* <!-- comment --> */}
                    <div className="px-4 mt-4">
                        {/* <!-- list coment --> */}
                            <div>
                                {estObject(post) && 
                                    Array.isArray(post.comments) &&
                                    post.comments.length > 0 ? 
                                        post.comments.map((comment , index)=>(
                                            <GetComment comment={comment} key={index} setError={setError}/>
                                        )) 
                                    : 
                                        <div className="w-full text-xl text-center"> Pas de Commentaire pour ce Post</div>
                                    
                                }

                            </div>
                        {/* <!-- end list comment --> */}
                    </div>
                {/* <!-- end comment --> */}
            </div>

            {/* <!---post comment--> */}
                <AddComment postid={post.postid}  user={user} setError={setError}/>
            {/* <!---end post comment--> */}

        </div>
    );
};

export default PostItem;