import React, { useState, useEffect } from 'react'
import { IKImage } from 'imagekitio-react';
import { ImageList, ImageListItem } from '@mui/material';
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
  return (
    <div className='gallery-showcase'>
      <IKImage
        urlEndpoint={imagekitKeys.urlEndpoint}
        src={data.images[0]}
        transformation={[{
          height: 200,
          width: 200
        }]}
      />
    </div>
  )
}

export default GalleryShowcase

// getImagekitKeys