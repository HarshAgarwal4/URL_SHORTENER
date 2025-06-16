const jwt = require("jsonwebtoken")

function setuserJWT(user){
    let token = jwt.sign(user,secret)
    console.log(token)
    return token
}

function getuserJWT(token){
    let verify = jwt.verify(token, secret)
    console.log(verify)
    return verify
}