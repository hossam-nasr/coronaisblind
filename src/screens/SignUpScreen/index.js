import React, { useCallback, useContext, useState, useEffect } from "react";
import SignUpForm from "./components/SignUpForm";
import formFields from "./formFields";
import { Formik } from "formik";
import { SignUp, Container, ErrorMessage } from "./styles";
import { signUpUser } from "../../helpers";
import { Header } from "../../components/Header";
import { SessionContext } from "../../Session";

const SignUpScreen = ({ history }) => {
  const { nextSession } = useContext(SessionContext);
  const [serverError, setServerError] = useState(null);

  const handleSignUp = useCallback(
    async (
      {
        email,
        password,
        firstName,
        lastName,
        venmo,
        gender,
        lookingFor,
        friendEmails
      },
      { setSubmitting }
    ) => {
      try {
        await signUpUser({
          email,
          password,
          firstName,
          lastName,
          venmo,
          gender,
          lookingFor,
          friendEmails,
          session: nextSession
        });
        history.push("/");
      } catch (err) {
        setServerError(err.message);
        window.scrollTo(0, 0);
        console.error("Encountered error signing up: " + err.message);
      }
      setSubmitting(false);
    },
    [history, nextSession, setServerError]
  );

  const validateForm = useCallback(
    ({
      email,
      firstName,
      lastName,
      password,
      gender,
      passwordConfirm,
      venmo,
      lookingFor,
      friendEmails
    }) => {
      const errors = {};

      if (!email) errors.email = "Required";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
        errors.email = "Invalid email address";

      if (!firstName) errors.firstName = "Required";
      if (!lastName) errors.lastName = "Required";
      if (!venmo) errors.venmo = "Required";
      if (!gender) errors.gender = "Required";
      if (lookingFor.length === 0)
        errors.lookingFor = "Must select at least one";
      if (!friendEmails) errors.friendEmails = "Required";

      if (!password) errors.password = "Required";
      else if (password.length < 8)
        errors.password = "Must be 8 characters long";

      if (!passwordConfirm) errors.passwordConfirm = "Required";
      else if (passwordConfirm !== password)
        errors.passwordConfirm = "Passwords do not match";

      return errors;
    },
    []
  );

  const initialValues = {};
  formFields.map(({ name, initialValue }) => {
    initialValues[name] = initialValue;
  });

  useEffect(() => {
    console.log("Here , ", serverError);
    if (serverError) {
      window.scrollTo(0, 0);
    }
  }, [serverError]);

  return (
    <Container>
      <SignUp>
        <Header title="Sign Up Now!"></Header>
        {serverError && <ErrorMessage>Error: {serverError}</ErrorMessage>}
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
