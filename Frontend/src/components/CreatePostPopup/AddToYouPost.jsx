import React from 'react';

const AddToYouPost = ({setshowImagePreview, setCurrentBackground , setVisibleBackground,setMarginTop }) => {
    return (
        <div class="flex items-center justify-between px-4 py-2 border-2 rounded-lg dark:border-dark-third mb-4">
            <h4 class="font-semibold">Ajoute a votre publication</h4>
            <div class="flex gap-2 items-center justify-around justify-self-end">
                <div id="TypeMediaPost" onClick={()=>{setshowImagePreview(true); setCurrentBackground(""); setMarginTop(0); setVisibleBackground(false) }}  class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i class=" bx bx-images text-3xl text-green-500"></i>
                </div> 

                <div class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i class=" bx bx-group text-3xl text-blue-500"></i>
                </div>

                <div class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i class=" bx bx-smile text-3xl text-yellow-500"></i>
                </div>

                <div class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i class=" bx bx-location-plus text-3xl text-red-500 "></i>
                </div>

                <div class="flex  justify-center cursor-pointer items-center gap-3 rounded-full px-1 py-1 hover:bg-gray-100 dark:hover:bg-dark-third">
                    <i class=" bx bx-dots-horizontal-rounded text-3xl dark:text-dark-text text-gray-200"></i>
                </div>

            </div>
        </div>
    );
};

export default AddToYouPost;