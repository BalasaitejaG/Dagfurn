import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="LoginPopup">
      <form className="LoginPopup-container">
        <div className="LoginPopup-title">
          <h2> {currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="LoginPopup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>
          <div className="LoginPopup-condition">
            <input type="checkbox" required />
            <p>
              By continuing , you will be agree to the terms and conditions and
              privacy Policy.
            </p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurrentState("Sign Up")}> Click Here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurrentState("Login")}> Login Here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

LoginPopup.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default LoginPopup;
