import React from "react";
import FormField from "./components/FormField";
import { Form } from "formik";

const LoginForm = ({ isSubmitting, errors, formFields }) => (
  <Form>
    {formFields.map(({ label, name, type }) => (
      <FormField
        key={name}
        label={label}
        name={name}
        type={type}
      />
    ))}
    <button
      type="submit"
      disabled={isSubmitting || Object.keys(errors).length}
      className="btn btn-primary"
    >
      Login
    </button>
  </Form>
);

export default LoginForm;
