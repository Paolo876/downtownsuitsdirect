import PrimaryButton from './PrimaryButton';
import { Container, Grid, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import yelpIcon from "../assets/yelp_icon.png"
const StoreInformation = ({ data }) => {
  return (
    <Container sx={{ py: 5 }}>
        <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
                <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">Downtown Suits Direct</Typography>
                <hr/>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>{data.name}</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <PhoneIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {data.phone}
                        </Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            <EmailIcon sx={{mr: 1}} style={{verticalAlign:"middle"}}/> {data.email}
                        </Typography>
                        <Typography variant="h6" align='left' fontWeight="regular" color="textPrimary">Social: </Typography>
                        <Button href={data.social.facebook} color='info'><FacebookOutlinedIcon sx={{fontSize: "2.25em"}}/></Button>
                        <Button href={data.social.facebook} color='info'><InstagramIcon sx={{fontSize: "2.25em"}}/></Button>
                        <Button href={data.yelp} color='info'><img src={yelpIcon} style={{height: "48px", padding: "0 1em"}}/></Button>
                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:5}} >
                        <PrimaryButton  variant='outlined' color='secondary' fontWeight="regular">
                            <CalendarMonthIcon sx={{mr: 1}} fontSize="medium"/>Schedule Appointment
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Grid container alignItems={{xs: "flex-start", md: "center"}}>
                    <Grid item xs={6} md={12}>
                        <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Address:</Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            {data.address.address1} {data.address.address2}
                        </Typography>
                        <Typography paragraph align='left' fontWeight="regular" color="textSecondary">
                            {data.address.city}, {data.address.state} {data.address.zip}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={12} sx={{mt:5}} >
                        <PrimaryButton variant='outlined' color='secondary' fontWeight="regular" href={data.address.googleMapUrl}>
                            <PlaceIcon sx={{mr: 1}} fontSize="medium"/> Get Directions
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4} sx={{mt:3}}>
                <Typography variant="h5" gutterBottom align='left' fontWeight="regular" color="textPrimary" mb={2}>Store Hours:</Typography>
                <List sx={{width: '100%', maxWidth: 360, py: 0}} >
                    {data["store-hours"].map(item => (
                        <ListItem key={item.day} sx={{my:1, p:0}}  alignItems="center" ><ListItemText primary={item.day}/> {item.from} - {item.to}</ListItem>
                    ))}
                </List>
            </Grid>
        </Grid>
    </Container>
  )
}

export default StoreInformation