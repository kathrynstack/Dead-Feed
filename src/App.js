import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Profile from "./components/profile";
import Login from './components/login';
import Quiz from './components/quiz';
import Landing from './components/landing';
// import { profile } from 'console';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
    <div className="container py-5 vh-100 vw-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card-body p-5 text-center">
            <div className="card bg-white text-dark">
              <Landing />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Profile />}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/quiz" 
              element={<Quiz />}
            />
            {/* <Route 
              path=""
              element={</>} */}
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
