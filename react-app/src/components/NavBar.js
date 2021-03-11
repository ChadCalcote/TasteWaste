// React Dependencies
import React from "react";
// React Router Dom Dependencies
import { NavLink } from "react-router-dom";
// Fork Icon
import fork from "../resources/forklogo.png";
// Dropdown Component
import Dropdown from "./Dropdown";

// Define NavBar component with destructured props
const NavBar = ({ authenticated, setAuthenticated, setUser }) => {
  return (
    <nav className="nav2">
      <NavLink
        to="/"
        exact={true}
        className="fork"
        activeClassName="active"
      >
        <img src={fork} alt="fork" />
      </NavLink>
      <div>
        <NavLink
          to="/city/austin"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Austin
        </NavLink>
        <NavLink
          to="/city/denver"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Denver
        </NavLink>
        <NavLink
          to="/city/seattle"
          exact={true}
          className="city-link"
          activeClassName="active"
        >
          Seattle
        </NavLink>
      </div>
      <div className="dropdown">
        <Dropdown
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
        />
      </div>
    </nav>
  );
};

export default NavBar;
