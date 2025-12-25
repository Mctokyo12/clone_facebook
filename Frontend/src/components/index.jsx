
import React, { Component } from 'react'

const Stories = ()=>{

    return(

        <div className="flex items-start ">
            {/* <!-- story sidebar --> */}
                <div className=" h-screen py-2 border-r relative dark:border-r-dark-third border-r-light-third  w-[35%] dark:bg-dark-second dark:text-dark-text  bg-white text-gray-500 ">
                    {/* <!-- story heading --> */}
                        <div className="flex px-4 pb-3 justify-between dark:shadow items-center w-full">
                            <div className="flex gap-2 items-center  w-full " >
                                <span className="rounded-full relative text-center grid place-items-center size-11  shadow dark:hover:bg-dark-third   dark:bg-dark-main  dark:text-white  bg-gray-200 cursor-pointer">
                                    <i className="bx bx-x text-4xl"></i>
                                </span>
                                <img src="/images/fb-logo.png" alt="" srcset="" className="size-11"/>
                            </div>

                        </div>
                    {/* <!-- end story heading--> */}

                    {/* <!-- siderbar story --> */}

                        <div  className="px-4 mt-2 py-2 gap-2 justify-between items-center  rounded-lg  cursor-pointer dark:text-white">
                            <h1 className="font-semibold text-2xl">Stories</h1>
                            <span className="mt-2">  <a href="#"  className="text-blue-500" >Archive</a> . <a href="#"   className="text-blue-500">Parametres</a> </span>
                        </div>

                        <div  className=" px-4 mt-2   pb-4  rounded-lg  cursor-pointer dark:text-white">
                            <span className="text-xl font-semibold">Votre story</span>
                            <div className="flex gap-3 justify-between  py rounded-lg py-2  items-center dark:hover:bg-dark-text dark:hover:bg-opacity-20 px-2  hover:bg-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="overflow-hidden rounded-full size-16 border-2 border-dark-text">
                                        <img src="/images/profile.jpg" alt="" className="aspect-square w-full object-cover"/>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold">Mc Tokyo</h2>
                                        <span className="font-extralight text-dark-text">49 min</span>
                                    </div>
                                    
                                </div>

                                <span className="size-16 rounded-full flex items-center justify-center dark:bg-dark-third/60  bg-light-third text-blue-500">
                                    <i className="text-2xl bx bx-plus"></i>
                                </span>
                            </div>

                        </div>

                        <div className=" dark:text-white px-4">
                            <span className="text-xl font-semibold">Toutes les stores</span>
                            <ul className="mt-2  w-full ">

                                <li className="flex gap-3 justify-between  cursor-pointer py rounded-lg py-2  items-center dark:hover:bg-dark-text dark:hover:bg-opacity-20 px-2  hover:bg-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="overflow-hidden rounded-full size-16 border-2 border-dark-text">
                                            <img src="/images/avt-6.png" alt="" className="aspect-square w-full object-cover"/>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">Lamine yamale</h2>
                                            <span className="font-extralight text-dark-text">49 min</span>
                                        </div>
                                        
                                    </div>
                                </li>

                                <li className="flex gap-3 justify-between  cursor-pointer py rounded-lg py-2  items-center dark:hover:bg-dark-text dark:hover:bg-opacity-20 px-2  hover:bg-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="overflow-hidden rounded-full size-16 border-2 border-dark-text">
                                            <img src="/images/avt-4.jpg" alt="" className="aspect-square w-full object-cover"/>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">Bill Gates</h2>
                                            <span className="font-extralight text-dark-text">49 min</span>
                                        </div>
                                        
                                    </div>
                                </li>

                                
                                <li className="flex gap-3 justify-between  cursor-pointer py rounded-lg py-2  items-center dark:hover:bg-dark-text dark:hover:bg-opacity-20 px-2  hover:bg-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="overflow-hidden rounded-full size-16 border-2 border-dark-text">
                                            <img src="/images/avt-2.jpg" alt="" className="aspect-square w-full object-cover"/>
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">Bill Gates</h2>
                                            <span className="font-extralight text-dark-text">49 min</span>
                                        </div>
                                        
                                    </div>
                                </li>




                            </ul>
                        </div>

                    {/* <!-- end sidebar story --> */}


                </div>
            {/* <!-- end sidebar friend --> */}

            {/* <!-- Main Friend --> */}
            <div className="flex items-center justify-center py-2  h-screen w-full  relative ">
                    {/* <!-- RIGHT NAV --> */}
                        <div className="hidden items-center md:flex justify-center gap-2 mx-4  top-2 absolute  right-0">

                            <div id="grid" className="rounded-full text-xl text-center xl:grid hidden  place-content-center h-12 w-12 hover:bg-gray-300 dark:bg-dark-third dark:text-dark-text bg-gray-200 cursor-pointer">
                                <i className='bx bxs-grid text-3xl'></i> 
                            </div>
                        


                            <div className="rounded-full text-xl relative text-center grid place-items-center h-12 w-12 hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="bx bxs-bell text-3xl"></i>
                                <span className="absolute bg-red-500 text-white rounded-full p-2 top-0 right-0 text-xs h-5 w-5  flex justify-center items-center">9</span>
                            </div>

                            <div id="user-profile" className="xl:flex  hidden items-center justify-center  relative  rounded-xl  h-12    cursor-pointer">
                                <img src="/images/profile.jpg" alt="" className="w-12 h-12 object-cover z-10 rounded-full"/>
                                <span className="absolute border-[2.5px] dark:border-dark-second border-light-third z-30 dark:bg-dark-third  bg-light-primary rounded-full p-2 bottom-0 right-0 text-xs h-1 w-1  flex justify-center items-center">
                                    <i className="bx bx-chevron-down dark:text-dark-text text-xl"></i>
                                </span>
                            </div>

                        </div>
                    {/* <!-- RIGHT NAV --> */}

                    <div className="flex  items-center justify-center gap-14 h-[95%] w-full">

                            
                        <span className="size-16 rounded-full flex items-center cursor-pointer justify-center dark:bg-dark-third/60  bg-light-third dark:text-white">
                            <i className="text-5xl bx bx-chevron-left"></i>
                        </span>


                        <div className="h-full relative w-[30%] bg-gradient-to-b py-3 px-3 from-blue-500    to-cyan-200 ">
                            <div className="w-full">
                                <div className="h-[6px] rounded-xl dark:bg-white bg-white mb-3"></div>

                                <div className="flex items-center  justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="overflow-hidden rounded-full size-12 ">
                                            <img src="/images/profile.jpg" alt="" className="aspect-square w-full object-cover"/>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-lg dark:text-white">McTokyo</span>
                                            <span className=" font-semibold text-dark-text dark:text-white">10 h</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 cursor-pointer text-white text-3xl">
                                        <span><i className="bx bx-play"></i></span>
                                        <span><i className="bx bx-dots-horizontal"></i></span>
                                    </div>
                                </div>




                            </div>

                            <div className=" hidden absolute top-0 w-full h-24  left-0 dark:bg-opacity-20 dark:bg-dark-third">
                            
                            </div>

                            <div className="absolute hidden top-24 dark:text-white left-0 w-full h-full px-4 py-2 dark:bg-dark-second rounded-lg">
                                <div className="w-full  relative text-center  py-2 ">
                                    <span className="font-semibold  text-center justify-self-center text-xl">Details de la story</span>
                                    <span className="rounded-full absolute right-0 top-1   text-center grid place-items-center size-10  shadow dark:hover:bg-dark-third     dark:text-white   cursor-pointer">
                                        <i className="bx bx-x text-3xl"></i>
                                    </span>
                                </div>
                                <div className="w-full h-[1px] mt-3 dark:bg-dark-third bg-gray-200"></div>
                                <div className="flex items-center gap-2 mt-6 w-full">
                                    <div className="w-[45%] h-56 dark:bg-dark-third rounded-lg px-2 py-2">
                                    
                                    </div>
                                    <div className="w-[45%] h-56 bg-blue-500  bg-opacity-25 flex items-center justify-center flex-col rounded-lg px-2 py-2">
                                        <span className=" flex items-center justify-center rounded-full size-10 bg-blue-500">
                                            <i className="bx bx-plus text-black text-3xl"></i>
                                        </span>
                                        <span className="text-blue-500">Ajouter a la story</span>
                                    </div>
                                </div>
                                <div className="w-[45%] h-[4px] mt-3 dark:bg-dark-text bg-gray-200"></div>
                                <div className="flex  mt-3 items-center dark:text-white  gap-3">
                                    <span className="bx bx-save text-2xl"></span>
                                    <span className="font-semibold">1 Spetateur</span>
                                </div>
                                <div className="mt-2">
                                    <ul >
                                        <li className="flex gap-3 justify-between  cursor-pointer py rounded-lg py-2  items-center dark:hover:bg-dark-text dark:hover:bg-opacity-20 px-2  hover:bg-gray-100">
                                            <div className="flex items-center gap-3">
                                                <div className="overflow-hidden rounded-full size-16 border-2 border-dark-text">
                                                    <img src="/images/avt-6.png" alt="" className="aspect-square w-full object-cover"/>
                                                </div>
                                                <div>
                                                    <h2 className="text-lg font-semibold">Lamine yamale</h2>
                                                    <span className="font-extralight text-dark-text">49 min</span>
                                                </div>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                    

                                </div>

                                
                            </div>

                        </div>

                        <span className="size-16 rounded-full flex items-center justify-center dark:bg-dark-third bg-light-third dark:bg-opacity-60 cursor-pointer dark:text-white">
                            <i className="text-5xl bx bx-chevron-right"></i>
                        </span>

                    </div>

                    <div className="absolute bottom-0  h-16 w-[70%] dark:bg-dark-main   py-2">
                        <div className="rounded-3xl dark:border-white justify-between border-2 h-full px-4 py-2 flex items-center">
                            <input type="text" className="w-[100%] border-transparent outline-none h-full bg-transparent dark:text-white "/>
                            <i className="bx bxs-send dark:text-white text-2xl"></i>
                        </div>
                    </div>

                    {/* <!-- Photos Story --> */}

                        <div className="w-[95%] hidden  h-[82%] px-4 py-2 dark:text-dark-text dark:bg-dark-third bg-white rounded-lg ">
                            <h4 className="font-semibold pb-3">Apercu</h4>
                            <div className="w-full h-[90%] border border-dark-third rounded-lg dark:bg-dark-main bg-gray-100">

                            </div>
                        </div>
                    {/* <!-- End Photos Story --> */}




                    {/* <!--  --> */}
            </div>
            {/* <!-- End Main  --> */}


            

        </div>
    )
}

export  default Stories;

