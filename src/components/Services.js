import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryButton from './PrimaryButton'
import { useTheme } from '@emotion/react'
import { Container, Grid, Typography } from '@mui/material'
import "./Services.scss"

const Services = () => {
  const theme = useTheme();
  return (
    <div className='services'>
        <Container sx={{ py: {xs: 2, md:5} }}>
        <Grid container spacing={4} sx={{ mt:2 }} justifyContent="center" alignItems={"flex-start"}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em" color="background.default">my services</Typography>
                <hr className='invert'/>
            </Grid>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <PrimaryButton component={Link} variant="outlined" color="secondary" size="large" to="/services" sx={{mt: 4}}>See all the services I offer</PrimaryButton>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Services