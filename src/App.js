import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import PrimarySearchAppBar from './components/Header/HeaderTest';


const App = () => {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <Header /> */}
        <PrimarySearchAppBar />
        <Main />
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
