import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./Services.scss"

const Services = () => {
  return (
    <div className='services'>
        <Container sx={{ py: {xs: 2, md:5} }}>
        <Grid container spacing={4} sx={{ mt:2 }} justifyContent="center" alignItems={"flex-start"}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em" color="background.default">The services i offer</Typography>
                <hr className='invert'/>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Services