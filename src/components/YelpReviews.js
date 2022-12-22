import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import { Container, Rating, Paper, Grid, Typography, Avatar } from '@mui/material';
const YelpReviews = () => {
  const [ reviews, setReviews ] = useState(JSON.parse(localStorage.getItem("dsdReviews")))
  console.log(reviews)
  useEffect(() => {
    // const helloWorld = httpsCallable(functions, "yelpReviews")
    // helloWorld().then((res) => {
    //     localStorage.setItem("dsdReviews", JSON.stringify(JSON.parse(res.data).reviews))
    // })
  
  }, [])
  return (
    <Container>
      <Grid container spacing={2} sx={{ my:4 }}>
        <Grid item xs={12}>
           <Paper elevation={2}>asdasdadasd</Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default YelpReviews