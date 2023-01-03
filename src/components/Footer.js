import { useAppContext } from '../hooks/useAppContext';
import { useTheme, Container, Grid, Typography } from '@mui/material';
import logo from "../assets/LOGO-sm.jpg";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const { information } = useAppContext();
  const theme = useTheme();
  return (
    <div style={{backgroundColor: theme.palette.dark.main, marginTop: "2em"}}>
        <Container sx={{opacity: ".95"}}>
            <Grid container pt={1}>
                <Grid item xs={12} sm={4} sx={{filter: "blur(80%)"}} display="flex" justifyContent={{xs: "center", sm:"flex-end"}}><img src={logo} alt="logo-small" height="75px" style={{opacity: ".65"}}/></Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" gutterBottom textAlign={{xs: "left", sm:"center"}} fontWeight="regular" color="background.paper" fontSize={{xs: 13, sm: 16}}>Downtown Suits Direct</Typography>
                    <Typography variant="subtitle2" textAlign={{xs: "left", sm:"center"}} fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>{information.address.address1} {information.address.address2}</Typography>
                    <Typography variant="subtitle2" textAlign={{xs: "left", sm:"center"}} fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>{information.address.city}, {information.address.state} {information.address.zip}</Typography>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Typography variant="subtitle1" gutterBottom textAlign="left" fontWeight="regular" color="background.paper" fontSize={{xs: 13, sm: 16}}>Contact</Typography>
                    <Typography variant="subtitle2" textAlign="left" fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>
                        <PhoneIcon sx={{mr: {xs: 0, sm: 1}, fontSize: {xs: 12, sm: 16}}} style={{verticalAlign:"middle"}}/> {information.phone}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="left" fontWeight="light" color="background.paper" fontSize={{xs: 12, sm: 15}}>
                        <EmailIcon sx={{mr: {xs: 0, sm: 1}, fontSize: {xs: 12, sm: 16}}} style={{verticalAlign:"middle"}}/> {information.email}
                    </Typography>           
                </Grid>
                <Grid item xs={12} py={1}>
                    <Typography variant="subtitle2" align='center' fontWeight="light" color="background.paper" fontSize={{xs: 11, sm: 12}} sx={{opacity: ".6"}}>
                        © 2023 Downtown Suits Direct | Pico Rivera, CA. All Rights Reserved.
                    </Typography>
       
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Footer