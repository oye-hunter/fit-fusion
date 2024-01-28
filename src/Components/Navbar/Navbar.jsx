import React from "react";
import "./Navbar.css";
import Logo from "../../Utils/fitfusionLogo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  let [showNav, setShowNav] = useState(true);
  const location = useLocation();
  const isLogin_SignupPage = location.pathname === "/login";
  
  React.useEffect(() => {
    if (!isLogin_SignupPage) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [isLogin_SignupPage]);

  return (
    <div>
      {showNav ? (
        <div className="container-header">
          <div className="logo-and-link-header">
            <Link to="/">
              <img src={Logo} alt="dd" />
            </Link>
            <div className="clickable-links-header">
              <Link
                to="/"
                className="clickable-link-element-header"
                activeClassName="clickable-link-element-header-active"
              >
                Home
              </Link>
              <Link
                to="/workouts"
                className="clickable-link-element-header"
                activeClassName="clickable-link-element-header-active"
              >
                Workouts
              </Link>
              <Link
                to="/dietplans"
                className="clickable-link-element-header"
                activeClassName="clickable-link-element-header-active"
              >
                Diet plans
              </Link>
              <Link
                to="/aboutus"
                className="clickable-link-element-header"
                activeClassName="clickable-link-element-header-active"
              >
                About us
              </Link>
              <Link
                to="/services-page"
                className="clickable-link-element-header"
                activeClassName="clickable-link-element-header-active"
              >
                Services
              </Link>
            </div>

            <div className="login-button-header">
              <Link to="/login">
                <button className="bn54">
                  <span className="bn54span">Log In</span>
                </button>
              </Link>
            </div>
            <div className="login-button-header">
              <Link to="/login">
                <button className="bn54">
                  <span className="bn54span">Sign In</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
