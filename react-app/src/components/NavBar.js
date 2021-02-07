import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoButton from './auth/DemoButton';
import LogoutButton from './auth/LogoutButton';
import fork from "../resources/forklogo.png";
import profile from "../resources/profile.png";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav2">
      <NavLink
        to="/home"
        exact={true}
        className="fork"
        activeClassName="active"
      >
        <img src={fork} alt="fork" />
      </NavLink>
      {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink> */}
      <div>
        <NavLink
          to="/austin"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Austin
        </NavLink>
        <NavLink
          to="/austin"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Denver
        </NavLink>
        <NavLink
          to="/austin"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Seattle
        </NavLink>
      </div>
      <NavLink
        to="/login"
        exact={true}
        className="profile"
        activeClassName="active"
      >
        <img src={profile} alt="profile" />
      </NavLink>
      {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
    </nav>
  );
}

export default NavBar;