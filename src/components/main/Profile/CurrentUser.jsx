import React from 'react'
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#282c34',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: '0 10px',
    textAlign: 'start',
    color: '#fff',
  }));



const CurrentUser = ({userInfo}) => {
    return ( 
        
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={12} sx={{marginTop: '0px', paddingBottom: '8px'}}>
                <Grid item xs={'auto'} md={12} lg={'auto'}>
                    <Item>Имя: {userInfo?.name}</Item>
                </Grid>
                <Grid item xs={'auto'} md={6} lg={'auto'}>
                    <Item>Город: {userInfo?.city}</Item>
                </Grid>
                <Grid item xs={'auto'} md={6} lg={'auto'}>
                    <Item>Дата рождения: {userInfo?.DateOfBirth}</Item>
                </Grid>
            </Grid>
        </Box>

    );
}

const mapStateToProps = (state) => ({
    userInfo: state.profile.userInfo
})

export default connect(mapStateToProps, null)(CurrentUser)