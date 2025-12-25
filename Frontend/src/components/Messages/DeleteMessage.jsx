import axios from 'axios';
import React, { useState } from 'react';

const DeleteMessage = ({messages, messageid , setDelete , userid}) => {
    
    const chat = Array.isArray(messages) ? messages.filter((message) => message.msgid == messageid)[0] : []
    const checked = userid == chat.sender ? true : false
    const [choose , setChoose] = useState(1)

    const DeleteForMe = async (choose)=>{
        try {
            const res  = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/message/deleted-sender/${messageid}`,{
                "deleted" :choose,
                "id": userid
            })

            console.log(res);
            setDelete(false)
            
        } catch (error) {
            
        }
    }
    

    return (
        
        <div className={`fixed top-0 left-0 w-full h-full transition-all dark:bg-dark-main/70  z-40   bg-white/70   dark:text-dark-text text-gray-800 flex items-center justify-between`}>
            {
                checked ? 
                    <div className="w-[45rem] mx-auto   relative shadow-2xl pb-7 bg-white dark:bg-dark-second  rounded-lg ">
                        <div class="flex items-center  py-4 justify-center   relative w-full">
                            <h2 class="justify-self-center text-2xl  font-semibold"> Supprime pour vous</h2>
                            <div  onClick={()=>setDelete(false)} id="ClosePost" class="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i class=" bx bx-x text-4xl"></i>
                            </div>
                        </div>

                        <div class="w-full h-[1px] bg-gray-200 dark:bg-dark-third mb-3"></div>

                        <div className="mx-6 relative flex flex-col gap-10 mt-8  mb-16 ">
                            <div className='flex  items-center gap-2'>
                                <input type="radio" name="supprime" id=""  className='self-start size-10' value={2} onChange={(e)=>setChoose(e.target.value)} />
                                <div className=''>
                                    <h3 className='font-semibold'>Retirer Pour tout le monde</h3>
                                    <p>
                                        Ce message sera retiré pour tous les participants à la discussion. Il est possible que certains l’aient déjà vu ou transféré. Les messages retirés peuvent toujours être inclus dans des rapports.
                                    </p>

                                </div>

                            </div>
                            <div className='flex items-start gap-2'>
                                <input type="radio" name="supprime" id="" className='size-10  border-4 border-black'  value={1} onChange={(e)=>setChoose(e.target.value)} />
                                <div className=''> 
                                    <h3 className='font-semibold'>Retirer Pour vous</h3>
                                    <p>
                                        Ce message sera retiré pour tous les participants à la discussion. Il est possible que certains l’aient déjà vu ou transféré. Les messages retirés peuvent toujours être inclus dans des rapports.

                                    </p>

                                </div>
                            </div>
                        
                            
                        </div>

                        <div className= "absolute right-6 flex items-center gap-2 bottom-4">

                            <div onClick={()=>setDelete(false)} class={`border-transparent  flex gap-2 cursor-pointer items-center  bg-transparent   justify-center text-blue-500  hover:bg-light-secondary dark:hover:bg-dark-third   text-xl font-semibold rounded-lg px-10 py-2 `}>
                                <span className="font-bold">Annuler</span>
                            </div>

                            <div  onClick={()=>DeleteForMe(choose)} class={`border-transparent  flex gap-2 items-center bg-blue  cursor-pointer justify-center text-white    text-xl font-semibold rounded-lg px-10 py-2 `}>
                                <span className="font-bold">Supprime</span>
                            </div>

                        </div>
                    </div>
                :
                    <div className="w-[40rem] mx-auto h-60  relative shadow-2xl pb-7 bg-white dark:bg-dark-second  rounded-lg ">
                        <div class="flex items-center  py-4 justify-center   relative w-full">
                            <h2 class="justify-self-center text-2xl  font-semibold"> Supprime pour vous</h2>
                            <div  onClick={()=>setDelete(false)} id="ClosePost" class="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i class=" bx bx-x text-4xl"></i>
                            </div>
                        </div>

                        <div class="w-full h-[1px] bg-gray-200 dark:bg-dark-third mb-3"></div>

                        <div className="mx-6 relative flex flex-col gap-2 ">
                            <p className="text-justify">
                                Cette action supprimera le message de vos appareils. Les autres membres de la discussion pourront toujours le voir.
                            </p>
                            
                        </div>

                        <div className= "absolute right-6 flex items-center gap-2 bottom-4">

                            <div onClick={()=>setDelete(false)} class={`border-transparent  flex gap-2 cursor-pointer items-center  bg-transparent   justify-center text-blue-500  hover:bg-light-secondary dark:hover:bg-dark-third   text-xl font-semibold rounded-lg px-10 py-2 `}>
                                <span className="font-bold">Annuler</span>
                            </div>

                            <div  class={`border-transparent  flex gap-2 items-center bg-blue  cursor-pointer justify-center text-white    text-xl font-semibold rounded-lg px-10 py-2 `}>
                                <span className="font-bold" onClick={()=>DeleteForMe(1)}>Supprime</span>
                            </div>

                        </div>
                    </div>
            }

            

        </div>
        
    );
};

export default DeleteMessage;