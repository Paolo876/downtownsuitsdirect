import React from 'react'
import Navbar from '../components/Navbar'
import { useAppContext } from "../hooks/useAppContext";
import { Container, Typography } from '@mui/material';
const Services = () => {

  return (
    <>
      <Navbar/>
      <Container sx={{ py: 5 }}>
        <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>Services</Typography>
        <hr/>
      </Container>
    </>
  )
}

export default Services