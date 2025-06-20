const profile = require("./auth/profile.js");
const updateProfile = require("./auth/updateProfile.js");
const sendOTP = require("./auth/sendOTP.js");
const verifyOTP = require("./auth/verifyOTP.js");


module.exports = {
    profile,
    updateProfile,
    sendOTP,
    verifyOTP,
};