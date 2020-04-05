import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    padding: 0;
    border-bottom: 2px solid ${themeGet("colors.border")};
    justify-content: space-between;
    flex-wrap: wrap;  
    flex-basis: 100%;
`

export const LeftSec = styled.div`
    margin: 5vh;
`

export const RightSec = styled.div`
    margin: 5vh;
`

export const NavItem = styled.span`
    list-style: none;
    display: inline;
    padding: 2vh;
    margin: 2vh;
    font-size: 2vh;
    border-top: 1.5px solid ${themeGet("colors.border")};
    flex: 1;
`

export const Logo = styled.div`
    list-style: none;
    display: inline;
    font-size: 3vh;
    color: ${themeGet("colors.tertiary")};
    margin: 5vh;
    align-self: center;
`

export const Rabet = styled(Link)`
  text-decoration: none;
  color: ${themeGet("colors.tertiary")};
  ` 