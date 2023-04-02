import React, { useEffect, useState } from 'react'

import { doc, onSnapshot ,collection, query } from "firebase/firestore";
import { db } from './../../../firebase';
import { connect } from 'react-redux';
import { getMessages } from './../../../redux/messageReducer';
import Dialogs from './Dialogs';
import { useParams } from 'react-router-dom';

const Messages = ({getMessages, dialogs, currentUser, currentUserFullName}) => {
        //console.log(dialogs)
    
    useEffect(() => {
        // const unsub = onSnapshot(doc(db, `${currentUser}Messages`, "test3"), (doc) => {
        //     console.log("Current data: ", doc.data().messages);
        //     getMessages(doc.data().messages)
        // });
        const q = query(collection(db, `${currentUser}Messages`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = [];
            querySnapshot.forEach((doc) => {
            messages.push(doc.data());
    });
    //console.log("Сообщения: ", messages);
    //console.log(Object.keys(messages))
    getMessages(messages)
});
    },[])
    
    return ( 
        <div>
            {dialogs && <Dialogs dialogs={dialogs} currentUser={currentUser} currentUserFullName={currentUserFullName}/>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    dialogs:state.messages.messages,
    currentUser: state.auth.currentUser,
    currentUserFullName: state.auth.currentUserData?.userInfo.name
})
export default connect(mapStateToProps, {getMessages})(Messages)