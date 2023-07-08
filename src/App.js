import './App.css';
import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Profile from "./components/profile";
import Login from './components/login';
import Landing from './components/landing';

const App = () => {
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
  );
};


export default App;
