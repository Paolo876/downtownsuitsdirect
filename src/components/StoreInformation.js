import { useAppContext } from "../hooks/useAppContext";
import PrimaryButton from './PrimaryButton';
import { Container, Grid, Button, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import yelpIcon from "../assets/yelp_icon.png";

const StoreInformation = () => {
  const { information } = useAppContext();
  console.log(information)
  return (
    <Container sx={{ py: {xs: 2, md:5} }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em"}}>Downtown Suits Direct</Typography>
                <hr/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{mt:3}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>{information.name}</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <PhoneIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {information.phone}
                        </Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <EmailIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {information.email}
                        </Typography>
                        <Typography variant="h6" align='left' fontWeight="regular" color="textPrimary">Social: </Typography>
                        <Paper sx={{background:"none", display: "flex"}} elevation={0}>
                            <Button href={information.social.facebook} color='info'><FacebookOutlinedIcon sx={{fontSize: "2.25em"}}/></Button>
                            <Button href={information.social.facebook} color='info'><InstagramIcon sx={{fontSize: "2.25em"}}/></Button>
                            <Button href={information.yelp} color='info'><img src={yelpIcon} style={{height: "48px", padding: "0 1em"}}/></Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sx={{my:{xs: 3, md:5}}}>
                        <PrimaryButton  variant='outlined' color='secondary' fontWeight="regular">
                            <CalendarMonthIcon sx={{mr: 1}} fontSize="medium"/>Schedule Appointment
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{mt:{xs: 2, md: 3}}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Address:</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            {information.address.address1} {information.address.address2}
                        </Typography>
                        <Typography paragraph align="left" fontWeight="regular" color="textSecondary">
                            {information.address.city}, {information.address.state} {information.address.zip}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{my:{xs: 3, md:5}}}>
                        <PrimaryButton variant='outlined' color='secondary' fontWeight="regular" href={information.address.googleMapUrl}>
                            <PlaceIcon sx={{mr: 1}} fontSize="medium"/> Get Directions
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{my:{xs: 2, md: 3}}}>
                <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Hours:</Typography>
                <List sx={{width: '100%', maxWidth: 380, py: 0, ml: {xs: 0, sm: "3em", md: 0}}} >
                    {information["store-hours"].map(item => (
                        <ListItem key={item.day} sx={{my:{ xs: 1.5, md: 2.5}, p:0 }}  alignItems="center" ><ListItemText primary={item.day}/> {item.from} - {item.to}</ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation