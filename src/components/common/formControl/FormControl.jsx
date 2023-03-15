import React from 'react'
import { TextField } from '@mui/material';
import style from './FormControl.module.css'

export const Input = ({label, error, type, ...props}) => {
    console.log(props)
    return ( 
            <TextField fullWidth
                // autoFocus={label === 'Логин' && true}
                id="outlined-basic" 
                label={label} 
                variant="outlined" 
                sx={{'& input': { color: 'orange'}}}
                inputProps={props.input}
                error={error? true : false}
                />
    );
}

export const Input2 = (props) => {
    console.log(props)
    return ( 
            <input type="text" className={style.input} />
    );
}
 // не испольуемый файл