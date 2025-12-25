import axios from "axios"
import NotificationItem from "./NotificationItem"
import { useEffect, useState } from "react"
import Error from "../../Errors"
import { RemoveDouble } from "../../../functions/Fetch"


const Notification = ({user , notifications ,error , setError , unreadNotification})=>{

    
    const [isunreadNotification , setIsUnreadNotification] = useState(false);


    return(
        <>
            <div className="gap-2 scrollbar px-4 py-4 w-[95%] md:w-[28rem] h-[87%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-light-primary shadow-box">
            <div className="flex flex-col gap-2  w-full">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-3xl text-gray-800 dark:text-dark-text">Notification</h1>
                        <span className="h-8 cursor-pointer self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                            <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                        </span>

                    </div>

                    <ul className="flex items-center gap-2 mx-2 cursor-pointer">
                        <li  onClick={()=>setIsUnreadNotification(false)} className="px-4 py-2 rounded-2xl  text-blue-500 bg-light-blue  cursor-pointer hover:bg-light-secondary dark:hover:bg-dark-third">Tout</li>
                        <li 
                            onClick={
                                ()=>{
                                    setIsUnreadNotification(true)
                                }
                            }
                            className="px-4 py-2 rounded-2xl   cursor-pointer hover:bg-light-secondary dark:hover:bg-dark-third"
                        >Non lus</li>
                    </ul>

                    <div className="flex items-center justify-between">
                        <h4 className="font-bold text-2xl text-gray-800 dark:text-dark-text">Nouveau</h4>
                        <span className="px-2 py-2  text-xl text-blue-500  cursor-pointer  hover:bg-light-secondary dark:hover:bg-dark-third">Voir Tout</span>
                    </div>

                    <ul>
                        {
                            isunreadNotification ? 
                                unreadNotification.length > 0 && 
                                    RemoveDouble(unreadNotification).map((notification , index)=>{
                                        return (
                                            <NotificationItem notification={notification} key={index} setError={setError} />
                                        )    
                                    })
                            :
                                notifications.length > 0 && 
                                    RemoveDouble(notifications).map((notification , index)=>{
                                        return (
                                            <NotificationItem notification={notification} key={index} setError={setError} />
                                        )    
                                    })
                             
                        }
                        
                    </ul>

                    




            </div>
            </div>
            {error && <Error error={error} setError={setError}/>}
        </>
    )
}

export default Notification