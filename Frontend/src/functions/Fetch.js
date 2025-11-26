import axios from "axios";

/**
 * 
 * @param {string} url 
 * @param {Function} callback 
 */
export  const fetch = async (url , callback)=>{
    try {
      const response  = await axios.get(url);
      const data = response.data;
      FillArray(data , callback);
          
    } catch (error) {
      console.log(error);
    }

}
/**
 * 
 * @param {Array} data 
 * @param {Function} callback 
 */
export const FillArray = (data , callback)=>{
    if (Array.isArray(data)) {
        data.forEach(item=>{
            callback(previewstate =>[...previewstate , item]);
        })
    
    }
}

/**
 * 
 * @param {Array} data 
 * @returns {Array}
 */
export const RemoveDouble =  (data)=>{
    return data.filter((item , index)=> index === data.findIndex((t)=>t.id ==item.id ))
}