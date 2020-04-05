import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  min-height: 100vh;
  // background-color: ${themeGet("colors.background")};
  align-items: center;
`;

export const SignUp = styled.div`
  margin: 10vh;
  padding: 10vh;
  background-color: #9c88ff;
  max-width: 25%;
  border-radius: 2vh;
  color: #f5f6fa;
  background: rgba(156, 136, 255, 0.2)
`;
