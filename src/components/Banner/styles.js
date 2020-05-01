import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
    padding: 10px;
    width: 60%;
    background-color: ${themeGet("colors.gold")};
    margin: 10px;
`

export const Text = styled.h5`
    text-align: center;
    font-family: ${themeGet("fonts.gravity.light")}
`

export const Renew = styled.h4`
    display: inline;
    cursor: pointer;
    text-decoration: underline;
    font-family: ${themeGet("fonts.gravity.light")}
`