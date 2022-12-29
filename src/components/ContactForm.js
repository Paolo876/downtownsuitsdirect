import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Paper, Typography, Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("ASD")
  }
  return (
    <form onSubmit={handleSubmit}>
        <Paper sx={{display: "flex", flexDirection: "column", width: "100%", p: { xs: 2, md:5 }, mx: "auto", maxWidth: "1000px"}}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.25em", md: "1.5em" }} mb={2}>Inquiry form</Typography>
            <hr/>
            <Grid container mt={2}>
                <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column", width: "100%", p: 2, justifyContent: "flex-end" }}>
                    <FormControl sx={{ my: 1, mt:3,  }}>
                        <InputLabel htmlFor="my-input" >Name</InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                    <FormControl sx={{ my: 1, }}>
                        <InputLabel htmlFor="my-input">E-mail</InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                    <FormControl sx={{ my: 1,  }}>
                        <InputLabel htmlFor="my-input">Phone</InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column", width: "100%", p: 2, justifyContent: "flex-end" }}>
                    <TextField
                        sx={{my: 1, mt:3}}
                        label="Message"
                        multiline
                        rows={6}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} align="center" sx={{ mt: 3 }}><Button type="submit" variant="contained" size='large' sx={{ letterSpacing: ".15em"}}>Submit</Button></Grid>
        </Paper>
    </form>
  )
}

export default ContactForm