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

export const Subtitle = styled.div`
  text-align: center;
  font-size: 2em;
  color: ${themeGet("colors.lightGold")};
  font-family: sans-serif;
`;

export const Button = styled.div`
  text-align: center;
  font-size: 1.5em;
  color: ${themeGet("colors.silver")};
  font-family: sans-serif;
  margin: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;
