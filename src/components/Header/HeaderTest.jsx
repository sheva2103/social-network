import { Grid } from '@mui/material';
import React from 'react';
import style from './Header.module.css'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Search from './Header';
import AddNewPost from '../main/Profile/AddNewPost';


const Header = ({menuActive, setMenuActive}) => {


  return (
    <header className={style.header} onClick={() => {menuActive && setMenuActive(false)}}>
      <div className={style.container}>
        {/* <div className={style.item}>fffff</div>
        <div className={style.item}>ggggggg</div> */}
        <Grid container>
          {window.innerWidth <= 900 && 
          <Grid item xs={'auto'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ margin: '8px'}}
            onClick={() => setMenuActive(!menuActive)}
          >
            <MenuIcon />
          </IconButton>
        </Grid>}
          <Grid container item xs={true} justifyContent={'space-between'} alignItems={'center'}>
              <Grid item md={10} xs={12}>
                  <Search setMenuActive={setMenuActive}/>
                  {/* <input type='text'></input> */}
                  {/* <AddNewPost /> */}
              </Grid>
              <Grid item md={2} xs={12} sx={{textAlign: 'end', paddingRight: '10px'}}>
                <Box sx={{padding: '8px'}}>
                <Button variant="contained" endIcon={<SendIcon />} color='exitButton'>
                  выйти
                </Button>
                </Box>
              </Grid>
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

export default Header