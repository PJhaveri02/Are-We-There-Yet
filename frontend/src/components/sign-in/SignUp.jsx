import React, { useState } from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { app } from '../../App';
import { useHistory } from 'react-router';

// Helper function to determine if email and password are correct
const userRegistration = async (email, password, setEmailError, setPasswordError, history) => {
  if (email.length < 6 || email.length > 128 || password.length < 6 || password.length > 128) {
    setEmailError(true);
    setPasswordError(true);
    return;
  }

  try {
    await app.emailPasswordAuth.registerUser(email, password);
    history.push('/');
    setEmailError(false);
    setPasswordError(false);
  } catch {
    setEmailError(true);
    setPasswordError(true);
  }
};

const handleRedirectToLoginPage = (history) => {
  history.push('/');
};

const SignUp = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          userRegistration(values.email, values.password, setEmailError, setPasswordError, history);
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
              error={emailError}
            />
            <TextField
              label='Password'
              type='password'
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              id='password'
              variant='outlined'
              error={passwordError}
            />
            <Button
              type='submit'
              style={{ backgroundColor: '#1a73e8', color: '#fff' }}
              variant='contained'
            >
              Sign Up
            </Button>
            <Button variant='contained' onClick={() => handleRedirectToLoginPage(history)}>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
