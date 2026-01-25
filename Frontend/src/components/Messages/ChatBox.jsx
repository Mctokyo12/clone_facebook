import React, { useEffect } from 'react';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import { useEcho } from '@laravel/echo-react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { ProfilePicture } from "../../functions/ProfilePicture"
dayjs.extend(relativeTime)

const ChatBox = ({currentChat , setMessageId , setReply , currentUser , user, setDeleted  , setEdit}) => {

    let channelName =  `Chat.${[ parseInt(user.id), parseInt(currentUser.id)].sort((a,b)=>a-b).join("-")}`;

    const {leaveChannel , leave , stopListening , listen} = useEcho(channelName , 
        'MessageEvent', 
        (e)=>{
         console.log(e);
        }
    );
    // stopListening();
    // listen();
    // leaveChannel();
    // leave();



    // useEffect(()=>{
    //     window.Echo.private(channelName)
    //     .error((e)=>{
    //         console.log(e);
            
    //     })

    //     return ()=> window.Echo.leave(channelName);
    // } , [channelName])
            

    return (
        <div className=" pt-4 w-full px-4">
            <div className="overflow-y-scroll h-100 chat-box scrollbar">
                <div className="flex items-center gap-2.5  flex-col">
                    <div className="w-28 aspect-square flex-1/3  overflow-hidden rounded-full">
                        <img src={ProfilePicture(currentUser)} alt="" srcset=""  className=" object-cover"/>
                    </div>
                    <span className=" font-semibold text-lg">{currentUser.firstname} {currentUser.lastname}</span>
                </div>
                <p className="text-center mt-8">
                    les messages et les appels seront securise avec le chiffrement bout en  bout.
                    seul les personnes participant a ce chat peuvent les lire , les ecouter et les partages 
                    <span className="text-blue">En savoir Plus</span>
                </p>

                {/* display message */}
                <div className="mt-4 flex mb-4  gap-1 flex-col">
                    {currentChat.map((item , index)=>(
                
                        item.receiver == user.userid ? 
                            <MessageLeft key={index} item={item} setMessageId={setMessageId} setReply={setReply} messages={currentChat} currentUser={currentUser} user={user} setDeleted ={setDeleted}/>
                        :  
                            <MessageRight key={index} item={item} messages={currentChat} setEdit={setEdit} setMessageId={setMessageId} setReply={setReply} currentUser={currentUser} user={user} setDeleted ={setDeleted}/>
                        
                
                    ))}
                
                </div>


            </div>

        </div>
    );
};

export default ChatBox;