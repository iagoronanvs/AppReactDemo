import { Actions } from 'react-native-router-flux'; 
import * as RegisterTypes from './types/typesRegister';
import * as Constants from '../util/Constants';
import { request } from '../Api';
import * as Loading from './LoadingActions';
import * as Alert from './AlertActions';

export const changeName = value => {
    return {
        type: RegisterTypes.REGISTER_CHANGE_NAME,
        payload: value
    }
}

export const changeEmail = value => {
    return {
        type: RegisterTypes.REGISTER_CHANGE_EMAIL,
        payload: value
    }
}

export const changePassword = value => {
    return {
        type: RegisterTypes.REGISTER_CHANGE_PASSWORD,
        payload: value
    }
}

export const changeConfirmPassword = value => {
    return {
        type: RegisterTypes.REGISTER_CHANGE_CONFIRM_PASSWORD,
        payload: value
    }
}

export const resetForm = () => {
    return {
        type: RegisterTypes.REGISTER_RESET_FORM
    }
}

export const setUser = value => {
    return {
        type: RegisterTypes.REGISTER_SET_USER,
        payload: value
    }
}

export const requestRegisterUser = user => {
    return dispatch => {
        dispatch(Loading.loadingActive());
        request
        .post(Constants.POST_REGISTER, user)
        .then(response => {
            dispatch(Loading.loadingDismiss());
            dispatch(setUser(response.data));
            dispatch(resetForm());
            dispatch(Alert.open(lang.success_title, lang.success_register));
            Actions.login();
        })
        .catch(error => {
            dispatch(Loading.loadingDismiss());
            console.log(error);
        });
    }
}
