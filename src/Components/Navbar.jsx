import React from "react";
import "./Navbar.css";
import Logo from "./fitfusionLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container-header">
            <div className="logo-and-link-header">
                <Link to='/'><img src={Logo} alt="dd" /></Link>
                <div className="clickable-links-header">
                    <Link to="/" className='clickable-link-element-header' activeClassName='clickable-link-element-header-active'>Home</Link>
                    <Link to="/workouts" className='clickable-link-element-header' activeClassName='clickable-link-element-header-active'>Workouts</Link>
                    <Link to="/dietplans" className='clickable-link-element-header' activeClassName='clickable-link-element-header-active'>Diet plans</Link>
                    <Link to="/aboutus" className='clickable-link-element-header' activeClassName='clickable-link-element-header-active'>About us</Link>
                    <Link to="/services-page" className='clickable-link-element-header' activeClassName='clickable-link-element-header-active'>Services</Link>
                </div>

                <div className="login-button-header">
                    <Link to='/login'><button className="bn54" onClick={console.log("hahaha")}><span className="bn54span">Log In</span></button></Link>
                </div>
                <div className="login-button-header">
                    <Link to='/login-customer-page'><button className="bn54"><span className="bn54span">Sign In</span></button></Link>
                </div>
            </div>
        </div>
    </div>
                    // <Link><span className="material-symbols-outlined user-clickable-button-header" style={{textDecoration:'none'}}>search</span></Link>
                    // <Link to='/customer-profile'><span className="material-symbols-outlined user-clickable-button-header">person</span></Link>
                    // <Link><span className="material-symbols-outlined user-clickable-button-header">shopping_bag</span></Link>
  );
};

export default Navbar;
