let express = require("express")
const isadmin = require("../middlewares/adminauth")
const adminpanel = require("../controllers/admin")
let adminRouter = express.Router()

adminRouter.post("/admin" , isadmin, adminpanel)

module.exports = adminRouter