import React, { useEffect, useState } from 'react';
import AllMenu from './AllMenu';
import UserMenu from './OthersMenu';
import Notification from './Notification';
import Message from './Message';
import { useSelector } from 'react-redux';
import { ProfilePicture } from '../../functions/ProfilePicture';
import { Link } from 'react-router';
import Search from './Search';
import { Theme } from '../../functions/Theme';
import axios from 'axios';
import { FillArray, RemoveDouble } from '../../functions/Fetch';
import { useEchoModel, useEchoNotification } from '@laravel/echo-react';



const Header = () => {

   const [userMenu , setuserMenu] = useState(false)
   const [searchVisible , setSearchVisible] = useState(false)
   const user = useSelector((state) => state.userReducer);
   const profile = ProfilePicture(user);
   const [activeMenu , setActiveMenu] = useState(0)
   const [activeClass , setActiveClass] = useState("")
   const [visibleMenu ,setVisibleMenu] = useState(false);
   const [visibleMessage ,setVisibleMessage] = useState(false);
   const [theme , setTheme] = useState(localStorage.theme)
   const [notifications , setNotifications] = useState([]);
   const [unreadNotification , setUnreadNotification] = useState([]);
   const [error , setError] = useState("");
   const {channel} = useEchoModel("App.Models.User",user.id);
    const getNotification  = async ()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/notification/${user.userid}`);
            const {data} = response;
            FillArray(data ,setNotifications)
            
        } catch (error) {
            
            setError("une Erreur est survenue sur le serveur ....")
        }
    }

    const getUnreadNotification = async ()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/unread-notification/${user.userid}`);
            const {data} = response;
            
            
            FillArray(data,setUnreadNotification);
            
        } catch (error) {
            console.log(error);
            
        }
    }  

    


    // setTimeout(() => {

    // }, 1000);


    // window.Echo.private("App.Models.User." + user.id)
    //     .notification((notification)=>{
    //         console.log(notification);
    //         setUnreadNotification(previewState=>[...previewState , notification])
    //     })

    useEffect(()=>{
        getNotification();
        getUnreadNotification();
        channel().notification((notification)=>{
            
            setNotifications(previewState=>[notification , ...previewState])
            setUnreadNotification(previewState=>[notification , ...previewState ])
            
        
        });
        
       

        return ()=>{
            console.log("Nettoyage de l'ecouteur ");
        }
    },[user.id]);
    
    
    
   let count = 0

   const RightNav = [
        {
            icon:"bxs-grid",
            isvisible:"menu"
        },
        {
            icon:"bxl-messenger",
            isvisible:"message"
        },
        {
            icon:"bxs-bell",
            isvisible:"notification"

        }
   ]


    return (
        <nav className=" bg-white z-30 dark:bg-dark-second dark:border-b-2 pt-3 pb-0 md:py-3 dark:border-dark-third px-3 h-16 flex flex-col items-center justify-center shadow fixed top-0 w-full max-md:h-32 md:flex-row  md:justify-between">
            {/* <!-- LEFT NAV --> */}
                <div className=" flex items-center gap-3 justify-between w-full md:w-max ">
                    <a href="#" className="inline-block md:hidden">
                        <img src="/images/fb-logo-mb.png" alt="" className="w-36" />
                    </a>
                    {!searchVisible &&
                        <a id="fb-logo" href="#"  className="hidden md:inline-block">
                            <img src="/images/fb-logo.png" alt="" className="object-cover aspect-square w-12"/>
                        </a>
                    }
                    {
                        searchVisible && 
                        <span id="search-back" onClick={()=>setSearchVisible(false)}  className="rounded-full  text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                            <i className="bx bx-arrow-back text-xl"></i>
                        </span>
                    }

                    <div className="flex items-center gap-1">

                        <div id="search-input" onClick={()=>setSearchVisible(!searchVisible)} className="flex items-center cursor-pointer justify-center gap-4 bg-gray-100  dark:bg-dark-third rounded-full px-3 py-2">
                            <i className="bx bx-search text-2xl dark:text-dark-text"></i>
                            <input className="bg-transparent cursor-pointer  outline-none md:hidden  dark:placeholder:text-dark-text hidden xl:inline-block" type="text" name="" id="" placeholder="Search facebook" />
                        </div>

                        <div onClick={()=>setVisibleMessage(!visibleMessage)} className="rounded-full text-xl md:hidden grid place-items-center py-3 px-3 hover:bg-gray-300  dark:hover:bg-dark-text/50 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer  ">
                            <i className="bx bxl-messenger "></i>
                        </div>

                        <div onClick={()=>{

                            if(localStorage.theme == "light"){
                                localStorage.theme = "dark"
                                setTheme(localStorage.theme)
                            }else{
                                localStorage.theme = "light"
                                setTheme(localStorage.theme)
                            }  
                            
                            Theme()
                        }} className="rounded-full  text-xl md:hidden grid place-items-center py-3 px-3 hover:bg-gray-300   dark:bg-dark-third dark:hover:bg-dark-text/50 dark:text-dark-text bg-gray-200 cursor-pointer">
                            {
                                theme === "light" ? <i className={`bx bxs-moon`}></i> : <i className={`bx bxs-sun`}></i>
                            }
                            
                        </div>

                    </div>
                </div>
            {/* <!-- END LEFT NAV --> */}

            {/* <!-- MAIN NAV--> */}
                <ul className="flex items-center max-md:w-full justify-center w-2/5">

                    <li className="w-1/5">
                        <Link to="/" className="px-2 py-3 inline-block w-full dark:text-blue-500  transition-all  text-center cursor-pointer text-blue-500 border-b-blue-500 border-b-4 relative">
                            <i className="bx bxs-home text-4xl"></i>
                        </Link>
                    </li>

                    <li className="w-1/5">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-movie-play text-4xl relative">
                                <span className="absolute bg-red-500  text-white rounded-full py-2 px-3 -top-1 -right-2 text-xs h-5 w-5 text-center flex justify-center items-center">9+</span>
                            </i>
                        </a>
                    </li>

                    <li className="w-1/5">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-store text-4xl"></i>
                        </a>
                    </li>

                    <li className="w-1/5">
                        <Link to="/friends/" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text  hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md">
                            <i className="bx bx-group text-4xl"></i>
                        </Link>
                    </li>

                    <li className="w-1/5 hidden md:inline-block">
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md ">
                        <i className="bx bx-layout text-4xl relative">
                            <span className="absolute bg-red-500  text-white rounded-full py-2 px-3 -top-1 -right-2 text-xs h-5 w-5 text-center flex justify-center items-center">9+</span>
                        </i>
                        </a>
                    </li>

                    <li className="w-1/5 inline-block md:hidden " onClick={()=>setVisibleMenu(!visibleMenu)}>
                        <a href="#" className="px-2 py-3 inline-block w-full hover:bg-slate-100  dark:hover:bg-dark-third dark:text-dark-text hover:text-gray-500 transition-all  text-center cursor-pointer text-gray-500 rounded-md ">
                            <i className="bx bx-menu text-4xl"></i>
                        </a>
                    </li>
                </ul>
            {/* <!-- END MAIN NAV --> */}

            {/* <!-- RIGHT NAV --> */}
                <div className="hidden items-center md:flex justify-center gap-4 mx-4 ">

                    
                    {RightNav.map(({icon , isvisible} , index)=>(
                        <div id="grid"  key={index}  onClick={()=>{
                            count++
                            if (isvisible == "menu") {
                                setActiveMenu(1)
                                setActiveClass("menu")
                            }else if (isvisible == "message"){
                                setActiveMenu(2)
                                setActiveClass("message")
                            }else if(isvisible == "notification"){
                                setActiveMenu(3)
                                setActiveClass("notification")
                            }

                            if (count === 2) {    
                                setActiveMenu(0)
                                setActiveClass("")
                            }
                            

                        }} className={`  ${activeClass == isvisible ? "text-blue-500" : "dark:text-dark-text"}  rounded-full text-xl text-center xl:grid hidden  relative place-content-center h-12 w-12 hover:bg-gray-300 dark:hover:bg-dark-text/50 dark:bg-dark-third  bg-gray-200 cursor-pointer`}>
                            <i className={`bx ${icon} text-3xl`}></i> 
                            {isvisible == "notification" ?
                                RemoveDouble(unreadNotification).length < 15 && RemoveDouble(unreadNotification).length > 0  ?
                                    <span className="absolute bg-red-500 text-white rounded-full p-2 top-0 right-0 text-xs h-5 w-5  flex justify-center items-center">{RemoveDouble(unreadNotification).length}</span> :
                                RemoveDouble(unreadNotification).length > 15 ?
                                    <span className="absolute bg-red-500 text-white rounded-full p-2 top-0 right-0 text-xs h-5 w-6  flex justify-center items-center">15+</span> :
                                "" : ""
                                    
                            }
                        </div>
                        
                    ))}
                

                    <div id="user-profile" className="xl:flex  hidden items-center justify-center  relative  rounded-xl  h-12    cursor-pointer">
                        <img src={profile} alt="" className="w-12 h-12 object-cover z-10 rounded-full"/>
                        <span onClick={()=>{setuserMenu(!userMenu)}} className="absolute border-[2.5px] border-light-primary bg-light-third dark:border-dark-second z-30 dark:bg-dark-third  rounded-full p-2 bottom-0 right-0 text-xs h-1 w-1  flex justify-center items-center">
                            <i className="bx bx-chevron-down dark:text-dark-text text-xl"></i>
                        </span>
                    </div>

                </div>
            {/* <!-- RIGHT NAV --> */}
            {/* pour l'ordinateur */}
            {userMenu && <UserMenu user={user}/>}
            {searchVisible && <Search/>}
            {activeMenu == 1 &&  <AllMenu/>}
            {activeMenu == 2  && <Message/>}
            {activeMenu == 3 && 
                <Notification 
                    user={user}
                    notifications={notifications} 
                    error={error} 
                    setError={setError} 
                    unreadNotification={unreadNotification}
                />
            }

            {/* pour le mobile */}
            {visibleMenu && <AllMenu/> }
            {visibleMessage && <Message/> }


           
            

        </nav>
    );
};

export default Header;