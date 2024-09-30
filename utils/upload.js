const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");


// const storage=multer.diskStorage({
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })

// Define storage with folder option
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'e-commerce',  // Replace this with your desired folder name
        // format: async (req, file) => 'jpg',  // Or use file.mimetype if you need dynamic formats
        public_id: (req, file) => `${Date.now()}-${file.originalname}`,  // The file's name in Cloudinary
    },
});

// console.log(storage);


const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Maximum file size: 2MB
})

// console.log(upload)


// Configuration
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});


// Export the configurations
module.exports = {
    cloudinary,
    upload
};