import NotificationItem from "./NotificationItem"


const Notification = ()=>{
    return(
        <div className="gap-2 scrollbar-none px-4 py-4 w-[95%] md:w-[28rem] h-[87%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-third dark:text-dark-text bg-light-primary shadow-box">
          <div className="flex flex-col gap-2  w-full">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl text-gray-800 dark:text-dark-text">Notification</h1>
                    <span className="h-8 cursor-pointer self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text">
                        <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
                    </span>

                </div>

                <ul className="flex items-center gap-2 mx-2">
                    <li className="px-4 py-2 rounded-2xl  text-blue-500 bg-light-blue  hover:bg-light-secondary dark:hover:bg-dark-third">Tout</li>
                    <li className="px-4 py-2 rounded-2xl   hover:bg-light-secondary dark:hover:bg-dark-third">Non lus</li>
                </ul>

                <div className="flex items-center justify-between">
                    <h4 className="font-bold text-2xl text-gray-800 dark:text-dark-text">Nouveau</h4>
                    <span className="px-2 py-2  text-xl text-blue-500   hover:bg-light-secondary dark:hover:bg-dark-third">Voir Tout</span>
                </div>

                <ul>
                    <NotificationItem/>
                </ul>

                




          </div>
        </div>
    )
}

export default Notification