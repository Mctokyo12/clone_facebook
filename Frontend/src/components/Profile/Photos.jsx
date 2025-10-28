import React, { useEffect, useState } from 'react';
import { getUserPicture } from '../../functions/getUserPicture';
import { useParams } from 'react-router';

const Photos = () => {
    const {id} = useParams();
 
    const [image , setImage] = useState([]);
    const getPicture = async ()=>{
        let allPhotos = true;
        const data = await getUserPicture(id , allPhotos);        
        if (Array.isArray(data)) {
            data.forEach(item => {
                setImage(previous => [...previous , item])
            });
        }else{
            console.log("erreur");
            
        }
    }
    useEffect(()=>{
        getPicture()
    },[])

    return (
        <div className="dark:bg-dark-second mx-auto w-[67%] dark:text-dark-text bg-white shadow  rounded-lg  px-4 py-4 mb-2 mt-4">
            <div className="w-full flex items-center justify-between">
                <h2 className="font-semibold text-xl">Photos</h2>
                <div className="flex items-center justify-between gap-2">
                    <span className="text-blue-500 cursor-pointer  font-semibold px-2 py-2 dark:hover:bg-dark-main hover:bg-gray-100">Ajouter des photos/videos</span>
                    
                    <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                        <span className="bx  bx-dots-horizontal text-lg"></span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
                <li className="py-3 px-2  w-32 font-semibold text-lg flex  items-center  justify-center rounded-sm text-blue-500 border-b-4 border-blue-500">
                    <a href="#" >Vos Photos</a>
                </li>

                <li className="py-3 px-2  w-32 font-semibold text-lg flex  items-center  justify-center rounded-sm">
                    <a href="#" >Albums</a>
                </li>
            </div>
            
            <ul className="mt-2 flex   items-center  flex-wrap gap-2 ">
                {image.length != 0 ?
                    image.slice(0,6).map((img)=>(
                        <li className="h-24 w-24  overflow-hidden rounded-xl bg-slate-100 cursor-pointer">
                            <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${img}`} alt="" className="object-cover w-full aspect-square"/>
                        </li>
                        
                    ))
                    : "Pas de photos pour vous "
                }
                
            </ul>
        </div>
    );
};

export default Photos;