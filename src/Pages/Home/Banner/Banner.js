import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const backgroundBg = {
  backgroundImage: `url(${bg})`,
  height: 500,
};
const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 500,
  // border: '1px solid gray',
};
const Banner = () => {
  return (
    <Container style={backgroundBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: 'left' }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant='h3'>Your New Smile Start Here</Typography>
            <Typography
              sx={{ fontSize: 13, color: 'grey', fontWeight: 300, my: 5 }}
              variant='h6'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis dicta cumque maiores qui, recusandae culpa dignissimos
              illo quos modi quibusdam.
            </Typography>
            <Button style={{ backgroundColor: '#5ce7ed' }} variant='contained'>
              GetAppointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: 400 }} src={chair} alt='' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
