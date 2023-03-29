import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import style from './Messages.module.css'

const DialogElement = ({dialog}) => {
    console.log(dialog)
    return ( 
        <Box sx={{padding: '8px', borderRadius: '4px', backgroundColor: '#282c34'}}>
            <Grid container direction={'column'} spacing={2} sx={{padding: '4px'}}>
                <Grid item sx={{textAlign: 'end'}}>
                    <div className={style.dialogMessage}>123</div>
                </Grid>
                <Grid item sx={{textAlign: 'start'}}>
                    <div className={`${style.dialogMessage} ${style.isOwner}`}>123</div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default DialogElement;