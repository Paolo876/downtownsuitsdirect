import React from 'react'
import { Container, Grid, Typography } from '@mui/material'

const About = ({ storeImage}) => {
    console.log(storeImage)
  return (
    <Container sx={{ my:4 }}>
        <Grid container spacing={2} sx={{ mt:2 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">The Store</Typography>
                <hr/>
            </Grid>
            <Grid item xs={12} s={6} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="body2" gutterBottom align='center' fontWeight="light" fontSize="1em">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum rem id nulla velit quaerat praesentium a nisi. \
                    Ab accusantium neque facilis aut amet autem assumenda ex dignissimos, 
                    dolorem atque quisquam doloremque sequi, unde, iste quia temporibus minus consectetur. 
                    Quidem impedit excepturi iste cumque distinctio eligendi facere delectus aspernatur illum praesentium.
                </Typography>

            </Grid>
        </Grid>
    </Container>
  )
}

export default About