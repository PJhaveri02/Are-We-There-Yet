import { Formik } from "formik";
import React from "react";
import * as Realm from "realm-web";
import { app } from "../../App";

// Helper function to login user
const login = async (setUser, email, password) => {
  try {
    const user = await app.logIn(
      Realm.Credentials.emailPassword(email, password)
    );
    setUser(user);
  } catch (err) {
    console.log("Invalid username/password (status 401)");
  }
};

const LoginPage = ({ setUser }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          login(setUser, values.email, values.password);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              name="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
