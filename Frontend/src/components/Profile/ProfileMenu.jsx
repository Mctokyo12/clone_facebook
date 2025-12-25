import React, { useState } from 'react';
import { Link } from 'react-router';

const ProfileMenu = ({userid , sections}) => {
    /**
     * 
     * @param {String} str 
     * @returns 
     */
    const lowercaseFirstLetter = (str)=>{
        return str.charAt(0).toLocaleLowerCase() + str.slice(1);
    }
    const NavMenus = [
        {
            title: "Posts",
        } ,
        {
            title: "About"
        },
        {
            title: "Friends"
        },
        {
            title: "Images"
        },
        {
            title: "Video"
        },
        {
            title: "Check-ins"
        }
    ]
    const [currentItem , setCurrentItem] =  useState("Posts") 
    const [textContent , SetTextContent] = useState("");
     
     



    return (
        <div className="mx-4 px-2 mt-5.5  invisible lg:visible mb-4 relative">
            <ul className="flex gap-2  h-full   items-center w-[75%] dark:text-dark-text">
                
                {
                    NavMenus.map(({title} , index)=>{
                        let section = lowercaseFirstLetter(title)
                       
                        return (
                            <li key={index} onClick={()=>setCurrentItem(title)} className={`py-3 px-2 w-1/5 flex font-semibold text-lg  items-center  justify-center rounded-sm  ${currentItem == title && sections == "" ? "text-blue-500 border-b-4 border-blue-500 bg-blue/10" :  sections == lowercaseFirstLetter(title) ?  " text-blue-500 border-b-4 border-blue-500 bg-blue/10" : "" }`}>
                                <Link to={`/profile?id=${userid}&section=${section}`}>{title}</Link>
                            </li>
                        )
                    })
                }
              

                <li className="py-3 px-2 w-1/5 flex text-lg font-semibold items-center justify-center dark:hover:bg-dark-third rounded-lg border-b-transparent border-b-4 ">
                    <a href="#">More</a>
                </li>
            </ul>

            <div className="flex items-center cursor-pointer absolute right-0 top-0  mt-1 px-4 py-2 w-fit z-0 gap-2 bg-white rounded-lg dark:bg-dark-third dark:text-white">
                <span className="bx  bx-dots-horizontal text-lg"></span>
            </div>

        </div>
    );
};

export default ProfileMenu;