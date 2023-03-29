const GET_MESSAGES = 'GET_MESSAGES'
let initialState = {
    
}

const messageReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_MESSAGES:
            return {...state, messages: {...action.messages}}
        default:
            return state
    }
}

export const getMessages = (messages) => ({type: GET_MESSAGES, messages})

export default messageReducer