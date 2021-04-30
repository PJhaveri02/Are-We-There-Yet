import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router';
import { app } from '../../App';

// Helper function to determine if email and password are correct
const userRegistration = async (email, password, history) => {
  if (email.length < 6 || email.length > 128 || password.length < 6 || password.length > 128) {
    alert('Invalid username/password');
    return;
  }

  try {
    await app.emailPasswordAuth.registerUser(email, password);
    history.push('/');
  } catch {
    alert('Invalid username/password');
  }
};

const handleRedirectToLoginPage = (history) => {
  history.push('/');
};

const SignUp = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          userRegistration(values.email, values.password, history);
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
