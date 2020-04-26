import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
  display: block;
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
