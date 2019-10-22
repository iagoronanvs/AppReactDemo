import { Linking } from 'react-native';
import * as UserTypes from './types/typesUser'; 
import * as Constants from '../util/Constants';
import { request } from '../Api';

export const setUsers = users => {
    return {
        type: UserTypes.SET_LIST_USERS,
        payload: users
    }
}

export const setVseeUsers = value => {
    return {
        type: UserTypes.SET_VSEE_USERS,
        payload: value
    }
}

export const setVseeCommand = value => {
    return {
        type: UserTypes.SET_VSEE_COMMAND,
        payload: value
    }
}

export const showModal = () => {
    return {
        type: UserTypes.SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type: UserTypes.HIDE_MODAL
    }
}

export const actionHideModal = () => {
    return dispatch => {
        dispatch(hideModal());
    }
}

export const requestUsers = () => {
    return dispatch => {
        request
        .get(Constants.GET_USERS)
        .then(response => {
            dispatch(setUsers(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const requestVseeCall = (my_username, my_password, username) => {
    return dispatch => {
        request
        .post(Constants.POST_VSEE_CALL, {my_username, my_password, username})
        .then(response => {
            console.log(response.data);
            const { status, data } = response.data;
            if (status == 'success') {
                dispatch(setVseeCommand(data[0]));
                dispatch(openVsee(data[0]));
            } 
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const requestVseeChat = (my_username, my_password, username) => {
    return dispatch => {
        request
        .post(Constants.POST_VSEE_CHAT, {my_username, my_password, username})
        .then(response => {
            console.log(response.data);
            const { status, data } = response.data;
            if (status == 'success') {
                dispatch(setVseeCommand(data[0]));
                dispatch(openVsee(data[0]));
            } 
        })
        .catch(error => {
            console.log(error);
        });
    }
}


export const requestVseeLogin = (username, password) => {
    return dispatch => {
        request
        .post(Constants.POST_VSEE_LOGIN, {username, password})
        .then(response => {
            console.log(response.data);
            const { status, data } = response.data;
            if (status == 'success') {
                dispatch(setVseeCommand(data[0]));
                dispatch(openVsee(data[0]));
                //dispatch(showModal());
            } 
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const requestVseeUsers = () => {
    return dispatch => {
        request
        .get(Constants.GET_VSEE_USERS)
        .then(response => {
            console.log(response.data);
            dispatch(setVseeUsers(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}


export const openVsee = (url) => {
    return dispatch => {
        Linking.openURL(url).then((data) => {
            alert('VSee Opened');
        }).catch(() => {
            alert('Make sure VSee installed on your device');
        });
    }
}