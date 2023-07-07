import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Profile from "./components/profile";
import Login from './components/login';
import Quiz from './components/quiz';
// import { profile } from 'console';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
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
