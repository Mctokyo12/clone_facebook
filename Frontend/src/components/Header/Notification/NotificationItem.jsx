const NotificationItem = ()=>{
    return (
        <li className="notification rounded-lg px-2 py-2  hover:bg-light-secondary relative cursor-pointer dark:bg-dark-third flex items-center gap-4">
            <div className="w-28 aspect-square flex-1/3 bg-amber-200 overflow-hidden rounded-full">
                <img src="/images/default_pic.png" alt="" srcset=""  className=" object-cover"/>
            </div>
            <div className="flex flex-col">
                <span className="text-gray-800 dark:text-dark-text text-lg">
                    Quelqu’un a tenté de se connecter, mais nous l’en avons empêché.
                </span>
                <span className="font-semibold text-blue-500">1j</span>
            </div>
            <div className="w-6 aspect-square rounded-full bg-blue"></div>

            <span className="more h-8 cursor-pointer absolute top-1/2 -translate-y-1/2  right-2self-start  w-8 grid place-items-center rounded-full hover:bg-gray-200 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text invisible">
                <i className="bx bx-dots-horizontal-rounded text-2xl"></i>
            </span>
        </li>
    )
}

export default NotificationItem