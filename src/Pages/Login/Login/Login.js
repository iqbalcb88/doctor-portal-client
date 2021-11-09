import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
          <Typography variant='body1' gutterBottom>
            Please Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: '75%' }}
              name='email'
              onChange={handleOnchange}
              id='standard-basic'
              label='Email'
              type='email'
              variant='standard'
            />
            <TextField
              sx={{ width: '75%' }}
              name='password'
              onChange={handleOnchange}
              id='standard-basic'
              label='Password'
              type='password'
              variant='standard'
            />
            <Button
              type='submit'
              sx={{ width: '75%', mt: 4 }}
              variant='contained'
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: 'none' }} to='/register'>
              <Button variant='text'>New User?Please Register.</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user.email && (
              <Alert severity='success'>User LoggedIn Successfully!</Alert>
            )}
            {authError && <Alert severity='error'>{authError}</Alert>}
          </form>
          <p>..............................</p>
          <Button onClick={handleGoogleSignIn} variant='contained'>
            Google SignIn
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
