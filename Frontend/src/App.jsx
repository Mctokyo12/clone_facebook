import {  useState, useEffect } from "react"
import { Routes , Route } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import {Outlet , Navigate} from 'react-router'
import Profile from './pages/Profile'
import { useSelector } from 'react-redux'
import CreateStory from './components/CreateStory'
import Stories from './components'
import Friend from './components/Friends'
import AllFriend from './components/Friends/AllFriend';
import Messages from './components/Messages'
import { fetch , RemoveDouble} from "./functions/Fetch";
import ViewPost from "./components/ViewPost"
import { configureEcho } from "@laravel/echo-react"
import Pusher, { Channel } from "pusher-js"
import axios from "axios"
import Echo from "laravel-echo"



configureEcho(
  {
    broadcaster :"reverb",
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: false,
    encrypted:false,
    enabledTransports: ['ws','wss'],
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    auth:{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json'
      }
    }
  }
)


function App() {

  const user = useSelector((state) => state.userReducer)
  const isAuthenticated = !localStorage.getItem("user") ? false:true 
  // const 
  const [checkFriend , setCheckFriend] = useState([]);
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_BACKEND}/api/friends/` , setCheckFriend);
  }, [])
  const FriendQuery = RemoveDouble(checkFriend)



  return (
    <>
      <Routes>

        <Route element={isAuthenticated ?  <Outlet/>  : <Login/>}>
          <Route path='/' element={<Home user={user}  FriendQuery={FriendQuery}/>} />
          <Route path='/profile' element={<Profile users={user} FriendQuery={FriendQuery}/>}/>
          <Route path='/create-story/' element={<CreateStory/>} />
          <Route path='/story/' element={<Stories/>} />
          <Route path='/friends/' element={<Friend userid={user.userid}/>}/>
          <Route path='/friends/list/' element={<AllFriend  userid={user.userid} FriendQuery={FriendQuery}/>} >
            <Route path='profile/:id' element={<Profile users={user} visibleHeader={true} />}/>  
          </Route>
          <Route path='/message/' element={<Messages user={user}/>} />
          <Route path="/photos" element={<ViewPost/>}/>
          {/* <Route path='/profile/:id/:' element={<Profile users={user}/>}/> */}
        </Route>

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}></Route>
       
      </Routes>
    </>
  )
}

export default App
