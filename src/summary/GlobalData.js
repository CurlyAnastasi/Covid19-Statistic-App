import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function GlobalData({data: {TotalConfirmed,TotalDeaths,TotalRecovered}}) {
    
    return (
        <Paper style={infoBlock}>
            <Grid container>
                <Grid item xs={3}>
                    <Typography variant='h4'>
                        Global
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        Confirmed: {TotalConfirmed}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        Deaths: {TotalDeaths}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant='h6'>
                        Recovered: {TotalRecovered}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default GlobalData;

const infoBlock = {
    padding: '10px'
}
