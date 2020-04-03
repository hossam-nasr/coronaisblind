import React from "react";
import FormField from "./components/FormField";
import { Form } from "formik";

const SignUpForm = ({ isSubmitting, errors, formFields }) => (
  <Form>
    {formFields.map(({ label, name, type, note, options }) => (
      <FormField
        key={name}
        label={label}
        name={name}
        type={type}
        note={note}
        options={options}
      />
    ))}
    <button
      type="submit"
      disabled={isSubmitting || Object.keys(errors).length}
      className="btn btn-primary"
    >
      Submit
    </button>
  </Form>
);

export default SignUpForm;
