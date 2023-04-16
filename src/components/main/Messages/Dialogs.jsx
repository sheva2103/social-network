import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { NavLink, Route, Routes, useParams, useLocation, useNavigate } from 'react-router-dom';
import style from './Messages.module.css'
import DialogElement from './DialogElement';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


const Dialogs = ({dialogs, currentUser, currentUserFullName}) => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const navigate = useNavigate()
    const selectedLink = ({isActive}) => isActive ? style.activeLink : ''
    return ( 

        <Box>
            {dialogs.length === 0 && <Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>У вас пока что нет сообщений</Typography>}
            <Grid container spacing={2}>
                <Grid item xs={dialogOpen ? 1 : 10} md={'auto'}>
                    {dialogOpen ?
                        <SkipPreviousIcon onClick={() => {
                            navigate(-1)
                            setDialogOpen(false)
                        }}/>
                    :
                    <ul style={{listStyle: 'none'}}>
                        {dialogs && dialogs.map(user => (
                            <li key={user.login}><Typography variant="h6" gutterBottom sx={{color: 'rgb(233, 233, 233)'}}>
                                    <NavLink to={`${user.login}`} 
                                                className={selectedLink}
                                                onClick={() => {
                                                    if(window.innerWidth < 900) setDialogOpen(true)
                                                }}>{user.fullNameAddressee.trim().length !== 0 ? user.fullNameAddressee : user.login}</NavLink>
                                </Typography>
                            </li>
                        ))}
                    </ul>
                    }
                </Grid>
                <Grid item xs={dialogOpen ? 11 : 2} md={true}>
                    <Routes>
                        {dialogs.map(user => (
                            <Route key={user.login} path={`/:companion`} element={<DialogElement 
                                                                                        //dialog={user.messages} 
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