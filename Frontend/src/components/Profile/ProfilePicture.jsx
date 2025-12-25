import { PlusIcon } from '@heroicons/react/20/solid';
import { array } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router';
import { getUserPicture } from '../../functions/getUserPicture';
import UpdateProfilePicture from './UpdateProfilePicture';
import { HashLoader } from 'react-spinners';


const ProfilePicture = ({setVisibleProfilePicture}) => {

    // const {id} = useParams();
    const [SearchParams] = useSearchParams();
    const id = SearchParams.get("id")
    
    const [image , setImage] = useState([]); 
    const [profilePicture , setProfilePicture] = useState([]);
    const [coverPicture , setcoverPicture] = useState([]);
    const inputRef = useRef(null)
    const [currentfile , setCurrentFile] = useState(null); 
    const [loader , setLoader] = useState(false)
    // const []
    const [item , setItem] = useState("");

    const getPicture = async ()=>{
        let allPhotos = false;
        setLoader(true)
        const data = await getUserPicture(id , allPhotos);  
        setLoader(false)
           
        if (typeof data == "object" && data != null) {

            if (Array.isArray(data.profile) && data.profile.length != 0) {
                data.profile.forEach(item => {
                    setProfilePicture(previous => [...previous , item])
                });
            }

            if (Array.isArray(data.cover) && data.cover.length != 0){
                data.cover.forEach(item => {
                    setcoverPicture(previous => [...previous , item])
                });
                 
            } 

            if(Array.isArray(data.post) && data.post.length != 0){
                data.post.forEach(item => {
                    setImage(previous => [...previous , item])
                });
            }

        }else{
            console.log("erreur");
            
        }
    }

    const handlefile =  (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = ()=>{
            setItem(reader.result)  
        }
        setCurrentFile(file)
        reader.readAsDataURL(file)
    }

    const handlerImage = (e)=>{
        setItem(e.target.src);
        console.log(e.target.src);
    }
    useEffect(()=>{
        getPicture()
    },[])




    return (
        <div id="chooseProfile" className={`fixed overflow-y-auto z-30  top-0  transition-all left-0 w-full h-full dark:bg-dark-main/85 bg-white/85 dark:text-dark-text text-gray-800`}>

            <div className="max-h-[90%] scrollbar w-full sm:w-[85%] lg:w-[70%] xl:w-[40%] shadow-lg dark:bg-dark-second bg-white  absolute left-1/2  top-[20%]  -translate-x-1/2 -translate-y-[20%] overflow-y-scroll">
                <div className="flex items-center justify-center py-4  border-b-2 dark:border-dark-text border-gray-300  relative w-full">
                    <h2 className="justify-self-center text-xl  font-bold">Choisir une photo de profil </h2>
                    <div onClick={()=>setVisibleProfilePicture(false)}  id="CloseComment" className="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className=" bx bx-x text-4xl"></i>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4 px-3.5 w-full">
                    <div className="text-blue-500  relative w-1/2 cursor-pointer flex items-center rounded-lg justify-center  font-semibold px-6 py-2 dark:hover:bg-dark-main  bg-light-blue">
                        <PlusIcon className="size-6 text-blue"/>
                        <span className="font-semibold">Inporter une photo</span>
                        <input type="file" ref={inputRef} name="" id="" onChange={(e)=>handlefile(e)}  className='absolute  cursor-pointer opacity-0'/>
                    </div>
                    
                    <div className="flex  cursor-pointer w-1/2   items-center justify-center mt-1 px-4 py-2  z-20 gap-2 bg-light-third rounded-lg dark:bg-dark-third dark:text-white">
                        <span className='frame_icon'></span>
                        <span className="font-semibold">Ajouter un decorer</span>
                    </div>

                    <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-third rounded-lg dark:bg-dark-third dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>

                    </div>
                </div>

                <div className="px-3.5 my-6">
                    <h2 className="font-semibold text-xl"> Photos Suggerees</h2>
                    <ul className="flex items-center flex-wrap gap-3 mt-4">

                        {   
                            loader ? 
                                <div className='flex justify-center items-center  w-full'> 
                                    <HashLoader color="#1876f2"  className='text-center'/> 
                                </div> 
                            :
                            coverPicture.length  != 0 &&  image.length != 0 ? 
                                coverPicture.concat(image).map((item , index)=>(
                                    <li className=" overflow-hidden  w-24 rounded-lg   aspect-square" key={index}>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset="" onClick={(e)=>handlerImage(e)}   className=" object-cover  h-full w-full"/>
                                    </li>
                                ))

                                // coverPicture.length !=0  ? 
                                //     coverPicture.map((item , index)=>(
                                //         <li className=" overflow-hidden size-28 rounded-xl">
                                //             <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset=""  className=" object-cover"/>
                                //         </li>
                                //     ))
                                // : 
                                // image.length !=
                            : 
                            "Pas de Photos De profile"
                        }
                        
                    </ul>
                </div>


                <div className="px-3.5 my-6">
                    <h2 className="font-semibold text-xl"> Importees</h2>
                    <ul className="flex items-center flex-wrap gap-3 mt-4">
                        {   loader ? 
                                <div className='flex justify-center items-center  w-full'> 
                                    <HashLoader color="#1876f2"  className='text-center'/> 
                                </div> 
                            :
                            image.length != 0 ? 
                                image.map((item , index)=>(
                                    <li className=" overflow-hidden w-24 rounded-lg   aspect-square" key={index}>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset=""  onClick={(e)=>handlerImage(e)} className=" object-cover w-full h-full"/>
                                    </li>
                                ))
                            : 
                            "Pas de Photos..."
                        }
                    </ul>
                </div>

                <div className="px-3.5 my-6">
                    <h2 className="font-semibold text-xl"> Photos de profil</h2>
                    <ul className="flex items-center flex-wrap  gap-3 mt-4">
                        {    loader ? 
                                <div className='flex justify-center items-center  w-full'> 
                                    <HashLoader color="#1876f2"  className='text-center'/> 
                                </div> 
                            :
                            profilePicture.length != 0 ? 
                                profilePicture.map((item , index)=>(
                                    <li className=" overflow-hidden  w-24 rounded-lg   aspect-square" key={index}>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset=""  onClick={(e)=>handlerImage(e)}  className=" object-cover w-full h-full"/>
                                    </li>
                                ))
                            : 
                                "Pas de Photos De profile"
                        }

                    </ul>
                </div>





            </div>

            {item && 
                <UpdateProfilePicture 
                    userid={id} 
                    image={item} 
                    setItem={setItem}
                    CurrentFile={currentfile}
                    setVisibleProfilePicture={setVisibleProfilePicture}
                />
            }
        </div>
    );
};

export default ProfilePicture;