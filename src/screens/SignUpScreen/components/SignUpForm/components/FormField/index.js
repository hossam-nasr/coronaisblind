import React from "react";
import Option from "./components/Option";
import { ErrorMessageText, InputClass } from "./styles";
import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <div>
    <h4>{label}</h4>
      {type !== "checkbox" && type !== "radio" && (
        <Field name={name} type={type} style={InputClass} required />
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
