import {  putreq } from "./utils"
export const updatedprofile = async (id, profile, location) => {
    const endpoint = `https://aeonaxy-server-l3xw.onrender.com/update/${id}`;
    try {
        const result = await putreq(endpoint, { profile, location });
        console.log(result)
        return result.data;
    } catch (error) {
        console.log("Error updating profile and location:", error);
        throw error;
    }
};
