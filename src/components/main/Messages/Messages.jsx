import React, { useEffect, useState } from 'react'

import { doc, onSnapshot ,collection, query, where, getDocs } from "firebase/firestore";
import { db } from './../../../firebase';
import { connect } from 'react-redux';
import { setDialogsList } from './../../../redux/messageReducer';
import Dialogs from './Dialogs';
import { useParams } from 'react-router-dom';
import { messageAPI } from '../../../api/api';

const Messages = ({setDialogsList, dialogs, currentUser, currentUserFullName}) => {
    let {user} = useParams()
    useEffect(() => {
//         const q = query(collection(db, `${user}Messages`));
//         const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const messages = [];
//             querySnapshot.forEach((doc) => {
//             messages.push(doc.data());
//     });
//     console.log(messages)
//     setDialogsList(messages)
// });
        const unsub = onSnapshot(doc(db, 'users', user), (doc) => {
            //console.log("Current data: ", doc.data().dialogs);
            setDialogsList(doc.data().dialogs)
        });

    },[])
    useEffect(() => {

    }, [currentUser])
    
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