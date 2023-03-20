import React from 'react'
import { validate } from './validators'
import { Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Form, Field } from 'react-final-form'

//const ERROR_PASS = 'auth/wrong-password'
//const ERROR_LOG = 'auth/user-not-found'
const ERROR_SIGN_IN = 'Имя пользователя или пароль введён неверно'

const SignInForm = ({onSubmit, newUserEmail, activeTabs}) => {
    return ( 
        <Form onSubmit={onSubmit}
                initialValues={newUserEmail ? {login: newUserEmail, password: ''} : {login: '', password: ''}}  
                validate={(value) => validate(value, activeTabs)}
                render={({ handleSubmit, submitError, ...props }) => {
                    //console.log(submitError, props)
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
                            {submitError && <Grid item>
                                                <Typography variant="body2" color={'error'} gutterBottom>{ERROR_SIGN_IN}</Typography>
                                            </Grid>}
                        <Grid item xs={12}>
                            <Button variant="contained" type='submit'>{activeTabs}</Button>
                        </Grid>
                    </Grid>
                    </form>
}}>
            </Form>
    )
}

export default SignInForm
