const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
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
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    me: User!
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
    followUser(id: ID!): User
    deleteUser(id: ID!): String
  }
`;

module.exports = typeDefs;