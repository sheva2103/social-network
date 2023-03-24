//import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import AddNewPost from './AddNewPost';
import CurrentUser from './CurrentUser';
import Grid from '@mui/material/Grid';
import PostsContainer from './PostsContainer';
import { compose } from 'redux';
import { WithAuthRedirect } from './../../common/WithAuthRedirect';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from './../../../redux/profileReducer';

const Profile = ({getUserData}) => {
    let location = useLocation()
    let navigate = useNavigate()
    let {user} = useParams()

    useEffect(() => {
        getUserData(user)
        console.log(user)
    }, [user])

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



export default connect(null, {getUserData})(Profile)
//export default WithAuthRedirect(Profile)