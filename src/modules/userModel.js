const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    number: { type: Number, unique: true, required: true },
},
    {
        timestamps: true,
        collection: 'users',
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;