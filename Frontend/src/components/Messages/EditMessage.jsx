import React, { useState } from 'react';
import { FaceSmileIcon,  PaperAirplaneIcon} from "@heroicons/react/20/solid"
import axios from 'axios';

const EditMessage = ({messages , edit , messageid , setEdit }) => {

    const chat = Array.isArray(messages) ? messages.filter((message) => message.msgid == messageid)[0] : []
    const [content , setContent] =  chat.message ? useState(chat.message) : useState("");
    
    const EditMessage = async ()=>{
        try {
            const res = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/message/edit/${messageid}` , {
                'content' : content
            });

            if (res.data.status == 1) {
                setEdit(false)
                setContent("");
            }

        } catch (error) {
            console.log(error);
            
        }
    }
    


    return (
        <div class={` absolute overflow-hidden ${!edit && "hidden"  }   top-0  z-10    transition-all left-0 w-full h-full dark:bg-dark-main/70   bg-white/70   dark:text-dark-text text-gray-500`}>
            <div className=" absolute bottom-0  bg-light-secondary dark:bg-dark-second  w-full  justify-between px-4  gap-2">

                <div className="flex pb-2 justify-end  border-b-[3px] dark:text-white text-light-text border-b-light-third dark:border-b-dark-third w-full">
                    <div className=" rounded-2xl self-end   px-2 py-2 bg-blue">
                        {chat.message}
                    </div>
                </div>

                <div className="w-full  flex items-center justify-between py-4">
                    <span className=" font-semibold  text-lg">Modifier le message</span>
                    <span className="bx bx-x text-4xl cursor-pointer" onClick={()=>setEdit(false)}></span>
                </div>

                <div className=" px-3 mb-3 items-center gap-4 flex">
                    
                    <div className="flex justify-between py-2 rounded-3xl   px-3  bg-light-secondary  dark:bg-dark-third w-[80%]items-center w-full ">
                        <input type="text"  value={content}   onChange={(e)=>setContent(e.target.value)} className=" outline-none bg-transparent border-transparent   w-[100%] "    placeholder="Aa"/>
                        <FaceSmileIcon className="size-7 text-blue"/>
                    </div>

                    <PaperAirplaneIcon   className="size-7 text-blue cursor-pointer" onClick={EditMessage}/> 
    
                </div>
                
                
            </div>
        </div>
    );
};

export default EditMessage;