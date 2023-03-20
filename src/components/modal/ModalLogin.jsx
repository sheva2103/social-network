import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { Form, Field } from 'react-final-form'
import { validate } from '../common/formControl/validators';
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { registrationNewUser, signIn } from '../../redux/authReducer';
import { getError } from './../../redux/selectors/selectors';
import SignInForm from '../common/formControl/SignInForm';
import SignUpForm from '../common/formControl/SignUpForm';
// import SignInForm from './../common/formControl/SignInForm';
// import SignUpForm from './../common/formControl/SignUpForm';

export const SIGN_IN = 'Войти'
export const SIGN_UP = 'Регистрация'

/////////////////////////////////////////////////////////////////
function LoginFormContainer({registrationNewUser, newUserEmail, setModalOpen, signIn}) {
  const [activeTabs, setActiveTabs] = useState('Войти')

  const onSubmit = (data) => {                                         //////// ВНИМАНИЕ. Тут ,возможно, нужно будет вынести эту ф-ю за пределы компоненты  
    if(activeTabs === SIGN_UP) return registrationNewUser(data.login, data.password)
    if(activeTabs === SIGN_IN) {
          return signIn(data.login, data.password, setModalOpen)
    }}
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2} justifyContent={'space-around'}> 
        <Grid item>
            <Typography variant="h6"
                gutterBottom
                sx={activeTabs === SIGN_IN ? { borderBottom: 'solid 2px orange', cursor: 'pointer'} : {cursor: 'pointer', color: '#fff'} }
                onClick={() => setActiveTabs(SIGN_IN)}
              >Войти
            </Typography>
        </Grid>
        <Grid item>
            <Typography variant="h6"
                gutterBottom
                sx={activeTabs === SIGN_UP? { borderBottom: 'solid 2px orange', cursor: 'pointer'} : {cursor: 'pointer', color: '#fff'} }
                onClick={() => setActiveTabs(SIGN_UP)}
              >Регистрация
            </Typography>
        </Grid>
      </Grid>
      {activeTabs === SIGN_IN && <SignInForm onSubmit={onSubmit} newUserEmail={newUserEmail} activeTabs={activeTabs} />}  
      {activeTabs === SIGN_UP && <SignUpForm onSubmit={onSubmit} newUserEmail={newUserEmail} activeTabs={activeTabs} />}


    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    newUserEmail: state.auth.newUserEmail,
    //errorMessage: state.auth.errorMessage
    errorMessage: getError(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    registrationNewUser: (email, password) => {
        return dispatch(registrationNewUser(email, password))
    },
    signIn: (email, password, setModalOpen) => {
      return dispatch(signIn(email, password, setModalOpen))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)