let mongoose = require('mongoose')

let urlSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    analytics: [{ timestamp: { type: Number } }],
    },
    { timestamps: true }
)

let URL = new mongoose.model("url" , urlSchema)

module.exports = URL