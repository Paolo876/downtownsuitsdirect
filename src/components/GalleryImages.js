import React from 'react'
import { IKImage } from 'imagekitio-react';
import { ImageListItem, ImageList } from "@mui/material"

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

const GalleryImages = ({ imagekitKeys, images }) => {
  return (
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >

    </ImageList>
  )
}

export default GalleryImages