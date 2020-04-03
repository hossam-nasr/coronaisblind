import React, { useCallback } from "react";
import { SignUp } from "./styles";
import { signUpUser } from "../../helpers";

const SignUpScreen = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await signUpUser({
          email: email.value,
          password: password.value
        });
      } catch (err) {
        console.error("Error: ", err.message);
      }

      history.push("/");
    },
    [history]
  );

  return (
    <div className="container">
      <SignUp>
        <div className="jumbotron">
          <h2>Sign Up Now!</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label>Email address</label>
              <input name="email" type="email" className="form-control" />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </SignUp>
    </div>
  );
};

export default SignUpScreen;
