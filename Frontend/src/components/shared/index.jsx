import React from 'react';

const Shared = () => {
    return (
        
        <div id="chooseProfile" className={`fixed overflow-y-auto z-20 top-0    transition-all left-0 w-full h-full dark:bg-dark-main/85 bg-white/85 dark:text-dark-text text-gray-800`}>

            <div className="max-h-[90%] w-full sm:w-[85%] lg:w-[70%] xl:w-[40%] dark:bg-dark-second bg-white  absolute left-1/2  top-[20%]  -translate-x-1/2 -translate-y-[20%]">
                <div className="flex items-center justify-center py-4  border-b-2 dark:border-dark-text border-gray-300  relative w-full">
                    <h2 className="justify-self-center text-xl  font-bold">Partager </h2>
                    <div  id="CloseComment" className="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                        <i className=" bx bx-x text-4xl"></i>
                    </div>
                </div>

                <div className="px-4 py-6 w-full shadow">

                    <p className="mx-10">les liens que vous partagez sont unique et peuvent etre utilise pour ameliorer les sugestion et les publicite que vous voyes</p>
                

                    <div className="flex items-center gap-2.5 mt-4 w-1/2">
                        <div className="w-10 aspect-square  bg-amber-200 overflow-hidden rounded-full">
                            <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
                        </div>
                        <div className="flex  gap-0 flex-col">
                            <span className=" font-semibold text-lg">Setup Ai</span>
                            <span className="  font-semibold text-[12px]  text-gray-500">En ligne il y'a 5heure</span>
                        </div>
                    </div>

                    <div className="flex flex-col  mt-4 w-full">
                        <div className=" relative">
                            <textarea type="text" className=" outline-none bg-transparent mb-3.5  resize-none border-transparent  w-[100%] "  placeholder="Dites nous quelque chose a propos de ceci..."></textarea>
                            <FaceSmileIcon className="size-7 mt-4 absolute right-0 -bottom-2"/>
                        </div>

                        <div className=" self-end text-white w-[35%] mt-10 cursor-pointer flex items-center rounded-lg justify-center  font-semibold px-6 py-2 dark:hover:bg-dark-main  bg-blue">
                            <span className="font-semibold">Partage maintenant</span>
                        </div>
                    </div>

                </div>

                <div className="py-4 mx-4">
                    <h2 className="mb-4 text-xl font-semibold">Envoyer Dans Messenger</h2>

                    <div className="flex items-center">
                        <div className="flex items-center gap-2.5  flex-col">
                            <div className="w-16 aspect-square flex-1/3 bg-amber-200 my-0 overflow-hidden rounded-full">
                                <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
                            </div>
                            <span className=" font-semibold text-[18px]">Setup Ai</span>
                        </div>
                    </div>

                </div>

                







            </div>

        </div>
    );
};

export default Shared;