import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
  return (
    <div>
        <Container sx={{ py: 4 }}>
        <Grid container spacing={4} sx={{ mt:2 }} justifyContent="center" alignItems={"flex-start"}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">The services i offer</Typography>
                <hr/>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Services