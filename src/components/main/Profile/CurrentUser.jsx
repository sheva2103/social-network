import React from 'react'
import style from './Profile.module.css'
import Grid from '@mui/material/Grid'
import { Avatar, Box, Button, Stack, TextField } from '@mui/material'
import i from '../../../../src/logo.svg'

const CurrentUser = () => {
    
    return ( 
        // <div className={style.container}>
        //     <div className={`${style.item} ${style.photo}`}>
        //         иконка
        //     </div>
        //     <div className={`${style.item} ${style.text}`}>text</div>
        //     <div className={`${style.item} ${style.button}`}>button</div>
        // </div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid container item lg={1} sm={4} xs={4} justifyContent={'center'} alignItems={'center'}>
                    <Stack spacing={2} sx={{padding: '8px'}}>
                        <Avatar alt='logo' src={i}/>
                    </Stack>
                </Grid>
                <Grid container item lg={9} sm={10} xs={10} justifyContent={'center'} alignItems={'center'}>
                    <TextField fullWidth sx={{padding: '8px',
                                            '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                            '& label': {color: 'orange'}}}
                        id="filled-basic" label="Filled" variant="filled" color='neutral'/>
                </Grid>
                <Grid container item lg={2} sm={6} xs={8} justifyContent={'center'} alignItems={'center'}>
                    <Button variant="contained" color='button' sx={{padding: 'auto'}}>Отправить</Button>
                </Grid>
            </Grid>
        </Box>  
    )
}

export default CurrentUser;