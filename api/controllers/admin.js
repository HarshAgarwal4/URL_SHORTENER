const user = require("../models/UserModel");

async function adminpanel(req, res) {
    const users = await user.find({});
    res.render('admin', { users });
}

module.exports = adminpanel