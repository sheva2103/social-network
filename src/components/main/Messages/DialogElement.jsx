import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import style from './Messages.module.css'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const DialogElement = ({dialog, currentUser}) => {
    //console.log(dialog)
    return ( 
        <Box sx={{padding: '8px', borderRadius: '4px', backgroundColor: '#282c34'}}>
            <Grid container direction={'column'} spacing={2} sx={{padding: '4px'}}>
                {/* <Grid item sx={{textAlign: 'end'}}>
                    <div className={style.dialogMessage}>123</div>
                </Grid>
                <Grid item sx={{textAlign: 'start'}}>
                    <div className={`${style.dialogMessage} ${style.isOwner}`}>123</div>
                </Grid> */}
                {dialog.map(message => (
                    <Grid item key={message.time} sx={currentUser !== message.login ? {textAlign: 'end'} : {textAlign: 'start'}}>
                        
                            
                            <NavLink to={`/profile/${message.login}`}><Typography variant="caption" display="block" sx={{color: 'rgb(3, 149, 216)'}}>{message.fullName}</Typography></NavLink>
                            <div className={currentUser !== message.login ? style.dialogMessage : `${style.dialogMessage} ${style.isOwner}`}>
                                <Typography variant="body1" sx={{color: 'rgb(233, 233, 233)'}}>{message.message}</Typography>
                            </div>
                            
                            <Typography variant="caption" display="block" sx={{color: 'rgb(3, 149, 216)'}}>{message.time}</Typography>

                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default DialogElement;