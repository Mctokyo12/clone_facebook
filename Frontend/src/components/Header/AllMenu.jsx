import React from 'react';
import { menu , create } from '../../data/allMenu';
import MenuItem from './MenuItem';



const AllMenu = () => {
    return (
        <div id="menu" className="gap-2 scrollbar-none  scrollbar px-4 py-4 w-[95%] sm:w-9/12 lg:w-[50%] xl:w-[46%] h-[87%]  fixed top-32 right-4 sm:top-16   rounded-lg overflow-y-auto dark:bg-dark-third dark:text-dark-text  bg-light-secondary shadow">

            <h1 className="font-semibold pb-2 text-2xl">Menu</h1>
            <div className="flex flex-col w-full gap-2 lg:flex-row items-center relative">
                {/* <!-- Left menu --> */}
                    <div className="px-2 py-2 w-full lg:w-4/6 dark:bg-dark-second   bg-white rounded-lg ">

                        <div className="flex gap-4 items-center rounded-2xl px-2 py-2 w-full my-4 dark:bg-dark-third cursor-pointer">
                            <span className="">
                                <i className="bx bx-search text-xl"></i>
                            </span>
                            <span>Rechercher Dans le Menu</span>
                        </div>

                    <h2 class="font-semibold text-xl">Social</h2>

                        <ul>
                            {menu.slice(0,6).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}

                        </ul>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>

                        <h4 className="font-semibold text-xl">Divertissement</h4>

                        <ul>
                            {menu.slice(6,9).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}

                        </ul>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>

                        <h4 className="font-semibold text-xl">Shopping</h4>
                        
                        <ul>
                            {menu.slice(9,11).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}
                        </ul>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>

                        <h4 className="font-semibold text-xl">Personnel</h4>
                        <ul>
                            {menu.slice(11,14).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}
                        </ul>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>
                        <h4 className="font-semibold text-xl">Professionnel</h4>
                        <ul>
                            {menu.slice(14,17).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}

                        </ul>


                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>
                        <h4 className="font-semibold text-xl">Ressources communautaires</h4>
                        <ul>
                            {menu.slice(17,21).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}

                        </ul>

                        <div className="h-[2px] w-full dark:bg-dark-third bg-slate-200 my-4"></div>
                        <h4 className="font-semibold text-xl">Autres produits de Meta</h4>
                        <ul>
                            {menu.slice(21,23).map(({name , icon , description} ,index)=>(
                                <MenuItem name={name} icon={icon} description={description} key={index}/>
                            ))}
                        </ul>

                    </div>
                {/* <!-- FIN Left menu --> */}

                {/* <!-- Right MENU --> */}
                    <div className="px-2 py-2 w-full lg:w-2/6 lg:self-start lg:sticky lg:top-0  overflow-y-auto] dark:bg-dark-second dark:text-dark-text text-black bg-white rounded-lg ">
                        <h3 className="font-semibold text-xl mb-2">Creer</h3>
                        <ul>
                        {create.map(({name , icon} , index)=>(
                                <li key={index} class="flex gap-3 items-center px-2 py-2 dark:hover:bg-dark-third dark:hover:bg-opacity-50 rounded-lg hover:bg-gray-200 cursor-pointer">
                                    <span className="rounded-full text-xl relative text-center grid place-items-center py-2 px-2   shadow  dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                        <i className={`${icon} dark:invert-100`}></i>
                                    </span>
                                    <h4 className="font-semibold">{name}</h4>
                                </li>
                        ))}
                                
                        </ul>
                    </div>
                {/* <!-- FIn Right --> */}
            </div>
        </div>
    );
};

export default AllMenu;