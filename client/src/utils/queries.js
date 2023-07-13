import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Me {
    me {
      _id
      username
      email
      posts {
        _id
        username
      }
    }
  }
`;

export const GET_USER = gql`

query GetUser($userId: ID, $username: String) {
  getUser(userId: $userId, username: $username) {
    _id
    username
    email
    posts {
      _id
      title
    }
  }
}
`;

export const QUERY_POST = gql`
  query posts($username: String) {
  posts(username: $username) {
    _id
    title
    createdAt
    username
  }
}
`;

export const GET_USERS = gql`
  query getUsers {
    getUsers {
    _id
    username
    email
      posts {
      _id
      username
    }
  }
}
`;
