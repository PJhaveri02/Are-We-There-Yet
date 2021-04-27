import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
<<<<<<< HEAD
import React from 'react';
import * as Realm from 'realm-web';
import { app } from '../../App';

// Helper function to login user
const login = async (setUser, email, password) => {
  try {
    const user = await app.logIn(Realm.Credentials.emailPassword(email, password));
=======
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
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
    setUser(user);
  } catch (err) {
    console.log('Invalid username/password (status 401)');
  }
};

<<<<<<< HEAD
const LoginPage = ({ setUser }) => {
=======
const handleRoutingToSignUpPage = (history) => {
  history.push('/sign-up');
};

const LoginPage = () => {
  const [, setUser] = useContext(AuthContext);
  const history = useHistory();

>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
<<<<<<< HEAD
          login(setUser, values.email, values.password);
=======
          login(setUser, values.email, values.password, history);
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
<<<<<<< HEAD
=======
            <Button variant='contained' onClick={() => handleRoutingToSignUpPage(history)}>
              Sign Up
            </Button>
>>>>>>> dc90a20338b37393218fcaedece1678f17df5082
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
