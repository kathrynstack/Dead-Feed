import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//       <header dangerouslySetInnerHTML={{ __html: headerHtml }}></header>
//     );
//   };
  
//   export default Header;

function Header() {
    return (
        <div className="header">
          <p className="name">Dead Feed</p>
          <div className="header-right">
            </div>
            </div>
    )
}

export default Header;