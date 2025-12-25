import axios from "axios";

/**
 * 
 * @param {string} url 
 * @param {Function} callback 
 * 
 */
export  const fetch = async (url , callback , setloader)=>{
    try {
      // setloader(true)
      const response  = await axios.get(url);
      const data = response.data;
      FillArray(data , callback);
      // setloader(false)
          
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



/**
 * 
 * @param {string} img 
 * @returns {string}
 */
export const CheckUrl=(img)=>{
  if (typeof img =="string" && img !=null) {
    let check = img.search("https");
    let url = check == -1 ? `${import.meta.env.VITE_URL_BACKEND}/storage/${img}` : img
    return url
  }else{
    return ""
  }

}
/**
 * 
 * @param {Object} variable 
 * @returns 
 */
export const estObject = (variable) => variable !== null && typeof variable == "object"
