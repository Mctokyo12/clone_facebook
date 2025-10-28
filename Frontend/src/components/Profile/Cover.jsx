import React, { useEffect, useRef, useState } from 'react';
import OldCover from './OldCover';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../functions/getCroppedImg';
import { CoverPiture } from '../../functions/ProfilePicture';
import { useDispatch, useSelector } from 'react-redux';
import { update_profile } from '../../actions/user.action';
import { getPosts } from '../../actions/post.action';
import axios from 'axios';
import { PulseLoader } from 'react-spinners';


const Cover = ({user}) => {

    const [UPloadSelect , setUploadSelect] = useState(false);
    const currentUser = useSelector((state) => state.userReducer);
    const cover =  currentUser.userid == user.userid ?  CoverPiture(currentUser) : CoverPiture(user);
    const [visible , setVisible] = useState(false);
    const [imageSrc, setImageSrc] = useState("");
    const [crop , setCrop] = useState({x:0 , y:0})
    const [zoom , setZoom] = useState(1);
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [file,setFile] = useState(null);
    const [isUploading , setIsuploading] = useState(false)
    const dispatch = useDispatch();
    
    
    const onCropComplete = (croppedArea , croppedAreaPixels) =>{
        setCroppedAreaPixels(croppedAreaPixels);
    }

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
            console.error(e)
        }
    }

    const coverRef = useRef(null);
    const [width, setWidth] = useState();
    useEffect(() => {
        setWidth(coverRef.current.clientWidth);
        // console.log(coverRef.current.clientWidth);
        
    }, [window.innerWidth]);

    const handleUpload = (e)=>{
        const file = e.target.files;
        const Reader = new FileReader();

        Reader.onload  = ()=>{
            setImageSrc(Reader.result);
        }
        Reader.readAsDataURL(file[0]);
        setFile(file[0])
        setUploadSelect(false)
    
    }
    
    const handleCoverPicture = async (e , is_profile)=>{
        setIsuploading(true)
        try {
            const profileChanged = is_profile == "is_cover_page" ? "cover": "profile"

            if(imageSrc != "" && file == null){
                
                const uploadData = {
                    "is_url": true,
                    "path" : imageSrc,
                    "profile_changed": profileChanged,
                    "image_coordinate": croppedAreaPixels,
                    "userid":user.userid,
                    "is_cover_page": 1
                }

                // await dispatch(update_profile(uploadData , user.userid))
                // dispatch(getPosts());
                // setImageSrc("");

                // const   response  =   await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/user/update-profile/${user.userid}` , uploadData , {
                //     headers:{
                //         'Content-Type': 'multipart/form-data'
                //     }
                // })

                
            }else{
                const uploadData = {
                    "files" : file,
                    "profile_changed": profileChanged,
                    "image_coordinate": croppedAreaPixels,
                    "userid":user.userid,
                    "is_cover_page": 1
                }
            
                await dispatch(update_profile(uploadData ,user.userid));
                dispatch(getPosts());       
                setUploadSelect(false);
                setImageSrc("");

                // const   response  =   await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/user/update-profile/${user.userid}` , uploadData , {
                //     headers:{
                //         'Content-Type': 'multipart/form-data'
                //     }
                // })
                // console.log(response);
        
            }

            setIsuploading(false)

        } catch (error) {
            console.log(error);
        }




    

    }

    console.log(width);
    

    return (
        <>
            <div className={`w-full h-[350px] relative rounded-lg   dark:bg-dark-text bg-gray-200` }  ref={coverRef} >

                {imageSrc && 
                    <div  className="fixed  w-full  z-999 top-16 left-0 flex px-4 items-center justify-between  h-16 bg-gray-700/55  text-white dark:text-dark-text">
                        <div className="flex gap-2">
                            <span className="public_icon invert"></span>
                            <span className=" font-semibold"> Votre photo de couverture est publie</span>
                        </div>

                        <div className="flex items-center gap-3 h-full">
                            <div className="flex w-36 h-10  cursor-pointer   items-center justify-center pt-1 px-6 py-2  z-20 gap-2 bg-light-third/30 rounded-md dark:bg-dark-third dark:text-white">
                                <span className="font-semibold"  onClick={()=>setImageSrc("")}>Annuler</span>
                            </div>

                            <div className=" w-56 h-10 text-sm cursor-pointer text-white  flex items-center rounded-lg justify-center  font-semibold px-6 py-2 dark:hover:bg-dark-main  dark:text-dark-text bg-blue">
                                {isUploading ? 
                                    <PulseLoader  size={8} color='#fff'/> :
                                    <span className="" onClick={(e)=>handleCoverPicture(e , "is_cover_page")}>Enregistrer les modification</span>
                                }
                            </div>

                            

                        </div>
                    </div>
                }
 

                <div className={`w-full h-full  relative`}>
                    {imageSrc &&
                        <Cropper
                            image={imageSrc}
                            crop={crop}
                            rotation={rotation}
                            zoom={zoom}
                            aspect={width / 350}
                            onCropChange={setCrop}
                            onRotationChange={setRotation}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            showGrid={true}
                            objectFit="horizontal-cover"
                        />
                    }
                    

                    <div onClick={()=>setUploadSelect(!UPloadSelect)} className="flex items-center absolute right-4  cursor-pointer bottom-4  px-4 py-2 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-dark-main dark:text-white">
                        <span className="mt-2">
                            <i className="bx bxs-camera text-xl"></i>
                        </span>
                        <span className="text-sm">Add Cover Photo</span>
                    </div>

                    {UPloadSelect && 

                        <div className="absolute right-4  z-30 cursor-pointer -bottom-22  px-2 py-2 w-[15rem]  shadow-2xl  gap-2 bg-white rounded-lg dark:bg-dark-main dark:text-white">
                            
                            <div 
                                onClick={()=>{
                                    setUploadSelect(false)
                                    setVisible(true)
                                }} 
                                className="flex items-center gap-3 px-2 py-2 hover:bg-light-third rounded-lg"
                            >
                                <span>
                                    <i className="photo_icon text-xl"></i>
                                </span>
                                <span>Select Photo</span>
                            </div>
                            
                            
                            <div className="flex items-center gap-3 px-2 py-2 hover:bg-light-third rounded-lg">
                                <span>
                                    <i className="upload_icon text-xl"></i>
                                </span>
                                <span className="text-sm">Upload Photo</span>
                                <input onChange={(e)=>handleUpload(e)} type="file" name="cover_photo" className="absolute w-full opacity-0 cursor-pointer"/ >
                            </div>
                            
                        </div>
                    }
                    {!imageSrc &&  
                        <div className='overflow-hidden absolute w-full    h-[350px] '>
                            <img src={cover} alt=""  className=' object-cover w-full block' />
                            
                        </div>
                    }
                </div>



                {
                    visible && <OldCover setOldCoverVisble={setVisible} setImageSrc={setImageSrc}/>
                }


            </div>
           
        </>
    );
};

export default Cover;