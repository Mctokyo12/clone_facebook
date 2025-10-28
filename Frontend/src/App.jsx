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
import Messages from './components/Messages'



function App() {

  const user = useSelector((state) => state.userReducer)
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token" , `${user.token}`);
  }

  return (
    <>
      <Routes>

        <Route element={user ? <Outlet/> : <Login/> }>
          <Route path='/' element={<Home user={user}/>} />
          <Route path='/profile/:id' element={<Profile users={user}/>}/>
          <Route path='/create-story/' element={<CreateStory/>}/ >
          <Route path='/story/' element={<Stories/>} />
          <Route path='/friends/' element={<Friend/>}/>
          <Route path='/message/' element={<Messages/>} />
          {/* <Route path='/profile/:id/:' element={<Profile users={user}/>}/> */}
        </Route>

        <Route element={user ? <Navigate to="/" />  : <Outlet/>}>
          <Route path='/login' element={<Login/>} />
        </Route>
        
        <Route path='/register' element={<Register/>}></Route>
       
      </Routes>
    </>
  )
}

export default App
