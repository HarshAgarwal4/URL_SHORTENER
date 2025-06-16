let express = require('express');
const { isloggedin } = require('../middlewares/auth');
const { makeURLshort, getoriginalurl, getalluserurls } = require('../controllers/url');

let shortenURLroute = express.Router();

shortenURLroute.post("/shorten", isloggedin, makeURLshort);
shortenURLroute.get("/:id", getoriginalurl);
shortenURLroute.get("/getalluserurls",isloggedin, getalluserurls);

module.exports = shortenURLroute;
