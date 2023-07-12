import './App.css';
import React, { useState } from "react";
import Footer from "./components/footer/index";
import Header from "./components/header/index";
import Profile from "./components/profile/index";
import Login from "./components/login/index";
import Landing from "./components/landing/index";
import Quiz from "./components/quiz/index";
import "./assets/global-stylesheet/style.css";
// import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
      <Router>
        <h1>Dead Feed</h1>
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>

        </Router>
      </ApolloProvider>



  );
}

export default App;
