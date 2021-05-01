import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            userRegistration(values.email, values.password, history);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              <TextField
                label='Email'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                id='email'
                variant='outlined'
                margin='normal'
                fullWidth
                autoFocus
              />
              <TextField
                label='Password'
                type='password'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                id='password'
                variant='outlined'
                margin='normal'
                fullWidth
                autoFocus
              />
              <Button
                type='submit'
                style={{ backgroundColor: '#1a73e8', color: '#fff' }}
                variant='contained'
                fullWidth
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link
                    variant='body2'
                    onClick={() => history.push('/')}
                    style={{ cursor: 'pointer' }}
                  >
                    {'Already have an account? Sign In'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignUp;
