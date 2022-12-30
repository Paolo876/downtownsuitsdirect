import React from 'react'
import Navbar from '../components/Navbar'
import DocumentHead from '../components/DocumentHead';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <DocumentHead title="Downtown Suits Direct | About"/>
      <Navbar/>
      <Container sx={{ py: 5 }}>
        <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>About</Typography>
        <hr/>
      </Container>
    </>
  )
}

export default About