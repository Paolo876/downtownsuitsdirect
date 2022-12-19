import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button} from '@mui/material'
import "./Navbar.scss";

const pages = [ "about", "services", "contact"];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "column", height:250, alignItems:"center", justifyContent: "center"}}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end"}}><h1>Downtown Suits Direct</h1></Box>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", gap: 4, alignItems:"flex-end"}}>
            {pages.map((page) => (
              <Button key={page} onClick={() => navigate(`/${page}`)} sx={{ mt: 2, mb: 1, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar