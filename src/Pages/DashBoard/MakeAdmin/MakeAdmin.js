import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  console.log(typeof email);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.preventDefault();
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch('http://localhost:5000/users/admin', {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Typography>Make Admin</Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: '50%' }}
          id='standard-basic'
          label='Email'
          variant='standard'
          type='email'
          onBlur={handleOnBlur}
        ></TextField>
        <Button variant='contained' type='submit'>
          Make Admin
        </Button>
      </form>
      {success && <Alert severity='success'>Made Admin Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
