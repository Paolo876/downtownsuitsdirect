import React from 'react'
import { useDocument } from '../hooks/useDocuments';
import { Container, Card, CardContent, Grid, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import "./StoreInformation.scss";

const StoreInformation = () => {
  const { document, error, isLoading } = useDocument("store-data", "information")
  

  if(document) return (
    <Container className='store-information'>
        <Grid container spacing={2} sx={{my:4}}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2}}>
                <h1>Downtown suits direct</h1>
                <hr/>
                </Grid>
            <Grid item xs={12} md={4}>
                <p>1</p>
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