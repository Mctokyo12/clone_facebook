import React, { useState } from 'react';
import {FaceSmileIcon, GifIcon, HandThumbUpIcon, MicrophoneIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid"
import axios from 'axios';

const AddMessage = ({currentUser , user , setError}) => {

    const [content , setContent] = useState("")
    const [files , setFiles] = useState([]);
    const [imagesPreview ,setImagesPreview] = useState([]);
    const extensions  = ['jpg' , 'jpeg' , 'avi' ,'mp4' , 'mkv' ,'png'];

    const AddMessage = async()=>{
        try {

            const formData = new FormData();
            for (const file of files) {
                formData.append('files[]' , file);
            }
            formData.append("sender" , user.userid);
            formData.append("receiver" , currentUser.userid);
            formData.append("message" , content);


            const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/new-message`, formData);

            console.log(response);

            const {data} = response;
            setContent("");
            setFiles([]);
            setImagesPreview([]);
            
        } catch (error) {
            // setError(error.data.errors)
            console.log(error);
            
        }
    }

    
    const DisplayFile  = (e)=>{
        const files = e.target.files;
        for (const file of files) {
            let extension = file.name.split(".")[1];
            if(file.size > 2097152){
                setError(`la taille du fichier :  ${file.name} est trop grand`)
                console.log(`la taille du fichier :   ${file.name} est trop grand`);
                
            }else if (extensions.indexOf(extension) == -1) {
                setError(`${file.name} : ce type de fichier n'est pas autorise`);
                console.log(`${file.name} : ce type de fichier n'est pas autorise`);
                
            }else{
                const reader = new FileReader();
                reader.onload = ()=>{
                    setImagesPreview(previousState =>[...previousState , reader.result]);
                }
                setFiles(previousState =>[...previousState , file])
                reader.readAsDataURL(file)
               
            }
            
    
        }
    }

    const RemoveFile = (e,index)=>{
        imagesPreview.splice(index,index);
        files.splice(index , index);
        setImagesPreview(imagesPreview)
        setFiles(files)
        e.target.parentElement.remove(); 
    }

    
    
    return (
        <div className=" absolute bottom-2   w-full  justify-between px-4 flex items-center gap-2">

            <div className="flex items-center justify-between w-[20%]  self-end">
                <MicrophoneIcon  className="size-7 text-blue" />
                <div className='flex items-center relative  cursor-pointer justify-center'>
                    <input type="file" name="" id="" className='  opacity-0 z-5 cursor-pointer absolute w-full' multiple onChange={(e)=>DisplayFile(e)} />
                    <span className="addPhoto_icon dark:invert z-1 text-blue cursor-pointer"></span>
                </div>
                
                <span className="sticker_icon  text-blue"></span>
                <GifIcon className="size-7 text-blue"/>
            </div>

            <div className=" bg-light-secondary  dark:bg-dark-third w-[80%] px-3 py-2 rounded-3xl flex flex-col">
                {imagesPreview.length > 0 && 
                    <div className="flex items-center gap-4 my-2">
                        {imagesPreview.map((item , index)=>(
                            <div className="relative" key={index}>
                                <div className=" w-14 aspect-square overflow-hidden  rounded-lg relative">
                                    <img src={item} alt=""  className=" w-full  block object-cover"/>
                                </div>
                                <span onClick={(e)=>RemoveFile(e,index)} className="bx bx-x  text-2xl absolute  -top-1 rounded-xl -right-2  cursor-pointer bg-light-primary dark:bg-dark-main"></span>
                            </div>
                        ))}



                    </div>
                }
                
                

                <div className="flex justify-between items-center w-full ">
                    <input type="text" value={content} className=" outline-none bg-transparent border-transparent py-2  w-[100%] "  onChange={(e)=>setContent(e.target.value)}  placeholder="Aa"/>
                    <FaceSmileIcon className="size-7 text-blue"/>
                </div>

            </div>
            <div className="self-end">
                {
                    content || files.length > 0  ? 
                        <PaperAirplaneIcon  onClick={AddMessage} className="size-7 text-blue cursor-pointer"/> 
                    : 
                        <HandThumbUpIcon className="size-7 text-blue "/>

                }
                

            </div>
            
            {/* <span className="like_icon text-4xl  text-blue"></span> */}
        </div>
    );
};

export default AddMessage;