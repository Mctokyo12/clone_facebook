import React from 'react';

const ProfileMenu = () => {
    return (
        <div className="mx-4 px-2 mt-5.5  mb-4 relative">
            <ul className="flex gap-2  h-full   items-center w-[75%] dark:text-dark-text">
                <li className="py-3 px-2 w-1/5 flex font-semibold text-lg  items-center bg-blue/10 justify-center rounded-sm text-blue-500 border-b-4 border-blue-500">
                    <a href="#" >Posts</a>
                </li>

                <li className="py-3 px-2 w-1/5 flex font-semibold text-lg items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 " >
                    <a href="#">About</a>
                </li>

                <li className="py-3 px-2 w-1/5 flex font-semibold text-lg items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">Friends</a>
                </li>

                <li className="py-3 px-2 w-1/5 font-semibold text-lg flex items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">Photos</a>
                </li>

                <li className="py-3 px-2 font-semibold text-lg w-1/5 flex items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">Video</a>
                </li>

                <li className="py-3 px-2 w-1/5 flex font-semibold text-lg items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">Check-ins</a>
                </li>

                <li className="py-3 px-2 w-1/5 flex text-lg font-semibold items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">More</a>
                </li>
            </ul>

            <div className="flex items-center cursor-pointer absolute right-0 top-0  mt-1 px-4 py-2 w-fit z-20 gap-2 bg-white rounded-lg dark:bg-dark-third dark:text-white">
                <span className="bx  bx-dots-horizontal text-lg"></span>
            </div>

        </div>
    );
};

export default ProfileMenu;