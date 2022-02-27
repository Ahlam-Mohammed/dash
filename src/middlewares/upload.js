const multer  = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public/uploads'),
    filename: (req, file, cb) => 
    {
        var extension = file.originalname.split(".");
        var ext = extension[extension.length - 1];

        var uploaded_file_name =
        file.fieldname +
        "-" +
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "." +
        ext;

        cb(null, uploaded_file_name);
    }
});

const upload =  multer({
    storage: storage,
    // fileFilter: (req, file, callback) => {
    //     if (file.mimetype == "image/png" ||
    //         file.mimetype == "image/jpg" ||
    //         file.mimetype == "image/svg" ) 
    //     {
    //         callback(null, true);
    //     } 
    //     else callback(null, false);
    // },
  limits: 1024 * 1024 * 5,
});

module.exports = upload;