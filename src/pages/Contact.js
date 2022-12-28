import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Container, Typography } from '@mui/material'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Container sx={{ pt: 5 }}>
        <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>Contact</Typography>
        <hr/>
      </Container>
      <Footer/>
    </>
  )
}

export default Contact