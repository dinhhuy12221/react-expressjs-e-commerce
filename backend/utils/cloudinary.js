import dotnev from 'dotenv'
import cloudinaryModule from 'cloudinary';

dotnev.config()
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CONFIG_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
    api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
})
export default cloudinary;