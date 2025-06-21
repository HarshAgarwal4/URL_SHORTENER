async function user(req,res) {
    let User = await req.user
    let imagepath = User.path
    res.render('user' , {image: imagepath,name: User.name,phone: User.phone, email: User.email, username: User.username, password: User.password,msg: User.msg})
}

module.exports = {user}