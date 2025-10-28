import React from 'react';
import { left } from '../../../data/home';
import { useSelector } from 'react-redux';

const Left = () => {

    return (
        <div className="fixed left-0 top-20 px-3 w-1/5 mt-3 hidden xl:block">
            <ul>
                {left.slice(0,5).map((item , index)=>(
                    <li className="mb-2" key={index}>
                        <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                            <img src={item.img} className="w-12 aspect-square object-cover rounded-full font-bold"/>
                            <h4 className="font-semibold">{item.text}</h4>
                        </a>
                    </li>

                ))}

                <li className="mb-2">
                    <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                        <div className="rounded-full text-xl xl:grid hidden place-items-center py-3 px-3 hover:bg-gray-300  dark:bg-dark-second dark:text-dark-text bg-gray-200 cursor-pointer  ">
                        <i className="bx bx-chevron-down"></i>
                        </div>
                        <h4 className="font-semibold">See more</h4>
                    </a>
                </li>
            </ul>

            <div className="w-full h-[1px] bg-gray-200 dark:bg-dark-third mt-5"></div>
            <div className="mt-3">
                <h4 className="font-bold text-lg dark:text-dark-text text-gray-500 mb-2">Your shortcuts</h4>
                <a href="#" className="flex items-center gap-2 px-2 py-2 rounded-xl hover:bg-gray-200 dark:text-dark-text  dark:hover:bg-dark-third ">
                    <img src="/images/group-img-1.jpg" alt=""  className="w-10 aspect-square object-cover rounded-lg font-bold"/>
                    <h4 className="font-semibold text-lg">Cong dong Front-end(HTML/CSS/JS) Viet Nam</h4>
                </a>
            </div>

        </div>
    );
};

export default Left;