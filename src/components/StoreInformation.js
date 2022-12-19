import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../hooks/useDocuments';
import { Container, Card, CardContent, Grid, Typography, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import "./StoreInformation.scss";

const StoreInformation = () => {
  const { document, error, isLoading } = useDocument("store-data", "information")
  const navigate = useNavigate();

  if(document) return (
    <Container className='store-information'>
        <Grid container spacing={2} sx={{my:4}}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 5}}>
                <h1>Downtown suits direct</h1>
                <hr/>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className='header'><h3>Store address:</h3></div>
                <div className='body'>
                    <p>{document.address.address1} {document.address.address2}</p>
                    <p>{document.address.city}, {document.address.state} {document.address.zip}</p>
                </div>
                <Button variant="outlined"><a href={document.address.googleMapUrl}><PlaceIcon/> Get Directions</a></Button>
            </Grid>
            <Grid item xs={12} md={4}>
                <p>2</p>
            </Grid>
            <Grid item xs={12} md={4}>
                <p>3</p>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation