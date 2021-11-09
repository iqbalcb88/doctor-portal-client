import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <Services />
      <AppointmentBanner />
    </>
  );
};

export default Home;
