import React from "react";
import "../Style/Header.css";
import Logo from "../Assets/logo.png";
function Header() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" className="headerImg" />
    </div>
  );
}

export default Header;
