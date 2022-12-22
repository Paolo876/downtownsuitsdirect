import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

const GalleryShowcase = () => {
  const [ imagekitKeys, setImagekitKeys ] = useState(localStorage.getItem("imagekitKeys"))
  // useEffect(() => {
  //   httpsCallable(functions, "getImagekitKeys")().then((res) => {
  //     // setImagekitKeys(res.data)
  //   })
  // }, [])
  return (
    <div>
      
    </div>
  )
}

export default GalleryShowcase

// getImagekitKeys