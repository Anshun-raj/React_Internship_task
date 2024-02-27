import React from "react";
import "../Style/Footer.css";
import Phone from "../Assets/phone.jpeg";
function Footer() {
  return (
    <div className="footer">
      <div className="footerInfo">
        <div className="contact">
          {/* <i className="fas fa-phone-square"></i> */}
          <img src={Phone} alt="" className="phoneImg"/>
          <p>
            Toll Free <span>1800 200 1234</span>
          </p>
        </div>
        <div className="media">
          <i className="fab fa-facebook"></i>
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="site">
          <i className="fas fa-globe"></i>
          <p>www.crigroups.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
