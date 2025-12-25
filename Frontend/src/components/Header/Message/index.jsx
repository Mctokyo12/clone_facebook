import MessageItem from "./MessageItem"




const Message = ()=>{
    return(
        <div className="gap-2 scrollbar-none px-4 py-4  w-[95%] md:w-[28rem]  h-[87%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-second dark:text-dark-text bg-light-primary shadow-box">
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
    )
}

export default Message