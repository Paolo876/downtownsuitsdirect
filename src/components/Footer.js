import React from 'react'
import { useTheme, Container, Grid, Typography } from '@mui/material';
import logo from "../assets/LOGO-sm.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({ data }) => {
  const theme = useTheme();
  return (
    <div style={{backgroundColor: theme.palette.dark.main}}>
        <Container sx={{opacity: ".95"}}>
            <Grid container pt={1}>
                <Grid item xs={12} sm={4} sx={{filter: "blur(80%)"}} display="flex" justifyContent={{xs: "center", sm:"flex-end"}}><img src={logo} alt="logo-small" height="75px" style={{opacity: ".65"}}/></Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" gutterBottom textAlign={{xs: "left", sm:"center"}} fontWeight="regular" color="background.paper" fontSize={{xs: 13, sm: 16}}>Downtown Suits Direct</Typography>
                    <Typography variant="subtitle2" textAlign={{xs: "left", sm:"center"}} fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>{data.address.address1} {data.address.address2}</Typography>
                    <Typography variant="subtitle2" textAlign={{xs: "left", sm:"center"}} fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>{data.address.city}, {data.address.state} {data.address.zip}</Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" gutterBottom textAlign="left" fontWeight="regular" color="background.paper" fontSize={{xs: 13, sm: 16}}>Contact</Typography>
                    <Typography variant="subtitle2" textAlign="left" fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>
                        <PhoneIcon sx={{mr: {xs: 0, sm: 1}}} style={{verticalAlign:"middle"}} fontSize="small"/> {data.phone}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="left" fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>
                        <EmailIcon sx={{mr: {xs: 0, sm: 1}}} style={{verticalAlign:"middle"}} fontSize="small"/> {data.email}
                    </Typography>           
                </Grid>
                <Grid item xs={12} my={1}>
                    <Typography variant="subtitle2" align='center' fontWeight="light" color="background.paper" fontSize={{xs: 10, sm: 12}} sx={{opacity: ".6"}}>
                        © 2023 Downtown Suits Direct | Pico Rivera, CA. All Rights Reserved.
                    </Typography>
       
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Footer

// {{xs: "right", sm:"left"}}