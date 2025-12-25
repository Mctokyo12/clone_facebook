import React, { useEffect, useState } from 'react';
import { getUserPicture } from '../../functions/getUserPicture';
import { useParams, useSearchParams } from 'react-router';
import Error from '../Errors';
import { HashLoader } from 'react-spinners';

const Photos = () => {
    // const {id} = useParams();
    const [SearchParams] = useSearchParams();
    const id = SearchParams.get("id")
    const [error ,setError] = useState("");
    const [loader , setLoader] = useState(false)
    
 
    const [image , setImage] = useState([]);
    const getPicture = async ()=>{
        let allPhotos = true;
        setLoader(true)
        const data = await getUserPicture(id , allPhotos);
        setLoader(false)        
        if (Array.isArray(data)) {
            data.forEach(item => {
                setImage(previous => [...previous , item])
            });
        
        }else{
            if (!data) {
                setError("une erreur s'est produit")
            }
            
        }
    }
    useEffect(()=>{
        getPicture()
    },[])

   
    

    return (
        <>
            <div className="dark:bg-dark-second mx-auto w-full lg:w-[67%] dark:text-dark-text bg-white shadow  rounded-lg  px-4 py-4 mb-2 mt-4">
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
                    {
                        loader ? 
                            <div className='flex justify-center items-center  w-full'> 
                                <HashLoader color="#1876f2"  className='text-center'/> 
                            </div> 
                        :
                        image.length != 0 ?
                            
                            
                            image.slice(0,6).map((img)=>(
                                <li className="h-24 w-24  overflow-hidden rounded-xl bg-slate-100 cursor-pointer">
                                    <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${img}`} alt="" className="object-cover w-full aspect-square"/>
                                </li>
                                
                            ))
                        : <div className='text-xl mt-4 font-semibold text-light-text dark:text-dark-text'> Vous n'avez Aucun(e) Photos</div>
                    }
                    
                </ul>
            </div>
            {error && <Error error={error} setError={setError}/>}
        </>
    );
};

export default Photos;