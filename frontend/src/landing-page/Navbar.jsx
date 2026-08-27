import React from "react";
import logo from "../assets/images/logo.svg"
import { Link } from "react-router-dom";
import "../index.css"
const Navbar = () => {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
           <img src={logo} alt="logo image"  style={{width:"30%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
            <form class="d-flex" role="search">
              <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/About">
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="Product">
                  Product
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/Pricing">
                  Pricing
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link active" to="/Support">
                  Support
                </Link>
              </li>
             
            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
};

export default Navbar;
