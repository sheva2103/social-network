import React from 'react'
import { Box, Button, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import { addFriend, deleteFriend } from '../../../redux/authReducer'
import style from './Profile.module.css'
import { NavLink } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#282c34',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '0 10px',
    textAlign: 'start',
    color: '#fff',
  }));



const CurrentUser = ({userInfo, user, currentUser, friends, addFriend, deleteFriend, quantityPhotos}) => {
    const isFriend = (friends) => {
        if(friends === null) return
        return friends.some(friend => friend.name === user)
    }

    return ( 
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{marginTop: '0px', paddingBottom: '8px', paddingLeft: '8px'}}>
                <Grid item xs={12} sm={'auto'}>
                    {userInfo.linkUserPhoto !== "" ? 
                        <img src={userInfo.linkUserPhoto} alt="123" style={{width: '200px'}}/>
                        :
                        <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="123" style={{width: '200px'}}/>}
                        

                </Grid>
                <Grid item container xs={12} sm={'auto'}>
                        <Grid item xs={12} >
                            <Item sx={{margin: 0}}>Имя: {userInfo?.name}</Item>
                        </Grid>
                        <Grid item xs={12} >
                            <Item sx={{margin: 0}}>Город: {userInfo?.city}</Item>
                        </Grid>
                        <Grid item xs={12} >
                            <Item sx={{margin: 0}}>Дата рождения: {userInfo?.DateOfBirth}</Item>
                        </Grid>
                </Grid>
                <Grid item xs={'auto'}>
                    <NavLink to={`/photos/${user}`}>
                        <Item sx={{borderRadius: '16px', cursor: 'pointer'}}>фото : {quantityPhotos.length}</Item>
                    </NavLink>
                </Grid>
            </Grid>
            {currentUser && currentUser !== user &&
                    <Button variant="contained" 
                    color='button' 
                    sx={{padding: 'auto', margin: '0 8px 8px 8px'}} 
                    onClick={isFriend(friends) ? () => deleteFriend({name: user, photo: userInfo.linkUserPhoto, fullName: userInfo.name}, currentUser) 
                                            :
                                                () => addFriend({name: user, photo: userInfo.linkUserPhoto, fullName: userInfo.name}, currentUser)}
                    >{isFriend(friends) ? 'Удалить с друзей' : 'Добавить в друзья'}
            </Button>}
        </Box>

    );
}

const mapStateToProps = (state) => ({
    userInfo: state.profile.userInfo,
    currentUser: state.auth.currentUser,
    friends: state.auth.currentUserData?.friends,
    quantityPhotos: state.profile.photos
})

export default connect(mapStateToProps, {addFriend, deleteFriend})(CurrentUser)