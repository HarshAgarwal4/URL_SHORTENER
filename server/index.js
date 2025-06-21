let express = require("express");
let mongoose = require('mongoose');
let ejs = require("ejs");
let path = require("path"); 
let fs = require("fs");
const signUpRouter = require("./routes/signup")
const staticRouter = require("./routes/staticRoutes");
const profileRouter = require("./routes/profile");
const {loginRouter,logoutRouter} = require("./routes/login")
let cookieParser = require('cookie-parser')
let {v4:uuid} = require('uuid');
const { userProfileRoute } = require("./routes/user");
const shortenURLroute = require("./routes/url");
require('dotenv').config()
let shortid = require('shortid');
const adminRouter = require("./routes/admin");
const { isloggedin } = require("./middlewares/auth");

let app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser())

app.use("/", staticRouter);
app.use("/", signUpRouter);
app.use("/", loginRouter);
app.use("/", profileRouter);
app.use("/" ,userProfileRoute)
app.use("/" , logoutRouter)
app.use("/" , shortenURLroute)
app.use("/" , adminRouter)

mongoose.connect(process.env.DB_URL, {
  dbName: "URL_SHORTENER_APP",
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;