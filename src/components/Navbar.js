import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button} from '@mui/material'
import "./Navbar.scss";

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
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "column", height:350, alignItems:"center", justifyContent: "center"}}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end"}}><h1>*logo here*</h1></Box>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", gap: 3, alignItems:"flex-end"}}>
            {pages.map((page) => (
              <Button key={page.name} onClick={() => navigate(page.url)} sx={{ mt: 2, mb: 1, color: 'white', display: 'block' }}>
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