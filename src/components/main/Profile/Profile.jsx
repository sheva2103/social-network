//import { Grid } from '@mui/material';
import React from 'react'
import AddNewPost from './AddNewPost';
import CurrentUser from './CurrentUser';
import Grid from '@mui/material/Grid';
import PostsContainer from './PostsContainer';

const Profile = () => {
    return ( 
        <Grid container item justifyContent={'center'} lg={12} sx={{backgroundColor: '#383d47'}}>
            <Grid item width={'100%'}>
                    <CurrentUser />
                    <AddNewPost />
                    <PostsContainer />
            </Grid>
        </Grid>
        
    );
}

export default Profile