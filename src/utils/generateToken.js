const jwt = require('jsonwebtoken');

const generateToken = async (userId, role) => {
    try {
        // Generate a token with a secret key and expiration time
        const token = jwt.sign({ id: userId, role: role }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '12h', // Token expires in 12 hour
        });
        return token;
    } catch (error) {
        throw new Error('Token generation failed');
    }
}

module.exports = generateToken;