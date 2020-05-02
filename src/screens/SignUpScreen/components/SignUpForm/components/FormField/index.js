import React from "react";
import Option from "./components/Option";
import {
  ErrorMessageText,
  Hakl,
  Title,
  TitleContainer,
  Container,
  Note
} from "./styles";
import { ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <Container>
    <TitleContainer>
      <Title>{label}</Title>
      {note && <Note>{note}</Note>}
    </TitleContainer>

    {type !== "checkbox" && type !== "radio" && (
      <Hakl name={name} type={type} required />
    )}
    <ErrorMessage name={name} component={ErrorMessageText} />
    {options &&
      options.map(({ label, value }) => (
        <Option
          key={value}
          type={type}
          name={name}
          label={label}
          value={value}
        />
      ))}
  </Container>
);

export default FormField;
