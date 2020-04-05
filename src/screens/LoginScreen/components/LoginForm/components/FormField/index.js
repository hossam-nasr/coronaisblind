import React from "react";
import { ErrorMessageText, InputClass } from "./styles";
import { Field, ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <div>
    <h4>{label}</h4>
    <Field name={name} type={type} style={InputClass} required />
    <ErrorMessage name={name} component={ErrorMessageText} />
    {note && <small>{note}</small>}
  </div>
);

export default FormField;
