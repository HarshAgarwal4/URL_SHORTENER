// const sessionIdtoUsermap = new Map()

// function setuser(id , user){
//     sessionIdtoUsermap.set(id , user)
// }

// function getUser(id){
//     return sessionIdtoUsermap.get(id)
// }

// module.exports = {setuser , getUser}

const jwt = require("jsonwebtoken")
const secret = "Harsh+32"

function setuser(user){
    let token = jwt.sign({
        _id: user._id,
        username: user.username,
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: user.password,
        msg: user.msg,
        path: user.path
    },secret)
    return token
}

function getUser(token){
    if(!token) return null
    try{
        let verify = jwt.verify(token, secret)
        return verify
    }
    catch(err) {
        return null
    }
}

module.exports = {setuser , getUser}