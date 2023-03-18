import React from 'react';

import {
    TextField,
    Typography,
    Grid,
    Slider,
} from '@mui/material';

const SipInput = ({
    monthlyInvestment,
    annualRate,
    years,
    setMonthlyInvestment,
    setAnnualRate,
    setYears
}) => {
    
  return (
    <>
        {/* monthly investment */}
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='subtitle1'>monthly investment</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                    id="outlined-basic" 
                    label={monthlyInvestment}
                    variant="outlined" 
                    fullWidth
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Slider 
                    min={100} 
                    max={10000000}
                    aria-label="principal" 
                    valueLabelDisplay="auto" 
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                    color="primary"
                />
            </Grid>
        </Grid>

        {/* expected annual return rate */}
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='subtitle1'>expected annual return rate</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                    id="rate" 
                    variant="outlined" 
                    label={annualRate}
                    fullWidth
                    onChange={(e) => setAnnualRate(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Slider  
                    min={1} 
                    max={100}
                    aria-label="return-rate"
                    valueLabelDisplay="auto"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(e.target.value)}
                    color="warning"
                />
            </Grid>
        </Grid>

        {/* time period */}
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography variant='subtitle1'>time period</Typography>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                    id="time-period" 
                    variant="outlined" 
                    label={years}
                    fullWidth onChange={(e) => setYears(e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Slider 
                    min={1}
                    max={100}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    color="error"
                />
            </Grid>
        </Grid>
    </>
  )
}

export default SipInput;
