import React, { useState } from 'react';
import Header from '../../components/Header';
import Left from '../../components/Home/Left';
import Right from '../../components/Home/Right';
import Stories from '../../components/Home/Stories';
import CreatePost from '../../components/CreatePost';
import Post from '../../components/Posts';
import CreatePostPopup from '../../components/CreatePostPopup';
import Confirmation from '../../components/Confirmation';
import { useSelector } from 'react-redux';
import EditPost from '../../components/EditPost';
import Comment from '../../components/comments';
import { HashLoader} from "react-spinners";
import ViewPost from '../../components/ViewPost';
import Shared from '../../components/shared';

const Home = ({user , FriendQuery}) => {

    const [showPostPopup, setshowPostPopup] =  useState(false)
    const [showSharePopup , setShowSharePopup] = useState(false)
    const [editPost , setEditPost] = useState(false);
    const [showComment , setShowComment] = useState(false)
    const [currentPost ,setcurrentPost] = useState("");
    const [postDelete , setPostDelete] = useState(false);
    
    const posts = useSelector((state) => state.postReducer);

    return (
        <>
            <div className='bg-light-secondary  dark:bg-dark-main absolute top-0 left-0 w-full h-dvw'>
                <Header user={user}/>
                <Left/>
                <Right 
                    userid={user.userid}
                    FriendQuery = {FriendQuery}
                />
                <div className='absolute z-0 xl:w-2/5  lg:w-2/3 w-full left-[50%] top-20 -translate-x-[50%]  pt-3 px-2 max-md:mt-20 max-sm:mt-20'>
                    <Stories/>
                    <CreatePost setshowPostPopup={setshowPostPopup} user={user}/>
                    {   
                        Array.isArray(posts) && posts.length > 0 ?

                        posts.map((post , index)=>(
                            <Post post={post} 
                                key={index} 
                                user={user}  
                                setShowComment={setShowComment} 
                                setEditPost={setEditPost} 
                                setPostDelete={setPostDelete} 
                                setcurrentPost={setcurrentPost}
                                setShowSharePopup={setShowSharePopup}
                            />
                        )) 
                        : 
                        <div className=' text-2xl  font-semibold text-center mt-4 text-light-text dark:text-dark-text'>
                            Aucun Post l'instant
                        </div>
                    }
                    
                </div>
            </div>

            <CreatePostPopup 
                setshowPostPopup={setshowPostPopup} 
                showPostPopup={showPostPopup} user={user} 
            />
            {editPost && 
                <EditPost  
                    user={user} 
                    setEditPost={setEditPost} 
                    editPost={editPost} 
                    currentPost={currentPost} 
            /> }
            <Confirmation 
                currentPost={currentPost} 
                setPostDelete={setPostDelete}  
                postDelete={postDelete}
            />
            <Comment 
                currentPost={currentPost} 
                Posts={posts}  
                showComment={showComment} 
                setShowComment={setShowComment}
            />
            {showSharePopup && 
                <Shared
                    setShowSharePopup={setShowSharePopup}
                    currentPost={currentPost} 
                    user={user}
                />
            }
            
        </>
    );
};

export default Home;