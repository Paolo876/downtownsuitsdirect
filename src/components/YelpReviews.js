import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import { Container, Rating, Card, Grid, Typography, Avatar, CardHeader, Button, CardContent, CardActionArea } from '@mui/material';
import yelpIcon from "../assets/yelp_transparent.png"

const YelpReviews = () => {
  const [ reviews, setReviews ] = useState(JSON.parse(localStorage.getItem("dsdReviews")))
  useEffect(() => {
    // const helloWorld = httpsCallable(functions, "yelpReviews")
    // helloWorld().then((res) => {
    //     localStorage.setItem("dsdReviews", JSON.stringify(JSON.parse(res.data).reviews))
    // })
  
  }, [])
  return (
    <Container  sx={{ my:4 }}>
      <Grid container spacing={2} sx={{ my:4 }}>
        <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
          <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">testimonials</Typography>
          <hr/>
        </Grid>
        {reviews && reviews.map(item => (
          <Grid item xs={12} key={item.id}>
           <Card sx={{position: "relative"}} variant="primary">
            <CardActionArea href={item.url}>
              <CardContent>
                <Rating name="read-only" value={item.rating} readOnly precision={0.5} size="large" sx={{my: 1}}/>
                <Typography variant="h5" align='left' fontWeight="regular" color="text.secondary" sx={{fontStyle: "italic"}}>"{item.text}"</Typography>
              </CardContent>
              <CardHeader 
                sx={{py:2}}
                avatar={ <Avatar src={item.user.image_url} alt={item.user.id} />}
                title={<>
                  <Typography variant="body2" color="text.primary">{item.user.name}</Typography>
                  <Typography variant="body1" color="text.secondary">{new Date(item.time_created).toLocaleDateString()}</Typography>
                </>}
                align="left"
              />
              <img src={yelpIcon} style={{height: "18px", width: "auto", position: "absolute", bottom: 10, right: 10, opacity: ".75"}}></img>
            </CardActionArea>
           </Card>
          </Grid>
        ))}
        {reviews && <Grid item xs={12} align={"right"}>
          <Button variant="outlined" color="secondary" size="large" sx={{py: 1, px:3}} href={reviews[0].url}>See more reviews on Yelp</Button>
        </Grid>}
      </Grid>
    </Container>
  )
}

export default YelpReviews