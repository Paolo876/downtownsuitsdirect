import React, { useState, useEffect } from 'react'
import { IKImage } from 'imagekitio-react';
import { Grid, Typography, Paper, Button, ImageList, ImageListItem, Container } from '@mui/material';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import "./GalleryShowcase.scss";

const GalleryShowcase = ({ data }) => {
  const [ imagekitKeys, setImagekitKeys ] = useState(JSON.parse(localStorage.getItem("imagekitKeys")))
  // useEffect(() => {
  //   httpsCallable(functions, "getImagekitKeys")().then((res) => {
  //     // setImagekitKeys(res.data)
  //   })
  // }, [])
  const images = data.images.slice(0, 6)
  // console.log(images)
  return (
    <div className='gallery-showcase' onMouseEnter={() => console.log("enter")} onMouseLeave={() => console.log("leave")}>
      <Container className='gallery-container'>
        <Grid container sx={{mx: "auto", width: "1000px"}} spacing={.5} alignItems="center">
          {images.map(image => (
            <Grid item xs={4} key={image} sx={{px: 1}}>
              <IKImage
                urlEndpoint={imagekitKeys.urlEndpoint}
                src={image}
                style={{objectFit: "cover", width: "350px", height: "300px"}}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default GalleryShowcase
