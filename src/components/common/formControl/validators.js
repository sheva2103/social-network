import { SIGN_UP } from "../../modal/ModalLogin";


export const validate = (values, activeTabs) => {
    //debugger
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let regPassword = /^[a-z0-9]{6,}$/i
    const errors = {}
    if (!values.login) {
        errors.login = 'Required'
    }
    if(reg.test(values.login) === false) {
        errors.login = 'Введите корректный e-mail'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if(!regPassword.test(values.password) && activeTabs === SIGN_UP) {
        errors.password = 'Пароль должен содержать латинские буквы и цифры и не содержать пробелов'
    }
    if (values.password && values.password.length < 6) {
        errors.password = 'минимум шесть символов'
    }
    if (activeTabs === SIGN_UP && values.confirmPassword && (values.confirmPassword !== values.password)) {
        errors.confirmPassword = 'Пароли не совпадают'
    }
    if (activeTabs === SIGN_UP && !values.confirmPassword) {
        errors.password = 'Обязательное поле'
    }
    return errors
    }
