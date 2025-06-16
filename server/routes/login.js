const { login ,logout} = require("../controllers/login")

let express = require('express')
let loginRouter = express.Router()
let logoutRouter = express.Router()
loginRouter.post('/login' ,login)
logoutRouter.get('/logout' , logout)

module.exports = {loginRouter,logoutRouter}