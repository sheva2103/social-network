import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Friends from './Friends/Friends';
import style from './Main.module.css'
import Profile from './Profile/Profile';
import Sidebar from './Sidebar';
import Messages from './Messages/Messages';
import Photos from './Photos/Photos';

const Main = () => {

    return(
        <main className={style.main}>
            <div className={style.main_navbar}>
                <Sidebar />
            </div>
            <div className={style.main_container}>
                <Routes>
                    <Route path='/' element={<Profile />}/>
                    <Route path='/friends' element={<Friends />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/photos' element={<Photos />} />
                </Routes>
            </div>
        </main>
    )
}

export default Main