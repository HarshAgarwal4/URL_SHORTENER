let cookieParser = require('cookie-parser')
function HomePage(req,res){
    let user = req.cookies?.UID
    if(user){
        res.redirect("/profile")
    }else{
        res.render('home')
    }
}

"I believe I should be hired for this internship because I have a strong foundation in web development with experience in HTML, CSS, JavaScript, React, MongoDB, Express, and Node.js. I'm passionate about building functional, user-friendly applications and am eager to apply my skills in a real-world environment. I’m a quick learner, adaptable, and excited to contribute to the team while continuing to grow and develop my abilities in web development."

function signUpPage(req,res){
    res.render('signup')
}

function loginPage(req,res){
    res.render('login')
}

module.exports = {
    HomePage,
    signUpPage,
    loginPage
}