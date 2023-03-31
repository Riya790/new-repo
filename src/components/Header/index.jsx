import React from 'react'

import {
    Grid,
    Typography
} from '@mui/material'

const index = () => {
  return (
    <Grid container xs={12} spacing={4}>
        <Grid item xs={12}>
            <Typography variant='h3'>SIP Calculator</Typography>
        </Grid>
    </Grid>
  )
}

export default index