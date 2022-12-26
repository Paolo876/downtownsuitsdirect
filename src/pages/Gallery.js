import React from 'react'
import Navbar from '../components/Navbar'
import { Container, Typography } from '@mui/material';
import { useDocument } from '../hooks/useDocuments';

const Gallery = () => {
  const { document, isLoading } = useDocument("store-data", "gallery")
  console.log(document)

  if(!isLoading && document) return (
    <>
        <Navbar/>
          <Container sx={{ py: {xs: 2, md:5} }}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.45em", md: "1.8em"}}>Gallery</Typography>
            <hr/>
          </Container>
    </>
  )
}

export default Gallery