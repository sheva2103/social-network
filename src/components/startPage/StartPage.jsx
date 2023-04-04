import { Button, Grid, Typography } from '@mui/material';
import React from 'react'
import style from './StartPage.module.css'
import { MODAL_AUTH } from '../modal/Modal';
import { Navigate } from 'react-router-dom';

const StartPage = ({setModalOpen, isAuth, currentUser}) => {

    if(isAuth) return <Navigate to={`profile/${currentUser}`}/>
    return ( 
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={6} sx={{textAlign: 'center', padding: '8px', color: 'rgb(230, 230, 230)'}}>
            <Typography variant={window.innerWidth < 900 ? 'h5' : 'h4'} sx={{padding: '16px 8px', borderBottom: 'dotted 1px rgb(230, 230, 230)'}}>
                    Добро пожаловать в маленькую презетнационную социальную сеть
                </Typography>
                <Typography variant='h6' gutterBottom sx={{padding: '16px 8px'}}>
                    Здесь вы можете вести свой личный блог, находить друзей и общаться с ними в режиме реального времени.<br />
                    Присутствует возможность добававления фотографий (ссылки на фото) в личную галерею.<br />
                    Вы можете просматривать страницы людей и ихние фотографии не имея регистрации на сайте.<br />
                    Чтоб опробовать все возможности зарегистрируйтесь или войдите со своего аккаунта<br />
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className={style.signInBox}>
                    <img src="https://xaxa-net.ru/uploads/posts/2019-05/1556915171_krasivye-mesta_xaxa-net.ru-24.jpg" alt="111" className={style.backImage}/>
                    <div className={style.signInBoxButton}>
                    <Button variant="contained" onClick={()=> setModalOpen({isOpen: true, type: MODAL_AUTH})}>Вход</Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default StartPage;