const MenuItem = ({icon , title ,subtitle , image})=>{
    return(
        <li className="rounded-lg px-2 py-2 hover:bg-light-secondary cursor-pointer dark:bg-dark-third flex items-center gap-4">
            {image ? <img src={image} alt="" srcset="" /> : <span className={icon}></span>}
            {subtitle ? "" : <h4>{title}</h4>}

            {subtitle && 
                <div className="flex flex-col ">
                    <h4>{title}</h4>
                    <span className=" font-light">{subtitle}</span>
               </div>
            }    
          
        </li>
    )
}

export default  MenuItem