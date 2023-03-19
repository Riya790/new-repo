import React from 'react';

import {
    Box,
    TextField,
    InputAdornment,
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
                        size="small"
                        label="monthly investment"
                        value={monthlyInvestment}
                        variant="outlined" 
                        fullWidth
                        onChange={(e) => setMonthlyInvestment(e.target.value)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                        }}
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
                    size="small"
                    variant="outlined" 
                    label="rate %"
                    value={annualRate}
                    fullWidth
                    onChange={(e) => setAnnualRate(e.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
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
                    size="small"
                    variant="outlined"
                    label="time-period"
                    value={years}
                    fullWidth onChange={(e) => setYears(e.target.value)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">year</InputAdornment>,
                    }}
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
