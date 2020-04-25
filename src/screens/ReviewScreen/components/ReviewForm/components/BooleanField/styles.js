import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  margin-bottom: 5vh;
`;

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
  display: block;
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  padding-right: 20%;
  padding-left: 20%;
`;
