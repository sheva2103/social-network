import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import i from '../../../logo.svg'


const PostItem = ({userPhoto, post, nameUser}) => {
    return ( 
        <Box sx={{padding: '8px', borderRadius: '4px', margin: '8px 8px', backgroundColor: '#383d47'}}>
            <Grid container spacing={1} sx={{alignItems: 'center'}}>
                <Grid item>
                    <IconButton onClick={() => console.log(123)} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={userPhoto || i} />
                    </IconButton>
                </Grid>
                <Grid container item direction={'column'} xs={'auto'}>
                    <Grid item>
                        <Typography variant='h6' component={'span'} sx={{color: 'rgb(233, 233, 233)'}}>
                            {nameUser}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='caption' component={'span'} sx={{color: 'rgb(233, 233, 233)'}}>
                            {post.date}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{padding: '8px', borderRadius: '4px', margin: '8px 0', border: 'dotted 1px grey'}}>
                <Typography variant='inherit' component={'span'} sx={{color: 'rgb(233, 233, 233)'}}>
                    {post.post}
                </Typography>
            </Box>
        </Box>
    );
}

export default PostItem