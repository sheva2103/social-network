//import { createTheme } from "@mui/system";
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
            neutral: {
                main: 'orange',
                contrastText: '#fff',
            },
            button: {
                main: 'rgb(3, 149, 216)',
                contrastText: '#fff'
            },
            exitButton: {
                main: 'orange',
                contrastText: 'rgb(32, 32, 32)'
            },
            currentUser: {
                main: '#fff',
                contrastText: '#fff'
            },
            header: {
                main: '#282c34',
                contrastText: '#fff'
            }
    },
})

export default theme