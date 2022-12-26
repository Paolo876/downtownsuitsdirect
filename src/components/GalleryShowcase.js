import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { Grid, Fade } from '@mui/material';
import generateRandomNumbersFromArray from '../utils/generateRandomNumbersFromArray';
import "./GalleryShowcase.scss";

const checkDevice = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true
  return false
}

const GalleryShowcase = ({ data, imagekitKeys }) => {
  const [ showOverlay, setShowOverlay ] = useState(false);
  const [ images, setImages ] = useState(null)
  const isDeviceMobile = checkDevice()

  useEffect(() => {
    if(!images) setImages(generateRandomNumbersFromArray(data.images.length, window.innerWidth < 500 ? 4 : 6).map(item => data.images[item]))
  }, [images])

  if(images) return (
    <div className='gallery-showcase' onMouseEnter={isDeviceMobile ? null : () => setShowOverlay(true)} onMouseLeave={isDeviceMobile ? null : () => setShowOverlay(false)}>
        <Grid container sx={{mx: "auto", width:{xs: "auto", md: "1000px"}}} spacing={.5} alignItems="center">
          {images.map(image => (
            <Grid item xs={window.innerWidth < 500 ? 6 :4} key={image} sx={{px: {xs: 0, md:1}}}>
              <IKImage urlEndpoint={imagekitKeys.urlEndpoint} src={image} transformation={[{ height: 200, width: 350 }]}/>
            </Grid>
          ))}
        </Grid>
        <Fade in={isDeviceMobile || showOverlay} timeout={{enter: 800, exit: 500}}>
          <div className='overlay-container'>
              <div className='overlay'>
                <h2>Gallery</h2>
                <Link to="/gallery">Click here to see more photos of the store</Link>
              </div>
          </div>
        </Fade>
    </div>
  )
}

export default GalleryShowcase
