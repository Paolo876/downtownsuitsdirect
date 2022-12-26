import React from 'react'
import { IKImage } from 'imagekitio-react';
import { ImageListItem, ImageList } from "@mui/material"

const GalleryImages = ({ imagekitKeys, images }) => {
  return (
    <ImageList sx={{ width: 1260, height: "100%", mt: 4, mx: "auto", p:3}} cols={3} rowHeight={320}>
        {images.map( item => <ImageListItem key={item}>
            <button style={{cursor: "pointer", border: "none"}} onClick={() => console.log("ASD")}>
            <IKImage 
                urlEndpoint={imagekitKeys.urlEndpoint} 
                src={item} 
                height="auto"
                width="auto"
                transformation={[{ height: 320, width: 400 }]}
            /></button>
        </ImageListItem>)}

    </ImageList>
  )
}

export default GalleryImages