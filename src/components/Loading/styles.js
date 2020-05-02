import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
    background-color: ${themeGet("colors.white")};
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
`