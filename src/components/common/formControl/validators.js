

export const validate = (values) => {
    //debugger
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
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
    if (values.password && values.password.length < 6) {
        errors.password = 'минимум шесть символов'
    }
    if (values.confirmPassword && (values.confirmPassword !== values.password)) {
        errors.confirmPassword = 'Пароли не совпадают'
    }
    return errors
    }
