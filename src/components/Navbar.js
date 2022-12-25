import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Fade} from '@mui/material'
import "./Navbar.scss";
import logo from "../assets/LOGO.png"
const pages = [
  {name: "home", url: "/"},
  {name: "gallery", url: "/gallery"},
  {name: "services", url: "/services"},
  {name: "about", url: "/about"},
  {name: "contact", url: "/contact"},
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "column", height: 350, alignItems:"center", justifyContent: "center"}}>
          <Fade in={true} timeout={{enter: 1200}} sx={{transitionDelay: 5000}}>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end"}}><Button href="/"><img src={logo} className="logo"/></Button></Box>
          </Fade>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", gap: 0, alignItems:"flex-end"}} className="links-container">
            {pages.map((page) => (
              <Button key={page.name} onClick={() => navigate(page.url)} sx={{ mt: 2, mb: 1, color: 'white', display: 'block'}}>
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar