import axios from "axios";


export const getUserPicture = async (id , isPhotos) => {
    
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_BACKEND}/api/user/${id}/picture` , {
            allPhotos:isPhotos
        });
        const data = (await response).data
    
        if( typeof data == "object" && data !== null){
            return data
        }else if (Array.isArray(data) && data.length !=0){
            return data
        }else{
            return []
        }

      
    } catch (error) {
        return error;
    }

}

