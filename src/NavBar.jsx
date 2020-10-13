import React, {useState} from 'react'
import {Grid, Hidden, Typography, Button, Avatar} from '@material-ui/core';
import {Dashboard} from './Dashboard';



function NavBar() {
    return (
        <Grid container>
            <Grid item xs={false} sm={1} md={2}></Grid>
            <Grid item xs={8} sm={7} md={8}>
                <Typography variant='h2' style={{fontWeight: 'bold'}}>
                    ToDo-It 🌎!
                </Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={1}>
                <Button>Sign Up</Button>
            </Grid>
            <Grid item xs={2} sm={2} md={1}>

            </Grid>
        </Grid>
    )
}

export default NavBar
