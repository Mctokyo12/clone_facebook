import axios from "axios";
import { data } from "react-router";

export const ADD_POST = "ADD_POST";
export const GET_POST = "GET_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";
export const ADD_COMMENT = "ADD_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"



export const add_post =  (data)=>{
    return (dispatch)=>{
        return axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/post` , data , {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            dispatch({type: ADD_POST , payload: res.data});
        })
    }
}

export const edit_post = (data , id)=>{
    return (dispatch)=>{
        return axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/post/update/${id}` , data ,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }).then(res =>{
            dispatch({type: EDIT_POST, payload: res.data})
        })
    }
}

export const delete_post = (id)=>{
    return (dispatch)=>{
        return axios.delete(`${import.meta.env.VITE_URL_BACKEND}/api/post/delete/${id}` ).then(res =>{
            dispatch({type: DELETE_POST, payload: id});
        })
    }
} 

export const getPosts = ()=>{
    return (dispatch) =>{
        return axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/post`).then(res =>{
            dispatch({type: GET_POST , payload: res.data});
        })
    }
}

export const get_likes = ()=>{
    return (dispatch)=>{
        return axios.get(`${import.meta.env.VITE_URL_BACKEND}/api/post/like`).then(res=>{
            dispatch({type: GET_LIKE , payload: res.data})
        })

    }
}

export const like_post = (data , id)=>{
    return (dispatch)=>{
        return axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/post/like/${id}` , data).then(res=>{
            dispatch({type: LIKE_POST , payload: data})
        })

    }
}

export const add_comment = (data)=>{
    return (dispatch)=>{
        return axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/post/comment` , data).then(res=>{
            dispatch({type: ADD_COMMENT , payload: res.data})
        })

    }
}

export const edit_comment = (data , id)=>{
    return (dispatch)=>{
        return axios.put(`${import.meta.env.VITE_URL_BACKEND}/api/post/comment/${id}` , data).then(res=>{
            dispatch({type: EDIT_COMMENT , payload: data})
        })

    }
}

export const delete_comment = (data , id)=>{
    return (dispatch)=>{
        return axios.delete(`${import.meta.env.VITE_URL_BACKEND}/api/post/comment/delete/${id}`).then(res=>{
            dispatch({type: DELETE_COMMENT , payload: data})
        })

    }
}