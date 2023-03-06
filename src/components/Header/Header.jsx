import { Grid } from '@mui/material';
import React from 'react';
import style from './Header.module.css'

const Header = (props) => {

  return (
    <header className={style.header}>
      <div className={style.container}>
        {/* <div className={style.item}>fffff</div>
        <div className={style.item}>ggggggg</div> */}
        <Grid container>
          <Grid item xs={'auto'}>
            123
          </Grid>
          <Grid item xs={true}>
            7777777777
          </Grid>
        </Grid>
      </div>
    </header>
  )
}

export default Header