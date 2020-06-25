const multer = require('multer');
const path = require('path');
const imageName = ""
const helper = require('../helpers')
const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, './public/image'),
            file
    },
    filename: function(req, file, cb) {
        const fileExt = file.originalname.split('.')[1]
        cb(null, file.fieldname + "-" + Date.now() + "." + fileExt)
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: 100000024 },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
})

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = filetypes.test(file.mimetype)
    if(extname && mimeType){
        return cb(null, true)
    } else {
        console.log(file)
        return cb("Upload Image only", false)
    }
    // if (extname) {
    //     return cb(null, true);
    // } else {
    //     cb('Error: Images Only!');
       

    // }
}

module.exports = upload.single('image');




// limits: { fileSize: 1000024 },

// `${file.fieldname}-${Date.now()}`+path.extname(file.originalname)
// destination:path.join(__dirname+'../../public/images/'),