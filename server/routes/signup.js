let express = require("express");
const { signup } = require("../controllers/signup"); // Change 'signUp' to 'signup'
let signupRouter = express.Router();
let multer = require('multer')
let fs = require('fs')
let path = require("path")

let storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({
    storage: storage,
    limits: 10 * 1024 * 1024
})


signupRouter.post("/signup", upload.single("picture"), signup); // Add upload middleware if needed

module.exports = signupRouter;
