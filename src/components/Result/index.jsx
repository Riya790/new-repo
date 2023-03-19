import React from 'react';

import {
    Stack,
    Typography,
    Grid,
} from '@mui/material';

const SipResult = ({totalValue}) => {

  return (
    <>
        <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h3' gutterBottom>total value : ₹ {totalValue}</Typography>
                </Grid>
        </Grid>
    </>
  )
}

export default SipResult;