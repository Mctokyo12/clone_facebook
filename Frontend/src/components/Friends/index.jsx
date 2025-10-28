import Header from "../Header"

const Friend = ()=>{
    return (
        <>
            <Header/>
            <div className="flex items-start mt-16">


                {/* <!-- sidebar friend --> */}
                    <div className=" h-screen py-3 px-3 w-[28%] dark:bg-dark-second dark:text-dark-text  bg-white text-gray-500 ">
                        <div className="flex justify-between items-center w-full">
                            <h3 className="font-semibold text-xl">Friends</h3>
                            <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2  mr-2 shadow  dark:hover:bg-dark-third dark:bg-transparent dark:text-dark-text  bg-gray-200 cursor-pointer">
                                <i className="bx  bx-cog text-2xl"></i>
                            </span>
                        </div>
                        {/* <!-- sidebar friend main--> */}
                            <ul className="mt-4">
                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bxs-group"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Home</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Friend Requests</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Send Requests</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>

                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Suggestion</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">All friend</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Birthdays</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                                <li className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className="bx bx-"></i>
                                        </span>
                                        <h4 className=" font-semibold text-sm">Custom List</h4>
                                    </div>
                                    <span>
                                        <i className="bx  bx-right-arrow-circle text-3xl"></i>
                                    </span>
                                </li>


                            </ul>
                        {/* <!-- end sidebar friend main --> */}


                    </div>
                {/* <!-- end sidebar friend --> */}

                {/* <!-- Main Friend --> */}
                <div className="px-2  py-12  mx-10 w-[90%]  ">
                    <ul className="dark:text-dark-text">
                        <li className="flex items-center justify-between">
                            <h2 className="font-bold text-xl">Friend Requets</h2>
                            <span className="text-blue-500">
                                <a href="#">See all</a>
                            </span>
                        </li>
                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 mt-4"></div>


                        <li className="flex items-center justify-between">
                            <h2 className="font-bold text-xl">Sent Requests</h2>
                            <span className="text-blue-500">
                                <a href="#">See all</a>
                            </span>
                        </li>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 mt-4"></div>


                        <li className="flex items-center justify-between">
                            <h2 className="font-bold text-xl">Friends</h2>
                            <span className="text-blue-500">
                                <a href="#">See all</a>
                            </span>
                        </li>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 mt-4"></div>

                    </ul>
                </div>
                {/* <!-- End Main  --> */}
            </div>
        </>
    )
}

export default Friend