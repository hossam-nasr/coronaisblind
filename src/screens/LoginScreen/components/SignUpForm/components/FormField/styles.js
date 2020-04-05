import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
  display: block;
`;

export const InputClass = {
  fontSize: "18px",
  padding: "10px 10px 10px 5px",
  display: "block",
  width: "100%",
  border: "none",
  backgroundColor: "#f5f6fa",
  borderRadius: "5vh"
}