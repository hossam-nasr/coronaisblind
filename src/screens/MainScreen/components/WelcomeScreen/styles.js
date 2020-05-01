import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Image = styled.img`
  width: 48%;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.subtitle.size")};
  font-family: ${themeGet("fonts.subtitle.family")};
  font-weight: ${themeGet("fonts.subtitle.weight")};
  line-height: ${themeGet("fonts.subtitle.lineHeight")};
  letter-spacing: ${themeGet("fonts.subtitle.letterSpacing")};
  color: ${themeGet("colors.textSubtitle")};
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const About = styled.div`
  text-align: center;
  color: ${themeGet("colors.white")};
  font-size: 20px;
  line-height: 30px;
  font-family: ${themeGet("fonts.about")};
  width: 40%;
  padding: 0px 20px 20px 20px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.title.size")};
  font-family: ${themeGet("fonts.title.family")};
  font-weight: ${themeGet("fonts.title.weight")};
  line-height: ${themeGet("fonts.title.lineHeight")};
  letter-spacing: ${themeGet("fonts.title.letterSpacing")};
  color: ${themeGet("colors.textTitle")};
  padding: 5vh 0;
  width: 100%;
  background-color: ${themeGet("colors.white")};
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  min-height: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${themeGet("colors.white")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 5em;
`;
