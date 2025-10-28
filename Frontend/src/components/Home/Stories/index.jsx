import React from 'react';
import { stories } from '../../../data/home';
import Story from './story';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


const Stories = () => {
    const user = useSelector((state) => state.userReducer);

    return (
        
        <div class="flex space-x-2 relative">
            {/* <!-- CREATE A STORY --> */}
                <Link to="/create-story" class="h-48 w-1/4  flex flex-col shadow rounded-xl relative overflow-hidden cursor-pointer">
                    <div className="overflow-hidden h-3/5">
                        <img src="/images/profile.jpg"  alt=""  className="object-cover hover:scale-110  duration-1000  transition-transform ease-in-out "/>
                    </div>
                    <div className="flex-1  items-end justify-center pb-1 px-2 flex relative  bg-white  dark:bg-dark-second">
                        <div className=" absolute left-1/2 -top-6 -translate-x-1/2 border-4 border-white dark:border-dark-second rounded-full text-2xl text-center grid   place-content-center py-2 px-2  bg-blue-500 cursor-pointer">
                            <i className="bx bx-plus text-white"></i>
                        </div>
                        <span className="font-semibold dark:text-dark-text text-center">Create a Story</span>
                    </div>
                </Link>
            {/* <!-- END CREATE A STORY --> */}

            {/* <!-- PEOPLE STORY --> */}
                {stories.map((item , index)=>(
                    <Story 
                        profile_picture={item.profile_picture} 
                        profile_name={item.profile_name} 
                        image={item.image}
                        key={index}
                    />
                ))}
                
            {/* <!-- END PEOPLE STORY --> */}
            <div className="  absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:grid rounded-full text-2xl text-center place-content-center py-3 px-3 hover:bg-gray-100  bg-white shadow dark:bg-dark-third  dark:text-dark-text cursor-pointer">
                <i className="bx bx-chevron-right"></i>
            </div>

        </div>
       
    );
};

export default Stories;