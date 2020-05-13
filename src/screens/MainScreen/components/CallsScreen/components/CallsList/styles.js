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
  font-family: ${themeGet("fonts.gravity.light")};
  line-height: 40px;
  letter-spacing: 4px;
  font-size: 40px;
  font-weight: 300;
  color: ${themeGet("colors.textSubtitle")};
  text-align: center;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const PreviousTitle = styled(Title)`
  margin-top: 40px;
`;

export const CallsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  padding-left: 5vw;
  padding-right: 5vw;
`;
