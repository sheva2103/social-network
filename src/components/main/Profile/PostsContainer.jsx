import { Box, Grid } from '@mui/material';
import React from 'react'
import PostItem from './PostItem';

const PostsContainer = () => {
    return ( 
        <Box sx={{backgroundColor: '#282c34', borderRadius: '4px', margin: '8px'}}>
            <PostItem />
        </Box>
     );
}
 
export default PostsContainer;