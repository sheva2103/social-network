import React from 'react'
import style from './Main.module.css'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''

    return(
        <nav className={style}>
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