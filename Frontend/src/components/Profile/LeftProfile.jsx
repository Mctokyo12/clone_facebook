import axios from "axios";
import { useEffect, useState } from "react"
import { getUserPicture } from "../../functions/getUserPicture";


const LeftProfile = ({userid})=>{
    
    const [image , setImage] = useState([]);
   
    const getPicture = async ()=>{
        let allPhotos = true;
        const data = await getUserPicture(userid , allPhotos);        
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
   
    
    return(
        <div className="w-[40%] sticky top-0">

            <div className="dark:bg-dark-second dark:text-dark-text bg-white mb-4 shadow  rounded-lg w-full h-60 px-4 py-2">
                <h2 className="font-semibold text-xl">Intro</h2>
                <ul className="mt-2 flex flex-col gap-[9px]">

                    <li className="w-full  cursor-pointer  px-2 py-2 font-semibold text-sm text-center rounded-lg dark:bg-dark-third  bg-gray-100 dark:hover:bg-dark-text dark:hover:bg-opacity-50 ">
                        Add bio
                    </li>

                    <li className="w-full  cursor-pointer px-2 py-2 font-semibold text-sm text-center rounded-lg dark:bg-dark-third  bg-gray-100 dark:hover:bg-dark-text dark:hover:bg-opacity-50 ">
                        Edit Details
                    </li>


                    <li className="w-full  cursor-pointer px-2 py-2 font-semibold text-sm text-center rounded-lg dark:bg-dark-third  bg-gray-100 dark:hover:bg-dark-text dark:hover:bg-opacity-50 ">
                        Add Hobbies
                    </li>


                    <li className="w-full  cursor-pointer px-2 py-2 font-semibold text-sm text-center rounded-lg dark:bg-dark-third  bg-gray-100 dark:hover:bg-dark-text dark:hover:bg-opacity-50 ">
                        Add Featured
                    </li>


                </ul>
            </div>

            <div className="dark:bg-dark-second dark:text-dark-text bg-white shadow  rounded-lg w-full  px-4 py-2 mb-2">
                <div className="w-full flex items-center justify-between">
                    <h2 className="font-semibold text-xl">Intro</h2>
                    <span className="text-blue-500 cursor-pointer px-1 py-1 dark:hover:bg-dark-main hover:bg-gray-100">See all photos</span>
                </div>
                <span className="text-sm font-medium">4 photos</span>
                <ul className="mt-2 flex flex-wrap gap-2 ">

                    {image.length != 0 ?
                        image.slice(0,6).map((img , index)=>(
                            <li className="w-[31%] h-24 overflow-hidden rounded-xl bg-slate-100 cursor-pointer" key={index}>
                                <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${img}`} alt="" className="object-cover w-full aspect-square"/>
                            </li>
                            
                        ))
                        : "Pas de photos pour vous "
                    }
                    
                </ul>
            </div>

        </div>
    )
}

export default LeftProfile