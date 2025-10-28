import React from 'react';

const PostError = ({error , setError}) => {

    setTimeout(()=>{
        setError("")
    } , 2000)
    return (
        <div className={`absolute top-0 ${error ? "left-0" : "-left-[35rem]"} h-full w-full dark:bg-dark-second/45 z-40 bg-light-third/90 flex flex-col  gap-4 justify-center items-center mx-auto px-4 transition-all duration-300 `}>
            <span className="bx bx-error text-7xl text-red-600"></span>
            <h4 id="error " className="text-2xl  text-red-500">{error}</h4>
        </div>
    );
};

export default PostError;