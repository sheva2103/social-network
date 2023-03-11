import React from 'react'
import style from './Main.module.css'
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Sidebar = ({setMenuActive}) => {

    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''
    //console.log(window.innerWidth)
    return(
        <nav className={style}>
        
                <div style={{position: 'absolute', right: '20px', top: '10px'}} onClick={() => setMenuActive(false)}>
                    <ArrowBackIcon sx={{display: {xs: 'block', md: 'none'}}}/>
                </div>
            <ul>
                <li><span><NavLink to='/' className={selectedLink}>Главная</NavLink></span></li>
                <li><span><NavLink to='/friends' className={selectedLink}>Друзья</NavLink></span></li>
                <li><span><NavLink to='/messages' className={selectedLink}>Сообщения</NavLink></span></li>
                <li><span><NavLink to='/photos' className={selectedLink}>Фотографии</NavLink></span></li>
            </ul>
            
        </nav>
    )
}

export default Sidebar