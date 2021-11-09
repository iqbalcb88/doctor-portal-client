import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import aBanner from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';
import { SportsRugbySharp } from '@mui/icons-material';
import { display } from '@mui/system';

const appointmentBg = {
  background: `url(${aBanner})`,
  backgroundColor: `rgba(45, 45, 45, 0.8)`,
  backgroundBlendMode: 'darken,luminosity',
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: '-115px' }}
            src={doctor}
            alt=''
          />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography
              variant='h6'
              sx={{ mb: 2 }}
              style={{ color: '#5ce7ed' }}
            >
              Appointment
            </Typography>
            <Typography variant='h4' sx={{ my: 4 }} style={{ color: 'white' }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant='h6'
              sx={{ mb: 3 }}
              style={{ color: 'white', fontSize: 14, fontWeight: 300 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
              incidunt nihil autem asperiores tempore iste fuga recusandae totam
              distinctio aut! Animi neque sapiente
            </Typography>
            <Button style={{ backgroundColor: '#5ce7ed' }} variant='contained'>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
