import { useSelector } from "react-redux"
import MenuItem from "./MenuItem"
import { useEffect, useState } from "react"
import Confirmation from "../Confirmation"


const PostMenu =  ({post ,  setEditPost , setPostMenu , setcurrentPost ,setPostDelete})=>{
    const user = useSelector((state)=>state.userReducer)
    const [test , setTest] = useState(false);

    useEffect(()=>{
        (post.userid == user.userid) ? setTest(true) : setTest(false);
    } , [])

    

    return (
        <div className="absolute  w-80 bg-light-primary   dark:bg-dark-third z-10 dark:text-dark-text  shadow-box px-2 py-2  right-10 top-14 rounded-lg">
            
            <img src={`/icons/Arrow.svg`} alt=""  className="size-10 absolute -right-2 -top-4 rotate-90 "/>
            
            <ul>
                <MenuItem icon={"pin_icon"} title={"Pin Post"}/>

                <MenuItem  icon={"save_icon"} title={"Save Post"} subtitle={"Add this to you save items"}/>

                <div className="w-full bg-light-third h-[2px] my-2 dark:bg-dark-third"></div>
                
                { test && 
                    <div onClick={()=>{
                        setEditPost(true); 
                        setcurrentPost(post.postid);
                        setPostMenu(false);
                    }}>
                        <MenuItem icon={"edit_icon"} title={"Edit Post"}/>
                    </div> 
                }


                <MenuItem image={"/icons/lock.png"} title={"Edit Audience"} />

                <MenuItem  icon={"turnOffNotifications_icon "} title={"Turn off notifications for this post"}/>

                <MenuItem  icon={"delete_icon "} title={"Turn off translations"}/>
                {
                    test && 
                    <div>
                        <MenuItem  icon={"date_icon "} title={"Edit Date"} />
                    </div>
                }
                    

                <MenuItem  icon={"refresh_icon "} title={"Refresh share attachment"}/>

                {
                    test && 
                    <div >
                        <MenuItem  icon={"archive_icon "} title={"Move to archive"}/>
                    </div>
                }    

                {test && 
                    <div 
                    
                        onClick={()=>{
                        setcurrentPost(post.postid);
                        setPostMenu(false);
                        setPostDelete(true);
                    }}
                    
                    >
                        <MenuItem  icon={"trash_icon "} title={"Move to trash"} subtitle={"items in your trash are deleted after 30 days"}/>

                    </div>
                }

            </ul>
        </div>
    )
}

export default  PostMenu