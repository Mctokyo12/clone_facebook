import React from 'react';

const AddToYouPost = ({setshowImagePreview, setCurrentBackground , setVisibleBackground,setMarginTop , images }) => {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-2 rounded-lg dark:border-dark-third mb-4">
            <h4 className="font-semibold">Ajoute a votre publication</h4>
            <div className="flex gap-2 items-center justify-around justify-self-end">

                <div id="TypeMediaPost" onClick={
                    ()=>{
                        setshowImagePreview(true); 
                        setCurrentBackground(""); 
                        setMarginTop(0); 
                        setVisibleBackground(false) 
                    }}  
                    className={`flex ${images.length == 0 ? "cursor-no-drop " :"cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-third"} justify-center  items-center gap-3 rounded-full px-1 py-1 `}>
                    <i className={`bx bx-images ${images.length == 0 ? "text-gray-400" : "text-green-500"} text-3xl `}></i>
                </div> 

                <div class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-group text-3xl text-blue-500"></i>
                </div>

                <div className="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-smile text-3xl text-yellow-500"></i>
                </div>

                <div className="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-location-plus text-3xl text-red-500 "></i>
                </div>

                <div className="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i className=" bx bx-dots-horizontal-rounded text-3xl dark:text-dark-text text-gray-200"></i>
                </div>

            </div>
        </div>
    );
};

export default AddToYouPost;