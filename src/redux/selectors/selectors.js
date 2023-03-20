import { createSelector } from 'reselect';

const ERROR_SIGN_UP = "auth/email-already-in-use"
const ERROR_SIGN_IN_LOGIN = "auth/user-not-found"
const ERROR_SIGN_IN_PASSWORD = 'auth/wrong-password'

const getErrorSelector = (state) => {
    return state.auth.errorMessage
}

export const getError = createSelector(getErrorSelector,
    (error) => {
        let message
        if(error === ERROR_SIGN_UP) message = 'Пользователь уже существует'
        if(error === ERROR_SIGN_IN_LOGIN) message = 'Электронная почта или пароль введены не правильно'
        if(error === ERROR_SIGN_IN_PASSWORD) message = 'Электронная почта или пароль введены не правильно'
        return message
    })