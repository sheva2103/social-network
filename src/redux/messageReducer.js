const GET_MESSAGES = 'GET_MESSAGES'
let initialState = {
    
}

const showMessagesUser = (arrMessUser) => {
    let messages = []
    arrMessUser.forEach(item => {
        //debugger
        let user = item.messages[0].fullName
        let login = item.messages[0].login
        let messagesArr = []
        item.messages.forEach(el => messagesArr.push(el))
        messages.push({user: user, login: login ,messages: messagesArr})
    })
    return messages
}

const messageReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_MESSAGES:
            //console.log(showMessagesUser(action.messages))
            return {...state, messages: showMessagesUser(action.messages) }
        default:
            return state
    }
}

export const getMessages = (messages) => ({type: GET_MESSAGES, messages})

export default messageReducer