const shortid = require('shortid')
const URL = require('../models/url')
let cookieParser = require('cookie-parser');

async function makeURLshort(req, res) {
    let { originalURL } = req.body
    console.log(originalURL);
    do {
        shortId = shortid.generate().substring(0, 6);
    } while (await URL.findOne({ shortid: shortId }));    

    console.log(shortId);

    let entry = new URL({
        userId: req.user,
        shortid: shortId,
        redirectURL: originalURL,
        analytics: []
    })

    entry.save().then(() => {
        res.send({ status: 1, msg: "Url successfully shorted", shortid: shortId })
    }).catch((err) => {
        res.send({ status: 0, msg: "URl not shorted", error: err })
    })
}

async function getoriginalurl(req,res){
    let rid = req.params.id
    let findUrl = await URL.findOneAndUpdate(
        { shortid: rid },                     
        { $push: { analytics: { Timestamp: Date.now() } } },
        { new: true }                        
    );
    let nurl = findUrl.redirectURL
    res.redirect(nurl)
}

async function getallurls(req,res){
    let arr = await URL.find()
    res.send({status:1 , urls: arr})
}

async function getalluserurls(req,res){
    let id = req.user._id   
    let arr = await URL.find({userId: id})
    res.send({status:1 , urls: arr})
}

module.exports = {makeURLshort , getoriginalurl, getalluserurls}