let express = require("express");
const { isloggedin } = require("../middlewares/auth");
const { profile } = require("../controllers/profile"); // Ensure profile is correctly imported
let profileRoute = express.Router();

profileRoute.get("/profile", isloggedin, profile);

module.exports = profileRoute;