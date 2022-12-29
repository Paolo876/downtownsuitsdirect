import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './hooks/useAppContext';
import { Alert, Fade } from '@mui/material';

//components
import LoadingPage from './components/LoadingPage';

//pages
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';


function App() {
  // if(document.readyState === "complete") console.log("run")
  const { isLoading, error } = useAppContext();
  if(isLoading) return <LoadingPage/>
  if(error) return <Alert severity="error">{error}</Alert>

  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Gallery />} path="/gallery"/>
        <Route element={<About />} path="/about"/>
        <Route element={<Contact />} path="/contact"/>
        <Route element={<Services />} path="/services"/>
        <Route element={<Admin />} path="/admin"/>
        <Route element={<Navigate to="/" />} path="*"/>
      </Routes>
    </>

  );
}

export default App;
