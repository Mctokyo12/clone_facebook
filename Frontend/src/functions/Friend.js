import axios from "axios";
import { fetch, FillArray } from "./Fetch";

/**
 * 
 * @param {string} url 
 * @param {string} action 
 * @param {Function} callback 
 * @param {Function} loader
 */
export const postData = async(url, action , callback , loader)=> {
    loader(true)
    try {
        const response = await axios.post(url , {
            "action": action
        })
        const data = response.data;
        FillArray(data , callback)
        loader(false)
    } catch (error) {
        console.log(error);
        
    }

    
}