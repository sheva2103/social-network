import React, { useState } from 'react';
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
import { connect } from 'react-redux';
import { CHANGE_PERSONAL_DATA, MODAL_AUTH } from './../modal/Modal';
import { searchUser } from './../../redux/searchReducer';
import { NavLink } from 'react-router-dom';


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



function Header({setMenuActive, isAuth, setModalOpen, currentUser, userPhoto, searchUser}) {
//console.log(props)
  const [searchValue, setSearchValue] = useState('')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='header'>
        <Grid container alignItems={'center'}>
                {isAuth && 
                                <Grid item xs={'auto'}>
                                <IconButton
                                          size="large"
                                          edge="start"
                                          color="inherit"
                                          aria-label="open drawer"
                                          sx={{ ml: '16px', pt: "16px", display: { xs: 'block', md: 'none' } }}
                                          onClick={() => setMenuActive(true)}
                                        >
                                      <MenuIcon />
                                    </IconButton>
                        </Grid>
                }
                <Grid item xs={true}>
                      <Grid container justifyContent={'end'}>
                          <Grid item xs={12} sm={true}>
                                  <Toolbar>
                                      <NavLink to={'/'}>
                                        <Typography variant={window.innerWidth < 400 ? 'body2' : 'h6'} sx={{mr: '8px'}}>MiniSocNet</Typography>
                                      </NavLink>
                                      <NavLink to={searchValue.length > 1 && '/search'}>
                                          <SearchIcon sx={{ml: '10px', cursor: 'pointer'}} onClick={() => {if(searchValue.length > 1) searchUser(searchValue)}}/>
                                        </NavLink>
                                        <Search onChange={(e) => setSearchValue(e.target.value)} >
                                          <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ 'aria-label': 'search' }}
                                          />
                                        </Search>
                                  </Toolbar>
                          </Grid>
                          <Grid item xs={12} sm={'auto'} alignSelf={'center'} sx={{mr: '10px', textAlign: 'end', paddingRight: '8px', mb: '4px'}}>
                                
                                {isAuth ?
                                  <Grid container sx={{padding: '4px', justifyContent: 'flex-end'}}>
                                    <Typography variant="h6" gutterBottom sx={{margin: '0 8px 0 8px'}}>{currentUser}</Typography>
                                    <Avatar alt="user img" sx={{cursor: 'pointer'}} src={userPhoto || i} onClick={() => setModalOpen({isOpen: true, type: CHANGE_PERSONAL_DATA})}/> 
                                  </Grid>
                                  : 
                                  <Button variant="contained" color="exitButton" onClick={ ()=> setModalOpen({isOpen: true, type: MODAL_AUTH}) }>Войти</Button>}
                              
                          </Grid>
                    </Grid>
                </Grid>
        </Grid>

      </AppBar>
      {/* {modalOpen && <BasicModal 
                      typeModal={MODAL_AUTH} 
                      modalOpen={modalOpen} 
                      setModalOpen={setModalOpen} 
                      isFetching={isFetching}
                      />} */}
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser,
    userPhoto: state.auth.currentUserData?.userInfo?.linkUserPhoto
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (value) => {
      dispatch(searchUser(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)