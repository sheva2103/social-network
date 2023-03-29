import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material';
import { messageAPI } from '../../../api/api';

const SendMessage = ({fullName, addressee, sender}) => {

    const [message, setMessage] = useState('')
console.log(fullName)
    return (  
        <Box sx={{padding: '8px'}}>
            <Grid container spacing={2} zIndex={5} alignItems='center'>                                
                                <Grid item xs={12} lg={9} alignItems={'center'}>                                    
                                        <TextField fullWidth sx={{padding: '8px',
                                                                '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                                                '& label': {color: 'orange'}}}
                                                                id="filled-basic" label="Отправить сообщение" variant="filled" color='neutral'
                                                                onChange={(e) => setMessage(e.target.value)}/>
                                </Grid>
                                <Grid item xs={12} lg={3} justifyContent={'center'} alignItems={'center'}>
                                    <Button variant="contained" 
                                    color='button' sx={{padding: 'auto'}} 
                                    onClick={() => messageAPI.sendMessage({fullName, message}, addressee, sender)}
                                    >Отправить сообщение</Button>
                                </Grid>
                            </Grid>
        </Box>
    )
}

export default SendMessage;