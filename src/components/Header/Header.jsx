import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import i from '../../logo.svg'
import { registrationNewUser, signIn } from '../../redux/authReducer';
import { connect } from 'react-redux';
import BasicModal from './../modal/Modal';

export const MODAL_AUTH = 'MODAL_AUTH'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function Header({setMenuActive, isAuth, setModalOpen, registrationNewUser, modalOpen, signIn, isFetching, currentUser, ...props}) {
//console.log(props)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='header'>
        <Grid container justifyContent={'center'}>
          <Grid item xs={true}>
                  <Toolbar>
                  <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 0, pt: "16px", display: { xs: 'block', md: 'none' } }}
                  onClick={() => setMenuActive(true)}
                  >
                <MenuIcon />
              </IconButton>
              <Typography variant={window.innerWidth < 400 ? 'body2' : 'h6'} sx={{mr: '8px'}}>MINISOCIALNETWORK</Typography>
                <Search onChange={(e) => console.log(e.target.value)} >
                  
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <SearchIcon sx={{ml: '10px', cursor: 'pointer'}} onClick={() => console.log(7777)}/>
                
              </Toolbar>
              
          </Grid>
          <Grid item xs={'auto'} alignSelf={'center'} sx={{mr: '10px'}}>
          
          {isAuth ?
            <Grid container>
              <Typography variant="h6" gutterBottom sx={{margin: '0 8px 0 8px'}}>{currentUser}</Typography>
              <Avatar alt="user img" src={i} /> 
            </Grid>
            : 
            <Button variant="contained" color="exitButton" onClick={ ()=> setModalOpen(true) }>Войти</Button>}
        
          </Grid>
        </Grid>
      </AppBar>
      {modalOpen && <BasicModal typeModal={MODAL_AUTH} modalOpen={modalOpen} setModalOpen={setModalOpen} registrationNewUser={registrationNewUser} signIn={signIn} isFetching={isFetching}/>}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    currentUser: state.auth.currentUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    registrationNewUser: (email, password) => {
        dispatch(registrationNewUser(email, password))
    },
    signIn: (email, password, setModalOpen) => {
      dispatch(signIn(email, password, setModalOpen))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)