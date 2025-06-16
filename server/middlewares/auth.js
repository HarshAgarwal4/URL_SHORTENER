const { getUser } = require("../services/auth");
let cookieParser = require("cookie-parser")

function isloggedin(req, res, next) {
    const userId = req.cookies?.UID; 
    if (!userId) {return res.redirect('/login');}
    const user = getUser(userId);

    if (!user) return res.redirect('/login');

    req.user = user;
    next();
}

// for authorization headers
// function isloggedin(req, res, next) {
//     const userId = req.headers["authorization"]
//     const token = userId.split('Bearer ')[1];
//     const user = getUser(token);

//     if (!user) return res.redirect('/login');

//     req.user = user;
//     next();
// }

module.exports = { isloggedin };