import { useSelector } from "react-redux";
import Login from "../pages/Login";
import {Outlet , Navigate} from 'react-router'


export default function LoggedInRoutes() {
  const user = useSelector((state) => state.userReducer)
  return user ? <Outlet /> : <Login/>
}
