import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Field } from "formik";

export const Container = styled.div`
  padding: 0px 0px 3px 3px;
`;

export const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  text-align: center;
  margin-right: 100px;
`;

export const Text = styled.div`
  margin-right: 100px;
`;

export const Hakl = styled(Field)`
  margin-right: 10px;
`;
