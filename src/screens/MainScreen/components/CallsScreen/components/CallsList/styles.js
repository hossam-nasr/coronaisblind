import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  border: 1.5px solid ${themeGet("colors.white")};
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 30px 20px 30px;
  border-radius: 5px;
`;

export const Title = styled.div`
  font-family: ${themeGet("fonts.textNormal.family")};
  font-weight: ${themeGet("fonts.textNormal.weight")};
  line-height: ${themeGet("fonts.textNormal.lineHeight")};
  letter-spacing: ${themeGet("fonts.textNormal.letterSpacing")};
  font-size: 1.5em;
  color: ${themeGet("colors.textSubtitle")};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const CallsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  padding-left: 5vw;
  padding-right: 5vw;
`;
