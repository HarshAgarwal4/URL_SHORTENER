const User = require("../models/UserModel"); 

const fs = require("fs"); // Import fs module

async function signup(req, res) {
    let filePath = req.file ? req.file.path : null; // Store file path before the try block

    try {
        let { name, email, phone, username, password, msg } = req.body;

        let newUser = new User({
            name, email, phone, username, password, msg, path: filePath
        });

        await newUser.save();
        res.send({ status: 1, message: "User Registered" });
    } catch (err) {
        // If an error occurs, delete the uploaded file
        if (filePath) {
            fs.unlink(filePath, (error) => {
                if (error) console.error("Error deleting file:", error);
            });
        }
        res.send({ status: 0, message: err.message });
    }
}

module.exports = { signup }; // Export as an object
