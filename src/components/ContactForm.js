import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Paper, Typography, Grid, TextField, Button } from '@mui/material';

const ContactForm = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ message, setMessage ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, phone, message)
  }
  return (
    <form onSubmit={handleSubmit}>
        <Paper sx={{display: "flex", flexDirection: "column", width: "100%", p: { xs: 2, md:5 }, mx: "auto", maxWidth: "1100px"}}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.25em", md: "1.5em" }} mb={2}>Inquiry form</Typography>
            <hr/>
            <Grid container mt={2}>
                <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column", width: "100%", p: 2, justifyContent: "flex-end" }}>
                    <FormControl sx={{ my: 1.5, mt:3,  }}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" type="text" required value={name} onChange={e => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl sx={{ my: 1.5, }}>
                        <InputLabel htmlFor="email" type="email">E-mail</InputLabel>
                        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl sx={{ my: 1.5,  }}>
                        <InputLabel htmlFor="phone" >Phone</InputLabel>
                        <Input id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column", width: "100%", p: 2, justifyContent: "flex-end" }}>
                    <TextField
                        sx={{my: 1, mt:3}}
                        label="Message"
                        multiline
                        rows={7}
                        value={message} 
                        onChange={e => setMessage(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} align="center" sx={{ mt: 3 }}><Button type="submit" variant="contained" size='large' sx={{ letterSpacing: ".15em", px: 4}}>Submit</Button></Grid>
        </Paper>
    </form>
  )
}

export default ContactForm