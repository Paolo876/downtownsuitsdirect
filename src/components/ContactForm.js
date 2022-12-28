import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Paper, Typography, Grid, TextField } from '@mui/material';

const ContactForm = () => {
  return (
    <form>
        <Paper sx={{display: "flex", flexDirection: "column", width: "fit-content", p: 5, mx: "auto"}}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.25em", md: "1.5em" }} mb={2}>Inquiry form</Typography>
            <hr/>
            <Grid container>
                <Grid item xs={6}>
                    <FormControl sx={{my: 1, mt:3}}>
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="my-input">E-mail</InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                    <FormControl sx={{my: 1}}>
                        <InputLabel htmlFor="my-input">Phone <small>(optional)</small></InputLabel>
                        <Input id="my-input"/>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
            
        </Paper>
    </form>
  )
}

export default ContactForm