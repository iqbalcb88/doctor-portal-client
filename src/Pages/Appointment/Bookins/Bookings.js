import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { fontWeight } from '@mui/system';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({ booking, date, setBookingSuccess }) => {
  const { name, time, spaces } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5, textAlign: 'center' }} elevation={3}>
          <Typography
            sx={{ color: 'info.main', fontWeight: 600 }}
            variant='h5'
            gutterBottom
            component='div'
          >
            {name}
          </Typography>
          <Typography variant='h6' gutterBottom component='div'>
            {time}
          </Typography>{' '}
          <Typography variant='caption' display='block' gutterBottom>
            {spaces} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant='contained'>
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        setBookingSuccess={setBookingSuccess}
        date={date}
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
      />
    </>
  );
};

export default Bookings;
