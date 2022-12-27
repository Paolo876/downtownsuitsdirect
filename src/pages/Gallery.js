import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import LoadingPage from "../components/LoadingPage";
import GalleryImages from '../components/GalleryImages';
import { Container, Typography } from '@mui/material';
import { useDocument } from '../hooks/useDocuments';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

const Gallery = () => {

  const { document, isLoading } = useDocument("store-data", "gallery")
  const [ imagekitKeys, setImagekitKeys ] = useState(null);
  useEffect(() => {
    httpsCallable(functions, "getImagekitKeys")().then((res) => {
      setImagekitKeys(res.data)
    })
  }, [])

  if(isLoading && !imagekitKeys) return <LoadingPage/>
  if(!isLoading && document && imagekitKeys) return (
    <>
        <Navbar/>
          <Container sx={{ pt: 5 }}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em" }}>Gallery</Typography>
            <hr/>
          </Container>
          <GalleryImages imagekitKeys={imagekitKeys} images={document.images}/>
    </>
  )
}

export default Gallery