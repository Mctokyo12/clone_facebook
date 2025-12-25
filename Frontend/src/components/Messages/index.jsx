import { ChevronDownIcon, FaceSmileIcon, GifIcon, HandThumbUpIcon, InformationCircleIcon, MicrophoneIcon, PaperAirplaneIcon, PhoneIcon, UserCircleIcon, VideoCameraIcon } from "@heroicons/react/20/solid"
import Header from "../Header"
import MessageItem from "../Header/Message/MessageItem"
import { useEffect, useState } from "react"
import axios from "axios"
import Error from "../Errors"
import { HashLoader } from "react-spinners"
import { RemoveDouble } from "../../functions/Fetch"
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import { ProfilePicture } from "../../functions/ProfilePicture"
import AddMessage from "./AddMessage"
import MessageLeft from "./MessageLeft"
import MessageRight from "./MessageRight"
import EditMessage from "./EditMessage"
import ReplyMessage from "./ReplyMessage"
import DeleteMessage from "./DeleteMessage"
dayjs.extend(relativeTime);



const Messages = ({user})=>{
    
    const [loader,setLoader] = useState(false);
    const [error , setError] = useState("");
    const [friend , setFriend] = useState([]);
    const [currentChat , setCurrentChat] = useState([]);
    const [currentUser  ,  setCurrentUser] = useState({});
    const [edit , setEdit] = useState(false);
    const [reply , setReply] = useState(false)
    const [isChat , setIsChat] = useState(null);
    const [messageid , setMessageId] = useState(null)
    const [deleted  , setDeleted] = useState(false);

    useEffect(()=>{
        setLoader(true);
        axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/get-friend/${user.userid}` , {
            "action": "reicever"
        }).then(res=>{
            const {data} = res
            console.log(res);
            if (Array.isArray(data) && data.length > 0) {
                setFriend(prev=>[...prev , ...data]);
            }
           
        }).catch(e=>{
            setError("Une Erreur s'est Produit !!!");
            console.log(e);
            
        }).finally(()=>{
            setLoader(false);
        })
    },[])


    console.log(currentChat);
    

    
    

    
    







    return(
        <>
           <Header/>
            <div className="flex-col md:flex max-md:overflow-x-hidden  md:flex-row items-start mt-36 md:mt-16 overflow-y-hidden">
                <div className="w-[95%] max-sm:mx-auto gap-2  h-[37rem]  md:w-[40%] lg:w-[28%]   lg:overflow-y-hidden  px-4 py-4  dark:bg-dark-second dark:text-dark-text bg-light-primary  text-gray-600">
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
                            {
                                loader ? 
                                    <div className='flex justify-center items-center  w-full'> 
                                        <HashLoader color="#1876f2"  className='text-center'/> 
                                    </div> 
                                :
                                    
                                    
                                    RemoveDouble(friend).length > 0 ? 
                                        
                                        RemoveDouble(friend).map((item , index)=>(
                                          <MessageItem  item={item} key={index}  setCurrentChat={setCurrentChat} user={user} setCurrentUser = {setCurrentUser}  />
                                        ))
                                       
                                    : 
                                        <div className="text-center dark:text-dark-text">
                                            vous avez aucun ami(e)s
                                        </div>

                                
                                
                            }
                            
                        </ul>

                    </div>
                </div>

                {currentChat.length <= 0 && 
                    <div className="px-4 py-6 hidden  lg:flex flex-col lg:flex-row justify-center  dark:bg-dark-second text-dark-text  bg-light-primary gap-8 items-center  md:mx-4 w-full md:w-[60%] lg:w-[90%] my-auto rounded-sm  h-[36rem]">
                        
                        <p className="font-semibold text-2xl flex flex-col text-center gap-3">
                        <span className="text-4xl"> You don't have a message selected</span>
                            Choose one from your existing messages, or start a new one. 
                        </p>
                        
                    </div>
                }

                {currentChat.length > 0  &&
                    
                    
                    <div className="px-4  py-6 flex flex-col lg:flex-row gap-8 items-start  md:mx-4 w-full md:w-[60%] lg:w-[90%]   h-[38rem] ">
                        {/* left main message */}
                            <div className="w-full bg-light-primary md:w-full lg:w-[70%] dark:bg-dark-second text-dark-text rounded-lg relative  h-full">
                                {/* header message */}
                                    <div className="flex items-center justify-between w-full px-2 py-2 shadow">
                                        <div className="flex items-center gap-2.5 w-1/2">
                                            <span className="arrow_back_icon dark:invert text-violet-500 cursor-pointer"></span>
                                            <div className="w-10 aspect-square   overflow-hidden rounded-full">
                                                <img src={ProfilePicture(currentUser)} alt="" srcset=""  className=" object-cover"/>
                                            </div>
                                            <div className="flex  gap-0 flex-col">
                                                <span className=" font-semibold text-lg">{currentUser.firstname} {currentUser.lastname}</span>
                                                <span className="  font-semibold text-[12px]  text-gray-500">{dayjs(currentUser.created_at).fromNow()}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center  justify-between w-[18%]">
                                            <PhoneIcon className="size-6 text-violet-500 cursor-pointer"/>
                                            <VideoCameraIcon className="size-6 text-violet-500 cursor-pointer"/>
                                            <InformationCircleIcon className="size-6 text-violet-500 cursor-pointer"/>
                                        </div>
                                        

                                    </div>
                                {/* end header message */}

                                {/* main message */}
                                    <div className=" pt-4 w-full px-4">
                                        <div className="overflow-y-scroll h-100 chat-box scrollbar">
                                            <div className="flex items-center gap-2.5  flex-col">
                                                <div className="w-28 aspect-square flex-1/3  overflow-hidden rounded-full">
                                                    <img src={ProfilePicture(currentUser)} alt="" srcset=""  className=" object-cover"/>
                                                </div>
                                                <span className=" font-semibold text-lg">{currentUser.firstname} {currentUser.lastname}</span>
                                            </div>
                                            <p className="text-center mt-8">
                                                les messages et les appels seront securise avec le chiffrement bout en  bout.
                                                seul les personnes participant a ce chat peuvent les lire , les ecouter et les partages 
                                                <span className="text-blue">En savoir Plus</span>
                                            </p>

                                            {/* display message */}
                                            <div className="mt-4 flex mb-4  gap-1 flex-col">
                                                {currentChat.map((item , index)=>(
                                            
                                                    item.receiver == user.userid ? 
                                                        <MessageLeft key={index} item={item} setMessageId={setMessageId} setReply={setReply} setDeleted ={setDeleted}/>
                                                    :  
                                                        <MessageRight key={index} item={item} setEdit={setEdit} setMessageId={setMessageId} setDeleted ={setDeleted}/>
                                                    
                                            
                                                ))}
                                            
                                            </div>


                                        </div>

                                    </div>
                                {/* end main message */}

                                {/* bottom message */}
                                    <AddMessage currentUser={currentUser} user={user} setError={setError}/>
                                {/* end bottom message */}

                                {/* edit message */}
                                    {edit && 
                                        <EditMessage messages={currentChat} edit={edit} messageid={messageid} setEdit={setEdit}/>
                                    }
                                {/*fin edit message  */}

                                {/* reply message */}
                                    {reply && 
                                        <ReplyMessage messages={currentChat} reply={reply} messageid={messageid} setReply={setReply} currentUser={currentUser}/>
                                    }
                                {/*en reply   */}

                            </div>
                        {/* end left main message */}

                        {/* right main message */}

                            <div className=" hidden lg:block  dark:bg-dark-second dark:text-dark-text bg-light-primary  text-gray-600 rounded-lg px-4 py-4 h-full">

                                <div className="flex  flex-col  gap-0 justify-center items-center">
                                    <div className="flex items-center gap-2.5  flex-col">
                                        <div className="w-28 aspect-square flex-1/3  my-0 overflow-hidden rounded-full">
                                            <img src={ProfilePicture(currentUser)} alt="" srcset=""  className=" object-cover"/>
                                        </div>
                                        <span className=" font-semibold text-[18px]">{currentUser.firstname} {currentUser.lastname}</span>
                                        <span className=" font-normal  -mt-4">{dayjs(currentUser.created_at).fromNow()}</span>
                                    </div>
                                    <div className=" bg-light-secondary px-4 py-2 w-fit flex gap-0.5 rounded-2xl my-3">
                                        <span  className="privacy_checkup_icon"></span>
                                        <span className="font-semibold text-sm">Chiffre de bout en bout</span>
                                    </div>

                                    <div className="flex gap-4 items-center justify-center w-[80%]">
                                        <div className="flex flex-col items-center justify-between">
                                            <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300  dark:hover:bg-dark-text/50 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                                                <UserCircleIcon/>
                                            </div>
                                            <span>Profil</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-between  text-center ">
                                            <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300   dark:hover:bg-dark-text/50 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
                                                <i className="turnOnNotification_icon  dark:invert text-3xl"></i>
                                            </div>
                                            <span style={{lineHeight: "18px"}}>Mettre en Sourdine</span>
                                        </div>

                                        <div className="flex flex-col items-center justify-between">
                                            <div className={` rounded-full text-xl xl:grid hidden place-items-center h-12 w-12 hover:bg-gray-300 dark:hover:bg-dark-text/50  dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer `}>
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
                }


            </div>
            {error && 
              <Error error={error} setError={setError}/>
            }

            {deleted &&  <DeleteMessage setDelete={setDeleted} messages={currentChat} messageid={messageid} userid={user.userid}/>}
        </>

    )
}

export default Messages