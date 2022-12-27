import { Routes, Route } from 'react-router-dom';
import { useAppContext } from './hooks/useAppContext';
import Alert from '@mui/material/Alert';

//pages
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Gallery from './pages/Gallery';

//components
import LoadingPage from './components/LoadingPage';

function App() {
  // if(document.readyState === "complete") console.log("run")
  const { isLoading, error } = useAppContext();
  if(isLoading) return <LoadingPage/>
  if(error) return <Alert severity="error">{error}</Alert>

  return (
    <>
      <Routes>
        {/* <Route element={<Home />} path="/"/> */}
        <Route element={<Gallery />} path="/gallery"/>
        <Route element={<About />} path="/about"/>
        <Route element={<Contact />} path="/contact"/>
        <Route element={<Services />} path="/services"/>
      </Routes>
    </>

  );
}

export default App;
