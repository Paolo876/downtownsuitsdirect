import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material'
import { IKImage } from 'imagekitio-react';
import PrimaryButton from './PrimaryButton';

const About = ({ storeImage, imagekitKeys }) => {
  return (
    <Container sx={{ py: 5 }}>
        <Grid container spacing={2} sx={{ mt:2 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">The Store</Typography>
                <hr/>
            </Grid>

            <Grid item xs={12} md={6} sx={{mb: 2}}>
              <IKImage urlEndpoint={imagekitKeys.urlEndpoint} src={storeImage} transformation={[{ height: 280, width: 400 }]}/>
            </Grid>
            <Grid item xs={12} md={6} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="body2" gutterBottom align='center' fontWeight="light" fontSize="1em">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum rem id nulla velit quaerat praesentium a nisi. \
                    Ab accusantium neque facilis aut amet autem assumenda ex dignissimos, 
                    dolorem atque quisquam doloremque sequi, unde, iste quia temporibus minus consectetur. 
                    Quidem impedit excepturi iste cumque distinctio eligendi facere delectus aspernatur illum praesentium.
                </Typography>
                <Link variant="outlined" color="secondary" size="large" to="/about" >asdasdsd</Link>
            </Grid>
        </Grid>
    </Container>
  )
}

export default About