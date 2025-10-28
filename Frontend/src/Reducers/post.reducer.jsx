import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, EDIT_COMMENT, EDIT_POST, GET_POST, LIKE_POST } from "../actions/post.action";
import { UPDATE_POST_PROFILE } from "../actions/user.action";

const initialState = {}

const postReducer = (state = initialState , action)=>{
    switch (action.type) {
        case GET_POST:
            return action.payload;  
        case ADD_POST:
            return [action.payload,...state];  
        case EDIT_POST:
            return state.map(post=>{
                if(post.postid == action.payload.postid){
                    return {
                        ...post , 
                        post: action.payload.post,
                        files: action.payload.files 
                    }
                }else{
                    return post
                }
            });
        case DELETE_POST:
            return state.filter((post)=> post.postid != action.payload)
        case LIKE_POST:
            return state.map((post , index)=>{
                if(post.postid === action.payload.postid){
                  const isExiste = post.likes.findIndex((like)=>like.userid == action.payload.userid)

                    if(isExiste != -1){
                        // const likes = post.likes;
                        return {
                            ...post ,
                            likes: post.likes.map((like , index)=>{

                                if(like.postid === action.payload.postid && like.userid == action.payload.userid ){
                                    if(like.type == action.payload.type){
                                        return null;
                                    }else{
                                        return {...like , type:action.payload.type}
                                    }
                                }
                                return like
                            }).filter(like => like !== null)
                        }
        
                    }else{
                        return {...post , likes: [...post.likes , action.payload]}
                    }
                }
                return post
            })
        case ADD_COMMENT:
            return state.map((post)=>{
                if(post.postid == action.payload.postid){
                    return {...post , comments: [action.payload , ...post.comments]}
                }else return post
            })
        case EDIT_COMMENT:
            return state.map((post)=>{
                if(post.postid == action.payload.postid){
                    return {
                        ...post,
                        comments: post.comments.map((comments)=>{
                            if(comments.commentid == action.payload.id){
                                return {
                                    ...comments,
                                    comment: action.payload.comment
                                }
                            }return comments
                        })
                        
                    }

                }else return post
            })
        case DELETE_COMMENT:
            return state.map((post)=>{
                if(post.postid == action.payload.postid){
                    return {
                        ...post,
                        comments: post.comments.filter((comment)=> comment.commentid != action.payload.id)
                    }

                }else return post
            })
        default:
            return state;
    }
   
}
export default postReducer