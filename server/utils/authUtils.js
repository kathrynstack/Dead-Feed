const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');

const authenticate = async (context) => {
  const authHeader = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    if (token) {
      const user = await User.findOne({ token });

      if (user) {
        return user;
      }
      throw new AuthenticationError('Invalid token');
    }
    throw new AuthenticationError('Authentication token must be provided');
  }
  throw new AuthenticationError('Authorization header must be provided');
};

module.exports = {
  authenticate,
};
