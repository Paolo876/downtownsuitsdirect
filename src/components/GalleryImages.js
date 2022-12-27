import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';
import { ImageListItem, ImageList, Modal, Fade, Backdrop, Box } from "@mui/material"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  height: "auto",
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 1,
};
const GalleryImages = ({ imagekitKeys, images }) => {
  const [ showModal, setShowModal ] = useState({isVisible: false, data: null});
  console.log(showModal)
  return (
    <ImageList sx={{ width: 1260, height: "100%", mt: 4, mx: "auto", p:3}} cols={3} rowHeight={320}>
      {images.map( item => <ImageListItem key={item}>
        <button style={{cursor: "pointer", border: "none"}} onClick={() => setShowModal({isVisible: true, data: item})}>
          <IKImage 
            urlEndpoint={imagekitKeys.urlEndpoint} 
            src={item} 
            height="auto"
            width="auto"
            transformation={[{ height: 320, width: 400 }]}
          />
        </button>
      </ImageListItem>)}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal.isVisible}
        onClose={() => setShowModal({ isVisible: false, data: null})}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal.isVisible}>
        <Box sx={style}>
          <img 
                // urlEndpoint={imagekitKeys.urlEndpoint} 
                src={showModal.data} 
                height="100%"
                width="100%"
                style={{maxHeight: "90vh", maxWidth: "90vw"}}
                // transformation={[{ height: 320, width: 400 }]}
              />
        </Box>

        </Fade>
      </Modal>
    </ImageList>
  )
}

export default GalleryImages