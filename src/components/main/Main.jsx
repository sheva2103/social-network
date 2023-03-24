import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Friends from './Friends/Friends';
import style from './Main.module.css'
import Profile from './Profile/Profile';
import Sidebar from './Sidebar';
import Messages from './Messages/Messages';
import Photos from './Photos/Photos';
import SearchPage from './Search/SearchPage';
import { connect } from 'react-redux';

const Main = ({menuActive, setMenuActive, setAutoLogin, currentUser}) => {

    let navigate = useNavigate()

    // useEffect(() => {
    //     navigate(`profile/${currentUser}`)
    // },[])

    return(
        <main className={style.main} onClick={() => setMenuActive(false)}> 
            <div className={!menuActive ? style.main_navbar : `${style.main_navbar} ${style.main_navbar_active}`} onClick={(e) => e.stopPropagation()}>
                <Sidebar setMenuActive={setMenuActive} setAutoLogin={setAutoLogin} currentUser={currentUser}/>
            </div>
            <div className={style.main_container}>
                <Routes>
                    <Route path={`/profile/:user`} element={<Profile />}/>
                    <Route path='/friends/*' element={<Friends />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/photos' element={<Photos />} />
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