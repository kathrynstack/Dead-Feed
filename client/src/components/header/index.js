import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";
import logo from './red-skull-drawing-skull.png';

function Header() {
  return (
    <div className="header">
      <p className="name"><img style={{width:100, height:100}} src={logo} alt="Logo" />Dead Feed</p>
      </div>
  )
}

export default Header;

// A social media for true horror fans