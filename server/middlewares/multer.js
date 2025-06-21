let multer = require('multer')

let storage = multer.diskStorage({
    destination: "../uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage,
    limits: 10 * 1024 * 1024
})

module.exports = upload