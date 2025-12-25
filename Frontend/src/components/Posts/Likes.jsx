import axios from "axios";
import { useState } from "react"

const Likes = ({like_post,  userLike , visibleReacts , setVisibleReacts })=>{
   
    const emotions = [
        {
            path: "/reacts/angry",
            type: "angry"
        } , 
        {
            path: "/reacts/haha",
            type: "haha",
        }, 
        {
            path: "/reacts/like",
            type: "like",
        },
        {
            path: "/reacts/love",
            type: "love"
        },
        {
            path: "/reacts/sad",
            type: "sad"
        },
        {
            path: "/reacts/wow",
            type: "wow"
        }
    ]
     
   

    // onmouseenter

    return (
        <>
            <div 
                onMouseOver={()=>{
                    setTimeout(()=>{
                        setVisibleReacts(true)
                    } , 500)
                }}  
                onMouseLeave={()=>{
                    setTimeout(() => {
                        setVisibleReacts(false)
                    }, 500);
                }}
                className="like flex relative cursor-pointer text-center items-center  justify-center px-2 py-2 rounded-lg  hover:bg-gray-100 dark:hover:bg-dark-third text-gray-500 dark:text-dark-text gap-2 w-1/3">
                {
                    userLike.length > 0 ?
                        userLike.map((like , index)=>(

                            like.type == 'angry' ? <img src="/reacts/angry.svg" alt="" srcset="" className=" size-6" key={index} /> :
                            like.type == "love" ?  <img src="/reacts/love.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                            like.type == "haha" ?  <img src="/reacts/haha.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                            like.type == "sad"  ?  <img src="/reacts/sad.svg" alt="" srcset=""  className=" size-6" key={index}/> :
                            like.type == "like" ?  <img src="/reacts/like.svg" alt="" srcset=""  className=" size-6" key={index}/>:
                            like.type == "wow"  ?  <img src="/reacts/wow.svg" alt="" srcset=""  className=" size-6" key={index}/> : ""
                        ))
                    :
                    <i className="bx bx-like text-2xl"></i>
                }
                    
                <span className="dark:text-dark-text" >Like</span>
                {visibleReacts &&  
                    <div  className={`items-center reacts  gap-2 absolute px-2 w-78 py-2 bg-light-primary  dark:bg-dark-main rounded-3xl -top-16 left-2  shadow flex`}>
                    {emotions.map(({path , type} , index)=>(
                        <img  src={`${path}.gif`} key={index} className=" size-10 hover:scale-[1.5] transition-all"  data-type={type} onClick={()=>like_post(type)}/>
                    ))}
                    </div>
                }

            </div>
            
        </>
    )
}

export default Likes