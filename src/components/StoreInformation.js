import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../hooks/useDocuments';
import { Container, Card, CardContent, Grid, Typography, Button, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import "./StoreInformation.scss";

const StoreInformation = () => {
  const { document, error, isLoading } = useDocument("store-data", "information")
  const navigate = useNavigate();

  if(document) return (
    <Container className='store-information'>
        <Grid container spacing={2} sx={{ my:4 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <h1>Downtown suits direct</h1>
                <hr/>
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
                <h3 className='header'>Contact:</h3>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <h4 className='header'>{document.name}</h4>
                        <Grid item display="flex" flexDirection="row" alignItems="flex-end" width="fit-content" mb={2}><PhoneIcon sx={{mr: 1}} fontSize="small"/> {document.phone}</Grid>
                        <Grid item display="flex" flexDirection="row" alignItems="flex-end" width="fit-content" mb={2}><EmailIcon sx={{mr: 1}} fontSize="small"/> {document.email}</Grid>
                        <Grid container gap={2} alignItems="flex-start">
                            <p>Social:</p>

                            <Grid item><Link className='link-item'><FacebookOutlinedIcon fontSize='medium'/></Link></Grid>
                            <Grid item><Link className='link-item'><InstagramIcon fontSize='medium'/></Link></Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:{xs: 0, md: 3}}} >
                        <Button className='action-button' variant='outlined'><CalendarMonthIcon sx={{mr: 1}} fontSize="small"/>Schedule an Appointment</Button>
                    </Grid>
                </Grid>
                {/* <div className='body'>
                    <p className='link-item'><strong>{document.name}</strong></p>
                    <p className='link-item'><PhoneIcon/> {document.phone}</p>
                    <Link href={`mailto: ${document.email}`} className='link-item'><EmailIcon/> {document.email}</Link>
                    <Link href={document.social.facebook} className='link-item'><FacebookIcon/> Facebook</Link>
                    <Link href={document.social.instagram} className='link-item'><InstagramIcon/> Instagram</Link>
                </div> */}
                {/* <Button variant="outlined"><CalendarMonthIcon/>Book an Appointment</Button> */}

            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <p>3</p>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation