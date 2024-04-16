import { postreq } from './utils'; 

export const signup_req = async (formData) => {
    const endpoint = "https://aeonaxy-server-l3xw.onrender.com/create";
    try {
        const result = await postreq(endpoint, formData); 
        return result;
    } catch (error) {
        console.log("error at signup_req",error.message)
        return error.message 
    }
};
