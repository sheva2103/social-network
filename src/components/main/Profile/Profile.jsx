import React, { useEffect } from 'react'
import AddNewPost from './AddNewPost';
import CurrentUser from './CurrentUser';
import Grid from '@mui/material/Grid';
import PostsContainer from './PostsContainer';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserData } from './../../../redux/profileReducer';
import SendMessage from './SendMessage';

const Profile = ({getUserData, currentUser, fullName}) => {
    let {user} = useParams()
    useEffect(() => {
        getUserData(user)
    }, [user])
    
    return ( 
        <Grid container item justifyContent={'center'} lg={12} sx={{backgroundColor: '#383d47', padding: '4px'}}>
            <Grid item width={'100%'}>
                    <CurrentUser user={user}/>
                    {currentUser && (user === currentUser ? <AddNewPost /> : <SendMessage fullName={fullName} addressee={user} sender={currentUser}/>)}
                    <PostsContainer />
            </Grid>
        </Grid>
        
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
    fullName: state.auth.currentUserData?.userInfo.name
})

export default connect(mapStateToProps, {getUserData})(Profile)
//export default WithAuthRedirect(Profile)