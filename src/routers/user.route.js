const userRoute = require("express").Router();
const { profile, updateProfile, sendOTP, verifyOTP } = require("../controllers/userController");
const { authenticateUser, fileUploader } = require("../middlewares");

//---------- user auth ----------
userRoute.post("/profile",  profile);
userRoute.post("/updateprofile", fileUploader(
    [
        { name: "avtar", maxCount: 1 },

    ],
    "User"
), updateProfile);
userRoute.post("/sendOTP", sendOTP);
userRoute.post("/verifyOTP", verifyOTP);
module.exports = userRoute;