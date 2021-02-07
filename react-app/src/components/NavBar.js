import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoButton from './auth/DemoButton';
import LogoutButton from './auth/LogoutButton';
import fork from "../resources/forklogo.png";
import profile from "../resources/profile.png";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
const NavBar = ({ setAuthenticated, img, changeImg }) => {
  return (
    <nav className="nav2">
      <NavLink
        to="/home"
        exact={true}
        className="fork"
        activeClassName="active"
        onClick={() =>
          changeImg(
            "url(" + "https://cdn.wallpapersafari.com/59/17/Mp2ga4.jpg" + ")"
          )
        }
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
          onClick={() =>
            changeImg(
              "url(" +
                "https://rmcdmc.com/wp-content/uploads/2015/03/BIG-Austin-Skyline-.jpeg" +
                ")"
            )
          }
        >
          Austin
        </NavLink>
        <NavLink
          to="/city/denver"
          exact={true}
          className="city-link"
          activeClassName="active"
          onClick={() =>
            changeImg(
              "url(" +
                "https://red.msudenver.edu/media/red/2020/august/denversummer_hero2_RED.jpg" +
                ")"
            )
          }
        >
          Denver
        </NavLink>
        <NavLink
          to="/city/seattle"
          exact={true}
          className="city-link"
          activeClassName="active"
          onClick={() =>
            changeImg("url(" + "https://fi.co/system/posts/Seattle.jpg" + ")")
          }
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