import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import "../../App.css";
import { Link } from "react-router-dom";
import { Nav, NavItem, Logo, RightSec, LeftSec } from "./styles"

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Nav>
      <LeftSec>
        <NavItem>
          <Link to="/">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about">
            About
          </Link>
        </NavItem>
      </LeftSec>
      <Logo>
          <Link to="/">
            Corona is Blind
          </Link>
        </Logo>
      <RightSec>
        <NavItem>
          {!currentUser && (
            <Link to="/login">
              Login
            </Link>
          )}
        </NavItem>
        <NavItem>
          {!currentUser && (
          <Link to="/signup">
            Sign Up
          </Link>
          )}
          </NavItem>
      </RightSec>
    </Nav>
    );
};

export default NavBar;
