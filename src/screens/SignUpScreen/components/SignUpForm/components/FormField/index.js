import React from "react";
import Option from "./components/Option";
import { ErrorMessageText, Hakl } from "./styles";
import { ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <div>
    <h4>{label}</h4>
      {type !== "checkbox" && type !== "radio" && (
        <Hakl name={name} type={type} required />
      )}
    <ErrorMessage name={name} component={ErrorMessageText} />
    {note && <small>{note}</small>}
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
  </div>
);

export default FormField;
