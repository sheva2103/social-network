import { searchAPI } from './../api/api';

const SEARCH_USER = 'SEARCH_USER'
const SEARCH_COMPLETTE = 'SEARCH_COMPLETTE'

const initialState = {
    searchUser: [],
    searchComplete: false
}

const searchReducer = (state = initialState, action) => {
    //debugger
    switch(action.type) {
        case SEARCH_USER:
            return {...state, searchUser: action.response, searchComplete: true}
        case SEARCH_COMPLETTE:
            return {...state, searchComplete: false}
        default:
            return state
    }
}

export const searchUser = (userName) => async(dispatch) => {

    try {
        const response = await searchAPI.searchUser(userName)
        dispatch({type: SEARCH_USER, response})
    } catch(err) {
        console.log(err)
    }
    finally {
        dispatch({type: SEARCH_COMPLETTE})
    }
}

export default searchReducer