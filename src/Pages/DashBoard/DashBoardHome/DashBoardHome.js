import * as React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointments from '../Appointments/Appointments';

const DashBoardHome = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={7}>
          <Appointments date={date} />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoardHome;
