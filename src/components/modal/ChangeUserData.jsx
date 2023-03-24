import { Box } from '@mui/system';
import React from 'react'
import { Field, Form } from 'react-final-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { changeUserInfo } from '../../redux/profileReducer';

const SAVE = 'Сохранить'

const ChangeUserData = ({userInfo, changeUserInfo, currentUser, setModalOpen}) => {
    const onSubmit = (data) => {
        changeUserInfo(currentUser, data, setModalOpen)
    }

    return ( 
        <Box sx={{width: '100%'}}>
            <Form onSubmit={onSubmit} 
            initialValues={{name: userInfo.name, city: userInfo.city, DateOfBirth: userInfo.DateOfBirth, linkUserPhoto: userInfo.linkUserPhoto}}
            render={({handleSubmit}) => {
                return <form onSubmit={handleSubmit}>
                    <Field name='name'>{props => {
                        //console.log(props)
                        return <TextField   name={props.input.name}
                                            fullWidth 
                                            margin='normal' 
                                            id="filled-basic" 
                                            label="Имя" 
                                            variant="filled" 
                                            color='neutral' 
                                            sx={{'& input': {color: 'orange'}}} 
                                            value={props.input.value} 
                                            onChange={props.input.onChange}/>
            }       }</Field>
                    <Field name='city'>{props => (
                        <TextField  name={props.input.name} 
                                    fullWidth 
                                    margin='normal' 
                                    id="filled-basic" 
                                    label='Город' 
                                    variant="filled" 
                                    color='neutral' 
                                    sx={{'& input': {color: 'orange'}}}
                                    value={props.input.value} 
                                    onChange={props.input.onChange}/>
                    )}
                    </Field>
                    <Field name='DateOfBirth'>{props => (
                        <TextField  name={props.input.name} 
                                    fullWidth 
                                    margin='normal' 
                                    id="filled-basic" 
                                    label="Дата рождения" 
                                    variant="filled" 
                                    color='neutral' 
                                    sx={{'& input': {color: 'orange'}}}
                                    value={props.input.value} 
                                    onChange={props.input.onChange}/>
                    )}
                    </Field>
                    <Field name='linkUserPhoto'>{props => (
                        <TextField  name={props.input.name}
                                    fullWidth margin='normal' 
                                    id="filled-basic" 
                                    label="Ссылка на аватар" 
                                    variant="filled" 
                                    color='neutral' 
                                    sx={{'& input': {color: 'orange'}}}
                                    value={props.input.value} 
                                    onChange={props.input.onChange}/>
                    )}
                    </Field>
                    <Button variant="contained" type='submit'>{SAVE}</Button>
                </form>
            }}>
            </Form>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.currentUserData.userInfo,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, { changeUserInfo })(ChangeUserData)