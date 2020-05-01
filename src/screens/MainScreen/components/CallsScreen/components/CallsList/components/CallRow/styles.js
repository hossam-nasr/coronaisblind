import styled from "styled-components";
import { Link } from "react-router-dom";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  font-family: ${themeGet("fonts.textNormal.family")};
  font-weight: ${themeGet("fonts.textNormal.weight")};
  line-height: ${themeGet("fonts.textNormal.lineHeight")};
  letter-spacing: 2px;
  font-size: 1em;
  color: ${themeGet("colors.textSubtitle")};
`;

export const Button = styled.div`
  font-family: ${themeGet("fonts.textNormal.family")};
  font-weight: ${themeGet("fonts.textNormal.weight")};
  letter-spacing: 2px;
  font-size: 1em;
  color: ${themeGet("colors.textSubtitle")};
  text-decoration: none;
  background: ${themeGet("colors.quaternary")};
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 18px;
`;

export const StyledLink = styled.a`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const StyledRouterLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
