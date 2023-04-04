import React, { useEffect } from 'react'

import { doc, onSnapshot  } from "firebase/firestore";
import { db } from './../../../firebase';
import { connect } from 'react-redux';
import { setDialogsList } from './../../../redux/messageReducer';
import Dialogs from './Dialogs';
import { Navigate, useParams } from 'react-router-dom';

const Messages = ({setDialogsList, dialogs, currentUser, currentUserFullName, isAuth}) => {

    let {user} = useParams()
    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'users', user), (doc) => {
            //console.log("Current data: ", doc.data().dialogs);
            setDialogsList(doc.data().dialogs)
        });

    },[])

    if(!isAuth) return <Navigate to={`/`}/>
    
    return ( 
        <div>
            {dialogs && <Dialogs dialogs={dialogs} currentUser={currentUser} currentUserFullName={currentUserFullName}/>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    dialogs:state.messages.dialogsList,
    //dialogs: state.auth.currentUserData?.dialogs,
    currentUser: state.auth.currentUser,
    currentUserFullName: state.auth.currentUserData?.userInfo.name
})
export default connect(mapStateToProps, {setDialogsList})(Messages)