import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth.js";
import app from "../../firebase";
import LoginForm from "./components/SignUpForm";
import formFields from "./formFields";
import { Formik } from "formik";
import { Login, Container } from "./styles";

const LoginScreen = ({ history }) => {
  const handleLogin = useCallback(
    async (
      {
        email,
        password,
      },
      { setSubmitting }
    ) => {
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email, password);
        setSubmitting(false);
        history.push("/");
      } catch (error) {
        console.log(error);
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

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log("Already Logged In");
    return <Redirect to="/" />;
  }

  return (
      <Container>
        <Login>
            <h2 className="center">Login!</h2>
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
