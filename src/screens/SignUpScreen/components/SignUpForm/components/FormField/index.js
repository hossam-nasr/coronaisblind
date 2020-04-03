import React from "react";
import Option from "./components/Option";
import { ErrorMessageText } from "./styles";
import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <div className="form-group">
    <label>{label}</label>
    {type !== "checkbox" && type !== "radio" && (
      <Field name={name} type={type} className="form-control" required />
    )}
    <ErrorMessage name={name} component={ErrorMessageText} />
    {note && <small className="form-text text-muted">{note}</small>}
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
