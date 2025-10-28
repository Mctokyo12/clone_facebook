import React from 'react';

const MenuItem = ({name , icon , description}) => {
    return (
        <li className=" cursor-pointer flex items-center gap-4 px-2 py-2 rounded-lg dark:hover:bg-dark-third  pb-2 hover:bg-gray-200 w-full">
            <div className="">
                <img src={`/images/${icon}.png`} alt=""/>
            </div>
            <div className="flex-1">
                <h4 className="font-semibold">{name}</h4>
                <p className="text-justify">{description}</p>
            </div>
        </li>
    );
};

export default MenuItem;