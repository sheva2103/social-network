import {signIn} from './authReducer'

const INITIALIZE_APP = 'INITIALIZE_APP'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case INITIALIZE_APP:
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

export const initializedSuccess = (initialized) => ({type: INITIALIZE_APP, initialized})
export const initializedApp = (value) => (dispatch) => {
    dispatch(initializedSuccess(true))
    if(value) {
        const autoAuth = dispatch(signIn(value.email, value.password))
        Promise.all([autoAuth])
            //.then(() => dispatch(initializedSuccess(false)))
            .finally(() => dispatch(initializedSuccess(false)))
    } else dispatch(initializedSuccess(false))
}

export default appReducer