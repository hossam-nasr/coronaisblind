import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Nav = styled.nav`
    // background-color: ${themeGet("colors.background")};
    display: flex;
    flex-direction: row;
    padding: 0;
    border-bottom: 2px solid #FFC107;
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
    color: white;
    border-top: 1.5px solid #FFC107;
    flex: 1;
`

export const Logo = styled.div`
    list-style: none;
    display: inline;
    font-size: 3vh;
    color: white;
    margin: 5vh;
    align-self: center;
    font: courier;
`