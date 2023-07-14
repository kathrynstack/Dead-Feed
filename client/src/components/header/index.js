import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import logo from './red-skull-drawing-skull.png';

function Header() {
  return (
    <div className="header">
      <p className="name"><img style={{width:85, height:85}} src={logo} alt="Logo" />Dead Feed</p>
      </div>
  )
}

export default Header;

// A social media for true horror fans