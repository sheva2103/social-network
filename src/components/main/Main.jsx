import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Friends from './Friends/Friends';
import style from './Main.module.css'
import Profile from './Profile/Profile';
import Sidebar from './Sidebar';
import Messages from './Messages/Messages';
import Photos from './Photos/Photos';
import SearchPage from './Search/SearchPage';
import { connect } from 'react-redux';
import StartPage from '../startPage/StartPage';

const Main = ({menuActive, setMenuActive, setAutoLogin, currentUser, isAuth, setModalOpen}) => {

    return(
        <main className={style.main} onClick={() => setMenuActive(false)}> 
            {isAuth && 
                <div className={!menuActive ? style.main_navbar : `${style.main_navbar} ${style.main_navbar_active}`} onClick={(e) => e.stopPropagation()}>
                    <Sidebar setMenuActive={setMenuActive} setAutoLogin={setAutoLogin} currentUser={currentUser}/>
                </div>}
            <div className={style.main_container}>
                <Routes>
                    <Route path='/' element={<StartPage setModalOpen={setModalOpen} isAuth={isAuth} currentUser={currentUser}/>}/>
                    <Route path={`/profile/:user`} element={<Profile />}/>
                    <Route path='/friends/:user' element={<Friends isAuth={isAuth}/>} />
                    <Route path='/messages/:user/*' element={<Messages isAuth={isAuth}/>} />
                    <Route path='/photos/:user' element={<Photos setModalOpen={setModalOpen}/>} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </div>
        </main>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, null)(Main)