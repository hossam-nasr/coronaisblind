import React from "react";
import FormField from "./components/FormField";
import { Estemara, Button } from "./styles"

const SignUpForm = ({ isSubmitting, errors, formFields }) => (
  <Estemara>
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
    <Button
      type="submit"
      disabled={isSubmitting || Object.keys(errors).length}
    >
      Sign Up
    </Button>
  </Estemara>
);

export default SignUpForm;
