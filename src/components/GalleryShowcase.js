import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { Grid, Typography, Paper, Button, ImageList, ImageListItem, Container, Fade } from '@mui/material';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import "./GalleryShowcase.scss";

const checkDevice = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true
  return false
}

const GalleryShowcase = ({ data }) => {
  const [ imagekitKeys, setImagekitKeys ] = useState(JSON.parse(localStorage.getItem("imagekitKeys")))
  const [ showOverlay, setShowOverlay ] = useState(false);
  const isDeviceMobile = checkDevice()
  // useEffect(() => {
  //   httpsCallable(functions, "getImagekitKeys")().then((res) => {
  //     // setImagekitKeys(res.data)
  //   })
  // }, [])
  const images = data.images.slice(0, 6)
  return (
    <div className='gallery-showcase' onMouseEnter={isDeviceMobile ? null : () => setShowOverlay(true)} onMouseLeave={isDeviceMobile ? null : () => setShowOverlay(false)}>
      <div className='gallery-container' >
        <Grid container sx={{mx: "auto", width:{xs: "auto", md: "1000px"}}} spacing={.5} alignItems="center">
          {images.map(image => (
            <Grid item xs={4} key={image} sx={{px: {xs: 0, md:1}}}>
              <IKImage urlEndpoint={imagekitKeys.urlEndpoint} src={image}/>
            </Grid>
          ))}
        </Grid>
        <Fade in={isDeviceMobile || showOverlay} timeout={{enter: 800, exit: 500}}>
          <div className='overlay-container'>
              <div className='overlay'>
                {/* <Typography Typography variant="h2" align='center' fontWeight="regular" fontSize="1.8em" mb={5}>Gallery</Typography> */}
                <h2>Gallery</h2>
                <hr/>
                <Link to="/gallery">Click here to see more photos of the store</Link>
                <hr/>
                {/* <Typography Typography variant="body2" align='center' fontWeight="light" fontSize="1.5em" mb={8}>See more photos of the store at the gallery page.</Typography> */}
                {/* <PrimaryButton variant="outlined" color="secondary" size="large" href="/gallery">Click here to see more photos of the store</PrimaryButton> */}
              </div>
          </div>
        </Fade>

      </div>
    </div>
  )
}

export default GalleryShowcase
