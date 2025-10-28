import { useParams } from "react-router";
import Header from "../../components/Header";
import Knowledge from "../../components/Profile/Knowledge";
import ProfileUser from "../../components/Profile/ProfileUser";
import { useEffect, useState } from "react";
import axios from "axios";
import EditPost from "../../components/EditPost";
import Confirmation from "../../components/Confirmation";
import Comment from "../../components/comments";
import CreatePostPopup from "../../components/CreatePostPopup";
import { useDispatch, useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost";
import LeftProfile from "../../components/Profile/LeftProfile";
import Post from "../../components/Posts";
import UpdateProfilePicture from "../../components/Profile/UpdateProfilePicture";
import PictureUser from "../../components/Profile/Photos";
import ProfilePicture from "../../components/Profile/ProfilePicture";
import OldCover from "../../components/Profile/OldCover";
import { PlusIcon , PencilIcon, MinusIcon, FaceSmileIcon} from "@heroicons/react/20/solid"
import HeaderProfile from "../../components/Profile/HeaderProfile";





const Profile = ({users})=>{
    const userid = useParams().id;
    const [showPostPopup, setshowPostPopup] =  useState(false)
    const [editPost , setEditPost] = useState(false);
    const [showComment , setShowComment] = useState(false)
    const [currentPost ,setcurrentPost] = useState("");
    const [postDelete , setPostDelete] = useState(false);
    const AllPosts = useSelector((state) => state.postReducer);
    const posts = Array.isArray(AllPosts) ? AllPosts.filter(post=> post.userid == userid) : [];
    // const currentUser = useSelector((state) => state.userReducer)

    const [user, setUser] = userid == users.userid ? useState(users) : useState({});
    const [visibleProfilePicture , setVisibleProfilePicture] = useState(false);
    const [oldCoverVisble , setOldCoverVisble] = useState(false);

    

    const dispatch = useDispatch();

    useEffect(()=>{

        axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/user/${userid}`).then(res=>{
            const data = res.data;
            if(users.userid == userid){
                data.token = !localStorage.getItem("token") ? "" : localStorage.getItem("token");
                if (localStorage.getItem("user")) {
                    localStorage.setItem("user" , JSON.stringify(data));
                }
            }else{
                setUser(data)
            }
        }).catch(err=>{
            console.log(err);
        })

    } , [])
    
    return (
        <div className="relative ">
            <Header/>

            <HeaderProfile
                user={user} 
                setOldCoverVisble={setOldCoverVisble} 
                setVisibleProfilePicture={setVisibleProfilePicture}
            />

            <Knowledge/>
            <div className=" mt-6 w-[67%] relative -z-10 flex items-start gap-2 mx-auto " >
                
                <LeftProfile userid={userid} />

                <div className="w-[60%] ">
                    {/* <!-- CREATED POST  -->  */}
                        {
                            userid == users.userid ? 
                            <CreatePost user={users}  setshowPostPopup={setshowPostPopup}/> 
                            : <CreatePost user={user}  setshowPostPopup={setshowPostPopup}/>
                        }

                    {/* <!-- END CREATED POST  --> */}

                    {/* <!-- Display Posts --> */}
                        <div className="bg-white dark:bg-dark-second shadow mt-4 dark:text-dark-text font-medium px-4 py-4 rounded-xl">
                            <div  className=" flex  items-center justify-between mb-3">
                                <h1 className="font-bold text-xl">Posts</h1>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center cursor-pointer mt-1  px-2 py-2 w-fit z-20 gap-2 rounded-lg dark:bg-dark-third dark:text-white dark:hover:bg-dark-text dark:hover:bg-opacity-30">
                                        <i className="bx bx-slider-alt text-xl"></i>
                                    </div>

                                    <div className="flex items-center cursor-pointer mt-1  px-2 py-2 w-fit z-20 gap-2 rounded-lg dark:bg-dark-third dark:text-white dark:hover:bg-dark-text dark:hover:bg-opacity-30">
                                        <i className="bx bx-cog text-xl"></i>
                                        <span className="font-semibold text-sm">Manage Posts</span>
                                    </div>

                                </div>

                            </div>
                            <div className="h-[1px] bg-gray-100 dark:bg-dark-third mb-3"></div>
                            <div className=" flex items-center justify-between ">
                                <div className="flex items-center justify-center text-blue-500 cursor-pointer w-1/2 py-3 border-b-[3px] gap-2 border-blue-500">
                                    <i className="text-2xl bx bx-menu"></i>
                                    <span className="text-sm">List view</span>
                                </div>
                                <div className="flex items-center justify-center cursor-pointer w-1/2 py-3 border-b-[3px] border-b-transparent gap-2 ">
                                    <i className="text-2xl bx bx-grid-alt"></i>
                                    <span className="text-sm">Grid view </span>
                                </div>
                            </div>
                        </div>
                    {/* <!-- end Display posts --> */}

                    {/* <!-- post list --> */}
                        {Array.isArray(posts) && posts.map((post , index)=>(
                            <Post post={post} key={index} user={user}  setShowComment={setShowComment} setEditPost={setEditPost} setPostDelete={setPostDelete} setcurrentPost={setcurrentPost}/>
                        )) }
                    {/* {/* <!--end Post  --> */}

                </div>

        
            </div> 

            {visibleProfilePicture && 
                <ProfilePicture setVisibleProfilePicture={setVisibleProfilePicture}
            />}

            {oldCoverVisble && 
                <OldCover setOldCoverVisble={setOldCoverVisble} />
            }
            <CreatePostPopup setshowPostPopup={setshowPostPopup} showPostPopup={showPostPopup} user={user} />
            {editPost && 
                <EditPost  user={user} setEditPost={setEditPost} editPost={editPost} currentPost={currentPost} 
            /> }
            <Confirmation currentPost={currentPost} setPostDelete={setPostDelete}  postDelete={postDelete}/>
            <Comment currentPost={currentPost} Posts={posts}  showComment={showComment} setShowComment={setShowComment}/>

        </div>
    )
}

export default Profile;