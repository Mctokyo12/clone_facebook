const Knowledge = ()=>{
    return(
        <div className="mt-2  mx-auto w-[67%] h-[19rem] px-4 py-2  rounded-xl  relative -z-10 border-[3px] border-blue-500 " >
            <div className="w-full flex items-center justify-between dark:text-dark-text ">
                <span className="font-semibold">People You May Know</span>
                
                <span className="flex items-center cursor-pointer   px-2 py-2  z-20 gap-2  rounded-full dark:hover:bg-dark-third dark:text-white ">
                    <i className="bx  bx-dots-horizontal text-lg"></i>
                </span>

            </div>
            <ul className=" flex items-center gap-2">

                <li className="dark:bg-dark-second h-[15.5rem]  w-[18%]  overflow-hidden bg-light-secondary rounded-lg">
                    <div className="w-full h-36 overflow-hidden">
                        <img src="/images/avt-2.jpg" alt="" className="w-full aspect-auto object-cover"/>
                    </div>
                    <div className="dark:text-dark-text w-full flex items-center justify-center mt-4 flex-col">
                        <h3 className="font-semibold">Elon Mush</h3>
                        
                        <div className="flex items-center cursor-pointer mt-1  px-2 py-1 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                            
                            <i className="bx bxs-user-plus text-3xl text-blue-600"></i>

                            <span className="text-sm font-semibold text-blue-500">Add Friend</span>
                        </div> 

                    </div>

                </li>


                <li className="dark:bg-dark-second h-[15.5rem]  w-[18%]  overflow-hidden bg-light-secondary rounded-lg">
                    <div className="w-full h-36 overflow-hidden">
                        <img src="/images/avt-3.jpg" alt="" className="w-full aspect-auto object-cover"/>
                    </div>
                    <div className="dark:text-dark-text w-full flex items-center justify-center mt-4 flex-col">
                        <h3 className="font-semibold">Bill Gates</h3>
                        
                        <div className="flex items-center cursor-pointer mt-1  px-2 py-1 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                            
                            <i className="bx bxs-user-plus text-3xl text-blue-600"></i>

                            <span className="text-sm font-semibold text-blue-500">Add Friend</span>
                        </div> 

                    </div>

                </li>



                <li className="dark:bg-dark-second h-[15.5rem]  w-[18%]  overflow-hidden bg-light-secondary rounded-lg">
                    <div className="w-full h-36 overflow-hidden">
                        <img src="/images/avt-4.jpg" alt="" className="w-full aspect-auto object-cover"/>
                    </div>
                    <div className="dark:text-dark-text w-full flex items-center justify-center mt-4 flex-col">
                        <h3 className="font-semibold"> Mark Zukenberg</h3>
                        
                        <div className="flex items-center cursor-pointer mt-1  px-2 py-1 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                            
                            <i className="bx bxs-user-plus text-3xl text-blue-600"></i>

                            <span className="text-sm font-semibold text-blue-500">Add Friend</span>
                        </div> 

                    </div>

                </li>


                <li className="dark:bg-dark-second h-[15.5rem]  w-[18%]  overflow-hidden bg-light-secondary rounded-lg">
                    <div className="w-full h-36 overflow-hidden">
                        <img src="/images/avt-5.jpg" alt="" className="w-full aspect-auto object-cover"/>
                    </div>
                    <div className="dark:text-dark-text w-full flex items-center justify-center mt-4 flex-col">
                        <h3 className="font-semibold">Tokyo Ronel</h3>
                        
                        <div className="flex items-center cursor-pointer mt-1  px-2 py-1 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                            
                            <i className="bx bxs-user-plus text-3xl text-blue-600"></i>

                            <span className="text-sm font-semibold text-blue-500">Add Friend</span>
                        </div> 

                    </div>

                </li>

                
                <li className="dark:bg-dark-second h-[15.5rem]  w-[18%]  overflow-hidden  bg-light-secondary rounded-lg">
                    <div className="w-full h-36 overflow-hidden">
                        <img src="/images/avt-7.jpg" alt="" className="w-full aspect-auto object-cover"/>
                    </div>
                    <div className="dark:text-dark-text w-full flex items-center justify-center mt-4 flex-col">
                        <h3 className="font-semibold">Lamile Yamale</h3>
                        
                        <div className="flex items-center cursor-pointer mt-1  px-2 py-1 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-[#e7f3ff] dark:text-white">
                            
                            <i className="bx bxs-user-plus text-3xl text-blue-600"></i>

                            <span className="text-sm font-semibold text-blue-500">Add Friend</span>
                        </div> 

                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Knowledge