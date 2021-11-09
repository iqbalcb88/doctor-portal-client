import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { typography } from '@mui/system';
const Navigation = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link to='/appointment'>
            <Button color='inherit'>Appointment</Button>
          </Link>
          {user?.email ? (
            <Box>
              <NavLink to=''>
                <Button
                  style={{ textDecoration: 'none', color: 'white' }}
                  color='inherit'
                >
                  {user.displayName}
                </Button>
              </NavLink>
              <NavLink to='dashboard'>
                <Button
                  style={{ textDecoration: 'none', color: 'white' }}
                  color='inherit'
                >
                  DASHBOARD
                </Button>
              </NavLink>
              <NavLink to='/'>
                <Button
                  style={{ textDecoration: 'none', color: 'white' }}
                  onClick={logout}
                  color='inherit'
                >
                  LOGOUT
                </Button>
              </NavLink>
            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: 'none', color: 'white' }}
              to='login'
            >
              <Button color='inherit'>Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
