import React from 'react';
import { NavLink } from 'react-router-dom';
import fork from "../resources/forklogo.png";
import Dropdown from './Dropdown';

const NavBar = ({ authenticated, setAuthenticated, changeImg, setUser }) => {
  return (
    <nav className="nav2">
      <NavLink
        to="/"
        exact={true}
        className="fork"
        activeClassName="active"
        // onClick={() =>
        //   changeImg(
        //     "url(https://img.pngio.com/fresh-background-gradients-webgradientscom-purple-and-orange-png-2400_2000.png)"
        //   )
        // }
      >
        <img src={fork} alt="fork" />
      </NavLink>
      {/* <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink> */}
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
          className="dropdown__button"
          setUser={setUser}
        />
      </div>

      {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
    </nav>
  );
}

export default NavBar;