import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { useState } from 'react';
import Header from './components/Header/Header';
import BasicModal from './components/modal/Modal';


const App = () => {
  
  let [menuActive, setMenuActive] = useState(false)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
        <Main menuActive={menuActive} setMenuActive={setMenuActive}/>
        <BasicModal />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
