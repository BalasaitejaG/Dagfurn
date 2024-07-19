import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="Footer-content">
        <div className="Footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>
            DagFurn is committed to providing high-quality furniture that
            combines style and <a>comfort.</a> We strive to create a seamless shopping
            experience for our customers.We value your input and look forward to
            serving you better.
          </p>
          <div className="Footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="Footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li> About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-863-111-331</li>
            <li>contact@dagfurn.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="Footer-copyright">
        Copyright 2024 © DagFurn.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
