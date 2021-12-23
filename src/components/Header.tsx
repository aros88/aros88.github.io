import React from "react";
import { Link } from "react-router-dom";

import "../css/header.css";

const Header: React.FC = (props) => {
  return (
    <header className="header">
      <div className="header-title">
        <Link to="/home">
          <h1>World of <span>Daniel</span></h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
