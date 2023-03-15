import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { Form, Field } from 'react-final-form'
import { validate } from '../common/formControl/validators';
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SIGN_IN = 'Войти'
const SIGN_UP = 'Регистрация'
/////////////////////////////////////////////////////////////////
function LoginFormContainer({registrationNewUser, newUserEmail, setModalOpen, signIn, isFetching}) {
  //console.log(setModalOpen)
  const [activeTabs, setActiveTabs] = useState('Войти')
  const onSubmit = (data) => {                                         //////// ВНИМАНИЕ. Тут ,возможно, нужно будет вынести эту ф-ю за пределы компоненты
    if(activeTabs === SIGN_UP) registrationNewUser(data.login, data.password)
    if(activeTabs === SIGN_IN) signIn(data.login, data.password, setModalOpen)
    console.log(data)
    //registrationNewUser(data.login, data.password)
}
  
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
      {newUserEmail && activeTabs === SIGN_UP ? 
            <Box sx={{textAlign: 'center'}}>
                <Grid container direction={'column'} mt={2}>
                  <Grid item>
                      <CheckCircleIcon color='success' fontSize='large'/>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom>
                        Вы зарегистртрованы
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
            : 
            <Form onSubmit={onSubmit}
                initialValues={newUserEmail ? {login: newUserEmail, password: ''} : {login: '', password: ''}}
                validate={validate}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Grid container direction={'column'} spacing={2}>
                        <Grid item xs={12}>
                          <Field name='login'>
                          {props => (
                                  <TextField
                                    name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}
                                    fullWidth
                                    placeholder='Логин'
                                    error={props.meta.touched && props.meta.invalid}
                                    helperText={props.meta.touched && props.meta.error}
                                  />
                              )}
                          </Field>
                        </Grid>
                        <Grid item xs={12}>
                          <Field name='password'>
                            {props => {
                                    return <TextField
                                      name={props.input.name}
                                      value={props.input.value}
                                      onChange={props.input.onChange}
                                      type='password'
                                      fullWidth
                                      placeholder='Пароль'
                                      error={props.meta.touched && props.meta.invalid}
                                      helperText={props.meta.touched && props.meta.error}
                                    />
                            }}
                          </Field>
                        </Grid>
                        {activeTabs === SIGN_UP &&
                            <Grid item xs={12}>
                            <Field name='confirmPassword'>
                              {props => {
                                      return <TextField
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                        type='password'
                                        fullWidth
                                        placeholder='Подтвердить пароль'
                                        error={props.meta.touched && props.meta.invalid}
                                        helperText={props.meta.touched && props.meta.error}
                                      />
                              }}
                            </Field>
                          </Grid>}
                        <Grid item xs={12}>
                          <Button variant="contained" type='submit'>{activeTabs}</Button>
                        </Grid>
                      </Grid>
                    </form>
                  )}>
            </Form>
        }


    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    newUserEmail: state.auth.newUserEmail
  }
}

export default connect(mapStateToProps, null)(LoginFormContainer)