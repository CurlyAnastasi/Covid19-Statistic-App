import React, { useEffect, useState } from 'react';
import api from '../api';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData';
import CountryData from './CountryData';

function Summary() {
    const [data, setData] = useState(null);
       useEffect(() => {
           api.get('/summary').then((res) => setData(res.data)) 
       }, [])
    

    return data ? (
        < Grid container spacing={3} >
            <Grid item xs={12}>
                <GlobalData data={data.Global} />
            </Grid>
            {data.Countries.map((country) => (
                <Grid item xs={3} key= {country.CountryCode}>
                    <CountryData data={country} />
                </Grid>
            ))}
        </Grid >
    ) : null;
}

export default Summary
