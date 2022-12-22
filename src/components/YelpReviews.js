import React, { useState, useEffect } from 'react'
import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';
import { Container, Rating, Card, Grid, Typography, Avatar, CardHeader, IconButton, CardContent, CardActionArea } from '@mui/material';
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
        {reviews && reviews.map(item => (
          <Grid item xs={12} key={item.id}>
           <Card>
            <CardActionArea href={item.url}>
              <CardHeader 
                  title={<Rating name="read-only" value={item.rating} readOnly precision={0.5} size="large"/>}
                  subheader={<Typography variant="h5" align='left' fontWeight="regular" color="text.secondary" sx={{fontStyle: "italic"}}>"{item.text}"</Typography>}
                />
                <CardContent>
                
                <Avatar src={item.user.image_url} alt={item.user.id}/>
                <Typography variant="body2" color="text.secondary">{item.user.name}</Typography>
                </CardContent>
            </CardActionArea>
           </Card>
           {/* <Card>
              <CardHeader 
                avatar={ <IconButton><Avatar src={item.user.image_url} alt={item.user.id}/></IconButton>}
                title={<Typography variant="h5" align='left' fontWeight="regular" color="textPrimary">{item.user.name}</Typography>}
                subheader={<Rating name="read-only" value={item.rating} readOnly precision={0.5} size="small"/>}
              />
              <CardContent>
              <Typography variant="body2" color="text.secondary">{item.text}</Typography>
              </CardContent>
           </Card> */}
          </Grid>
        ))}
        
      </Grid>
    </Container>
  )
}

export default YelpReviews