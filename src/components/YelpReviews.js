import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

const YelpReviews = () => {
  const [ reviews, setReviews ] = useState(JSON.parse(localStorage.getItem("dsdReviews")))

  useEffect(() => {
    // const helloWorld = httpsCallable(functions, "yelpReviews")
    // helloWorld().then((res) => {
    //     localStorage.setItem("dsdReviews", JSON.stringify(JSON.parse(res.data).reviews))
    // })
  
  }, [])
  return (
    <div>YelpReviews</div>
  )
}

export default YelpReviews