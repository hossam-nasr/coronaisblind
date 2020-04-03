import React, { useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUp, ErrorMessageText } from "./styles";
import { signUpUser } from "../../helpers";

const SignUpScreen = ({ history }) => {
  const handleSignUp = useCallback(
    async ({ email, password }, { setSubmitting }) => {
      try {
        await signUpUser({
          email,
          password
        });
      } catch (err) {
        console.error("Error: ", err.message);
      }
      setSubmitting(false);
      history.push("/");
    },
    [history]
  );

  const validateForm = useCallback(({ email, password }) => {
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
    return errors;
  }, []);

  return (
    <div className="container">
      <SignUp>
        <div className="jumbotron">
          <h2>Sign Up Now!</h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={validateForm}
            onSubmit={handleSignUp}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <div className="form-group">
                  <label>Email address</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage name="email" component={ErrorMessageText} />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password" component={ErrorMessageText} />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </SignUp>
    </div>
  );
};

export default SignUpScreen;
