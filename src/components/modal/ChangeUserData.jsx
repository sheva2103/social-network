import { Box } from '@mui/system';
import React from 'react'
import { Form } from 'react-final-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SAVE = 'Сохранить'

const ChangeUserData = () => {

    const onSubmit = (data) => {
        console.log(data)
    }

    return ( 
        <Box sx={{width: '100%'}}>
            <Form onSubmit={onSubmit} render={({handleSubmit}) => {
                return <form onSubmit={handleSubmit}>

                    <TextField fullWidth margin='normal' id="filled-basic" label="Filled" variant="filled" color='neutral' sx={{'& input': {color: 'orange'}}}/>
                    <TextField fullWidth margin='normal' id="filled-basic" label="Filled" variant="filled" color='neutral' sx={{'& input': {color: 'orange'}}}/>
                    <TextField fullWidth margin='normal' id="filled-basic" label="Filled" variant="filled" color='neutral' sx={{'& input': {color: 'orange'}}}/>
                    <TextField fullWidth margin='normal' id="filled-basic" label="Filled" variant="filled" color='neutral' sx={{'& input': {color: 'orange'}}}/>
                    <Button variant="contained" href="#contained-buttons">{SAVE}</Button>
                </form>
            }}>

            </Form>
        </Box>
    );
}

export default ChangeUserData;