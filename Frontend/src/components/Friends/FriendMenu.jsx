import React, { useState } from 'react';
import { Link } from 'react-router';

const FriendMenu = ({name , icon , link}) => {
    const [iscurrent , setIscurrent] = useState("home")
    return (
        <Link to={`/friends/${link}`} onClick={()=>setIscurrent(link)} className="flex gap-2 justify-between items-center px-2 py-2  dark:hover:bg-dark-text dark:hover:bg-opacity-20 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center gap-3">
                <span className={`${iscurrent == link ? "bg-blue text-white":"bg-gray-200"} rounded-full  text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third  dark:text-dark-text   cursor-pointer`}>
                    <i className={`${icon} ${iscurrent == link && " invert-100"}`}></i>
                </span>
                <h4 className=" font-semibold text-sm">{name}</h4>
            </div>
            <span>
                <i className="right_icon text-3xl"></i>
            </span>
        </Link>

    );
};

export default FriendMenu;