import React from "react";
import { app } from "../../App";
import * as Realm from "realm-web";

const Login = ({ setUser, email, password }) => {
  const loginEmailPassword = async () => {
    try {
      const user = await app.logIn(
        Realm.Credentials.emailPassword(email, password)
      );
      setUser(user);
    } catch (err) {
      console.log("Invalid username/password (status 401)");
    }
  };
  return <button onClick={loginEmailPassword}>Log in</button>;
};

export default Login;
