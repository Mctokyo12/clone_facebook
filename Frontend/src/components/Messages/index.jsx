import { ChevronDownIcon, FaceSmileIcon, GifIcon, HandThumbUpIcon, InformationCircleIcon, MicrophoneIcon, PhoneIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/20/solid"
import Header from "../Header"
import MessageItem from "../Header/Message/MessageItem"


const Messages = ()=>{
    return(
        <>
           <Header/>
            <div className="flex-col md:flex max-md:overflow-x-hidden  md:flex-row items-start mt-36 md:mt-16 overflow-y-hidden">
                <div className="w-[95%] max-sm:mx-auto gap-2  h-[37rem]  md:w-[40%] lg:w-[28%] scrollbar-none px-4 py-4   overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-light-primary  text-gray-600">
                    <div className="flex flex-col gap-4  w-full">

                        <div className="flex items-center justify-between">
                            <h1 className="font-bold text-3xl text-gray-800 dark:text-dark-text">Discussions</h1>
                            
                            <div className="flex items-center gap-4">

                                <span className="h-8 cursor-pointer   w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-800 dark:text-dark-text">
                                    <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                                </span>

                                <span className="h-8 cursor-pointer   w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-800 dark:text-dark-text">
                                    <i className="bx bx-expand text-2xl"></i>
                                </span>

                                <span className="h-8 cursor-pointer   w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-800 dark:text-dark-text">
                                    <i className="bx bxs-edit text-2xl"></i>
                                </span>

                            </div>


                        </div>

                        <div id="search-input" className="flex items-center cursor-pointer  gap-4 bg-gray-100  dark:bg-dark-third rounded-full px-3 py-3">
                            <i className="bx bx-search text-2xl dark:text-dark-text"></i>
                            <input className="bg-transparent cursor-pointer w-[80%] outline-none md:hidden hidden xl:inline-block" type="text" name="" id="" placeholder="Recherche dans Messenger" />
                        </div>

                        <ul className="flex items-center  ">
                            <li className="px-4 py-2 cursor-pointer font-semibold text-xl rounded-2xl  text-blue-500 bg-light-blue  hover:bg-light-secondary dark:hover:bg-dark-third">Tout</li>
                            <li className="px-4 py-2 cursor-pointer font-semibold text-xl rounded-2xl   hover:bg-light-secondary dark:hover:bg-dark-third">Non lus</li>
                            <li className="px-4 py-2  cursor-pointer font-semibold text-xl rounded-2xl   hover:bg-light-secondary dark:hover:bg-dark-third">Group</li>
                            <span className="h-8 cursor-pointer  w-8 grid place-items-center rounded-full hover:bg-gray-200  dark:hover:bg-dark-third text-gray-800 dark:text-dark-text">
                                <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                            </span>
                        </ul>

                        <div className="flex items-center justify-between">
                            <h4 className="font-bold text-2xl text-gray-800 dark:text-dark-text">Nouveau</h4>
                            <span className="px-2 py-2  text-xl text-blue-500   hover:bg-light-secondary dark:hover:bg-dark-third">Voir Tout</span>
                        </div>

                        <ul>
                            <MessageItem/>
                        </ul>
                    </div>
                </div>
                <div className="px-4  py-6 flex flex-col lg:flex-row gap-8 items-start  md:mx-4 w-full md:w-[60%] lg:w-[90%]   h-[38rem] ">
                    {/* left main message */}
                        <div className="w-full bg-light-primary md:w-full lg:w-[70%] rounded-lg relative  h-full">
                            {/* header message */}
                                <div className="flex items-center justify-between w-full px-2 py-2 shadow">
                                    <div className="flex items-center gap-2.5 w-1/2">
                                        <span className="arrow_back_icon text-violet-500"></span>
                                        <div className="w-10 aspect-square  bg-amber-200 overflow-hidden rounded-full">
                                            <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
                                        </div>
                                        <div className="flex  gap-0 flex-col">
                                            <span className=" font-semibold text-lg">Setup Ai</span>
                                            <span className="  font-semibold text-[12px]  text-gray-500">En ligne il y'a 5heure</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center  justify-between w-[18%]">
                                        <PhoneIcon className="size-6 text-violet-500"/>
                                        <VideoCameraIcon className="size-6 text-violet-500"/>
                                        <InformationCircleIcon className="size-6 text-violet-500"/>
                                    </div>
                                    

                                </div>
                            {/* end header message */}

                            {/* main message */}
                                <div className=" pt-4 w-full px-2 ">
                                    <div className="">
                                        <div className="flex items-center gap-2.5  flex-col">
                                            <div className="w-28 aspect-square flex-1/3 bg-amber-200 overflow-hidden rounded-full">
                                                <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
                                            </div>
                                            <span className=" font-semibold text-lg">Setup Ai</span>
                                        </div>
                                        <p className="text-center mt-8">
                                            les messages et les appels seront securise avec le chiffrement bout en  bout.
                                            seul les personnes participant a ce chat peuvent les lire , les ecouter et les partages 
                                            <span className="text-blue">En savoir Plus</span>
                                        </p>

                                    </div>

                                </div>
                            {/* end main message */}

                            {/* bottom message */}
                                <div className=" absolute bottom-0 h-16 w-full  justify-between px-4 flex items-center gap-2">
                                    <div className="flex items-center justify-between w-[20%]">
                                        <MicrophoneIcon  className="size-7 text-blue" />
                                        <span className="addPhoto_icon dark:invert     text-blue"></span>
                                        <span className="sticker_icon  text-blue"></span>
                                        <GifIcon className="size-7 text-blue"/>
                                    </div>
                                    <div className=" bg-light-secondary w-[80%] px-3 py-2 rounded-3xl flex justify-between items-center">
                                        <input type="text" className=" outline-none bg-transparent border-transparent  w-[100%] "  placeholder="Aa"/>
                                        <FaceSmileIcon className="size-7 text-blue"/>
                                    </div>
                                    <HandThumbUpIcon className="size-7 text-blue"/>
                                    {/* <span className="like_icon text-4xl  text-blue"></span> */}
                                </div>
                            {/* end bottom message */}

                        </div>
                    {/* end left main message */}

                    {/* right main message */}

                        <div className=" hidden lg:block bg-light-primary w-[30%] rounded-lg px-4 py-4 h-full">

                            <div className="flex  flex-col  gap-0 justify-center items-center">
                                <div className="flex items-center gap-2.5  flex-col">
                                    <div className="w-28 aspect-square flex-1/3 bg-amber-200 my-0 overflow-hidden rounded-full">
                                        <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
                                    </div>
                                    <span className=" font-semibold text-[18px]">Setup Ai</span>
                                    <span className=" font-normal  -mt-4">En ligne il y'a 5 heure</span>
                                </div>
                                <div className=" bg-light-secondary px-4 py-2 w-fit flex gap-0.5 rounded-2xl my-3">
                                    <span  className="privacy_checkup_icon"></span>
                                    <span className="font-semibold text-sm">Chiffre de bout en bout</span>
                                </div>

                                <div className="flex gap-4 items-center justify-center w-[80%]">
                                    <div className="flex flex-col items-center justify-between">
                                        <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                                            <UserCircleIcon/>
                                        </div>
                                        <span>Profil</span>
                                    </div>

                                    <div className="flex flex-col items-center justify-between  text-center ">
                                        <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                                            <i className="turnOnNotification_icon text-3xl"></i>
                                        </div>
                                        <span style={{lineHeight: "18px"}}>Mettre en Sourdine</span>
                                    </div>

                                    <div className="flex flex-col items-center justify-between">
                                        <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                                            <i className="bx bx-search  dark:text-dark-text text-3xl"></i>
                                        </div>
                                        <span>Recherche</span>
                                    </div>


                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4">
                                <div className="flex font-semibold justify-between items-center">
                                    <span>Information sur la discussions</span>
                                    <ChevronDownIcon  className=" size-8"/>
                                </div>

                                <div className="flex font-semibold justify-between items-center">
                                    <span>Personnalise la discussions</span>
                                    <ChevronDownIcon  className=" size-8"/>
                                </div>

                                <div className="flex font-semibold justify-between items-center">
                                    <span>Fichier et contenus multimedias</span>
                                    <ChevronDownIcon  className=" size-8"/>
                                </div>


                                <div className="flex font-semibold justify-between items-center">
                                    <span>Confidence et assistance</span>
                                    <ChevronDownIcon  className=" size-8"/>
                                </div>
                            </div>

                        </div>

                    {/* end right main message */}
                </div>
            </div>
        </>

    )
}

export default Messages