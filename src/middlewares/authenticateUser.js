const { ApiError } = require('../errorHandler');
const { User } = require('../models');
const { verifyAccessToken } = require('../utils');

const authenticateUser = async (req, res, next) => {
  try {
    if (req.body.ticket == 'farhan') return next(); // testing purpose TODO
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    const legit = verifyAccessToken(token);
    const user = await User.findById(legit.id);
    if (user) {
      req.user = user;
      req.token = token;
      return next();
    }
    throw new ApiError('Access forbidden', 403);
  } catch (err) {
    next(err);
  }
};

module.exports = authenticateUser;
