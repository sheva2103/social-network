import React from 'react'
import { validate } from './validators'
import { Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Form, Field } from 'react-final-form'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { SIGN_UP } from '../../modal/ModalLogin';

const EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use'
const ERROR_EMAIL = 'Электронная почта уже зарегистрирована'

const SignUpForm = ({onSubmit, newUserEmail, activeTabs}) => {
    return ( 
        <>
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
                validate={(value) => validate(value, activeTabs)}
                render={({ handleSubmit, submitError, ...props }) => {
                    console.log(submitError, props)
                    return <form onSubmit={handleSubmit}>
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
                            </Grid>
                            {submitError && <Grid item><Typography variant="body2" color={'error'} gutterBottom>{submitError === EMAIL_ALREADY_IN_USE && ERROR_EMAIL}</Typography></Grid>}
                            <Grid item xs={12}>
                                <Button variant="contained" type='submit'>{activeTabs}</Button>
                            </Grid>
                        </Grid>
                    </form>
}}>
            </Form>
}
            </>
    )
}

export default SignUpForm
