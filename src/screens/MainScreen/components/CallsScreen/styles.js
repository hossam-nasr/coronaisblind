import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Title = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.title.size")};
  font-family: ${themeGet("fonts.title.family")};
  font-weight: ${themeGet("fonts.title.weight")};
  line-height: ${themeGet("fonts.title.lineHeight")};
  letter-spacing: ${themeGet("fonts.title.letterSpacing")};
  color: ${themeGet("colors.textTitle")};
  padding: 5vh 0;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-family: ${themeGet("fonts.gravity.regular")};
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 3px;
  color: ${themeGet("colors.textSubtitle")};
`;

export const SubSubTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-family: ${themeGet("fonts.gravity.lightItalic")};
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 3px;
  color: ${themeGet("colors.textSubtitle")};
`;

export const CallListContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`;
