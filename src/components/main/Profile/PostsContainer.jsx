import { Box, Grid } from '@mui/material';
import React from 'react'
import PostItem from './PostItem';

const PostsContainer = () => {
    return ( 
        <Box sx={{backgroundColor: '#282c34', borderRadius: '4px', margin: '8px'}}>
            <Grid container spacing={1} direction={'column'}>
                <Grid item>
                    <PostItem />
                </Grid>
                <Grid item>
                    <PostItem />
                </Grid>
                <Grid item>
                    <PostItem />
                </Grid>
            </Grid>
            
        </Box>
     );
}
 
export default PostsContainer;