import  {React , useRef, useState} from 'react';
import ImagePreview from './ImagePreview';
import PostError from './PostError';
import AddToYouPost from './AddToYouPost';
import axios from 'axios';
import { HashLoader, PulseLoader } from 'react-spinners';
import BackgroundImage from './BackgroundImage';
import EmojiPicker from 'emoji-picker-react';
import { add_post, edit_post, getPosts } from '../../actions/post.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Public from '../../svg/public';
import { ProfilePicture } from '../../functions/ProfilePicture';


const EditPost = ({user , setEditPost , editPost , currentPost}) => {
    const dispatch = useDispatch();
    const [loader , setLoader] = useState(false)
    const [post , setPost] = useState({});
    
    const getPost = async ()=>{
        setLoader(true)
        try {
            const response = await axios.get(`${BACKEND_URL}/api/post/${currentPost}`);
            const {data} = response
            setPost(data[0])
            if (data[0].post) {

                if (data[0].post[0]) {
                    setTextInput(data[0].post[0]);
                }

                if (data[0].post[1]) {
                    setCurrentBackground(data[0].post[1]);
                    setMarginTop(32);
                }
            }
        
            setImages(data[0].files)
            setshowImagePreview(true);
            setLoader(false)
        
        } catch (error) {
            console.log(error);
            
        }
    } 
    

    useEffect(()=>{
        getPost();
    },[])

    const BACKEND_URL = import.meta.env.VITE_URL_BACKEND;
    const [images , setImages] = useState([]);
    const [showImagePreview , setshowImagePreview] = images.length !=0 ?  useState(true) : useState(false)
    
    const [error , setError] = useState("");
    const [loading , setLoading] = useState(false);
    const [currentBackground,setCurrentBackground] =   useState("");
    const [marginTop , setMarginTop] =  useState(0) 
    const [visibleBackground, setVisibleBackground] = useState(false);
    const [visibleEmoji , setVisibleEmoji] = useState(false);
    const [textInput , setTextInput] =  useState("");

 
   
            
    const handleSubmit = async (e)=>{
        // setLoading(true)
        e.preventDefault();
        
        try {
            const formData = new FormData();
            for (const file of images) {
                formData.append('files[]' , file);
            }
            formData.append('post',textInput);

            formData.append('userid',user.userid);
            if (currentBackground) {
                formData.append('postBackground' , currentBackground)
            }

            
            dispatch(edit_post(formData , currentPost));
            
            
            setLoading(false);
            setEditPost(false)
            setCurrentBackground("");
            setMarginTop(0); 
            setVisibleBackground(false);
            setTextInput("")

    
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    }

    return (
        <div>
            <div id="Publication" class={`fixed overflow-y-auto z-30 top-0   ${ editPost? "":"invisible opacity-0"}   transition-all left-0 w-full h-full dark:bg-dark-main/70   bg-white/70   dark:text-dark-text text-gray-500`}>
                {loader ? 
                    (<div className='flex justify-center  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 items-center'> 
                        <HashLoader color="#1876f2"  className='text-center'/> 
                    </div>) 
                    : 
                    <div class="w-[35rem] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  py-4 dark:bg-dark-second   bg-white shadow rounded-lg overflow-x-hidden">
                    
                        {/* <!-- ENTETE--> */}
                            <div class="flex items-center mb-5 justify-center  relative w-full">
                                <h2 class="justify-self-center text-xl  font-semibold">Modifier la Publication </h2>
                                <div  id="ClosePost" onClick={()=>{setEditPost(false); setLoading(false)}} class="rounded-full px-1 py-1 justify-self-end absolute right-4    grid place-items-center  hover:bg-gray-300   dark:bg-dark-third dark:text-dark-text  bg-gray-200 cursor-pointer">
                                    <i class=" bx bx-x text-4xl"></i>
                                </div>
                            </div>
                            <div class="w-full h-[1px] bg-gray-200 dark:bg-dark-third mb-3"></div>
                            <div class="flex items-center px-4 pb-2 gap-2">
                                <div  class="w-10 aspect-square relative ">
                                    <div class=" overflow-hidden rounded-full">
                                        <img src={ProfilePicture(user)} alt="" srcset="" class="w-full aspect-square object-cover"/>
                                    </div>
                                    <span class=" w-3 aspect-square absolute right-0 bottom-0 rounded-full bg-green-500  border-4 border-white"></span>
                                </div>
                                <div>
                                    <h4 class="text-lg">{post.firstname} {post.lastname}</h4>
                                    <Public color="#828387" />
                                </div>
                            </div>
                        {/* <!-- FIN ENTETE --> */}

                        {/* <!-- MAIN POST--> */}
                            <div class="px-4 relative">
                            
                                <form id="EditForm" class="flex flex-col gap-2" onSubmit={(e)=>handleSubmit(e)} >
                                    
                                    
                                    <div className={`relative  ${currentBackground  ? 'h-[340px] bg-cover flex items-center justify-center ': showImagePreview  ?  ' h-20' : ''}    `}  style={{backgroundImage: `url(${currentBackground})`}}>
                                        <textarea name="post" id="Post" value={textInput}  cols="10" rows="4"  onChange={(e)=>{setTextInput(e.target.value); setMarginTop(marginTop - 0.1) }} class={`border-none  px-4  w-full bg-transparent overflow-hidden  resize-none  ${currentBackground  ? 'h-[340px] text-center absolute': showImagePreview ?  "h-20" : ''}   outline-none placeholder:text-black dark:placeholder:text-white dark:text-white text-black text-2xl placeholder:text-2xl transition-all`} placeholder="Quoi de neuf ,  tokyo ?"  style={{paddingTop: `${marginTop <= 7 ? 7 : marginTop }%`}} ></textarea>
                                    </div>
                                    
                                                                    
                                    {currentBackground && 
                                        <div className='flex items-center  justify-between '>
                                            <div className='flex items-center size-10 justify-between' onClick={()=>setVisibleBackground(!visibleBackground)}>
                                                <img src="/icons/colorful.png" alt="" srcset="" />
                                            </div>
                                        
                                            {visibleBackground && <BackgroundImage setCurrentBackground={setCurrentBackground} setMarginTop={setMarginTop}/>} 

                                            <span className="bx bx-smile text-3xl text-gray-400 hover:text-gray-800" onClick={()=>setVisibleEmoji(!visibleEmoji)} ></span>
                                            
                                        </div>
                                    }
                                    
                                    
                                    {images.length != 0 &&
                                        <ImagePreview  showImagePreview={showImagePreview} setshowImagePreview={setshowImagePreview} setImages={setImages}  setError={setError} images={images}/>
                                    }
                                    <AddToYouPost setCurrentBackground={setCurrentBackground} setMarginTop={setMarginTop} setVisibleBackground={setVisibleBackground}  setshowImagePreview={setshowImagePreview} images={images} />

                                    {loading ? 
                                        <div class={`border-transparent  flex gap-2 items-center bg-blue  justify-center text-white    w-full  text-xl font-semibold rounded-lg px-2 py-2 `}>
                                            <PulseLoader loading={loading} size={5} color='#fff'/>
                                            <span className="font-bold">Publication</span>
                                        </div>
                                        : 
                                        <input type='submit' class={`border-transparent  flex garp-2 items-center ${textInput ? ' bg-blue cursor-pointer':'bg-gray-400'}  text-white    w-full  text-xl font-semibold rounded-lg px-2 py-2 `} value={"Enregistre"}/>
                                    }

                                </form>


                            </div>
                        {/* <!-- END  MAIN POST--> */}

                        {/* <!-- pour gerer les differents erreur --> */}
                            <PostError error={error} setError={setError}/>
                        {/* <!--   fin gestions des  differents erreur --> */}
                    
                    </div>
                }
                <div className=' absolute top-12 right-48'>
                    <EmojiPicker open={visibleEmoji} onEmojiClick={(e)=>{
                        setTextInput(prev => prev + e.emoji)
                    }}  height={350} width={350} />
                </div>
            </div>
        </div>
    );
};

export default EditPost;
