import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Fade, Typography } from '@mui/material';
import "./Navbar.scss";
import logo from "../assets/LOGO.png";
import { useAppContext } from '../hooks/useAppContext';

const pages = [
  { name: "home", url: "/" },
  { name: "gallery", url: "/gallery" },
  { name: "services", url: "/services" },
  { name: "about", url: "/about" },
  { name: "contact", url: "/contact" },
];

const Navbar = ({ isAdmin=false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { information } = useAppContext()
  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "column", height: isAdmin ? 250 : 350, alignItems:"center", justifyContent: "center"}}>
          {isAdmin ? 
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "flex-start",flexDirection: "column"}}>
            <Typography color="white" variant="h1" mt={3} fontSize={{xs: 35, sm: 50}}>-ADMIN-</Typography>
            <Typography color="white" variant="body1" mt={2} align="center" lineHeight={1.5} fontSize={{xs: 14, sm: 16}}>
              This page is reserved for the rightful owner of this site, {information.name}.<br/>
              Please redirect back to the available pages below if you are not an admin of this site.
            </Typography>
          </Box>
          :
          <Fade in={true} timeout={{enter: 1200}} sx={{transitionDelay: 5000}}>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end"}}><Button href="/"><img src={logo} className="logo"/></Button></Box>
          </Fade>}
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", gap: 0, alignItems:"flex-end"}} id="links-container">
            {pages.map((page) => (
              <div key={page.name} style={{ borderBottom: `2px solid ${ pathname === page.url ? "#af6f34" : "transparent" }` }}>
                <Button key={page.name} onClick={() => navigate(page.url)} sx={{ mt: 2, mb: 1, color: 'white', display: 'block'}}>
                  {page.name}
                </Button>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
