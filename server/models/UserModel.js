let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    phone:{
        type: Number,
        required : true,
        unique: true
    },
    username:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true
    },
    msg:{
        type: String,
        required: true
    },
    path :{
        type: String,
        required: true
    },
    urls: [{ type: mongoose.Schema.Types.ObjectId, ref: "URL" }]
})

let user = new mongoose.model('URL_shortner_user', userSchema)

module.exports = user