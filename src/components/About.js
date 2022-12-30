import { useAppContext } from '../hooks/useAppContext';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material'
import { IKImage } from 'imagekitio-react';
import PrimaryButton from './PrimaryButton';

const About = () => {
  const { imagekitKeys, information } = useAppContext();
  return (
    <Container sx={{ py: {xs: 2, md:5} }}>
        <Grid container spacing={4} sx={{ mt:2 }} justifyContent="center" alignItems={"flex-start"}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">The Store</Typography>
                <hr/>
            </Grid>

            <Grid item xs={12} sm={6} sx={{mb: 2, display: "flex", justifyContent: {xs: "center", md: "flex-end"} }}>
              <IKImage urlEndpoint={imagekitKeys.urlEndpoint} src={information["store-image"]} transformation={[{ height: 280, width: 380 }]} data-aos="zoom-out" />
            </Grid>
            <Grid item xs={12} sm={6} sx={{letterSpacing: ".1em", mb: 2, fontSize: {xs: 13, md: 15}}}>
                <Typography variant="body2" gutterBottom align='left' fontWeight="light" fontSize="1em" data-aos="fade" data-aos-delay="200">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Laborum rem id nulla velit quaerat praesentium a nisi. \
                    Ab accusantium neque facilis aut amet autem assumenda ex dignissimos, 
                    dolorem atque quisquam doloremque sequi, unde, iste quia temporibus minus consectetur. 
                    Quidem impedit excepturi iste cumque distinctio eligendi facere delectus aspernatur illum praesentium.
                </Typography>
                <PrimaryButton component={Link} variant="outlined" color="secondary" size="large" to="/about" sx={{mt: 4}}>Read more about the store</PrimaryButton>
            </Grid>
        </Grid>
    </Container>
  )
}

export default About