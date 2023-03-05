import React from 'react'
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#282c34',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '0 10px',
    textAlign: 'start',
    color: '#fff',
  }));



const CurrentUser = () => {
    return ( 
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={12} sx={{marginTop: '0px'}}>
                <Grid item xs={12} md={12} lg={4}>
                    <Item>имя</Item>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Item>Город</Item>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Item>дата</Item>
                </Grid>
            </Grid>
        </Box>

    );
}

export default CurrentUser;