const user = require("../models/UserModel");
const { setuser, getUser } = require("../services/auth");
let { v4: uuidv4 } = require('uuid');
let cookieParser = require('cookie-parser');

// async function login(req, res) {
//     let { username, password } = req.body;
//     let findUser = await user.findOne({ username: username, password: password });
//     if (!findUser) {
//         return res.redirect('/login');
//     }
//     const sessionId = uuidv4();
//     setuser(sessionId, findUser);
//     res.cookie('UID', sessionId);
//     res.redirect("/profile");
// }

async function login(req, res) {
    let { username, password } = req.body;
    let findUser = await user.findOne({ username: username, password: password });
    if (!findUser) {
        return res.redirect('/login');
    }
    let token = setuser(findUser);
    res.cookie('UID', token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict"
    });
    return res.redirect("/profile");
}


// async function login(req, res) {
//     let { username, password } = req.body;
//     let findUser = await user.findOne({ username: username, password: password });
//     if (!findUser) {
//         return res.redirect('/login');
//     }
//     let token = setuser(findUser);
//     return res.json({token})
// }

async function logout(req,res){
    let userId = req.cookies?.UID;
    if(userId){
        setuser(userId , null);
        res.clearCookie('UID')
    }
    res.redirect("/")
}
module.exports = { login ,logout};