import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { deleteFriend } from './../../../redux/authReducer';
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NavLink, useParams } from 'react-router-dom';
import { getUserData } from './../../../redux/profileReducer';

const Friends = ({currentUserFriends, currentUser, deleteFriend, getUserData}) => {
    
    let {user} = useParams()
    useEffect(() => {
        getUserData(user)
    }, [user])

    return ( 
        <Box sx={{padding: '8px'}}>
            <Grid container sx={{backgroundColor: '#383d47'}} spacing={2}>
            {currentUserFriends?.length > 0 ? 
                currentUserFriends?.map(user => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={user.name}>
                            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardActionArea>
                                    <NavLink to={`/profile/${user.name}`}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={user.photo}
                                            alt={user.name}
                                        />
                                    </NavLink>
                                    <CardContent sx={{backgroundColor: '#282c34'}}>
                                        <Typography gutterBottom variant="h5" component="span" sx={{color: '#fff'}}>
                                            {user.fullName}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{backgroundColor: '#282c34'}}>
                                <Button variant="contained"
                                        onClick={() => deleteFriend({name: user.name, photo: user.photo, fullName: user.fullName}, currentUser)}
                                        >Удалить</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                ))
                :
                <Typography variant="h5" gutterBottom>Друзей нет</Typography>
                }
            </Grid>
        </Box>
    );
}

const mapStateToProps = (state) => ({
    //resultSearchUser: state.search.searchUser,
    currentUser: state.auth.currentUser,
    currentUserFriends: state.auth.currentUserData?.friends
})

export default connect(mapStateToProps, {deleteFriend, getUserData})(Friends)