//import { Grid } from '@mui/material';
import React from 'react'
import AddNewPost from './AddNewPost';
import CurrentUser from './CurrentUser';
import Grid from '@mui/material/Grid';
import PostsContainer from './PostsContainer';
import { compose } from 'redux';
import { WithAuthRedirect } from './../../common/WithAuthRedirect';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Profile = () => {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    console.log(location, params)
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
//export default WithAuthRedirect(Profile)