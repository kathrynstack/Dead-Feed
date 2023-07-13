import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_POST = gql`
  mutation addPost(
    $title: String!
    $description: String!
    $imageID: String!
  ) {
    addPost(
        title: $title
        description: $description
        imageID: $imageID
    ) 
  }
`;