import { v2 as cloudinary } from 'cloudinary';
export const getprofileURL = async (profile) => {

    try {
        cloudinary.config({ 
            cloud_name: process.env.CLOUD_NAME, 
            api_key: process.env.API_KEY, 
            api_secret: process.env.API_SECRET
        });

        if (!profile) {
            throw new Error("Missing profile parameter or file");
        }
        
        const result = await cloudinary.uploader.upload(profile, { public_id: "olympic_flag" });

        console.log(result);
        return result.secure_url;
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        throw error;
    }
}

