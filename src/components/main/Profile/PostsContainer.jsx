import { Box, Grid } from '@mui/material';
import React from 'react'
import PostItem from './PostItem';
import { connect } from 'react-redux';

const PostsContainer = ({posts, userPhoto, nameUser}) => {
    //console.log(props.posts)
    return ( 
        <Box sx={{backgroundColor: '#282c34', borderRadius: '4px', margin: '8px'}}>
            <Grid container spacing={1} direction={'column'}>
                {posts.reverse().map(post => {
                    return  <Grid item key={post.date} >
                                <PostItem userPhoto={userPhoto} nameUser={nameUser} post={post}/>
                            </Grid>
                })}
            </Grid>
            
        </Box>
     );
}

const mapStateToProps = (state) => ({
    userPhoto: state.profile.userInfo.linkUserPhoto,
    posts: state.profile.posts,
    nameUser: state.profile.userInfo.name
})

export default connect(mapStateToProps, null)(PostsContainer)