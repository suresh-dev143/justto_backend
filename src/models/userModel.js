const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
},
    {
        timestamps: true,
        collection: 'users',
        strict: false,
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;