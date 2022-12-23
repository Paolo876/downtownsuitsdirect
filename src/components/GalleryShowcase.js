import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import "./GalleryShowcase.scss";

const GalleryShowcase = () => {
  const [ imagekitKeys, setImagekitKeys ] = useState(JSON.parse(localStorage.getItem("imagekitKeys")))
  // useEffect(() => {
  //   httpsCallable(functions, "getImagekitKeys")().then((res) => {
  //     // setImagekitKeys(res.data)
  //   })
  // }, [])
  console.log(imagekitKeys)
  return (
    <div className='gallery-showcase'>
      
    </div>
  )
}

export default GalleryShowcase

// getImagekitKeys