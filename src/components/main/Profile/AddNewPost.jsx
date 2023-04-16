import React from 'react'
//import style from './Profile.module.css'
import Grid from '@mui/material/Grid'
import { Avatar, Box, Button, Stack, TextField } from '@mui/material'
import i from '../../../../src/logo.svg'
import { connect } from 'react-redux'
import { Field, Form } from 'react-final-form'
import { addNewPost } from './../../../redux/profileReducer';
import { CHANGE_PERSONAL_DATA } from '../../modal/Modal'

const AddNewPost = ({userPhoto, addNewPost, currentUser, isAuth, setModalOpen, fullName}) => {
    
    const onSubmit = (data) => {
        //let dateSubmit = new Date().toLocaleString()
        //console.log({post: data.newPost, date: new Date().toLocaleString()})
        if(fullName.length === 0) {
            setModalOpen({isOpen: true, type: CHANGE_PERSONAL_DATA})
            return
        }
        return addNewPost({post: data.newPost, date: new Date().toLocaleString()}, currentUser)
    }
    if(!isAuth) return
    return ( 
        <Box sx={{ flexGrow: 1, padding: '8px' }}>
            <Form   onSubmit={onSubmit}
                    
                    render={({handleSubmit, form, submitting }) => (
                        <form onSubmit={(ev) => handleSubmit(ev).then(() => form.reset())}>
                            <Grid container spacing={2} zIndex={5} sx={{padding: '8px'}}>
                                <Grid container item xs={1} lg={1} justifyContent={'center'} alignItems={'center'}>
                                    <Stack spacing={2} sx={{padding: '8px'}}>
                                        <Avatar alt='logo' src={userPhoto || i}/>
                                    </Stack>
                                </Grid>
                                <Grid container item xs={11} lg={9} alignItems={'center'}>
                                    <Field name='newPost'>{props => (
                                        <TextField fullWidth sx={{padding: '8px',
                                                                '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                                                '& label': {color: 'orange'}}}
                                                    id="filled-basic" label="Новый пост" variant="filled" color='neutral'
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}/>
                                    )}
                                    </Field>
                                    {/* <TextField fullWidth sx={{padding: '8px',
                                                            '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                                            '& label': {color: 'orange'}}}
                                        id="filled-basic" label="Новый пост" variant="filled" color='neutral'/> */}
                                </Grid>
                                <Grid container item xs={12} lg={2} justifyContent={'center'} alignItems={'center'}>
                                    <Button disabled={submitting} variant="contained" color='button' sx={{padding: 'auto'}} type='submit'>Отправить</Button>
                                </Grid>
                            </Grid>
                        </form>
                    )}>
            </Form>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    userPhoto: state.profile.userInfo.linkUserPhoto,
    currentUser: state.auth.currentUser,
    isAuth: state.auth.isAuth,
    fullName: state.auth.currentUserData?.userInfo.name
})

export default connect(mapStateToProps, {addNewPost})(AddNewPost)