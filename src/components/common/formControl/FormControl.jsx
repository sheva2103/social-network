import React from 'react'
import { TextField } from '@mui/material';

export const Input = ({label, error, type, ...props}) => {
    //console.log(props.input)
    return ( 
            <TextField fullWidth
                // autoFocus={label === 'Логин' && true}
                id="outlined-basic" 
                label={label} 
                variant="outlined" 
                sx={{'& input': { color: 'orange'}}}
                inputProps={props.input}
                />
    );
}
