import { authAPI, profileAPI } from "../api/api"
import { FORM_ERROR } from 'final-form';

const REGISTRATION_NEW_USER = 'REGISTRATION_NEW_USER'
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
const SIGN_IN = 'SIGN_IN'
const IS_FETCHING_AUTH = 'IS_FETCHING_AUTH'
const LOGOUT = 'LOGOUT' 
const USER_DATA = 'USER_DATA'

const CHANGE_USER_INFO = 'CHANGE_USER_INFO'
const ADD_NEW_POST = 'ADD_NEW_POST'
const ADD_FRIEND = 'ADD_FRIEND'
const DELETE_FRIEND = 'DELETE_FRIEND'


const initialState = {
    isAuth: false,
    newUserEmail: false,
    currentUser: false,
    currentUserData: null,
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
        case USER_DATA:
            return {...state, currentUserData: action.userData}
        case CHANGE_USER_INFO:
            return {...state, currentUserData: {...state.currentUserData, userInfo: action.data}}
        case ADD_NEW_POST:
            return {...state, currentUserData: {...state.currentUserData, posts: [...state.currentUserData.posts, action.newPost]}}
        case ADD_FRIEND:
            return {...state, currentUserData: {...state.currentUserData, friends: [...state.currentUserData.friends, action.friend]}}
        case DELETE_FRIEND:
            return {...state, currentUserData: {...state.currentUserData, friends: state.currentUserData.friends.filter(user => user.name !== action.friend.name)}}
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
            //////////////////
            let userData = await profileAPI.getUserData(getName(email))
            dispatch({type: USER_DATA, userData})
            //////////////////////
            dispatch(signInAC(user.email, user.uid, user.accessToken))
            if(setModalOpen) setModalOpen({isOpen: false, type: null})
            localStorage.setItem('authData', JSON.stringify({email, password}))
            //dispatch(getUserData(getName(email)))
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
/////////////////////////////////////////////
export const changeUserInfo = (login, data, setModalOpen) => async(dispatch) => {
    dispatch(isFetchingAuthAC(true))
    try {
        await profileAPI.changeUserInfo(login, data)
        dispatch({type: CHANGE_USER_INFO, data})
        setModalOpen({isOpen: false, type: null})
    } catch(error) {
        console.log(error)
    } finally {
        dispatch(isFetchingAuthAC(false))
    }
}

export const addNewPost = (newPost, login) => async(dispatch) => {

    try {
        await profileAPI.addNewPost(newPost, login)
        dispatch({type: ADD_NEW_POST, newPost})
    } catch (error) {
        console.log(error)
    }
}

export const addFriend = (friend, login) => async(dispatch) => {
    try {
        await profileAPI.addFriend(friend, login)
        dispatch({type: ADD_FRIEND, friend})
    } catch (error) {
        console.log(error)
    }
}

export const deleteFriend = (friend, login) => async(dispatch) => {
    try {
        await profileAPI.deleteFriend(friend, login)
        dispatch({type: DELETE_FRIEND, friend})
    } catch(err) {
        console.log(err)
    }
}

//////////////////////////////////////////////

export default authReducer