import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../Auth.js";
import { Login } from "./styles";
import app from "../../firebase";

const LoginScreen = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
      console.log("Already Logged In")
      return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <Login>
        <div className="jumbotron">
          <h2>Login!</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email address</label>
              <input name="email" type="email" className="form-control" />
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
      </Login>
    </div>
  );
};

export default withRouter(LoginScreen);