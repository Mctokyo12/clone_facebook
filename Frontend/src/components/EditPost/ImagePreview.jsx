import React, { useRef, useState } from 'react';



const ImagePreview = ({showImagePreview , setshowImagePreview  , setCurrentBackground, images ,setImages , setError}) => {
    const [imagesPreview ,setImagesPreview] = useState(images);
    const extensions  = ['jpg' , 'jpeg' , 'avi' ,'mp4' , 'mkv' ,'png'];
    const inputElementRef = useRef(null);

    const handleFile = (e)=>{
        console.log(e.target.files);
        const files = e.target.files;
        for (const file of files) {
            let extension = file.name.split(".")[1];
            if(file.size > 2097152){
                setError(`la taille du fichier :  ${file.name} est trop grand`)
                console.log(`la taille du fichier :   ${file.name} est trop grand`);
                
            }else if (extensions.indexOf(extension) == -1) {
                setError(`${file.name} : ce type de fichier n'est pas autorise`)
            }else{
                const reader = new FileReader();
                reader.onload = () =>{        
                    setImagesPreview(previousState =>[...previousState , reader.result]);
                }
                reader.readAsDataURL(file)
                setImages(previousState =>[...previousState , file])
            }
        }
        e.target.value = "";
    }
   
  "".length

    return (
        <div id="Media"  class={`px-2 py-2 border ${showImagePreview ? "" : "hidden"}  rounded-lg dark:border-dark-border mb-4 overflow-y-auto  overflow-x-hidden max-h-[250px]`}>
                        
            {/* <!-- Pour Envoyer les fichies --> */}
                <div id="SelectImage" className={`${imagesPreview.length > 0  ?  'hidden' : '' } py-6 flex items-center cursor-pointer  h-52 justify-center w-full  dark:bg-dark-main relative rounded-lg`}>
                    <div id="closeMedia" onClick={()=>{setshowImagePreview(false)}} className="rounded-full w-8 h-8  justify-self-center  z-20 absolute top-2 right-2  grid place-items-center  hover:bg-gray-300   dark:hover:bg-dark-third dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className="bx bx-x text-2xl"></i>
                    </div>
                    <div  className="text-center">
                        <input type="file" id="file" ref={inputElementRef}  onChange={(e)=>handleFile(e)}  multiple accept=".jpg" className="scale-[1.7] cursor-pointer opacity-0  h-20 rounded-lg absolute"/>

                        <div className="rounded-full w-14 h-14   justify-self-center grid place-items-center      dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                            <i className="addPhoto_icon dark:invert "></i>
                        </div>
                        <h2 className="text-xl  font-semibold">Ajouter des photos/video</h2>
                        <span>ou fait glisse-deposer</span>
                    </div>
                </div>
            {/* <!-- Fin Pour Envoyer les fichies --> */}

            {/* <!--  Visualise les fichiers --> */}
                <div  id="show" className={`${imagesPreview.length > 0 ?  '' : 'hidden'} rounded-lg relative  block:grid place-items-center overflow-y-auto overflow-x-hidden h-full w-full cursor-pointer`}>
                    <div id="more" className=" absolute left-4 top-4  flex gap-1">
                        <button className="outline-none flex items-center gap-3 py-2 px-3 border-none  rounded-lg bg-light-secondary border-4 text-light-text dark:bg-dark-second dark:hover:bg-dark-third dark:text-white   text-sm font-semibold cursor-pointer">
                            <span className=" bx bx-edit text-2xl"></span>
                            Edit
                        </button>
                        <button id="addImage" onClick={(e)=>{e.preventDefault(); inputElementRef.current.click()}}  className="outline-none flex items-center gap-3 py-2 px-3 border-none lg bg-light-secondary relative rounded-lg dark:bg-dark-second dark:hover:bg-dark-third dark:text-white   text-sm font-semibold  text-gray-500 cursor-pointer"> 
                            {/* <input type="file" id="file2" class="absolute scale-10 left-0  opacity-0 h-full" /> */}
                            <span className="addPhoto_icon dark:invert"></span>
                            Add Photos/Videos
                        </button>
                    </div>
                    <span id="closePrevieur"  onClick={
                        ()=>{
                            setImagesPreview([]);
                        }} className="bx bx-x text-3xl  p-1 absolute  right-2 top-2 rounded-full flex items-center justify-center bg-light-third text-light-text  dark:bg-dark-third dark:text-dark-text"></span>
                    {}
                        <div 
                            className={
                                imagesPreview.length == 1  ? 'preview1' :
                                imagesPreview.length == 2  ? 'preview2' :
                                imagesPreview.length == 3  ? 'preview3' :
                                imagesPreview.length == 4  ? 'preview4' : 
                                imagesPreview.length == 5  ? 'preview5' :
                                imagesPreview.length == 6  ? 'preview6' : "singular_grid"
                            } id="ShowImage"
                        >
                           
                            {
                                imagesPreview.length > 0  &&
                                imagesPreview.map((image , index)=>(
                                    image.length > 50 ? 
                                        <img src={`${image}`} key={index} alt=""  />  
                                    :
                                    <img src={`${import.meta.env.VITE_URL_BACKEND}/storage/${image}`} key={index} alt=""  />
                                ))                          
                            }

                
                        </div>


                </div>
            {/* <!-- Fin Visualise --> */}

        </div>
    );
};

export default ImagePreview;