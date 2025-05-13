const log = console.log
var path = require('path');
const multer = require("multer");

const storage = multer.diskStorage({
    destination : function(req,file,callback){
        log("File destination:","./public/src"); // Destino del archivo
        callback(null,"./public/src");
    },
    filename : function(req,file,callback){ // Check this to change file name
        log("Uploaded file:",req.body); //Log receive from data 
        return callback(null,file.originalname);
    }
})

const upload = multer({storage: storage}).array("file",1);

module.exports.upload_file = async (req, res) => {
    log("Cargando el archivo");

    upload(req, res, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({code: 500, msg: "Error uploading file"});
        }

        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({code: 200, msg: "Ok"});
    });
}

const privateStorage = multer.diskStorage({
    destination : function(req,file,callback){
        log("File destination:","./private/src"); // Destino del archivo
        callback(null,"./private/src");
    },
    filename : function(req,file,callback){ // Check this to change file name
        log("Uploaded file:",req.body); //Log receive from data 
        return callback(null,file.originalname);
    }
})

const privateUpload = multer({storage: privateStorage}).array("file",1);

module.exports.upload_file_private = async (req,res) => {
    log("Cargando el archivo");
    privateUpload(req, res, function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({code: 500, msg: "Error uploading file"});
        }

        console.log("Upload Successful:", req.files); // Log uploaded files
        res.status(200).json({code: 200, msg: "Ok"});
    });
}

module.exports.get_private_file = async(req, res) => {
    var fileName = req.params.file
    res.sendFile(path.join(__dirname, './private/src', fileName));
}