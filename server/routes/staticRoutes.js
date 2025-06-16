let express = require("express");
const { HomePage ,signUpPage ,loginPage} = require("../controllers/staticController");
const { isloggedin } = require("../middlewares/auth");
let staticRouter = express.Router();

staticRouter.get("/", HomePage);
staticRouter.get("/signUp", signUpPage)
staticRouter.get("/login", loginPage)

module.exports = staticRouter;