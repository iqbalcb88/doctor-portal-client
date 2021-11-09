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
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    // console.log(field, value);
    // console.log(newLoginData);
  };
  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      // show using popup or toast
      alert('Password did not Matched');
      e.preventDefault();
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8, textAlign: 'center' }} xs={12} md={6}>
          <Typography variant='body1' gutterBottom>
            Please Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: '75%' }}
                name='name'
                onBlur={handleOnBlur}
                id='standard-basic'
                label='Your Name'
                type='text'
                variant='standard'
              />
              <TextField
                sx={{ width: '75%' }}
                name='email'
                onBlur={handleOnBlur}
                id='standard-basic'
                label='Email'
                type='email'
                variant='standard'
              />
              <TextField
                sx={{ width: '75%' }}
                name='password'
                onBlur={handleOnBlur}
                id='standard-basic'
                label='Password'
                type='password'
                variant='standard'
              />
              <TextField
                sx={{ width: '75%' }}
                name='password2'
                onBlur={handleOnBlur}
                id='standard-basic'
                label='Confirm Password'
                type='password'
                variant='standard'
              />
              <Button
                type='submit'
                sx={{ width: '75%', mt: 4 }}
                variant='contained'
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: 'none' }} to='/login'>
                <Button variant='text'>Already Registered?Please Login.</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user.email && (
            <Alert severity='success'>User Created Successfully!</Alert>
          )}
          {authError && <Alert severity='error'>{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
