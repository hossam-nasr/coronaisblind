import React, { useContext } from "react";
import { UserContext } from "../../Auth.js";
import "../../App.css";
import { Nav, NavItem, Logo, RightSec, LeftSec, Rabet } from "./styles";
import app from "../../firebase";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Nav>
      <LeftSec>
        <NavItem>
          <Rabet to="/">Home</Rabet>
        </NavItem>
        <NavItem>
          <Rabet to="/about">About</Rabet>
        </NavItem>
      </LeftSec>
      <Logo>
        <Rabet to="/">Corona is Blind</Rabet>
      </Logo>
      <RightSec>
        {!currentUser && (
          <NavItem>
            <Rabet to="/login">Login</Rabet>
          </NavItem>
        )}
        {!currentUser && (
          <NavItem>
            <Rabet to="/signup">Sign Up</Rabet>
          </NavItem>
        )}
        {currentUser && (
          <NavItem>
            <Rabet onClick={() => app.auth().signOut()} to="/">Sign Out</Rabet>
          </NavItem>
        )}
      </RightSec>
    </Nav>
  );
};

export default NavBar;
