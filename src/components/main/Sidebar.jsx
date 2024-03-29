import React from 'react'
import style from './Main.module.css'
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { connect } from 'react-redux';
import { logout } from './../../redux/authReducer';
import { messageAPI } from '../../api/api';
//import { compose } from 'redux'


const Sidebar = ({setMenuActive, setAutoLogin, logout, isAuth, currentUser}) => {

    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''
    //console.log(window.innerWidth)
    return(
        <nav className={style}>
        
                <div style={{position: 'absolute', right: '20px', top: '10px'}} onClick={() => setMenuActive(false)}>
                    <ArrowBackIcon sx={{display: {xs: 'block', md: 'none'}}}/>
                </div>
            <ul>
                <li><span><NavLink to={`/profile/${currentUser}`} className={selectedLink} onClick={() => setMenuActive(false)}>Профиль</NavLink></span></li>
                <li><span><NavLink to={`/friends/${currentUser}`} className={selectedLink} onClick={() => setMenuActive(false)}>Друзья</NavLink></span></li>
                <li><span><NavLink to={`/messages/${currentUser}`} className={selectedLink} onClick={() => setMenuActive(false)}>Сообщения</NavLink></span></li>
                <li><span><NavLink to={`/photos/${currentUser}`} className={selectedLink} onClick={() => setMenuActive(false)}>Фотографии</NavLink></span></li>
                {isAuth && <li><span style={{cursor: 'pointer'}} onClick={() => logout(setAutoLogin)}>Выйти</span></li>}
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(Sidebar)