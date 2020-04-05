import React, { useCallback } from "react";
import SignUpForm from "./components/SignUpForm";
import formFields from "./formFields";
import { Formik } from "formik";
import { SignUp, Container } from "./styles";
import { signUpUser } from "../../helpers";

const SignUpScreen = ({ history }) => {
  const handleSignUp = useCallback(
    async (
      {
        email,
        password,
        firstName,
        lastName,
        quarantineLocation,
        times,
        venmo,
        gender,
        lookingFor
      },
      { setSubmitting }
    ) => {
      try {
        await signUpUser({
          email,
          password,
          firstName,
          lastName,
          quarantineLocation,
          times,
          venmo,
          gender,
          lookingFor
        });
      } catch (err) {
        console.error("Error: ", err.message);
      }
      setSubmitting(false);
      history.push("/");
    },
    [history]
  );

  const validateForm = useCallback(({ email, password, passwordConfirm }) => {
    const errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password) {
      errors.password = "Required";
    } else if (password.length < 8) {
      errors.password = "Must be 8 characters long";
    }
    if(!passwordConfirm)
      errors.passwordConfirm = "Required";
    else if(passwordConfirm !== password)
      errors.passwordConfirm = "Passwords do not match";
    return errors;
  }, []);

  const initialValues = {};
  formFields.map(({ name, initialValue }) => {
    initialValues[name] = initialValue;
  });

  return (
      <Container>
        <SignUp>
            <h2 className="center">Sign Up Now!</h2>
            <Formik
              initialValues={initialValues}
              validate={validateForm}
              onSubmit={handleSignUp}
            >
              {({ isSubmitting, errors }) => (
                <SignUpForm
                  isSubmitting={isSubmitting}
                  errors={errors}
                  formFields={formFields}
                />
              )}
            </Formik>
        </SignUp>
      </Container>
  );
};

export default SignUpScreen;
