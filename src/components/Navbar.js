import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Fade, useTheme } from '@mui/material';
import "./Navbar.scss";
import logo from "../assets/LOGO.png";

const pages = [
  { name: "home", url: "/" },
  { name: "gallery", url: "/gallery" },
  { name: "services", url: "/services" },
  { name: "about", url: "/about" },
  { name: "contact", url: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  console.log(theme)
  return (
    <AppBar position="static" className='navbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: "flex", flexDirection: "column", height: 350, alignItems:"center", justifyContent: "center"}}>
          <Fade in={true} timeout={{enter: 1200}} sx={{transitionDelay: 5000}}>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end"}}><Button href="/"><img src={logo} className="logo"/></Button></Box>
          </Fade>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row", gap: 0, alignItems:"flex-end"}} id="links-container">
            {pages.map((page) => (
              <div key={page.name} style={{borderBottom: `2px solid ${ pathname === page.url ? theme.palette.secondary.main : "transparent" }`}}>
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

// borderBottom: `2px solid ${pathname === page.url ? "orange" : "transparent"}`