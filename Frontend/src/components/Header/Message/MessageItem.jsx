import axios from "axios"
import { ProfilePicture } from "../../../functions/ProfilePicture"
axios
const MessageItem = ({item , setIsChat , setCurrentChat , user , setCurrentUser})=>{
   
    const getChat = async (id)=>{
        try {

            // on recuperer les donnees sur le chat 
            const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/message`,{
                "sender": user.userid,
                "receiver":id
            });
            

            // on recuperer l'utilisateur avec qui nous allons chate
            const res = await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/user/${id}`);
            setCurrentUser(res.data);
            const { data } = response;
            setCurrentChat([...data]);
        } catch (error) {
            console.log(error);
            
        }
    }

   
    
    
    return (
        <li onClick={()=>getChat(item.userid)}  className="notification rounded-lg px-2 py-2  hover:bg-light-secondary relative cursor-pointer dark:hover:bg-dark-third flex items-center gap-4">
            <div className="w-16 aspect-square  overflow-hidden rounded-full">
                <img src={ProfilePicture(item)} alt="" srcset=""  className=" object-cover"/>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold dark:text-dark-text text-light-text">{item.lastname} {item.firstname}</span>
                <span className="text-gray-800 dark:text-dark-text text-sm">
                    Les messages et les appels sont p..... 5 sem.
                </span>
                {/* <span className="font-semibold text-blue-500">1j</span> */}
            </div>
            <div className="w-6 aspect-square rounded-full bg-blue"></div>

            <span className="more h-8 cursor-pointer right-10 absolute top-1/2 -translate-y-1/2  right-2self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text invisible">
                <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
            </span>
        </li>
    )
}

export default MessageItem