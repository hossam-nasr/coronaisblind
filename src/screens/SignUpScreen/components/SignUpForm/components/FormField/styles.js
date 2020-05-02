import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Field } from "formik";

export const ErrorMessageText = styled.small`
  font-size: 11px;
  color: ${themeGet("colors.error")};
  display: block;
`;

export const Hakl = styled(Field)`
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  display: block;
  width: 100%;
  border: none;
  background-color: ${themeGet("colors.tertiary")};
  border-radius: 5vh;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-family: ${themeGet("fonts.gravity.regular")};
  font-size: 20px;
`;

export const Container = styled.div`
  font-family: ${themeGet("fonts.gravity.regular")};
  margin-bottom: 20px;
`;

export const Note = styled.small`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  color: ${themeGet("colors.beige")};
  line-height: 18px;
`;
