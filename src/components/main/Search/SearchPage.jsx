import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { connect } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { addFriend } from '../../../redux/authReducer'
import { deleteFriend } from './../../../redux/authReducer';


const SearchPage = ({resultSearchUser, addFriend, currentUser, currentUserFriends, deleteFriend}) => {

    return ( 
        <Box sx={{padding: '8px'}}>
            <Grid container sx={{backgroundColor: '#383d47'}} spacing={2}>
            {resultSearchUser.length > 0 ? 
                resultSearchUser.map(user => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                                <CardActionArea>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={user.userInfo.linkUserPhoto}
                                            alt="green iguana"
                                        />
                                    </NavLink>
                                    <CardContent sx={{backgroundColor: '#282c34'}}>
                                        <Typography gutterBottom variant="h5" component="span" sx={{color: '#fff'}}>
                                            {user.userInfo.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{backgroundColor: '#282c34'}}>
                                {currentUser !== user.id &&
                                    (currentUserFriends.some(friend => friend.name === user.id) ?
                                        <Button variant="contained"
                                                onClick={() => deleteFriend({name: user.id, photo: user.userInfo.linkUserPhoto, fullName: user.userInfo.name}, currentUser)}
                                        >Удалить</Button>
                                        :
                                        <Button  variant="contained"
                                            onClick={() => addFriend({name: user.id, photo: user.userInfo.linkUserPhoto, fullName: user.userInfo.name}, currentUser)} 
                                                >Добавить в друзья</Button>        
                                    )
                                }
                                </CardActions>
                            </Card>
                        </Grid>
                ))
                :
                <Typography variant="h5" gutterBottom>Поиск не дал результатов</Typography>
                }
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    resultSearchUser: state.search.searchUser,
    currentUser: state.auth.currentUser,
    currentUserFriends: state.auth.currentUserData.friends
})

export default connect(mapStateToProps, {addFriend, deleteFriend})(SearchPage)