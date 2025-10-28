import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getUserPicture } from '../../functions/getUserPicture';


const OldCover = ({setOldCoverVisble , setImageSrc}) => {

    const {id} = useParams();
    
    const [image , setImage] = useState([]); 
    const [profilePicture , setProfilePicture] = useState([]);
    const [coverPicture , setcoverPicture] = useState([]);
    // const []
    // const [item , setItem] = useState("");

    const getPicture = async ()=>{
        let allPhotos = false;
        const data = await getUserPicture(id , allPhotos);  
        
        
              
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



        }else{
            console.log("erreur");
            
        }
    }

    const handlerImage = (e)=>{
        setImageSrc(e.target.src);
        setOldCoverVisble(false);
        console.log(e.target.src);    
    }

    useEffect(()=>{
        getPicture()
    },[])



    return (
        <div id="Cover" className={`fixed overflow-y-auto z-20 top-0  transition-all left-0 w-full h-full dark:bg-dark-main/85 bg-white/85 dark:text-dark-text text-gray-800`}>

            <div className="max-h-[90%] w-full sm:w-[85%] lg:w-[70%] xl:w-[40%] shadow-lg dark:bg-dark-second bg-white overflow-y-scroll  absolute left-1/2  top-[20%]  -translate-x-1/2 -translate-y-[20%]">
                <div className="flex items-center justify-center py-4  border-b-2 dark:border-dark-text border-gray-300  relative w-full">
                    <h2 className="justify-self-center text-xl  font-bold">Select Photo </h2>
                    <div onClick={()=>setOldCoverVisble(false)}  id="CloseComment" className="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className=" bx bx-x text-4xl"></i>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4 px-3.5 w-full">
                    <div className="text-blue-500 w-1/2  border-blue border-b-4 cursor-pointer flex items-center rounded-lg justify-center  font-semibold px-6 py-2 ">
                        <span className="font-semibold">Recent photo</span>
                    </div>
                    
                    <div className="flex  cursor-pointer w-1/2   items-center justify-center mt-1 px-4 py-2  z-20 gap-2  dark:text-white">
                        <span className="font-semibold">Photo Albums</span>
                    </div>
                </div>

                <div className="px-3.5 my-6">
                    <ul className="flex items-center gap-3 mt-4 flex-wrap">
                        { 
                            coverPicture.length  != 0 ? 
                                coverPicture.map((item , index)=>(
                                    <li className=" overflow-hidden  w-24 rounded-lg   aspect-square" key={index}>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset="" onClick={(e)=>handlerImage(e)}   className=" object-cover  h-full w-full"/>
                                    </li>
                                ))
                            : 
                            "Pas de Photos Pour Vous"
                        }
                    </ul>
                </div>


                <div className="px-3.5 my-6">
                    <h2 className="font-semibold text-xl"> Importees</h2>
                    <ul className="flex items-center gap-3 mt-4 flex-wrap">
                        { 
                            coverPicture.length  != 0 ? 
                                coverPicture.map((item , index)=>(
                                    <li className=" overflow-hidden  w-24 rounded-lg   aspect-square" key={index}>
                                        <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} alt="" srcset="" onClick={(e)=>handlerImage(e)}   className=" object-cover  h-full w-full"/>
                                    </li>
                                ))
                            : 
                            "Pas de Photos Pour Vous"
                        }

                    </ul>
                </div>

                <div className="px-3.5 my-6">
                    <h2 className="font-semibold text-xl"> Photos de profil</h2>
                    <ul className="flex items-center gap-3 mt-4 flex-wrap">
                        {profilePicture.length != 0 ? 
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

        </div>
    );
};

export default OldCover;