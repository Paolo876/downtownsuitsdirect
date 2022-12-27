import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import PrimaryButton from './PrimaryButton';
import { Container, Rating, Card, Grid, Typography, Avatar, CardHeader, CardContent, CardActionArea } from '@mui/material';
import yelpIcon from "../assets/yelp_transparent.png"

const YelpReviews = () => {
  const [ reviews, setReviews ] = useState(null)
  useEffect(() => {
    httpsCallable(functions, "yelpReviews")().then((res) => {
        setReviews(JSON.parse(res.data).reviews)
    })
  
  }, [])
  if(reviews) return (
    <Container sx={{ py: {xs: 2, md:5} }}>

      <Grid container spacing={2} sx={{ py:4 }}>
        <Grid item xs={12} sx={{textAlign: "center", letterSpacing: ".1em", mb: 2, }}>
          <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize="1.8em">see what my clients say about me</Typography>
          <hr/>
        </Grid>
        {reviews && reviews.map(item => (
          <Grid item xs={12} key={item.id}>
           <Card sx={{position: "relative", boxShadow: 1}} variant="primary">
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
        {reviews && <Grid item xs={12} align={"right"} sx={{my: 2}}>
          <PrimaryButton variant="outlined" color="secondary" size="large" href={reviews[0].url}>
            See more reviews on Yelp
          </PrimaryButton>
        </Grid>}
      </Grid>
    </Container>
  )
}

export default YelpReviews