//import { Grid } from '@mui/material';
import React from 'react'
import AddNewPost from './AddNewPost';
import CurrentUser from './CurrentUser';
import Grid from '@mui/material/Grid';

const Profile = () => {
    return ( 
        <Grid container item justifyContent={'center'} lg={12}>
            <Grid item width={'100%'}>
                    <CurrentUser />
                    <AddNewPost />
            </Grid>
        </Grid>
        
    );
}

export default Profile