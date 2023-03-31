import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react'
import style from './Messages.module.css'
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import SendMessage from '../Profile/SendMessage';


const DialogElement = ({dialog, currentUser, fullName, addressee}) => {

    let elementRef = useRef(null)
    useEffect(() => {
    elementRef.current.scrollTop = elementRef.current.scrollHeight
    },[dialog])
    
    return ( 
        <Box sx={{padding: '8px', borderRadius: '4px', backgroundColor: '#282c34'}}>
            <div style={{height: window.innerHeight - 200, overflowY: 'scroll'}} ref={elementRef}>
                <Grid container direction={'column'} justifyContent={'space-between'} spacing={2} sx={{padding: '4px', minHeight: '100%'}}>
                    <Grid item>
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
                        <Grid item><SendMessage fullName={fullName} addressee={addressee} sender={currentUser}/></Grid>
                </Grid>
            </div>
        </Box>
    );
}

export default DialogElement;