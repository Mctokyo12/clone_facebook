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


function App() {

  const user = useSelector((state) => state.userReducer)
  const isAuthenticated = !localStorage.getItem("user") ? false:true 
  // const 
  const [checkFriend , setCheckFriend] = useState([]);
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token" , `${user.token}`);
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_BACKEND}/api/friends/` , setCheckFriend);
  }, [])
  const FriendQuery = RemoveDouble(checkFriend)
  

  return (
    <>
      <Routes>

        <Route element={isAuthenticated ?  <Outlet/>  : <Login/>}>
          <Route path='/' element={<Home user={user}/>} />
          <Route path='/profile/:id' element={<Profile users={user}/>}/>
          <Route path='/create-story/' element={<CreateStory/>} />
          <Route path='/story/' element={<Stories/>} />
          <Route path='/friends/' element={<Friend userid={user.userid}/>}/>
          <Route path='/friends/list/' element={<AllFriend  userid={user.userid} FriendQuery={FriendQuery}/>} >
            <Route path='profile/:id' element={<Profile users={user}/>}/>  
          </Route>
          <Route path='/message/' element={<Messages/>} />
          {/* <Route path='/profile/:id/:' element={<Profile users={user}/>}/> */}
        </Route>

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}></Route>
       
      </Routes>
    </>
  )
}

export default App
