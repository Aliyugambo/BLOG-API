//Dependencies
const express = require("express");

const cookieParser = require("cookie-parser")
const morgan = require("morgan")

//ROUTES
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use(morgan('combined'));
app.use(cookieParser())


app.use("/", userRoute);
app.use("/blog", blogRoute);


// catching all  undefined routes
app.all("*", (req, res, next) => {
  next(res.status(404).json({message : 'Page not found!'}));
});

module.exports = app;