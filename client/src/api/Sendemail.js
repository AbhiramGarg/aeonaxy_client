import { postreq } from "./utils";
export const sendEmail = async(email) => {
    const endpoint = `https://aeonaxy-server-l3xw.onrender.com/${email}`;
    try {
        const result = await postreq(endpoint); 
        return result;
    } catch (error) {
        console.log("error at signup_req",error.message)
        return error.message 
    }
};