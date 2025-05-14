
const { login } = require("../controllers");
const userRoute = require("express").Router();

//---------- user auth ----------
userRoute.post("login", login);


module.exports = userRoute;
