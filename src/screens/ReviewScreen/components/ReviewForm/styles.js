import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.title.size")};
  font-family: ${themeGet("fonts.title.family")};
  font-weight: ${themeGet("fonts.title.weight")};
  line-height: ${themeGet("fonts.title.lineHeight")};
  letter-spacing: ${themeGet("fonts.title.letterSpacing")};
  color: ${themeGet("colors.textTitle")};
  padding: 5vh;
`;

export const Subtitle = styled.div`
  text-align: center;
  font-size: ${themeGet("fonts.subtitle.size")};
  font-family: ${themeGet("fonts.subtitle.family")};
  font-weight: ${themeGet("fonts.subtitle.weight")};
  line-height: ${themeGet("fonts.subtitle.lineHeight")};
  letter-spacing: ${themeGet("fonts.subtitle.letterSpacing")};
  color: ${themeGet("colors.textSubtitle")};
  font-style: italic;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
`;
