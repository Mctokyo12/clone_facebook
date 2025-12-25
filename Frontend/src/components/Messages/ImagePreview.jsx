import React, { useState } from 'react';

const ImagePreview = ({showPostPopup ,  setshowPostPopup ,  images}) => {
    const [currentItem , setCurrentItem] = useState(0);

    return (
        
        <div id="Publication" class={`fixed overflow-hidden  z-30 top-0   ${showPostPopup ? "":"invisible opacity-0"}   transition-all left-0 w-full h-full dark:bg-dark-main/95   bg-white/95   dark:text-dark-text text-gray-500`}>

            <div className=" items-center md:flex justify-center gap-2  z-10    top-4  absolute  right-12">

                <div id="grid" className="rounded-full text-xl text-center xl:grid hidden  place-content-center h-12 w-12 hover:bg-gray-300 dark:hover:bg-dark-text/50 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer">
                    <i className='bx bxs-zoom-in text-2xl'></i> 
                </div>
            


                <div className="rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:hover:bg-dark-text/50 dark:text-dark-text  bg-gray-200 cursor-pointer">
                    <i className="bx bxs-zoom-out text-2xl"></i>
                </div>

                <div className="rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:hover:bg-dark-text/50 dark:text-dark-text  bg-gray-200 cursor-pointer">
                    <i className="bx bx-exit-fullscreen text-2xl"></i>
                </div>

                <div  id="ClosePost" onClick={()=>{setshowPostPopup(false);}} class="rounded-full px-1 py-1   grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                    <i class=" bx bx-x text-4xl"></i>
                </div>

            </div>

            <div className="flex justify-between items-center mx-auto  gap-14 h-[80vh] relative w-[90%]">

        
                <span  
                    onClick={()=>{
                        setCurrentItem(currentItem-1)
                    if (currentItem <=0  ){
                            setCurrentItem(images.length-1)
                        }
                    }} 
                    className="size-16  rounded-full flex items-center cursor-pointer justify-center dark:bg-dark-third/60  bg-light-third dark:text-white"
                >
                    <i className="text-5xl bx bx-chevron-left"></i>
                </span>


                <div className="w-[65%] h-[80vh]  ">
                    {
                        Array.isArray(images) && images.length > 0 ?
                            <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${images[currentItem]}`} className='object-cover  block  w-[90%]' alt="" srcset="" /> : ""
                        
                    }
                </div>

                <span 
                    onClick={()=>{
                        setCurrentItem(currentItem+1)
                    if (currentItem >= images.length-1 ){
                            setCurrentItem(0)
                        }
                    }} 
                    className="size-16  rounded-full flex items-center justify-center dark:bg-dark-third bg-light-third dark:bg-opacity-60 cursor-pointer dark:text-white "
                >
                    <i className="text-5xl bx bx-chevron-right"></i>
                </span>
            </div>

            {Array.isArray(images) && images.length > 1 &&  
                <div className="absolute  bottom-0  px-4 flex items-center justify-center gap-3 w-[100%] dark:bg-dark-second/75   py-4">
                    
                    {images.map((item , index)=>(
                        <div className={`size-26    ${index==currentItem && "border-blue border-4"} `}>
                            <img key={index} src={`${import.meta.env.VITE_URL_BACKEND}/storage/${item}`} className='object-cover  block  w-full' alt="" srcset="" /> 
                        </div>
                    ))}
                    
                </div>
            }
            

        </div>
    );
};

export default ImagePreview;