import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { NavLink, Route, Routes, useParams, useLocation } from 'react-router-dom';
import style from './Messages.module.css'
import DialogElement from './DialogElement';


const Dialogs = ({dialogs}) => {
    console.log(dialogs)
    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''

    return ( 

        <Box>
            <Grid container>
                <Grid item xs={4}>
                    <ul style={{listStyle: 'none'}}>
                        {/* <li><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                <NavLink to={'/messages/test2'} className={selectedLink}>h4. Heading</NavLink>
                            </Typography>
                        </li>
                        <li><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                <NavLink to={'/messages/test3'} className={selectedLink}>h4. Heading</NavLink>
                            </Typography></li>
                        <li><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                <NavLink to={'/messages/test4'} className={selectedLink}>h4. Heading</NavLink>
                            </Typography></li>
                        <li><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                <NavLink to={'/messages/test5'} className={selectedLink}>h4. Heading</NavLink>
                            </Typography></li> */}
                            
                        {dialogs && Object.keys(dialogs).map(user => (
                            <li key={user}><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                    <NavLink to={`${user}`} className={selectedLink}>{user}</NavLink>
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={8}>
                    <Routes>
                        {/* <Route path={`test2`} element={<DialogElement />}/> */}
                        {Object.keys(dialogs).map(user => (
                            <Route key={user} path={`${user}`} element={<DialogElement dialog={dialogs[user]}/>}/>
                        ))}
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dialogs;