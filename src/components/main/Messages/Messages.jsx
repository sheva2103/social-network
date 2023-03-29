import React, { useEffect, useState } from 'react'

import { doc, onSnapshot } from "firebase/firestore";
import { db } from './../../../firebase';
import { connect } from 'react-redux';
import { getMessages } from './../../../redux/messageReducer';
import Dialogs from './Dialogs';
import { useParams } from 'react-router-dom';

const Messages = ({getMessages, dialogs}) => {
    
    
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "users", "test3"), (doc) => {
            console.log("Current data: ", doc.data().messages);
            getMessages(doc.data().messages)
        });
    },[])
    
    return ( 
        <div>
            {dialogs && <Dialogs dialogs={dialogs}/>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    dialogs:state.messages.messages
})
export default connect(mapStateToProps, {getMessages})(Messages)