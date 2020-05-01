import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  border: 1.5px solid ${themeGet("colors.secondary")};
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
  align-self: center;
  margin: 20px;
`;

export const Text = styled.div`
  font-size: 22px;
  font-family: ${themeGet("fonts.primary")};
`;
