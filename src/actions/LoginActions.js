import * as LoginTypes from './types/typesLogin';
import * as Constants from '../util/Constants';
import { Actions } from 'react-native-router-flux';
import { request } from '../Api';
import { loadingActive, loadingDismiss } from './LoadingActions';
import * as Alert from './AlertActions';
import lang from '../i18n';

export const changeEmail = value => {
    return {
        type: LoginTypes.LOGIN_CHANGE_EMAIL,
        payload: value
    }
}

export const changePassword = value => {
    return {
        type: LoginTypes.LOGIN_CHANGE_PASSWORD,
        payload: value
    }
}

export const setUser = value => {
    return {
        type: LoginTypes.LOGIN_SET_USER,
        payload: value
    } 
}

export const requestLogin = (email, password) => {
    return dispatch => {
        dispatch(loadingActive());
        request
        .post(Constants.POST_LOGIN, { email, password })
        .then(response => {
            dispatch(loadingDismiss());
            if (response.data.error) {
                dispatch(Alert.open(lang.error_title, response.data.error));
            } else {
                dispatch(setUser(response.data));
                Actions.home();
            }
        })
        .catch(error => {
            dispatch(loadingDismiss());
            dispatch(Alert.open(lang.error_title, lang.error_server));
        });
    }
}