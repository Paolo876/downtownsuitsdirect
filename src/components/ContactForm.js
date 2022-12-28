import React, { useState } from 'react'
import { FormControl, InputLabel, Input, Paper, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <form>
        <Paper sx={{display: "flex", flexDirection: "column", width: "fit-content", p: 5, mx: "auto"}}>
            <Typography variant="h2" gutterBottom align='center' fontWeight="regular" fontSize={{xs: "1.25em", md: "1.5em" }}>Inquiry form</Typography>
            <hr/>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">E-mail</InputLabel>
                <Input id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone <small>(optional)</small></InputLabel>
                <Input id="my-input"/>
            </FormControl>
        </Paper>
    </form>
  )
}

export default ContactForm