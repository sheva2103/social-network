const INITIALIZE_APP = 'INITIALIZE_APP'

let initialState = []

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case INITIALIZE_APP:
            return {...state}
        default:
            return state
    }
}

export default appReducer