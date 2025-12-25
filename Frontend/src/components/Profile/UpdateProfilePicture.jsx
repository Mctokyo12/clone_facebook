import React, { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop'
import { PlusIcon , PencilIcon, MinusIcon, FaceSmileIcon} from "@heroicons/react/20/solid"
import getCroppedImg from '../../functions/getCroppedImg';
import "./index.css"
import axios from 'axios';
import { PulseLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { update_profile } from '../../actions/user.action';
import { getPosts } from '../../actions/post.action';
import Error from '../Errors';


const UpdateProfilePicture = ({ userid ,image ,CurrentFile,setItem,setVisibleProfilePicture}) => {
    const [imageSrc, setImageSrc] = useState(image)
    const [crop , setCrop] = useState({x:0 , y:0})
    const [zoom , setZoom] = useState(1);
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const slider = useRef(null);
    const [error ,setError] = useState("");
    const [file,setFile] = useState(null);
    const [isUploading , setIsuploading] = useState(false)
    const [description,setDescription] = useState(""); 
    const dispatch = useDispatch();
    const onCropComplete = (croppedArea , croppedAreaPixels) =>{
        setCroppedAreaPixels(croppedAreaPixels);
    }
    

    const zoomIn = () => {
        slider.current.stepUp();
        setZoom(slider.current.value);
    };

   const zoomOut = () => {
        slider.current.stepDown();
        setZoom(slider.current.value);
   };
  

    const showCroppedImage = async () => {
        try {
            const croppedImage = await getCroppedImg(
                imageSrc,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            setError("une erreur s'est produit")
        }
    }


    
    const handleProfilePicture = async (is_profile)=>{
        try {
            setIsuploading(true);

            const profileChanged = is_profile == "is_cover_page" ? "cover": "profile"

            if(imageSrc != "" && CurrentFile == null){
                
                const uploadData = {
                    "is_url": true,
                    "path" : imageSrc,
                    "profile_changed": profileChanged,
                    "image_coordinate": croppedAreaPixels,
                    "userid":userid,
                    "post":description,
                    "is_profile_picture": 1
                }

                await dispatch(update_profile(uploadData , userid))
                dispatch(getPosts());
                setItem("")
                setImageSrc("");
                setVisibleProfilePicture("")
                
            }else{
                const uploadData = {
                    "files" : CurrentFile,
                    "profile_changed": profileChanged,
                    "image_coordinate": croppedAreaPixels,
                    "userid":userid,
                    "post":description,
                    "is_profile_picture": 1
                }
                
                await dispatch(update_profile(uploadData ,userid));
                dispatch(getPosts());       
                setItem("")
                setVisibleProfilePicture("")
                setImageSrc("");
        
            }
            setIsuploading(false)

        } catch (error) {
            setError("une erreur s'est produit")
            
        }


    

    }


    

    return (
        <>
            <div className="h-[44rem] w-full sm:w-[85%] lg:w-[70%] xl:w-[40%] dark:bg-dark-second  bg-light-primary  shadow-2xl absolute left-1/2  top-[20%]  -translate-x-1/2 -translate-y-[20%]">
                
                <div className="flex items-center justify-center py-3  border-b-2 dark:border-dark-text border-gray-300  relative w-full">
                    <h2 className="justify-self-center text-xl  font-bold">Update your profile </h2>
                    <div  id="CloseComment" onClick={()=>setItem("")} className="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className=" bx bx-x text-4xl"></i>
                    </div>
                </div>
                <div className='flex items-center justify-center flex-col mt-3 gap-4 mx-4' >

                    <div className='rounded-lg bg-light-third dark:bg-dark-third relative py-2 px-4 border w-full focus:border-blue'>
                        <textarea 
                            rows="2" 
                            className='outline-none w-full  border-transparent bg-transparent resize-none' 
                            placeholder='Description'
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="cropper px-3.5 h-[300px] w-full relative flex items-center justify-center">
                        {/* {!croppedImage ?  */}
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                rotation={rotation}
                                zoom={zoom}
                                cropShape="round"
                                aspect={1 / 1}
                                onCropChange={setCrop}
                                onRotationChange={setRotation}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            /> : 

                        //     <img src={croppedImage} alt="" srcset=""  className=' object-cover '/>
                        {/* // } */}

                    </div>

                    <div className="slider">
                        <div className="slider_circle hover1" onClick={() => zoomOut()}>
                            <i className="minus_icon"></i>
                        </div>
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.2}
                            ref={slider}
                            value={zoom}
                            onChange={(e) => setZoom(e.target.value)}
                        />
                        <div className="slider_circle hover1" onClick={() => zoomIn()}>
                            <i className="plus_icon"></i>
                        </div>
                    </div>

                    <div className='flex items-center gap-8 '>
                        <span  className='p-2 w-fit cursor-pointer gap-3 bg-light-secondary rounded-lg flex items-center' onClick={()=>showCroppedImage()}>
                            <span className='crop_icon'></span>
                            <span>Crop photo</span>
                        </span>
                        <span className='p-2 w-fit cursor-pointer bg-light-secondary rounded-lg flex gap-3 items-center'>
                            <span className='temp_icon'></span>
                            <span>Make temporary</span>
                        </span>
                    </div>
                </div>


                <div className="flex gap-2 w-full px-3.5 shadow py-4">
                    <span className="public_icon"></span>
                    <span className=" font-semibold"> Votre photo de couverture est publique</span>
                </div>

                <div className="w-[95%]  mx-auto mt-4 flex items-center justify-end ">
                    <div className="flex items-center gap-3 h-full">
                        <div className="flex  cursor-pointer w-fit  items-center justify-center pt-1 px-6 py-2  z-20 gap-2 bg-light-third/30 rounded-md dark:bg-dark-third dark:text-white">
                            <span className="font-semibold text-blue" onClick={()=>setItem("")}>Annuler</span>
                        </div>
                        
                        <div className="  w-36 h-10  cursor-pointer text-white  flex items-center rounded-lg justify-center  font-semibold px-8 py-2 dark:hover:bg-dark-main  dark:text-dark-text bg-blue">
                            {isUploading ? 
                                <PulseLoader  size={8} color='#fff'/> :
                                <span className="text-lg" onClick={()=>handleProfilePicture("is_profile_picture")}>Enregistrer</span>
                                    
                            }
                        </div>
                    </div>
                </div>

            </div>
            {error && <Error error={error} setError={setError}/>}
        </>


    );
};

export default UpdateProfilePicture;