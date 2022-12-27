import React, { useState, useEffect } from 'react'
import { IKImage } from 'imagekitio-react';
import { Modal, Fade, Box, useTheme, Grid } from "@mui/material";
import { useWindowWidth } from '../hooks/useWindowWidth';
const style = {
  position: 'absolute',
  width: "fit-content",
  height: "fit-content",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 25,
  p: 1,
};
const listWidth = (breakpoints) => {
  if(window.innerWidth > breakpoints.lg) return { width: breakpoints.lg, cols: 3, imgWidth: (breakpoints.lg / 3) - 20}
  if(window.innerWidth <= breakpoints.lg && window.innerWidth > breakpoints.md) return { width: breakpoints.md, cols: 3, imgWidth: (breakpoints.md / 3) - 20} 
  if(window.innerWidth <= breakpoints.md && window.innerWidth > breakpoints.sm) return { width: breakpoints.sm, cols: 2, imgWidth: (breakpoints.sm / 2) - 20} 
  if(window.innerWidth <= breakpoints.sm) return { width: window.innerWidth, cols: 2, imgWidth: (window.innerWidth / 2) - 20} 
}

const GalleryImages = ({ imagekitKeys, images }) => {
  const theme = useTheme();
  const width = useWindowWidth();

  const [ showModal, setShowModal ] = useState({isVisible: false, data: null});
  const [ containerWidth, setContainerWidth ] = useState(listWidth(theme.breakpoints.values))

  useEffect(() => {
    setContainerWidth(listWidth(theme.breakpoints.values))
  }, [width])
  
  return (
    <Grid container maxWidth={containerWidth.width} mx="auto" py={4}>
      {images.map( item => <Grid item key={item} xs={6} sm={6} md={4}>
        <button 
          style={{cursor: "pointer", border: "none", background: "none", margin: "5px", 
            width: `${containerWidth.imgWidth}px`
            }} 
            onClick={() => setShowModal({isVisible: true, data: item})}>
          <IKImage 
            urlEndpoint={imagekitKeys.urlEndpoint} 
            src={item} 
            height="auto"
            width="auto"
            transformation={[{ height: 320, width: 400 }]}
            style={{objectFit: "cover", height: "100%", width: "100%"}}
          />
        </button>
      </Grid>)}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal.isVisible}
        onClose={() => setShowModal({ isVisible: false, data: null})}
        closeAfterTransition
      >
        <Fade in={showModal.isVisible}>
          <Box sx={style}>
            <img src={showModal.data} height="auto" width="auto" style={{maxHeight: "80vh", maxWidth: "80vw"}}/>
          </Box>
        </Fade>
      </Modal>
    </Grid>
  )
}

export default GalleryImages