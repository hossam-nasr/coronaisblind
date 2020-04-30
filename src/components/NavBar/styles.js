import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  border-bottom: 2px solid ${themeGet("colors.border")};
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 100%;
`;

export const LeftSec = styled.div`
  margin: 2xvh;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightSec = styled.div`
  margin: 2vh;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItem = styled.span`
  list-style: none;
  display: inline;
  padding: 2vh;
  margin: 2vh;
  font-size: 2vh;
  border-top: 1.5px solid ${themeGet("colors.border")};
  flex: 1;
`;

export const Logo = styled.div`
  list-style: none;
  font-size: 3vh;
  color: ${themeGet("colors.tertiary")};
  margin: 2vh;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Rabet = styled(Link)`
  text-decoration: none;
  color: ${themeGet("colors.tertiary")};
`;
