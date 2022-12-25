import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import { Grid, Typography, Paper, Button, ImageList, ImageListItem, Container, Fade } from '@mui/material';
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import "./GalleryShowcase.scss";
import generateRandomNumbersFromArray from '../utils/generateRandomNumbersFromArray';
const checkDevice = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true
  return false
}

const GalleryShowcase = ({ data }) => {
  // const [ imagekitKeys, setImagekitKeys ] = useState(JSON.parse(localStorage.getItem("imagekitKeys")))
  const [ imagekitKeys, setImagekitKeys ] = useState(null)
  const [ showOverlay, setShowOverlay ] = useState(false);
  const [ images, setImages ] = useState(null)
  const isDeviceMobile = checkDevice()
  useEffect(() => {
    httpsCallable(functions, "getImagekitKeys")().then((res) => {
      setImagekitKeys(res.data)
    })
  }, [])
  useEffect(() => {
    if(!images) setImages(generateRandomNumbersFromArray(data.images.length, window.innerWidth < 769 ? 4 : 6).map(item => data.images[item]))
  }, [images])

  if(images && imagekitKeys) return (
    <div className='gallery-showcase' onMouseEnter={isDeviceMobile ? null : () => setShowOverlay(true)} onMouseLeave={isDeviceMobile ? null : () => setShowOverlay(false)}>
        <Grid container sx={{mx: "auto", width:{xs: "auto", md: "1000px"}}} spacing={.5} alignItems="center">
          {images.map(image => (
            <Grid item xs={window.innerWidth < 769 ? 6 :4} key={image} sx={{px: {xs: 0, md:1}}}>
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
