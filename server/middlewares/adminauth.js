async function isadmin(req, res, next) {
    let { name, pass } = req.body
    if (name === "Harsh_King" && pass === "asdf") {
        next()
    }
    else {
        res.redirect("/login")
    }
}

module.exports = isadmin