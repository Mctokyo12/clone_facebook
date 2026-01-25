import axios from "axios";
import { useState } from "react";

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const UPDATE_POST_PROFILE = "UPDATE_POST_PROFILE";
export const GET_POST = "GET_POST";




export const update_profile =  (data , id)=>{
    return (dispatch)=>{
        return axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/user/update-profile/${id}` , data , {
            headers:{
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            dispatch({type: UPDATE_PROFILE , payload: res.data});
        })
    }
}


export const getUser = (id)=>{
   
    return axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/user/${id}` ,{
        headers:{
            Authorization: `Bearer ${localStorage.getItem('token')}`,  
        }
    }).then(res=>{
        return res.data
    }).catch(e=>{
        return e
    })
  

}

