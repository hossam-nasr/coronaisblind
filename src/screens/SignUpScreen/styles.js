import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  min-height: 100vh;
  background-color: ${themeGet("colors.background")};
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SignUp = styled.div`
  margin: 5vh;
`;

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
`;
