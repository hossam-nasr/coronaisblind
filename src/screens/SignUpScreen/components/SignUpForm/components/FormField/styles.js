import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Field } from "formik";

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
  display: block;
`

export const Hakl = styled(Field)`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  background-color: ${themeGet("colors.tertiary")};
  border-radius: 5vh;
` 