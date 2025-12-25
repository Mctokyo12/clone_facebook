import React, { useState } from 'react';
import { useAutoCrop } from '../../functions/ImageCropService';
import { CheckUrl } from '../../functions/Fetch';
import ImagePreview from './ImagePreview';




const MessageRight = ({item , setMessageId , setEdit , setDeleted }) => {

    const [rightMenuVisible ,setRightMenuVisible] = useState(false);
    const images  = Array.isArray(item.file) ? item.file : [];
    const [showPostPopup , setshowPostPopup] = useState(false);



    return (
        <div className="self-end w-full message-item relative">
            <div className={`bg-light-secondary message-item  self-end dark:bg-dark-third float-right  relative  px-4 max-w-[calc(100%-100px)] text-justify py-2  rounded-bl-2xl rounded-tr-2xl rounded-tl-2xl text-gray-500 dark:text-dark-text right-0`}>
                <p className="font-normal text-wrap ">{item.message}</p>
                <div id="more-cmt" className="py-1 px-1 self-center   more-icon  invisible -left-8 top-1/2 -translate-y-1/2   absolute  rounded-full grid place-items-center cursor-pointer dark:text-dark-text dark:hover:bg-dark-third  hover:bg-gray-200 text-gray-500">
                    <span className="bx bx-dots-horizontal-rounded text-xl" onClick={()=>setRightMenuVisible(!rightMenuVisible)}></span>
                </div>
                {rightMenuVisible && 
                    <div className="absolute w-52 bg-light-primary   dark:bg-dark-third z-10 dark:text-dark-text  shadow-box px-2 py-2   -left-28  -top-56  rounded-lg">
                        <ul>
                            <li className="rounded-md px-2 py-2 hover:bg-light-secondary cursor-pointer dark:text-white  dark:hover:bg-dark-text/50  flex items-center gap-4">
                                <span className={` bx bx-copy text-2xl`}></span>
                                <h4>Copier</h4>
                            </li>
                            <li className="rounded-md px-2 py-2 hover:bg-light-secondary cursor-pointer dark:text-white  dark:hover:bg-dark-text/50  flex items-center gap-4">
                                <span className={` bx bx-reply text-2xl`}></span>
                                <h4>Repondre</h4>
                            </li>
                            <li 
                                onClick={()=>{
                                    setEdit(true)
                                    setMessageId(item.msgid)
                                    setRightMenuVisible(false)
                                }} className="rounded-md px-2 py-2 hover:bg-light-secondary cursor-pointer dark:text-white  dark:hover:bg-dark-text/50  flex items-center gap-4">
                                <span className={` bx bx-pencil text-2xl`}></span>
                                <h4>Modifer</h4>
                            </li>
                            <li className="rounded-md px-2 py-2 hover:bg-light-secondary cursor-pointer dark:text-white  dark:hover:bg-dark-text/50  flex items-center gap-4">
                                <span className={` bx bx-share text-2xl`}></span>
                                <h4>Partage</h4>
                            </li>
                            <li 
                                onClick={()=>{
                                    setDeleted(true)
                                    setMessageId(item.msgid)
                                    setRightMenuVisible(false)
                                }}
                            
                                className="rounded-md px-2 py-2 hover:bg-light-secondary cursor-pointer dark:text-white  dark:hover:bg-dark-text/50  flex items-center gap-4">
                                <span className={` bx bx-trash text-2xl `}></span>
                                <h4>Supprime</h4>
                            </li>

                        </ul>
                    </div>
                }

                {images.length > 0 && 
                    <div   className={`cursor-pointer  
                        ${
                            images.length == 1 ? "grid_1" :
                            images.length == 2 ? "grid_2":
                            images.length == 3 ? "grid_3":
                            images.length == 4 ? "grid_4":
                            images.length == 5 ? "grid_5": ""

                        }
                        `} >
                        {images && images.map((img , index)=>{
                            return(
                                <img src={CheckUrl(img)} alt="" onClick={()=>{setshowPostPopup(true);}} className={`object-cover   img-${index}`} key={index}/>
                            )

                        })} 

                    </div>
                }

    

            </div>

            <ImagePreview 
                showPostPopup={showPostPopup} 
                setshowPostPopup={setshowPostPopup} 
                images={images} 
            />



        </div>
    );
};

export default MessageRight;