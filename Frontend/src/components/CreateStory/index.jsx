
import React, { Component } from 'react'

const CreateStory = ()=>{

    return(

        <div className="flex items-start">
            {/* <!-- story sidebar --> */}
                <div className=" h-screen py-2 border-r relative dark:border-r-dark-third  border-r-light-third w-[35%] dark:bg-dark-second dark:text-dark-text    bg-light-primary text-gray-500 ">
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

                        <div  className="flex px-4 mt-4  gap-2 justify-between items-center  py-2   rounded-lg  cursor-pointer dark:text-white">
                            <h1 className="font-semibold text-2xl">Votre Story</h1>
                            <span className="rounded-full relative text-center grid place-items-center size-11  shadow dark:bg-dark-third  dark:hover:bg-dark-text dark:hover:bg-opacity-30    dark:text-white  bg-gray-200 cursor-pointer">
                                <i className="bx  bx-cog text-3xl"></i>
                            </span>
                        </div>

                        <div  className="flex px-4 mt-2  gap-3   items-center pb-4  rounded-lg  cursor-pointer dark:text-white">
                            <div className="overflow-hidden rounded-full size-16">
                                <img src="/images/profile.jpg" alt="" className="aspect-square w-full object-cover"/>
                            </div>
                            <h2 className="text-lg font-semibold">Mc Tokyo</h2>
                        </div>

                        <div className="h-[1px] mt-4 dark:bg-dark-third w-full bg-gray-100 "></div>

                        <ul className="px-4 mt-2  w-full ">
                            <li className="py-2 px-2 flex items-center gap-2 cursor-pointer dark:hover:bg-dark-text dark:hover:bg-opacity-10 hover:bg-gray-100 rounded-lg" >
                                <span className="rounded-full relative text-center grid place-items-center size-14  shadow dark:bg-dark-third  dark:hover:bg-dark-text dark:hover:bg-opacity-30    dark:text-white  bg-gray-200 cursor-pointer">
                                    <img src="/images/match_case.svg" alt="" srcset="" className="size-10"/>
                                </span>
                                <span className="font-semibold text-xl">Ajoute du texte</span>
                                
                                
                            </li>
                        </ul>



                        <div className="flex px-4 absolute bottom-3 pb-3 justify-between dark:shadow items-center w-full">
                            <div className="flex gap-2 items-center   w-full " >
                                <span className="rounded-lg relative text-center font-semibold grid place-items-center px-2 py-2 shadow dark:hover:bg-dark-text dark:hover:bg-opacity-20  dark:bg-dark-third  dark:text-white  bg-gray-200 cursor-pointer">
                                    Abondonner
                                </span>
                                <span className="rounded-lg relative text-center font-semibold grid place-items-center px-2 py-2 shadow bg-blue-500 text-white    dark:text-white cursor-pointer">
                                    Partager  dans vos la story
                                </span>
                            
                            </div>

                        </div>

                    
                    {/* <!-- end sidebar story --> */}


                </div>
            {/* <!-- end sidebar friend --> */}

            {/* <!-- Main Friend --> */}
            <div className="flex items-center justify-center py-2  bg-light-secondary  h-screen w-full  relative ">
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
                                <span className="absolute border-[2.5px] dark:border-dark-second z-30 border-light-primary bg-light-third dark:bg-dark-third  rounded-full p-2 bottom-0 right-0 text-xs h-1 w-1  flex justify-center items-center">
                                    <i className="bx bx-chevron-down dark:text-dark-text text-xl"></i>
                                </span>
                            </div>

                        </div>
                    {/* <!-- RIGHT NAV --> */}

                    <div className="flex  items-center justify-center gap-4 h-[60%] w-full">
                        <div className="h-full w-[23%] bg-gradient-to-b from-blue-500  flex items-center justify-center   to-cyan-200 rounded-lg">
                            <div className="text-center flex items-center flex-col gap-2">
                                <span className="rounded-full relative text-center grid place-items-center size-11  shadow dark:hover:bg-dark-third   dark:bg-dark-main  dark:text-white  bg-gray-200 cursor-pointer">
                                    <i className="addPhoto_icon dark:invert shadow-slate-50 "></i>
                                </span>
                                <span className="text-white font-semibold">Creer un story avec des photos</span>
                            </div>
                        </div>
                        <div className=" h-full w-[23%] bg-gradient-to-t flex items-center justify-center from-pink-500 to-purple-400 rounded-lg">
                            <div className="text-center flex items-center flex-col gap-2">
                                <span className="rounded-full relative text-center grid place-items-center size-11  shadow dark:hover:bg-dark-third   dark:bg-dark-main  dark:text-white  bg-gray-200 cursor-pointer">
                                    <img src="/images/match_case.svg" alt="" className="font-semibold size-8"/>
                                </span>
                                <span className="text-white font-semibold">Creer un story avec du text</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Photos Story --> */}

                        <div className="w-[95%] hidden  h-[82%] px-4 py-2 dark:text-dark-text dark:bg-dark-third bg-white rounded-lg ">
                            <h4 className="font-semibold pb-3">Apercu</h4>
                            <div className="w-full h-[90%] border border-dark-third rounded-lg dark:bg-dark-main bg-gray-100">

                            </div>
                        </div>
                    {/* <!-- End Photos Story --> */}

            </div>
            {/* <!-- End Main  --> */}
        </div>
    )
}

export  default CreateStory;

