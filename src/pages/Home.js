import DocumentHead from "../components/DocumentHead"
import GalleryShowcase from '../components/GalleryShowcase';
import Navbar from "../components/Navbar"
import StoreInformation from '../components/StoreInformation'
import YelpReviews from '../components/YelpReviews';
import LoadingPage from '../components/LoadingPage';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {

  return <>
    <DocumentHead title="Downtown Suits Direct | Home"/>
    <Navbar/>
    <StoreInformation/>
    <GalleryShowcase/>
    <About/>
    <Services/>
    <YelpReviews/>
    <Footer/>
  </>
}

export default Home