import React, { useEffect, useState } from 'react';
import { getUserPicture } from '../../functions/getUserPicture';
import { useParams, useSearchParams } from 'react-router';
import Error from '../Errors';
import { HashLoader } from 'react-spinners';

const AboutProfile = () => {
    // const {id} = useParams();

    return (
       
        <div className="dark:bg-dark-second mx-auto w-full lg:w-[67%] dark:text-dark-text bg-white shadow  rounded-lg  px-4 py-4 mb-6 mt-4">
            <div className="w-full flex items-center justify-between">
                <h2 className="font-bold  text-light-text dark:text-dark-text text-2xl">About</h2>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center cursor-pointer   mt-1 px-4 py-2 w-fit z-20 gap-2 bg-light-secondary rounded-lg dark:bg-dark-third dark:text-white">
                        <span className="bx  bx-dots-horizontal text-lg"></span>
                    </div>
                </div>
            </div>

            
            <ul className="mt-2 flex   items-center  flex-wrap gap-2 ">
                
                
            </ul>
        </div>

    );
};

export default AboutProfile;