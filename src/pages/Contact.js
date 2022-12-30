import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Container, Typography, Grid, Paper } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import ContactForm from '../components/ContactForm';
import DocumentHead from '../components/DocumentHead';

const Contact = () => {
  const { information } = useAppContext();
  return (
    <>
      <DocumentHead title="Downtown Suits Direct | Contact"/>
      <Navbar/>
      <Container sx={{ py: 5 }}>
        <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>Contact</Typography>
        <hr/>
        <Typography variant="body1" gutterBottom align='center' fontWeight="light" my={2} lineHeight={1.5} px={{xs: 1, md:20}} sx={{fontSize: { xs: 13,sm: 16}}}>
          You can reach me using the contact informations provided or by submitting the inquiry form below.<br/>I'm looking forward to hear from you and I'd be happy to answer any questions and inquiries.
        </Typography>
        <Grid container my={6}>
          <Grid item xs={12} sm={4} align="center" data-aos="fade">
            <Paper  sx={{display: "flex", flexDirection: {xs: "row", sm:"column"}, alignItems: "center", textAlign: {xs: "left", sm: "center"},justifyContent: {xs: "left",sm:"space-between"}, width: { xs: "100%", sm:200}, height: {xs: 100, sm: 160}, p:2, my: 1}}>
              <PlaceIcon sx={{fontSize: "2.5em", mx: 3}}/>
              <div>
                <Typography variant="h5" fontWeight="regular" color="textPrimary" mt={1}>Store address</Typography>
                <Typography paragraph fontWeight="regular" color="textSecondary" my={0} mt={1}>{information.address.address1} {information.address.address2}</Typography>
                <Typography paragraph fontWeight="regular" color="textSecondary" my={1}>{information.address.city}, {information.address.state} {information.address.zip}</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} align="center" data-aos="fade">
            <Paper  sx={{display: "flex", flexDirection: {xs: "row", sm:"column"}, alignItems: "center", textAlign: {xs: "left", sm: "center"},justifyContent: {xs: "left",sm:"space-between"}, width: { xs: "100%", sm:200}, height: {xs: 100, sm: 160}, p:2, my: 1}}>
              <PhoneIcon sx={{fontSize: "2.5em", mx: 3}}/>
              <div>
                <Typography variant="h5" gutterBottom fontWeight="regular" color="textPrimary" mt={1}>{information.name}</Typography>
                <Typography paragraph fontWeight="regular" color="textSecondary" my={1}>{information.phone}</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} align="center" data-aos="fade">
            <Paper  sx={{display: "flex", flexDirection: {xs: "row", sm:"column"}, alignItems: "center", textAlign: {xs: "left", sm: "center"},justifyContent: {xs: "left",sm:"space-between"}, width: { xs: "100%", sm:200}, height: {xs: 100, sm: 160}, p:2, my: 1}}>
              <EmailIcon sx={{fontSize: "2.5em", mx: 3}}/>
              <div>
                <Typography variant="h5" gutterBottom fontWeight="regular" color="textPrimary" mt={1}>E-mail</Typography>
                <Typography paragraph fontWeight="regular" color="textSecondary" my={1}>{information.email}</Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <ContactForm/>
      </Container>
      <Footer/>
    </>
  )
}

export default Contact