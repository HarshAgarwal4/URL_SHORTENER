const { getuser } = require("../services/auth");
let path = require('path');

function profile(req, res) {
    const username = req.user.username; // Define the username variable
    const imagepath = "/uploads/" + path.basename(req.user.path);
    res.render("profile", { name: username, image: imagepath });
}

module.exports = { profile }; // Corrected export