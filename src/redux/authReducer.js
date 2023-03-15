import { authAPI } from "../api/api"

const REGISTRATION_NEW_USER = 'REGISTRATION_NEW_USER'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const SIGN_IN = 'SIGN_IN'
const IS_FETCHING_AUTH = 'IS_FETCHING_AUTH'

const initialState = {
    isAuth: false,
    newUserEmail: false,
    currentUser: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case REGISTRATION_NEW_USER:
            return {...state, newUserEmail: action.payload}
        case REGISTRATION_SUCCESS:
            return {...state, registrationSuccess: action.registrationSuccess}
        case SIGN_IN:
            // return {...state, currentUser: action.login, isAuth: true}
            let index = action.login.indexOf('@')
            return {...state, isAuth: true, currentUser: action.login.substring(0, index)}
        case IS_FETCHING_AUTH:
            return {...state, isFetching: action.isFetching}
        default: return state
    }
}

const isFetchingAuthAC = (isFetching) => ({type: IS_FETCHING_AUTH, isFetching})
const registrationNewUserAC = (email) => ({type: REGISTRATION_NEW_USER, payload: email})
export const registrationNewUser = (email, password) => (dispatch) => {
    dispatch(isFetchingAuthAC(true))
    authAPI.signUp(email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            //console.log('успех', user)
            //console.log(userCredential)
            dispatch(registrationNewUserAC(user.email))
            //dispatch(registrationSuccess(true))
            dispatch(isFetchingAuthAC(false))
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

const signInAC = (login) => ({type: SIGN_IN, login})
export const signIn = (email, password, setModalOpen) => (dispatch) => {
    dispatch(isFetchingAuthAC(true))
    authAPI.signIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('вход выполнен' ,user)
            dispatch(signInAC(user.email))
            dispatch(isFetchingAuthAC(false))
            setModalOpen(false)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

export default authReducer