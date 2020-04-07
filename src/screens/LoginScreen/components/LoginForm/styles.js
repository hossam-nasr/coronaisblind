import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Form } from "formik";

export const Estemara = styled(Form)`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    text-align: center;
    background-color: ${themeGet("colors.secondary")};
    color: ${themeGet("colors.tertiary")};
    border: none;
    font-size: 2vh;
    padding: 2vh;
    border-radius: 2vh;
    margin: 5vh 0 0 0 ;
    cursor: pointer;
`