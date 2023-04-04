import { profileAPI } from "../api/api"


const GET_USER_DATA = 'GET_USER_DATA'
const ADD_NEW_POST = 'ADD_NEW_POST'
const ADD_NEW_PHOTO = 'ADD_NEW_PHOTO'


const CHANGE_USER_DATA = 'CHANGE_USER_DATA'

const initialState = {
        
        userInfo: {
            name: '',
            city: '',
            DateOfBirth: '',
            linkUserPhoto: '',
            email: ''
        },
        posts: [],
        friends: [],
        photos: [],
        music: [],
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_USER_DATA:
            return {...state, userInfo: action.data.userInfo, posts: action.data.posts, friends: action.data.friends, photos: action.data.photo, music: action.data.music}
        case CHANGE_USER_DATA:
            return {...state}
        case ADD_NEW_POST:
            return {...state, posts: [...state.posts, action.newPost]}
        case ADD_NEW_PHOTO:
            return {...state, photos: [...state.photos, action.photo]}
        default:
            return state
    }
}

export const getUserData = (login) => async(dispatch) => {
    try {
        let data = await profileAPI.getUserData(login)
        dispatch({type: GET_USER_DATA, data})
    } catch (error) {
        console.log('!!!!!!! =>', error)
    }
}

//export const setUserData = (userInfo, posts, friends, photos, music) => ({type: SET_USER_DATA, payload: {userInfo, posts, friends, photos, music}})


export const addNewPost = (newPost, login) => async(dispatch) => {

    try {
        await profileAPI.addNewPost(newPost, login)
        dispatch({type: ADD_NEW_POST, newPost})
    } catch (error) {
        console.log(error)
    }
}

export const addNewPhotoToState = (photo) => ({type: ADD_NEW_PHOTO, photo})

export default profileReducer