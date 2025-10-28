import LeftProfile from "../LeftProfile";
import RightProfile from "./RightProfile";
import CreatePostPopup from "../../CreatePostPopup"
import CreatePost from "../../CreatePost";



const ProfileUser = ({user , setcurrentPost , setshowPostPopup})=>{

    return(
        <div className="w-[67%] flex items-start gap-2 " >
            <LeftProfile/>

            <div className="w-[60%]">
                {/* <!-- CREATED POST  --> */}
                    <CreatePost user={user}  setshowPostPopup={setshowPostPopup}/>
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
                    
                {/* <!--end Post  --> */}

            </div>

    
        </div>
    )
}

export default ProfileUser;