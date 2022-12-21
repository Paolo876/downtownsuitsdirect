import React, { useEffect} from 'react';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import { useNavigate } from 'react-router-dom';
import { useDocument } from '../hooks/useDocuments';
import { Container, Grid, Button, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import axios from 'axios';
// import "./StoreInformation.scss";

const StoreInformation = () => {
  const { document, error, isLoading } = useDocument("store-data", "information");
  const navigate = useNavigate();

  useEffect(() => {
    const helloWorld = httpsCallable(functions, "yelpReviews")
    helloWorld().then((res) => console.log(JSON.parse(res.data)))
  
  }, [])

  const fetchData = () => {

    axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/3QnqtIIX1mE9X9tcvKs1gA/reviews?limit=20&sort_by=yelp_sort'", {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            mode: 'no-cors',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: "Bearer IHSfnqhM8PvMe5q2KvGsAJobDoRZcLOTIBtNEmQnsRtakPwDNBMeKXjm9QvEBEI2b9FHextR4VxnKQFTmbmYlEPG6Yxia-B4tjvFYenFawN9zAXW2Ae1CJ_F222hY3Yx"
        }
    }).then(res => console.log(res.data))
  }
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
                        <Button  variant='outlined' color='secondary' fontWeight="regular" sx={{py: 1, px:3}}><CalendarMonthIcon sx={{mr: 1}} fontSize="medium"/>Schedule Appointment</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Address:</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            {document.address.address1} {document.address.address2}
                        </Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            {document.address.city}, {document.address.state} {document.address.zip}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:{xs: 1, md: 5}}} >
                        <Button variant='outlined' color='secondary' fontWeight="regular" href={document.address.googleMapUrl} sx={{py: 1, px:3}}><PlaceIcon sx={{mr: 1}} fontSize="medium"/> Get Directions</Button>
                        <Button variant='outlined' color='secondary' fontWeight="regular" onClick={() => fetchData()} sx={{py: 1, px:3}}>FETCH</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Hours:</Typography>
                <List sx={{width: '100%', maxWidth: 360,}}>
                    {document["store-hours"].map(item => (
                        <ListItem key={item.day} sx={{my:1, p:0}}  alignItems="center" ><ListItemText primary={item.day}/> {item.from} - {item.to}</ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation