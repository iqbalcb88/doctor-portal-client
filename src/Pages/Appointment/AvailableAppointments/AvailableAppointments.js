import { Alert, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Bookings from '../Bookins/Bookings';
const bookings = [
  { id: 101, name: 'Teeth Orthodontics', time: '8:00am - 9:00am', spaces: 10 },
  {
    id: 102,
    name: 'Cosmetics Dentistry',
    time: '9:00am - 10:00am',
    spaces: 10,
  },
  { id: 103, name: 'Teeth Cleaning', time: '8:00am - 9:00am', spaces: 10 },
  { id: 104, name: 'Cavity Protection', time: '8:00am - 9:00am', spaces: 10 },
  { id: 105, name: 'Teeth Orthodontics', time: '8:00am - 9:00am', spaces: 10 },
  { id: 106, name: 'Teeth Orthodontics', time: '8:00am - 9:00am', spaces: 10 },
];
const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  return (
    <div>
      {bookingSuccess ? (
        <Alert severity='success'>Appointment Booked Successfully!</Alert>
      ) : (
        <Typography
          variant='h4'
          sx={{
            color: 'info.main',
            fontWeight: 600,
            textAlign: 'center',
            my: 4,
          }}
        >
          Available Appointments on {date.toDateString()}
        </Typography>
      )}

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Bookings
            setBookingSuccess={setBookingSuccess}
            date={date}
            key={booking.id}
            booking={booking}
          />
        ))}
      </Grid>
    </div>
  );
};

export default AvailableAppointments;
