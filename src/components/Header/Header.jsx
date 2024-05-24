import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/listNews">List News</Link> </span>
        <span><Link to="/form">Form</Link> </span>
      </nav>
    </div>
  );
};

export default Header;