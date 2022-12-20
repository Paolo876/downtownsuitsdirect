import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../hooks/useDocuments';
import { Container, Grid, Button, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
// import "./StoreInformation.scss";
import { useTheme } from '@mui/material/styles';

const StoreInformation = () => {
  const { document, error, isLoading } = useDocument("store-data", "information");
  const theme = useTheme();
  const navigate = useNavigate();
  if(document) return (
    <Container className='store-information'>
        <Grid container spacing={2} sx={{ my:4 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">Downtown Suits Direct</Typography>
                <hr/>
            </Grid>

            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>{document.name}</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <PhoneIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {document.phone}
                        </Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <EmailIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {document.email}
                        </Typography>
                        <Typography variant="h6" align='left' fontWeight="regular" color="textPrimary">Social: </Typography>
                        <Button href={document.social.facebook} color='info'><FacebookOutlinedIcon sx={{fontSize: "2.25em"}}/></Button>
                        <Button href={document.social.facebook} color='info'><InstagramIcon sx={{fontSize: "2.25em"}}/></Button>
                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:{xs: 1, md: 5}}} >
                        <Button  variant='outlined' color='secondary' fontWeight="regular"><CalendarMonthIcon sx={{mr: 1}} fontSize="small"/>Schedule Appointment</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <h3 className='header'>Store Address:</h3>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <p>{document.address.address1} {document.address.address2}</p>
                        <p>{document.address.city}, {document.address.state} {document.address.zip}</p>
                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:{xs: 0, md: 3}}}>
                        <Button href={document.address.googleMapUrl} variant="outlined" className='action-button'>
                            <PlaceIcon sx={{mr: 1}} fontSize="small"/> Get Directions
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <h3 className='header'>Store Hours:</h3>
                <List sx={{px:5, maxWidth: "350px"}}>
                    {document["store-hours"].map(item => (
                        <ListItem key={item.day} sx={{my:0, p:0}} ><ListItemText>{item.day}</ListItemText> {item.from} - {item.to}</ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation