const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    posts: [Post]
    followers: [User]
    following: [User]
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    likes: Int!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    me: User
    getUser(id: ID!): User
    getAllUsers: [User]
    getPost(id: ID!): Post
    getAllPosts: [Post]
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    createPost(title: String!, content: String!): Post
    deletePost(id: ID!): ID
    likePost(id: ID!): Post
    followUser(id: ID!): User
  }
`;

module.exports = typeDefs;
