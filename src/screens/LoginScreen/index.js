import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { UserContext } from "../../Auth.js";
import app from "../../firebase";
import LoginForm from "./components/LoginForm";
import formFields from "./formFields";
import { Formik } from "formik";
import { Login, Container, ErrorMessage } from "./styles";
import { Header } from "../../components/Header";

const LoginScreen = ({ history }) => {
  const { currentUser } = useContext(UserContext);
  const [serverError, setServerError] = useState(null);

  const handleLogin = useCallback(
    async ({ email, password }, { setSubmitting }) => {
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        setSubmitting(false);
      } catch (error) {
        window.scrollTo(0, 0);
        setServerError(error.message);
        console.error("Error: ", error.message);
      }
    },
    [history]
  );

  const validateForm = useCallback(({ email, password }) => {
    const errors = {};
    if (!email) {
      errors.email = "Required";
    }
    if (!password) {
      errors.password = "Required";
    }
    return errors;
  }, []);

  const initialValues = {};
  formFields.map(({ name, initialValue }) => {
    initialValues[name] = initialValue;
  });

  if (currentUser) {
    console.log("Already Logged In");
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Login>
        <Header title="Login!" />
        {serverError && <ErrorMessage>Error: {serverError}</ErrorMessage>}
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors }) => (
            <LoginForm
              isSubmitting={isSubmitting}
              errors={errors}
              formFields={formFields}
            />
          )}
        </Formik>
      </Login>
    </Container>
  );
};

export default withRouter(LoginScreen);
