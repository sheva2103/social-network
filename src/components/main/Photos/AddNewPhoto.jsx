import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material';
import { photoAPI } from '../../../api/api';
import { connect } from 'react-redux';
import { addNewPhotoToState } from '../../../redux/profileReducer'

const AddNewPhoto = ({currentUser, addNewPhotoToState}) => {

    const [imageLink, setImageLink ] = useState('')

    return(
        <Grid container spacing={2} zIndex={5} alignItems='center'>                                
                <Grid item xs={12} lg={10} alignItems={'center'}>                                    
                    <TextField fullWidth sx={{padding: '8px 8px 8px 0px',
                                                        '& input': {borderBottom: 'solid 1px orange', color: 'orange'},
                                                        '& label': {color: 'orange'}}}
                                                id="filled-basic" label="Добавить изображение" variant="filled" color='neutral'
                                                value={imageLink}
                                                onChange={(e) => setImageLink(e.target.value)}/>
                </Grid>
                <Grid item xs={12} lg={2} justifyContent={'center'} alignItems={'center'}>
                    <Button variant="contained" 
                            color='button' sx={{padding: '8px', width: '100%'}} 
                            onClick={(e) => {
                                    if(imageLink.length < 10) return
                                    photoAPI.addPhoto({link: imageLink, likes: []}, currentUser)        
                                    setImageLink('')
                                    addNewPhotoToState({link: imageLink, likes: []})
                                    }}
                                    >Добавить</Button>
                </Grid>
            </Grid>
    )
} 

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, {addNewPhotoToState})(AddNewPhoto)