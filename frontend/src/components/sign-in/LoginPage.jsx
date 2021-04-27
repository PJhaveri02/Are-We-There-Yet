import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import * as Realm from 'realm-web';
import { app, AuthContext } from '../../App';

// Helper function to login user
const login = async (setUser, email, password, history) => {
  try {
    const user = await app.logIn(Realm.Credentials.emailPassword(email, password));
    if (user) {
      history.push('/home');
    }
    setUser(user);
  } catch (err) {
    console.log('Invalid username/password (status 401)');
  }
};

const handleRoutingToSignUpPage = (history) => {
  history.push('/sign-up');
};

const LoginPage = () => {
  const [, setUser] = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          login(setUser, values.email, values.password, history);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <TextField
              label='Email'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              id='email'
              variant='outlined'
            />
            <TextField
              label='Password'
              type='password'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              id='password'
              variant='outlined'
            />
            <Button
              type='submit'
              style={{ backgroundColor: '#1a73e8', color: '#fff' }}
              variant='contained'
            >
              Login
            </Button>
            <Button variant='contained' onClick={() => handleRoutingToSignUpPage(history)}>
              Sign Up
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
