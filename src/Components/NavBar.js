import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../styles";

import logo from "../media/logo.PNG";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <NavItem to="/">HOME</NavItem>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavItem className="active" className="nav-link" to="/books">
                BOOKS
              </NavItem>
            </li>
          </ul>
          <ul type="none">
            <li className="nav-item ml-auto">
              <NavItem to="/">Logo</NavItem>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
