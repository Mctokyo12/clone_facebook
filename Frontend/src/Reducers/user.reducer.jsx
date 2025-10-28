import { UPDATE_PROFILE } from "../actions/user.action";

const initialState = !localStorage.getItem("user") ? {} : JSON.parse(localStorage.getItem('user'));

const userReducer = (state = initialState , action)=>{

    switch (action.type) {
        case UPDATE_PROFILE:
            if(action.payload.profile == "cover_picture"){
                return {
                    ...state,
                    cover_picture: action.payload.path
                }
            }else{
                return {
                    ...state,
                    profile_picture: action.payload.path
                }
            }
            break;
        case "GET_USER":
            return action.payload
            break;
        default:
            break;
    }
    return  state
}

export default userReducer