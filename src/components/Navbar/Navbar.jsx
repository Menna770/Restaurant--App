import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    
    return (
      <>
        {/* Small NAV */}
        <div className="small-nav">
          <div className="container">
            <div className="row">
              <div className="col-md-4 my-1">
                <i className="fas fa-phone-alt mr-2"></i> + 1235 2355 98
              </div>
              <div className="col-md-4 my-1">
                <i className="fas fa-paper-plane mr-2"></i> MEAL@GMAIL.COM
              </div>
              <div className="col-md-4 my-1">
                3-5 BUSINESS DAYS DELIVERY AND FREE RETURNS
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light py-2">
          <div className="container">

            <Link className="navbar-brand" to="/home">
              Meal
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                  About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/chef">
                  Chef
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    Food Cart <i className="fas fa-shopping-cart"></i>
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
