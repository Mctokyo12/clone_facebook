import React, { useState } from 'react';

const ReplyMessage = ({messages , reply , messageid , setReply , currentUser}) => {

    const chat = Array.isArray(messages) ? messages.filter((message) => message.msgid == messageid)[0] : []
    const [content , setContent] =  chat.message ? useState(chat.message) : useState("");


    return (
        <div className=" absolute bottom-16  bg-light-secondary dark:bg-dark-second  w-full  justify-between px-4  gap-2">

            <div className="flex pb-2 justify-end mt-1  border-b-[3px] shadow-2xl dark:text-white text-light-text border-b-light-third dark:border-b-dark-third w-full">
                <div className=" rounded-2xl self-end   px-2 py-2 bg-blue">
                    {chat.message}
                </div>
            </div>

            <div className="w-full  flex items-center justify-between py-2">
                <span className=" font-semibold  text-lg">Repondre a {currentUser.lastname}{currentUser.firstname}</span>
                <span className="bx bx-x text-4xl cursor-pointer" onClick={()=>setReply(false)}></span>
            </div>
            
            
        </div>
    );
};

export default ReplyMessage;