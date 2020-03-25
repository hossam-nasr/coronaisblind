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

export const Title = styled.div`
  text-align: center;
  font-size: 4em;
  color: ${themeGet("colors.lightGold")};
  font-family: sans-serif;
`;
