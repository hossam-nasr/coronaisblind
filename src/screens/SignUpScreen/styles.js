import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  min-height: 100vh;
  align-items: center;
`;

export const SignUp = styled.div`
  margin: 10vh;
  padding: 10vh;
  color: ${themeGet("colors.secondary")};
  max-width: 25%;
  border-radius: 2vh;
  color: ${themeGet("colors.tertiary")};
  background: ${themeGet("colors.transparentCard")}
`;
