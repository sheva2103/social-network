import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import BasicModal, { MODAL_AUTH } from './components/modal/Modal';
import { getAuth, setPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import { connect } from 'react-redux';
import { useLocalStorage } from './components/common/hooks/hooks';
import Preloader from './components/common/Preloader';
import { initializedApp } from './redux/app-reducer'


const App = ({initialized, isAuth, initializedApp, isFetching}) => {
  console.log(isAuth)

  let [menuActive, setMenuActive] = useState(false)
  //let [modalOpen, setModalOpen] = useState(false)
  let [modalOpen, setModalOpen] = useState({isOpen: false, type: null})

  const [autoLogin, setAutoLogin] = useLocalStorage(isAuth)
  useEffect(() => {
    initializedApp(autoLogin)
  }, [])

  if(initialized) return <Preloader isFetching={initialized}/>
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header menuActive={menuActive} setMenuActive={setMenuActive} setModalOpen={setModalOpen} modalOpen={modalOpen} />
        <Main menuActive={menuActive} setMenuActive={setMenuActive} setAutoLogin={setAutoLogin} />
        <BasicModal modalOpen={modalOpen} setModalOpen={setModalOpen} isFetching={isFetching} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  }
}

export default connect(mapStateToProps, {initializedApp})(App)
