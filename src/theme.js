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
            }
    },
})

export default theme