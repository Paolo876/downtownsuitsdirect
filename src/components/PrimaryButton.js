import React from 'react'
import { Button } from '@mui/material'
import "./PrimaryButton.scss"

const PrimaryButton = (props) => {
  return (
    <div className="primary-button">
        <Button {...props} >
            {props.children}
        </Button>
    </div>

  )
}

export default PrimaryButton