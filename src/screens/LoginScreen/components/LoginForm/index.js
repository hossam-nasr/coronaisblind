import React from "react";
import FormField from "./components/FormField";
import { Estemara, Button } from "./styles"

const LoginForm = ({ isSubmitting, errors, formFields }) => (
  <Estemara>
    {formFields.map(({ label, name, type }) => (
      <FormField
        key={name}
        label={label}
        name={name}
        type={type}
      />
    ))}
    <Button
      type="submit"
      disabled={isSubmitting || Object.keys(errors).length}
    >
      Login
    </Button>
  </Estemara>
);

export default LoginForm;
