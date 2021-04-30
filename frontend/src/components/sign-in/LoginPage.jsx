import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const [, setUser] = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) => {
            login(setUser, values.email, values.password, history);
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
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                style={{ backgroundColor: '#1a73e8', color: '#fff' }}
                variant='contained'
                fullWidth
                className={classes.submit}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    variant='body2'
                    onClick={() => history.push('/sign-up')}
                    style={{ cursor: 'pointer' }}
                  >
                    {"Don't have an account? Sign Up"}
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

export default LoginPage;
