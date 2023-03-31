import React from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { NavLink, Route, Routes, useParams, useLocation } from 'react-router-dom';
import style from './Messages.module.css'
import DialogElement from './DialogElement';


const Dialogs = ({dialogs, currentUser, currentUserFullName}) => {

    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''
    return ( 

        <Box>
            <Grid container>
                <Grid item xs={4}>
                    <ul style={{listStyle: 'none'}}>
                        {dialogs && dialogs.map(user => (
                            <li key={user.user}><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                    <NavLink to={`${user.login}`} className={selectedLink}>{user.user}</NavLink>
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={8}>
                    <Routes>
                        {dialogs.map(user => (
                            <Route key={user.login} path={`${user.login}`} element={<DialogElement 
                                                                                        dialog={user.messages} 
                                                                                        currentUser={currentUser}
                                                                                        fullName={currentUserFullName}
                                                                                        addressee={user.login}/>}/>
                            ))}
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dialogs;