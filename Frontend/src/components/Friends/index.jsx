import { use, useEffect, useState } from "react"
import Header from "../Header"
import axios from "axios";
import Card from "./Card";
import { fetch, FillArray, RemoveDouble } from "../../functions/Fetch";
import { friendMenu } from "../../data/allMenu";
import FriendMenu from "./FriendMenu";


const Friend = ({userid , FriendQuery})=>{

    const [users , setUsers] = useState([]);
    const [friendSender , setFriendSender] = useState([]);

    useEffect(()=>{
        
        fetch(`${import.meta.env.VITE_URL_BACKEND}/api/alluser/${userid}`, setUsers)
        fetch(`${import.meta.env.VITE_URL_BACKEND}/api/get-sender/${userid}` , setFriendSender);
        
    } , [])

    return (
        <>
            <Header/>
            <div className="flex items-start mt-16">


                {/* <!-- sidebar friend --> */}
                    <div className=" fixed  h-screen overflow-y-auto py-3 px-3 w-[25%] dark:bg-dark-second dark:text-dark-text  bg-white text-gray-500 ">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="font-semibold text-xl">Friends</h3>
                            <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2  mr-2 shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="bx  bx-cog text-2xl"></i>
                            </span>
                        </div>
                        {/* <!-- sidebar friend main--> */}
                            <ul className="mt-4 flex flex-col gap-4 ">
                                {friendMenu.map(({name , icon ,link} , index)=>(
                                    <FriendMenu 
                                        name={name} 
                                        icon={icon} 
                                        link={link} 
                                        key={index}
                                    />
                                ))}
                            </ul>
                        {/* <!-- end sidebar friend main --> */}

                    </div>
                {/* <!-- end sidebar friend --> */}

                {/* <!-- Main Friend --> */}
                <div className="px-2 ml-96 py-12  mx-10 w-[90%]  ">
                    <div className="dark:text-dark-text">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-bold text-xl">Friend Requets</h2>
                                <span className="text-blue-500">
                                    <a href="#">See all</a>
                                </span>
                            </div>

                            <ul className=" flex items-center gap-2">

                                {users.length != 0 ? 
                                    
                                    users.filter((user , index )=> index === users.findIndex((t)=>t.userid == user.userid) ).map((user , index)=>(
                                        <Card user={user} key={index} sender={userid}/> 
                                    )) : "pas d'utilisateur"
                                }



                            </ul>


                        </div>


                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 mt-4"></div>
                        
                        <div>  
                            <div className="flex items-center justify-between my-2">
                                <h2 className="font-bold text-xl">Sent Requests</h2>
                                <span className="text-blue-500">
                                    <a href="#">See all</a>
                                </span>
                            </div>

                            <ul className=" flex items-center gap-2">

                                {friendSender.length != 0 ? 
                                    
                                    friendSender.filter((user , index )=> index === friendSender.findIndex((t)=>t.userid == user.userid) ).map((user , index)=>(
                                        <Card user={user} key={index} sender={userid}/> 
                                    )) : "Aucune invation"
                                }

                            </ul>
                        </div>

            


                    </div>


                </div>
                {/* <!-- End Main  --> */}
            </div>
        </>
    )
}

export default Friend