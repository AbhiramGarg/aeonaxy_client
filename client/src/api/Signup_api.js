import { postreq } from './utils'; 

export const signup_req = async (formData) => {
    const endpoint = "http://localhost:5600/create";
    try {
        const result = await postreq(endpoint, formData); 
        return result;
    } catch (error) {
        console.log("error at signup_req",error.message)
        return error.message 
    }
};
