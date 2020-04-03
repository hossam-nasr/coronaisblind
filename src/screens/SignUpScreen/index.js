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
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              passwordConfirm: "",
              quarantineLocation: "",
              times: [],
              venmo: "",
              gender: "",
              lookingFor: []
            }}
            validate={validateForm}
            onSubmit={handleSignUp}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <div className="form-group">
                  <label>Email address</label>
                  <Field
                    name="email"
                    type="email"
                    className="form-control"
                    required
                  />
                  <ErrorMessage name="email" component={ErrorMessageText} />
                  <small id="emailHelp" className="form-text text-muted">
                    Please use your college email, so we can be sure that only
                    college students participate in this experience. We'll never
                    share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="form-control"
                    required
                  />
                  <ErrorMessage name="firstName" component={ErrorMessageText} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="form-control"
                    required
                  />
                  <ErrorMessage name="lastName" component={ErrorMessageText} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    required
                  />
                  <ErrorMessage name="password" component={ErrorMessageText} />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <Field
                    name="passwordConfirm"
                    type="password"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component={ErrorMessageText}
                  />
                </div>
                <div className="form-group">
                  <label>
                    If you could be quarantined anywhere in the world, where
                    would it be?
                  </label>
                  <Field
                    name="quarantineLocation"
                    type="text"
                    className="form-control"
                    required
                  />
                  <ErrorMessage
                    name="quarantineLocation"
                    component={ErrorMessageText}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Select all EDT (East Coast) times that work for you
                  </label>
                  <small id="timesHelp" className="form-text text-muted">
                    We will try to schedule the calls for the same time every
                    day
                  </small>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="11am" />
                      11am
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="12pm" />
                      Noon
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="1pm" />
                      1pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="2pm" />
                      2pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="3pm" />
                      3pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="4pm" />
                      4pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="5pm" />
                      5pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="6pm" />
                      6pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="7pm" />
                      7pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="8pm" />
                      8pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="9pm" />
                      9pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="10pm" />
                      10pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="11pm" />
                      11pm
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="12am" />
                      Midnight
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="times" value="1am" />
                      1am
                    </label>
                  </div>
                  <ErrorMessage name="times" component={ErrorMessageText} />
                </div>

                <div className="form-group">
                  <label>Your Venmo</label>
                  <Field
                    name="venmo"
                    type="text"
                    className="form-control"
                    required
                  />
                  <ErrorMessage name="venmo" component={ErrorMessageText} />
                  <small id="venmoHelp" className="form-text text-muted">
                    Please Venmo $15 to @collegequarantine to help run this
                    experience. Let us know if this cost is a financial burden
                    for you. We will be donating 50% of this cost to provide aid
                    to coronavirus patients and medical workers.
                  </small>
                </div>
                <div className="form-group">
                  <label>I am...</label>
                  <div className="radio">
                    <label>
                      <Field type="radio" name="gender" value="male" />
                      Male
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <Field type="radio" name="gender" value="female" />
                      Female
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <Field type="radio" name="gender" value="other" />
                      Other
                    </label>
                  </div>
                  <ErrorMessage name="gender" component={ErrorMessageText} />
                </div>
                <div className="form-group">
                  <label>I am interested in talking to people who are...</label>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="lookingFor" value="male" />
                      Male
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="lookingFor" value="female" />
                      Female
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <Field type="checkbox" name="lookingFor" value="other" />
                      Other
                    </label>
                  </div>
                  <ErrorMessage
                    name="lookingFor"
                    component={ErrorMessageText}
                  />
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
