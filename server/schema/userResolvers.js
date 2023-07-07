const User = require('../models/User');
const bcrypt = require('bcrypt');

const userResolvers = {
  Query: {
    me: (_, __, { user }) => user,
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        throw new Error('Failed to get user');
      }
    },
    // ...
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password: hashedPassword });
        return user;
      } catch (error) {
        throw new Error('Failed to register user');
      }
    },
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid email or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid email or password');
        }
        return user;
      } catch (error) {
        throw new Error('Failed to login');
      }
    },
    // ...
  },
};

module.exports = userResolvers;