import React from 'react';
import { Link } from 'react-router';
Link

const Story = ({profile_picture ,profile_name ,image }) => {
    return (
        <Link to="/story/" className="h-48 w-1/4  flex flex-col shadow rounded-xl relative overflow-hidden cursor-pointer">
            <img src={image} alt="" className=" h-full w-full object-cover hover:scale-110 transition-all duration-700"/>
            <div className="overflow-hidden border-4 border-blue-500 rounded-full absolute top-2 left-2 ">
                <img src={profile_picture}  alt="" s className="object-cover  w-10  aspect-square "/>
            </div>
            <h4 className="font-semibold dark:text-dark-text text-white bottom-2 absolute left-2 ">{profile_name}</h4>
        </Link> 
    );
};

export default Story;