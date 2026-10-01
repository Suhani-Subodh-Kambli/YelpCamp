const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary'); 

cloudinary.config({   //create cloudinary instance and attach it to our account
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({    //make a new clodinary storage
    cloudinary,                           //attach the storage to the cloudinary instance we created
    params: {
        folder: 'YelpCamp',                   //name of the folder in cloudinary where you want to upload files
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
};