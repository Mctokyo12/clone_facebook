import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types';


const Card = ({user , sender}) => {
    const [receiver , setReceiver] = useState(user.userid);
    const [loader,setLoader] = useState(false);
    const [status,setStatus] = useState(0)
    const [friend , setFriend] = useState([]);
    const [text , setText] = useState("");
    const [cancelInvitation , setcancelInvitation] = useState(null)

    const friendFilter = friend.filter((item , index)=>index == friend.findIndex((t)=>t.id == item.id))
    
    const friends = async ()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/friends/`);
            const data = response.data;
            if (Array.isArray(data)) {
                data.forEach(item=>{
                    setFriend(previewstate=>[...previewstate , item]);
                })
            }
            
        } catch (error) {
            console.log(error);
        }


    }

    const confirme = async (receiver)=>{
        try {
            const response = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/accept-request`,{
                "sender": sender,
                "receiver": receiver
            })
            const data = response.data
            setStatus(data.status)
        } catch (error) {
            console.log(error);
            
        }
    }

    const AddFriend = async ()=>{
        setLoader(true)
        try {
            const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/addFriend`,{
                "sender":sender,
                "receiver": receiver
            });
            const data = response.data;
            setStatus(data.status);
            setcancelInvitation(null)
            console.log(data);
            

            setLoader(false)
        } catch (error) {
            console.log(error);
            
        }
    }

    const CancelInvitation = async ()=>{
        try {
           const response = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/cancel-request`,{
                "sender":sender,
                "receiver": receiver
            })
            const data = response.data;
            console.log(data);
            
            setStatus(data.status)
            setcancelInvitation(data.status)
        } catch (error) {
            console.log(error);
            
        }
    }

    const DeleteInvitation = async () => {
        try {
           const response = await axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/delete-request`,{
                "sender":sender,
                "receiver": receiver
            })
            const data = response.data;
            console.log(data);
            
            setStatus(data.status)
        } catch (error) {
            console.log(error);
        }
    }




    useEffect(()=>{
        friends();
    },[])

    // console.log(friendFilter);
    

    return (
       
       <li className="dark:bg-dark-second   w-[20%]  overflow-hidden bg-light-primary shadow rounded-lg">
            
            <div className="w-full h-[12rem] overflow-hidden  bg-amber-300">
                <img 
                    src={ 
                        user.profile_picture  == null ? 
                            user.gender == "Female" ? 
                                "/images/user_female.jpg" : "/images/default_pic.png"
                            : 
                        `${import.meta.env.VITE_URL_BACKEND}/storage/${user.profile_picture}`
                    } 
                    alt=""
                    className="w-full aspect-auto object-cover"
                />
            </div>

            <div className="dark:text-dark-text w-full flex px-2  py-2 flex-col">
                <h3 className="font-bold  py-1.5 text-sm">{`${user.firstname} ${user.lastname}`}</h3>
                {sender != user.receiver  &&  status == 1 &&
                    <span className="text-base">Invitation envoyee</span>
                }
                {sender != user.receiver  &&  cancelInvitation == 0 &&
                    <span className="text-base">Invitation Annuler</span>
                }
                

                {sender === user.receiver ?
                    <div>
                        {
                            status == 0 ? 
                                <div>
                                    <div  onClick={()=>confirme()} className="flex h-10 items-center justify-center mb-1 cursor-pointer mt-1  px-2 py-2 w-full  bg-blue rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                        {loader ? 
                                            <PulseLoader  size={7} color='#fff'/> :
                                            <span className="text-base font-semibold text-center text-white dark:text-dark-text">
                                                Confirme
                                            </span>
                                        }
                                    </div>
                                    <div onClick={()=>DeleteInvitation()} className="flex items-center  justify-center cursor-pointer mt-1  px-2 py-2  w-full  gap bg-light-third rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                        <span className="text-base  font-semibold text-gray-800 text-center dark:text-dark-text">Delete</span>
                                    </div> 

                                </div>
                            : status == 2 ?
                                <div className="flex items-center  justify-center cursor-pointer mt-1  px-2 py-2  w-full  gap bg-light-third rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                    <span className="text-base  font-semibold  text-gray-400 text-center dark:text-dark-text">Invitation acceptee</span>
                                </div>
                            :
                                <div className="flex items-center  justify-center cursor-pointer mt-1  px-2 py-2  w-full  gap bg-light-third rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                    <span className="text-base  font-semibold  text-gray-400 text-center dark:text-dark-text">Demande Supprimee</span>
                                </div>
                        }


                    </div>
                    : 
                    <div>
                        {
                            status == 0 ?  
                           
                               <div>
                                    <div  onClick={()=>AddFriend()} className="flex h-10 items-center justify-center mb-1 cursor-pointer mt-1  px-2 py-2 w-full  bg-light-blue rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                        {loader ? 
                                            <PulseLoader  size={7} color='#fff'/> :
                                            <span className="text-base font-semibold text-center text-blue dark:text-dark-text">
                                                Add Friend
                                            </span>
                                        }
                                    </div> 
                                    <div className="flex items-center  justify-center cursor-pointer mt-1  px-2 py-2  w-full  gap bg-light-third rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                        <span className="text-base font-semibold text-gray-800 text-center dark:text-dark-text">Delete</span>
                                    </div> 
                                </div>  
                            :
                        
                                <div onClick={()=>CancelInvitation()} className="flex items-center  justify-center cursor-pointer mt-1  px-2 py-2  w-full  gap bg-light-third rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                                    <span className="text-base font-semibold text-gray-800 text-center dark:text-dark-text">Cancel</span>
                                </div>
                            
       
                        }
                        
         
                    </div>
                }
            </div>

        </li>
    );
};




export default Card;