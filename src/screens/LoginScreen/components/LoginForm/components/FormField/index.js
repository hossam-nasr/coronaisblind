import React from "react";
import { ErrorMessageText, Hakl } from "./styles";
import { ErrorMessage } from "formik";

const FormField = ({ label, name, type, note, options }) => (
  <div>
    <h4>{label}</h4>
    <Hakl name={name} type={type} required />
    <ErrorMessage name={name} component={ErrorMessageText} />
    {note && <small>{note}</small>}
  </div>
);

export default FormField;
