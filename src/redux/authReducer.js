import { authAPI, profileAPI } from "../api/api"
import { FORM_ERROR } from 'final-form';
import { getUserData, setUserData } from "./profileReducer";

const REGISTRATION_NEW_USER = 'REGISTRATION_NEW_USER'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const SIGN_IN = 'SIGN_IN'
const IS_FETCHING_AUTH = 'IS_FETCHING_AUTH'
const LOGOUT = 'LOGOUT' 


const initialState = {
    isAuth: false,
    newUserEmail: false,
    currentUser: false,
    currentUserInfo: null,
    isFetching: false,
    userID: null,
    userEmail: null,
    token: null
}

export const getName = (email) => {
    let index = email.indexOf('@')
    return email.substring(0, index)
}

const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case REGISTRATION_NEW_USER:
            return {...state, newUserEmail: action.payload}
        case REGISTRATION_SUCCESS:
            return {...state, registrationSuccess: action.registrationSuccess}
        case SIGN_IN:
            //let index = action.email.indexOf('@')
            return {...state, isAuth: true, currentUser: getName(action.email), userID: action.id, userEmail: action.email, token: action.token}
        case IS_FETCHING_AUTH:
            return {...state, isFetching: action.isFetching}
        case LOGOUT: {
            return {...state, isAuth: false, currentUser: false, userEmail: null, userID: null, token: null}
        }
        default: return state
    }
}

export const isFetchingAuthAC = (isFetching) => ({type: IS_FETCHING_AUTH, isFetching})
const registrationNewUserAC = (email) => ({type: REGISTRATION_NEW_USER, payload: email})
const signInAC = (email, id, token) => ({type: SIGN_IN, email, id, token})

export const registrationNewUser = (email, password) => async(dispatch) => {
    dispatch(isFetchingAuthAC(true))
        try {
            const response = await authAPI.signUp(email, password)
            const user = response.user;
            dispatch(registrationNewUserAC(user.email))
            dispatch(isFetchingAuthAC(false))
            await profileAPI.createUserDB(getName(email), email)
        } catch(error)  {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            return { [FORM_ERROR]: errorCode }
        } finally {
            dispatch(isFetchingAuthAC(false))
        }
}

export const signIn = (email, password, setModalOpen) => async(dispatch) => {
    dispatch(isFetchingAuthAC(true))
        try{
            let response = await authAPI.signIn(email, password)
            const user = response.user;
            dispatch(signInAC(user.email, user.uid, user.accessToken))
            if(setModalOpen) setModalOpen({isOpen: false, type: null})
            localStorage.setItem('authData', JSON.stringify({email, password}))
            dispatch(getUserData(getName(email)))
        } catch (error) {
            const errorCode = error.code;
            return { [FORM_ERROR]: errorCode }
        } finally {
            dispatch(isFetchingAuthAC(false))
        }
}

export const logout = (logoutFunk) => (dispatch) => {
    dispatch({type: LOGOUT})
    logoutFunk(null)
    //dispatch(setUserData(null, [], [], [], []))
}

export default authReducer