import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../hooks/useDocuments';
import { Container, Grid, Button, Link, List, ListItem, ListItemText } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
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
                        <Button className='action-button' variant='outlined'><CalendarMonthIcon sx={{mr: 1}} fontSize="small"/>Schedule Appointment</Button>
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