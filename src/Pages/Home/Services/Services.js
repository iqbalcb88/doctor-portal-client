import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import { Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

const services = [
  {
    name: 'Fluoride Treatment',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, aperiam? Sapiente fuga culpa voluptatibus sint, a tempora, itaque maxime aliquam modi ab officiis totam adipisci nihil possimus nostrum, repellat vel.',
    img: fluride,
  },
  {
    name: 'Cavity Filling',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, aperiam? Sapiente fuga culpa voluptatibus sint, a tempora, itaque maxime aliquam modi ab officiis totam adipisci nihil possimus nostrum, repellat vel.',
    img: cavity,
  },
  {
    name: 'Teeth Whitening',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, aperiam? Sapiente fuga culpa voluptatibus sint, a tempora, itaque maxime aliquam modi ab officiis totam adipisci nihil possimus nostrum, repellat vel.',
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography sx={{ color: 'info.main' }} variant='h6' component='div'>
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 600, my: 2 }}
          variant='h6'
          component='div'
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Service service={service} index={index} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
