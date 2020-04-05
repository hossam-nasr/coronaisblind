import React, { useContext } from "react";
import { AuthContext } from "../../Auth.js";
import "../../App.css";
import { Nav, NavItem, Logo, RightSec, LeftSec, Rabet } from "./styles"

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Nav>
      <LeftSec>
        <NavItem>
          <Rabet to="/">
            Home
          </Rabet>
        </NavItem>
        <NavItem>
          <Rabet to="/about">
            About
          </Rabet>
        </NavItem>
      </LeftSec>
      <Logo>
          <Rabet to="/">
            Corona is Blind
          </Rabet>
        </Logo>
      <RightSec>
        <NavItem>
          {!currentUser && (
            <Rabet to="/login">
              Login
            </Rabet>
          )}
        </NavItem>
        <NavItem>
          {!currentUser && (
          <Rabet to="/signup">
            Sign Up
          </Rabet>
          )}
          </NavItem>
      </RightSec>
    </Nav>
    );
};

export default NavBar;
