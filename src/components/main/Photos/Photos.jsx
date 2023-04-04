import React, { useEffect } from 'react'
import { Box } from '@mui/system';
import PhotosList from './PhotosList';
import AddNewPhoto from './AddNewPhoto';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserData } from './../../../redux/profileReducer';



const Photos = ({setModalOpen, getUserData, photos, isAuth, currentUser}) => {
    let {user} = useParams()
    useEffect(() => {
        getUserData(user)
    },[user])
    
    return ( 
        <Box sx={{padding: '8px', margin: '8px'}}>
            {isAuth && currentUser === user && <AddNewPhoto />}
            <PhotosList setModalOpen={setModalOpen} photos={photos} currentUser={currentUser}/>
        </Box>
        
    );
}

const mapStateToProps = (state) => ({
    photos: state.profile.photos,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.currentUser
})

export default connect(mapStateToProps, {getUserData})(Photos)