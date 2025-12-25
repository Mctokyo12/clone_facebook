import React, { useEffect, useState } from 'react';
import { fetch, FillArray, RemoveDouble } from '../../../functions/Fetch';
import { HashLoader, PulseLoader } from 'react-spinners';
import Error from '../../Errors';
import axios from 'axios';
import { Link } from 'react-router';




const Right = ({userid , FriendQuery}) => {

    const [friendSender , setFriendSender] = useState([]);
    const [loader,setLoader] = useState(false);
    const [status,setStatus] = useState(0)
    const [error , setError] = useState(false);
    const [loaderInfo,setLoaderInfo] = useState(false);
    

    const [friend , setFriend] = useState([]);
    
    const postData = async(action)=> {
        setLoaderInfo(true)
        const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/get-friend/${userid}` , {
            "action": action
        })
        const data = response.data;
        FillArray(data , setFriend)
        setLoaderInfo(false)
    }

    error == true && setTimeout(() => {
        setError(false)
    }, 5000);

    const DeleteInvitation = async (receiver) => {

        try {
           const response = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/delete-request`,{
                "sender":userid,
                "receiver": receiver
            })
            const data = response.data;
            console.log(data);
            
            setStatus(data.status)
        } catch (error) {
            setError("une erreur s'est produit lors de la requete")
           
        }
    }

    const confirme = async (receiver)=>{
        setLoader(true)
        try {
            const response = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/accept-request`,{
                "sender": userid,
                "receiver": receiver
            })
            const data = response.data
            setStatus(data.status)
            setLoader(false)
        } catch (error) {
            setError("une erreur s'est produit lors de la requete")
        
        }
    }

    

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_URL_BACKEND}/api/get-sender/${userid}` , setFriendSender , setLoader); // personne qui envoie des demandes
        
        for (const item of FriendQuery) {
            if(item.sender === userid){
                postData("sender")
                break;
            }else if(item.receiver === userid){
                postData("receiver")
                console.log(friend);    
                break;           
            }
            break;
            
        }
    } , [FriendQuery])







    return (
        <>
            <div className="fixed right-0  hidden top-20 mt-3 mr-6 xl:block w-1/6">
                <div>
                    <div className="flex text-xl items-center justify-between">
                        <h4 className=" font-semibold text-gray-500 dark:text-dark-text ">Friend Resquets</h4>
                        <span className="px-2 py-2 rounded-lg  cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third text-blue-500">See All</span>
                    </div>
                    <ul className='mt-2'>
                        {friendSender.length > 0 ? 
                            RemoveDouble(friendSender).map((item ,index )=>(
                                <li key={index}>
                                    <a href="#" className="flex gap-4 items-center pl-2 py-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg">
                                        <img  
                                            src={ 
                                                item.profile_picture  == null ? 
                                                    item.gender == "Female" ? 
                                                        "/images/user_female.jpg" : "/images/default_pic.png"
                                                    : 
                                                `${import.meta.env.VITE_URL_BACKEND}/storage/${item.profile_picture}`
                                            }
                                            alt="" 
                                            className="rounded-full aspect-square object-cover  w-[4.5rem]"
                                        />
                                        <div>
                                            <span className="text-gray-500 text-lg dark:text-dark-text font-semibold">{item.firstname} {item.lastname} <span className=" font-light">6d</span> </span>
                                            {
                                                status == 2 ? <span className='font-semibold'>Invitation Accepte</span> :
                                                status == 4 ? <span className='font-semibold'> Demande Supprime</span> :  
                                            
                                                <div className="flex items-center mt-2 gap-2 w-full">
                                        
                                                    <span className="py-2 px-2 font-semibold text-center w-1/2 bg-blue-500 text-white rounded-lg" 
                                                        onClick={()=>{confirme(item.userid)}}
                                                    >
                                                        {loader ? <PulseLoader size={7} color='#fff'/> : "Confirme"}
                                                    </span>
                                                    
                                                    <span className="py-2 px-2 font-semibold text-center w-1/2  bg-gray-300  text-black rounded-lg" 
                                                        onClick={()=>{
                                                            DeleteInvitation(item.userid)
                                                        }}
                                                    >Delete</span>
                                                </div>
                                            }

                                        </div>
                                    </a>
                                </li>
                            ))

                            : 
                            <div className='text-xl font-semibold text-light-text dark:text-dark-text'>
                                Pas d'invitation pour l'instant
                            </div>
                    
                        }

                    </ul>
                    
                    
                </div>
                <div className="w-full h-[1px] bg-gray-200 dark:bg-dark-third mt-9"></div>
                <div className="flex items-center justify-between mt-3">
                    <h4 className=" font-semibold text-gray-500 dark:text-dark-text text-xl">Contacts</h4>
                    <div className="flex items-center justify-between">
                        <span className="px-2 py-2 cursor-pointer self-start   grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                            <i className="bx bx-search text-xl font-semibold"></i>
                        </span>
                        <span className="px-2 py-2 cursor-pointer self-start  grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                            <i className="bx bx-dots-horizontal-rounded font-semibold text-xl"></i>
                        </span>
                    </div>
                </div>
                <div className="mt-2">
                    <ul>
                        {   loaderInfo ? 
                                (   <div className='flex justify-center items-center'> 
                                        <HashLoader color="#1876f2"  className='text-center'/> 
                                    </div>
                                ) 
                            : 
                            friend.length > 0 ?
                                RemoveDouble(friend).map((item,index)=>(
                                    <li className="mb-1" key={index}>
                                        <Link to={`/profile/${item.userid}`} className="flex items-center gap-2 px-2  py-2 rounded-lg hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                                            <div className="relative">
                                                <div className="overflow-hidden rounded-full">
                                                    <img 
                                                        src={ 
                                                            item.profile_picture  == null ? 
                                                                item.gender == "Female" ? 
                                                                    "/images/user_female.jpg" : "/images/default_pic.png"
                                                                : 
                                                            `${import.meta.env.VITE_URL_BACKEND}/storage/${item.profile_picture}`
                                                        }
                                                        alt="" srcset="" 
                                                        className="w-12 aspect-square object-cover  font-bold"
                                                    />
                                                </div>
                                                <span className=" w-4 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                                            </div>
                                            <h4 className="font-semibold">{item.firstname} {item.lastname}</h4>
                                        </Link>
                                    </li>
                                ))

                            : 
                            <span className=' font-semibold dark:text-white '>vous n'avez pas d'amis</span>
                        }
                          
                        

                    </ul>
                </div>        
            </div>
            {error && <Error error={error} setError={setError}/>}
        </>
    );
};

export default Right;