import React from 'react'
//import style from './Profile.module.css'
import Grid from '@mui/material/Grid'
import { Avatar, Box, Button, Stack, TextField } from '@mui/material'
import i from '../../../../src/logo.svg'

const AddNewPost = () => {
    
    return ( 
    
        <Box sx={{ flexGrow: 1, padding: '8px' }}>
            <Grid container spacing={2}>
                <Grid container item lg={1} justifyContent={'center'} alignItems={'center'}>
                    <Stack spacing={2} sx={{padding: '8px'}}>
                        <Avatar alt='logo' src={i}/>
                    </Stack>
                </Grid>
                <Grid container item lg={9} alignItems={'center'}>
                    <TextField fullWidth sx={{padding: '8px',
                                            '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                            '& label': {color: 'orange'}}}
                        id="filled-basic" label="Новый пост" variant="filled" color='neutral'/>
                </Grid>
                <Grid container item lg={2} justifyContent={'center'} alignItems={'center'}>
                    <Button variant="contained" color='button' sx={{padding: 'auto'}}>Отправить</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AddNewPost;