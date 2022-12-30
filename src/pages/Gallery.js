import Navbar from '../components/Navbar';
import GalleryImages from '../components/GalleryImages';
import Footer from "../components/Footer";
import { Container, Typography } from '@mui/material';
import DocumentHead from "../components/DocumentHead"
const Gallery = () => {
  return <>
    <DocumentHead title="Downtown Suits Direct | Gallery"/>
    <Navbar/>
    <Container sx={{ pt: 5 }}>
      <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>Gallery</Typography>
      <hr/>
    </Container>
    <GalleryImages/>
    <Footer/>
  </>
}

export default Gallery