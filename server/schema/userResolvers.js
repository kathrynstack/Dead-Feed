const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const Post = require('../models/Post');

const userResolvers = {
  Query: {
    me: (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError('Authentication required');
      }
      return User.findById(user.id);
    },
    getUser: (_, { id }) => User.findById(id),
    getAllUsers: () => User.find(),
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('Email already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      return user;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Invalid email or password');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new AuthenticationError('Invalid email or password');
      }

      return user;
    },
    followUser: async (_, { id }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Authentication required');
      }

      const currentUser = await User.findById(user.id);
      const userToFollow = await User.findById(id);

      if (!userToFollow) {
        throw new Error('User not found');
      }

      if (currentUser.following.includes(userToFollow._id)) {
        throw new Error('Already following this user');
      }

      await currentUser.updateOne({ $push: { following: userToFollow._id } });
      await userToFollow.updateOne({ $push: { followers: currentUser._id } });

      return userToFollow;
    },
  },
  User: {
    posts: async (user) => Post.find({ author: user._id }),
    followers: async (user) => User.find({ _id: { $in: user.followers } }),
    following: async (user) => User.find({ _id: { $in: user.following } }),
  },
};

module.exports = userResolvers;
