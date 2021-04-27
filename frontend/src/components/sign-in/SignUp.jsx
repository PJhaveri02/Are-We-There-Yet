import React, { useState } from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { app } from '../../App';
<<<<<<< HEAD

// Helper function to determine if email and password are correct
const userRegistration = async (email, password, setEmailError, setPasswordError) => {
=======
import { useHistory } from 'react-router';

// Helper function to determine if email and password are correct
const userRegistration = async (email, password, setEmailError, setPasswordError, history) => {
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
  if (email.length < 6 || email.length > 128 || password.length < 6 || password.length > 128) {
    setEmailError(true);
    setPasswordError(true);
    return;
  }

  try {
    await app.emailPasswordAuth.registerUser(email, password);
<<<<<<< HEAD
=======
    history.push('/');
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
    setEmailError(false);
    setPasswordError(false);
  } catch {
    setEmailError(true);
    setPasswordError(true);
  }
};

<<<<<<< HEAD
const SignUp = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
=======
const handleRedirectToLoginPage = (history) => {
  history.push('/');
};

const SignUp = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useHistory();
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
<<<<<<< HEAD
          //   app.emailPasswordAuth.registerUser(values.email, values.password);
          userRegistration(values.email, values.password, setEmailError, setPasswordError);
=======
          userRegistration(values.email, values.password, setEmailError, setPasswordError, history);
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
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
<<<<<<< HEAD
=======
            <Button variant='contained' onClick={() => handleRedirectToLoginPage(history)}>
              Login
            </Button>
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
