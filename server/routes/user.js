let express = require("express")
const { isloggedin } = require("../middlewares/auth")
const { user } = require("../controllers/user")
let userProfileRoute = express.Router()

userProfileRoute.get("/data",isloggedin, user)

module.exports = {userProfileRoute}