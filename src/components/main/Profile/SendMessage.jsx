import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material';
import { messageAPI } from '../../../api/api';
import SendIcon from '@mui/icons-material/Send';

const SendMessage = ({fullName, addressee, sender, fullNameOwnerProfile, fromProfile}) => {
    const [message, setMessage] = useState('')
    return (  
        <Box sx={{padding: '8px'}}>
            <Grid container spacing={2} zIndex={5} alignItems='center'>                                
                                <Grid item xs={12} lg={10} alignItems={'center'}>                                    
                                        <TextField fullWidth sx={{padding: '8px 8px 8px 0px',
                                                                '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                                                '& label': {color: 'orange'}}}
                                                                id="filled-basic" label="Отправить сообщение" variant="filled" color='neutral'
                                                                value={message}
                                                                onChange={(e) => setMessage(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} lg={2} justifyContent={'center'} alignItems={'center'}>
                                    <Button variant="contained" 
                                    color='button' sx={{padding: '8px', width: '100%'}} 
                                    onClick={() => {
                                        if(message.trim() <= 0) return
                                        messageAPI.sendMessage({fullName, message, time: new Date().toLocaleString()}, addressee, sender, fullNameOwnerProfile, fromProfile)
                                        setMessage('')
                                    }}
                                    >
                                        <SendIcon />
                                    </Button>
                                </Grid>
                            </Grid>
        </Box>
    )
}

export default SendMessage;