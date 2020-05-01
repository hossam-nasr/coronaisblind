import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Image = styled.img`
  padding: 20px;
  height: 60%;
  width: 60%;
`

export const About = styled.div`
  text-align: center;
  color: ${themeGet("colors.white")};;
  font-size: 17px;
  width: 40%;
  padding: 20px;
`

export const Testimonials = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  min-height: 500px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${themeGet("colors.white")};;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 5em;
`

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

export const WhiteBgTitle = styled.div`
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
`

export const Subtitle = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.subtitle.size")};
  font-family: ${themeGet("fonts.gravity.light")};
  font-weight: ${themeGet("fonts.subtitle.weight")};
  line-height: ${themeGet("fonts.subtitle.lineHeight")};
  letter-spacing: ${themeGet("fonts.subtitle.letterSpacing")};
  color: ${themeGet("colors.textSubtitle")};
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

export const CallListContainer = styled.div`
  margin-top: 30px;
`;
