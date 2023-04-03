
//const GET_MESSAGES = 'GET_MESSAGES'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_DIALOGS_LIST = 'SET_DIALOGS_LIST'

let initialState = {
    dialogsList: [],
    messages: []
}

const showMessagesUser = (arrMessUser) => {
    let messages = []
    arrMessUser.forEach(item => {
        //debugger
        let user = item.messages[0].fullName || 89
        let login = item.messages[0].login
        let messagesArr = []
        item.messages.forEach(el => messagesArr.push(el))
        messages.push({user: user, login: login ,messages: messagesArr})
    })
    return messages
}

const messageReducer = (state = initialState, action) => {

    switch(action.type) {
        // case GET_MESSAGES:
        //     //console.log(showMessagesUser(action.messages))
        //     return {...state, messages: showMessagesUser(action.messages) }
        
        case SET_DIALOGS_LIST:
            return {...state, dialogsList: action.dialogsList}
        case SET_MESSAGES:
            return {...state, messages: action.messages}
        default:
            return state
    }
}

//export const getMessages = (messages) => ({type: GET_MESSAGES, messages})
export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const setDialogsList = (dialogsList) => ({type: SET_DIALOGS_LIST, dialogsList})

export default messageReducer