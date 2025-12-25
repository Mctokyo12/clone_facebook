import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { delete_post } from "../../actions/post.action";
import Error from "../Errors"
import { useState } from "react";


const Confirmation = ({currentPost , setPostDelete , postDelete})=>{
    const dispatch =  useDispatch()
    const [error , setError] = useState("")
    const user = useSelector((state) => state.userReducer);
    const DeletePost =  async ()=>{
        try {
            dispatch(delete_post(currentPost))
            setPostDelete(false)
            
        } catch (error) {
            setError("Une erreur s'est produit lors de la suppression de ce post .")
            
        }
        
    }



    return (
        <div className={`fixed top-0 left-0 w-full h-full transition-all dark:bg-dark-main/70  z-40 ${postDelete ? "visible opacity-100" : " invisible opacity-0"}  bg-white/70   dark:text-dark-text text-gray-800 flex items-center justify-between`}>
            <div className="w-[40rem] mx-auto h-60  relative shadow-2xl pb-7 bg-white dark:bg-dark-second  rounded-lg ">
                <div class="flex items-center  py-4 justify-center   relative w-full">
                    <h2 class="justify-self-center text-2xl  font-semibold"> Déplacer dans la corbeille ?</h2>
                    <div  id="ClosePost" class="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i class=" bx bx-x text-4xl"></i>
                    </div>
                </div>

                <div class="w-full h-[1px] bg-gray-200 dark:bg-dark-third mb-3"></div>

                <div className="mx-6 relative flex flex-col gap-2 ">
                    <p className="text-justify">
                       Les éléments dans votre corbeille seront automatiquement supprimés après 30 jours. 
                       Vous pouvez les supprimer plus tôt de la corbeille en accédant à l’historique d’activité dans les Paramètres.
                    </p>
                    
                </div>

                <div className= "absolute right-6 flex items-center gap-2 bottom-4">

                    <div class={`border-transparent  flex gap-2 cursor-pointer items-center  bg-transparent   justify-center text-blue-500  hover:bg-light-secondary dark:hover:bg-dark-third   text-xl font-semibold rounded-lg px-10 py-2 `}>
                        <span className="font-bold">Annuler</span>
                    </div>

                    <div onClick={()=>DeletePost()} class={`border-transparent  flex gap-2 items-center bg-blue  cursor-pointer justify-center text-white    text-xl font-semibold rounded-lg px-10 py-2 `}>
                        <span className="font-bold">Deplacer</span>
                    </div>

                </div>
           </div>
            {error && <Error error={error}/>}

        </div>
    )
}

export  default   Confirmation