import { use, useEffect, useState } from "react"
import { getUser } from "../../../actions/user.action"
import { ProfilePicture } from "../../../functions/ProfilePicture";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";


const NotificationItem = ({notification , setError})=>{
    
    const [user , setUser] = useState({});
    const [message , setMessage] = useState("");
    const currentUser = useSelector((state)=>state.userReducer);
    const [link , setLink] = useState("");
    const [status , setStatus] = useState(0);
    const read = notification.read_at;
    dayjs.extend(relativeTime);
    
    const checkMessage = ()=>{
  
        switch (notification.type_notification) {
            case "like":
                setLink(`/photos?postid=${notification.postid}`);
                break;
            case "share":
                setLink(`/photos?postid=${notification.postid}`);
                break;
            case "comment":
                setLink(`/photos?postid=${notification.postid}`);
                break;
            case "send_invitation":
                setLink(`/friends/`);
                break;
            case "confirme_invitation":
                setMessage("/friends/");
                break;
            case "cancel_invitattion":
                setMessage(" a refuser votre demande d'amie");
                break;
            default:
                setMessage("");
                break;
        }

    }
    useEffect(()=>{
        // axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/user/${notification.data.actor_id}`).then(res=>{
        //     setUser(res.data)
        // }).catch(e=>{
        //     return e
        // })
        checkMessage();
    },[])
    
    const profile = ProfilePicture(user);


    
    


    const readNotification  = async ()=>{
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/notification/${notification.id}/read` ,{
                'userid': currentUser.userid
            })
            const {data} = response
            setStatus(data.status);
            console.log(data);
            
        } catch (error) {
            setError("une erreur s'est produit veuillez patiente ...")
            console.log(error);
            
        }
    }

   
    

    // user.then(res=>{
    //     console.log(res);
        
    // })

    return (
        
        <Link to={link} onClick={readNotification}  className={`notification rounded-lg px-2 py-2  ${read == null && 'bg-blue/15'}  relative cursor-pointer mb-2 dark:hover:bg-dark-third hover:bg-light-third  flex items-center gap-4`}>
            <div className="w-20 aspect-square  overflow-hidden rounded-full">
                <img src={profile} alt="" srcset=""  className=" object-cover"/>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-800 dark:text-dark-text text-lg">
                    <span className=" font-bold">{notification.actor_name}</span>
                    {notification.message ? notification.message : message}
                </span>
                <span className="font-semibold text-blue-400">{notification.created_at ? dayjs(notification.created_at).fromNow() : dayjs(new Date()).fromNow() } </span>
            </div>
            
            {/* <div className="size-4 aspect-square rounded-full bg-blue"></div> */}

            <span className="more h-8 cursor-pointer absolute top-1/2 -translate-y-1/2  right-2 self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
            </span>
        </Link>
    )
}

export default NotificationItem