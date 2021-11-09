import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { user } = useAuth();
  const { name, time } = booking;
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: '',
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnblur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookSubmit = async (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // console.log(appointment);
    // send to server
    fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
      .then(async (res) => await res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });
    handleBookingClose();
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
              <TextField
                sx={{ width: '90%', m: 1 }}
                label='Visiting Time'
                id='outlined-size-small'
                defaultValue={time}
                disabled
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                onBlur={handleOnblur}
                name='patientName'
                label='Your Name'
                id='outlined-size-small'
                defaultValue={user.displayName}
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                onBlur={handleOnblur}
                name='email'
                label='Your Email'
                id='outlined-size-small'
                defaultValue={user.email}
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                onBlur={handleOnblur}
                name='phone'
                type='tel'
                pattern='[0-9]{5}-[0-9]{6}'
                label='Your Phone Number'
                id='outlined-size-small'
                defaultValue='01995-695139'
                placeholder='01995-695139'
                size='small'
              />
              <TextField
                sx={{ width: '90%', m: 1 }}
                label='Date'
                disabled
                id='outlined-size-small'
                defaultValue={date.toDateString()}
                size='small'
              />
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
